"""SEO audit for moka.bio against a running server (default: the Astro dev server).

Usage: python3 scripts/seo-audit.py [base_url]
Checks every URL in /sitemap.xml: title (<=60), description (<=155), a single H1,
canonical == sitemap URL, reciprocal hreflang (en, es, pt-BR, x-default), html lang,
valid JSON-LD, and that every internal link responds with 200.
"""
import html as htmllib
import json
import re
import sys
import urllib.error
import urllib.request

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4321").rstrip("/")
SITE = "https://moka.bio"
EXPECTED_LANG = {"en": "en", "es": "es", "pt": "pt-BR"}


def fetch(url: str):
    try:
        with urllib.request.urlopen(url, timeout=20) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""


def local(url: str) -> str:
    return BASE + url.replace(SITE, "")


status, sitemap = fetch(BASE + "/sitemap.xml")
assert status == 200, "sitemap.xml not reachable"
urls = re.findall(r"<loc>([^<]+)</loc>", sitemap)
problems, pages, internal_links = [], {}, set()

for url in urls:
    code, html = fetch(local(url))
    if code != 200:
        problems.append(f"{url}: HTTP {code}")
        continue
    title = re.search(r"<title>(.*?)</title>", html, re.S)
    desc = re.search(r'<meta name="description" content="([^"]*)"', html)
    canonical = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    lang = re.search(r'<html lang="([^"]+)"', html)
    alternates = dict(re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"', html))
    h1 = len(re.findall(r"<h1[\s>]", html))
    ld_types = []
    for block in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S):
        try:
            data = json.loads(block)
            nodes = data.get("@graph", [data])
            ld_types += [n.get("@type") for n in nodes]
        except json.JSONDecodeError as e:
            problems.append(f"{url}: invalid JSON-LD ({e})")
    pages[url] = alternates
    t = htmllib.unescape(title.group(1).strip()) if title else ""
    d = htmllib.unescape(desc.group(1)) if desc else ""
    locale = "es" if "/es/" in url or url.endswith("/es/") else "pt" if "/pt/" in url or url.endswith("/pt/") else "en"
    if not t or len(t) > 60: problems.append(f"{url}: title length {len(t)}")
    if not d or len(d) > 155: problems.append(f"{url}: description length {len(d)}")
    if h1 != 1: problems.append(f"{url}: {h1} H1")
    if not canonical or canonical.group(1) != url: problems.append(f"{url}: canonical {canonical.group(1) if canonical else None}")
    if not lang or lang.group(1) != EXPECTED_LANG[locale]: problems.append(f"{url}: html lang {lang.group(1) if lang else None}")
    if set(alternates) != {"en", "es", "pt-BR", "x-default"}: problems.append(f"{url}: hreflang set {sorted(alternates)}")
    for needed in ("Organization", "WebSite", "WebPage"):
        if needed not in ld_types: problems.append(f"{url}: JSON-LD missing {needed}")
    for href in re.findall(r'href="(/[^"#?]*)', html):
        if not href.startswith("//"):
            internal_links.add(href)
    print(f"ok  {url:48} T{len(t):>3} D{len(d):>4} H1={h1} {'+'.join(x for x in ld_types if x)}")

# hreflang reciprocity: every alternate must point back to this URL
for url, alts in pages.items():
    for code_, alt in alts.items():
        if code_ == "x-default":
            continue
        back = pages.get(alt, {})
        if url not in back.values():
            problems.append(f"{url}: {code_} alternate {alt} does not link back")

skip = ("/_astro/", "/@", "/node_modules/")
for href in sorted(internal_links):
    if href.startswith(skip) or re.search(r"\.(png|jpe?g|webp|svg|ico|css|js|woff2?)$", href):
        continue
    code, _ = fetch(BASE + href)
    if code != 200:
        problems.append(f"internal link {href}: HTTP {code}")

print(f"\n{len(urls)} URLs, {len(internal_links)} internal links checked")
print("PROBLEMS:" if problems else "No problems found.")
for p in problems:
    print("  -", p)
sys.exit(1 if problems else 0)
