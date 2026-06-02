# Moka Bio — Website

Marketing site for **Moka Bio** (moka.bio). Astro frontend deployed to GitHub Pages; Strapi CMS backend deployed via Docker to a self-hosted server.

| Service  | URL                  |
| -------- | -------------------- |
| Frontend | https://moka.bio     |
| CMS API  | https://cms.moka.bio |
| Contact  | info@moka.bio        |

---

## Repository layout

```
moka/
├── frontend/               # Astro 5 public website
│   ├── src/
│   │   ├── components/     # Astro + React components
│   │   ├── layouts/        # BaseLayout, Navbar, Footer, LeafsLayout
│   │   ├── pages/          # Routes (EN + /es/* + /pt/*)
│   │   ├── services/       # Strapi API clients
│   │   ├── styles/         # global.css + scoped CSS files
│   │   ├── assets/         # SVGs, PNGs processed by Astro
│   │   └── utils/          # Mocks, image helpers, sort utils
│   ├── public/             # Static files served as-is
│   │   ├── assets/about-botanicals/  # Botanical line PNGs (01–05)
│   │   ├── advisorspics/   # Advisor headshots
│   │   ├── teampics/       # Team headshots
│   │   ├── partners/       # Partner logos (SVG + PNG)
│   │   └── who-*.png       # "Who it's for" card images (card + clean variants)
│   ├── astro.config.mjs
│   └── Dockerfile
├── backend/
│   └── app/                # Strapi 5 CMS
│       ├── src/api/        # Content types: article, member, advisor, partner
│       └── config/         # database, server, admin, plugins
└── .github/workflows/
    ├── pages.yml           # Auto-deploy frontend → GitHub Pages on push to main
    ├── deploy-prod.yml     # Docker build + SSH deploy to production server
    └── deploy-dev.yml      # Same flow to dev server
```

---

## Frontend — Astro 5

**Stack:** Astro 5 · React 19 · Tailwind 3.4 · TanStack Query · Formik · Framer Motion · Node adapter

```bash
cd frontend
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

**Environment variable** (required):
```
VITE_BASE_MOKA_URL=https://cms.moka.bio   # Strapi backend URL
```

### Pages (EN · ES · PT)

Each page exists in three language versions: `src/pages/*.astro`, `src/pages/es/*.astro`, `src/pages/pt/*.astro`. Copy for all three languages lives inside each component's frontmatter as a `copy` or `t` object — no separate i18n library.

| Route             | File               | Notes                              |
| ----------------- | ------------------ | ---------------------------------- |
| `/`               | `index.astro`      | Full landing page                  |
| `/our-technology` | `our-technology.astro` | Tech page with BrainSection    |
| `/about-us`       | `about-us.astro`   | OurVisionCard + OurTeam            |
| `/insights`       | `insights.astro`   | Article grid (mock data)           |
| `/contact-us`     | `contact-us.astro` | Contact form page                  |
| `/privacy`        | `privacy.astro`    | Privacy Policy (GDPR + CCPA)       |
| `/terms`          | `terms.astro`      | Terms of Service                   |
| `/articles`       | `articles.astro`   | Redirect / legacy                  |

### Key components

| Component | What it does |
| --------- | ------------ |
| `BotanicalScrollReveal.astro` | Fixed botanical PNG that fades in as you scroll. Props: `src`, `tone` (soft/strong), `revealStart` (negative = visible on load), `revealRange`, `class` for position variants |
| `BrainSection.astro` | "How it works" brain diagram + process flow diagram (4-step horizontal cards). Has EN/ES/PT copy inline |
| `Hero.astro` | Landing hero with fixed background image (`/hero.png`) |
| `WhyWeDoIt.astro` | "Why Now" section with Latin America map and country flags |
| `DataBioactivitySection.astro` | MokaDex stats section with 3 data cards |
| `OurVisionCard.astro` | Reusable vision card. Prop: `isButtonOn`, `locale`. Used on landing and about-us |
| `OurVisionSection.astro` | Wrapper for `OurVisionCard` used on the landing |
| `TargetSection.astro` | "Moka Targets" — NOW/NEXT market cards |
| `ContactUsCard.astro` + `ContactForm.tsx` | Contact section (Formik form, React) |
| `LatestArticles.astro` | Article list with scroll reveal |
| `Navbar.astro` | Sticky nav with language switcher and mobile overlay. Logo: `w-7 sm:w-9` |

### Design system

All tokens are CSS custom properties in `src/styles/global.css`:

| Variable | Value |
| -------- | ----- |
| `--pure-color` | `#ffffff` |
| `--birch-color` | `#dedede` |
| `--fresh-green-color` | `#6ebf7e` |
| `--deep-forest-color` | `#132d25` |
| `--charcoal-color` | `#121212` |
| `--sage-color` | `#567263` |
| `--moka-border-muted` | `rgba(222,222,222,0.12)` |
| `--moka-border-accent` | `rgba(110,191,126,0.28)` |
| `--moka-glow-soft` | `rgba(110,191,126,0.14)` |
| `--moka-text-muted` | `rgba(222,222,222,0.72)` |
| `--moka-surface-forest` | `rgba(19,45,37,0.82)` |
| `--moka-page-panel` | Global card class: border + gradient bg + shadow + backdrop-blur |

**Fonts:** Inter (body/headings) · Roboto (kickers/badges/labels) — loaded from Google Fonts in `global.css`.

### Scroll reveal pattern

Elements that animate in on scroll use `class="reveal opacity-0"` + `data-animation="slide-up|pop-in|slide-left|slide-right|fade-in"`. Each page that uses this pattern must include an `IntersectionObserver` script (see `index.astro`, `our-technology.astro`, `about-us.astro`).

### Landing page background

The home page (`index.astro`) uses a **fixed** `position: fixed` background image (`/hero.png`) applied via `.home-color-system::before`. All sections use `background: transparent` so the image shows through. Only the Hero itself has its own visual treatment.

---

## Backend — Strapi 5

**Stack:** Strapi 5.6 · Node 18–22 · SQLite (dev) / PostgreSQL or MySQL (prod)

```bash
cd backend/app
npm install
cp .env.example .env    # fill in APP_KEYS, JWT_SECRET, etc.
npm run develop         # admin at http://localhost:1337/admin
```

**Content types:** `article` · `member` · `advisor` · `partner`

The frontend fetches these at build time via `src/services/get*.ts`. In local dev, `VITE_BASE_MOKA_URL=http://localhost:1337`.

---

## Deployment

### GitHub Pages (frontend only)
`.github/workflows/pages.yml` runs on every push to `main`. It builds the frontend with `VITE_BASE_MOKA_URL=https://cms.moka.bio` and publishes `frontend/dist/client` to GitHub Pages.

### Full-stack (Docker)
`deploy-prod.yml` and `deploy-dev.yml` build Docker images for both services, push to `ghcr.io`, and SSH-deploy to the production host.

---

## Things to know before editing

- **i18n** — copy lives inline in each `.astro` file as a `{ en: {…}, es: {…}, pt: {…} }` object. When you add or change copy, update all three.
- **New sections on the landing** — keep `background: transparent`; the fixed background image must show through.
- **BotanicalScrollReveal** — use `revealStart={-0.15}` on interior pages (about, tech, insights) so the image is visible on load without scrolling.
- **Scroll reveal** — if you add a component with `.reveal.opacity-0` elements to a page that doesn't already have an `IntersectionObserver` script, add one (see `about-us.astro` for the minimal pattern).
- **Global card style** — use `.moka-page-panel` from `global.css` as the base for new cards instead of rewriting border/background/shadow/blur.
- **Article data** — currently served from `src/utils/CarrouselMock.tsx` (static mock). Real articles come from Strapi when the CMS is running.
- **Advisor/team photos** — served from `public/advisorspics/` and `public/teampics/`. Members and advisors are fetched from Strapi at runtime.
