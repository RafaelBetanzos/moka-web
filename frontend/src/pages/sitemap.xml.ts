import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { hreflang, locales, localizedUrl, sitePages } from "../data/sitePages";

// Last commit date of a page's source files; falls back to the build date.
const lastModified = (files: string[]) => {
  try {
    const date = execFileSync("git", ["--literal-pathspecs", "log", "-1", "--format=%cs", "--", ...files], { encoding: "utf8" }).trim();
    if (date) return date;
  } catch {}
  return new Date().toISOString().slice(0, 10);
};

export const GET: APIRoute = () => {
  const urls = sitePages.flatMap((page) => {
    const lastmod = lastModified([
      ...locales.map((l) => `src/pages/${l === "en" ? "" : `${l}/`}${page.source}`),
      ...(page.extraSources ?? []),
    ]);
    const alternates = locales
      .map((l) => `    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${localizedUrl(page.path, l)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(page.path, "en")}"/>`)
      .join("\n");
    return locales.map(
      (l) => `  <url>
    <loc>${localizedUrl(page.path, l)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${page.priority.toFixed(1)}</priority>
${alternates}
  </url>`,
    );
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
