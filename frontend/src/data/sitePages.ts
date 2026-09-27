// Single source of truth for the indexable pages of moka.bio.
// Used by the sitemap and llms.txt. Every page exists in the three locales.
export const SITE_URL = "https://moka.bio";
export const locales = ["en", "es", "pt"] as const;
export type Locale = (typeof locales)[number];
export const hreflang: Record<Locale, string> = { en: "en", es: "es", pt: "pt-BR" };

export interface SitePage {
  /** Path without locale prefix, with trailing slash. */
  path: string;
  /** Source file (relative to src/pages) used for the last-modified date. */
  source: string;
  priority: number;
  /** Extra files (relative to the project root) whose changes also update the date. */
  extraSources?: string[];
}

export const sitePages: SitePage[] = [
  { path: "/", source: "index.astro", priority: 1.0 },
  { path: "/our-technology/", source: "our-technology.astro", priority: 0.9 },
  { path: "/contact-us/", source: "contact-us.astro", priority: 0.8 },
  ...["nutraceuticals", "dermocosmetics", "agro", "pharma"].map((slug) => ({
    path: `/industries/${slug}/`,
    source: "industries/[slug].astro",
    priority: 0.8,
    extraSources: ["src/data/industries.ts", "src/components/IndustryPage.astro"],
  })),
  { path: "/about-us/", source: "about-us.astro", priority: 0.7 },
  { path: "/insights/", source: "insights.astro", priority: 0.6 },
  { path: "/privacy/", source: "privacy.astro", priority: 0.2 },
  { path: "/terms/", source: "terms.astro", priority: 0.2 },
];

export const localizedUrl = (path: string, locale: Locale) =>
  `${SITE_URL}${locale === "en" ? path : `/${locale}${path}`}`;
