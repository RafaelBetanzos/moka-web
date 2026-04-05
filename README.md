# moka

Website and headless CMS for **Moka Therapeutics**. A two-service monorepo: an Astro marketing/content site consuming a Strapi-backed content API.

| Service   | Live                                    |
| --------- | --------------------------------------- |
| CMS API   | https://cms.mokatherapeutics.com        |
| Contact   | info@moka.bio                           |

## Repository layout

```
moka/
├── backend/
│   └── app/                 # Strapi 5 application (admin + API)
│       ├── src/api/         # Content types: advisor, article, member, partner
│       ├── config/          # database, server, admin, plugins
│       └── Dockerfile
├── frontend/                # Astro + React public website
│   ├── src/
│   │   ├── components/      # React components (ContactForm, etc.)
│   │   ├── pages/           # Astro routes
│   │   ├── layouts/
│   │   ├── services/        # API clients (Strapi consumers)
│   │   ├── assets/
│   │   └── utils/
│   ├── astro.config.mjs
│   └── Dockerfile
└── .github/workflows/       # deploy-prod.yml, deploy-dev.yml
```

## Backend — Strapi 5

A headless CMS exposing article, member, advisor, and partner content types.

**Stack:** Strapi 5.6 · Node 18–22 · PostgreSQL / MySQL / SQLite (configurable)

```bash
cd backend/app
npm install
cp .env.example .env        # set APP_KEYS, JWT_SECRET, etc.
npm run develop             # admin + API on http://localhost:1337/admin
```

### Commands

| Command            | What it does                                 |
| ------------------ | -------------------------------------------- |
| `npm run develop`  | Dev mode with auto-reload                    |
| `npm run start`    | Production mode (no auto-reload)             |
| `npm run build`    | Build the Strapi admin panel                 |
| `npm run strapi`   | Strapi CLI passthrough                       |

### Database

Defaults to SQLite at `.tmp/data.db` for local dev. Switch to PostgreSQL or MySQL by setting `DATABASE_CLIENT` + `DATABASE_HOST` / `DATABASE_PORT` / `DATABASE_NAME` / `DATABASE_USERNAME` / `DATABASE_PASSWORD` (see `backend/app/config/database.ts`).

### Environment (from `backend/app/.env.example`)

```
HOST=0.0.0.0
PORT=1337
APP_KEYS="..."
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
```

## Frontend — Astro + React

Public website consuming the Strapi API.

**Stack:** Astro 5.1 · React 19 · Tailwind 3.4 · TanStack Query · Formik · Framer Motion

```bash
cd frontend
npm install
npm run dev                 # http://localhost:4321
```

### Commands

| Command            | What it does                                 |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the Astro dev server                   |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview the production build locally         |

### Environment

Set `VITE_BASE_MOKA_URL` to the Strapi backend URL (e.g. `https://cms.mokatherapeutics.com` for prod, `http://localhost:1337` for local dev). See `frontend/astro.config.mjs`.

## Deployment

CI/CD lives in `.github/workflows/`:

- **`deploy-prod.yml`** — builds images, signs with cosign, publishes to `ghcr.io`, SSH-deploys to `~/services/moka-backend` and `~/services/moka-frontend` on the production host.
- **`deploy-dev.yml`** — same flow into `~/services/moka-backend-dev` / `~/services/moka-frontend-dev`.

Both services ship as Docker images.
