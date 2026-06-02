# Moka Bio — Frontend

Astro 5 public website for moka.bio. See the [root README](../README.md) for full documentation including design system, component map, and deployment notes.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
```

| Command | Action |
| ------- | ------ |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run astro ...` | Astro CLI passthrough |

**Required env var:** `VITE_BASE_MOKA_URL` — Strapi backend URL (`http://localhost:1337` for local dev, `https://cms.moka.bio` for prod).

## Deployment

Deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/pages.yml`.
