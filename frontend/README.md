# Moka Frontend

how to run:

```sh
npm install
npm run dev
```

## 🚀 Project Structure

```text
/
├── public/
│
├── src/
│   ├── layouts/
│   ├── assets/
│   │     └── icons/
│   ├── components/
│   ├── utils/
│   └── pages/
│
├── tsconfig.json
├── astro.config.mjs
├── dockerfile
├── tailwind.config.mjs
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

## Pending Tasks

### Insights page — Strapi integration

The `/insights` page currently uses mock data (`src/utils/CarrouselMock.ts`). It needs to be connected to the Strapi CMS at `cms.moka.bio` — same pattern already used for Partners and Members.

**Workflow once connected:**
1. Publish on LinkedIn (or find a paper/news item)
2. Go to `cms.moka.bio/admin`
3. Create a new Insight entry (~2 min): title, summary, author, date, link, image, tag
4. Hit Publish → appears automatically on `moka.bio/insights`

**Step 1 — Create the Collection Type in Strapi (cms.moka.bio/admin):**

| Field | Type | Notes |
|---|---|---|
| `title` | Text | Required |
| `summary` | Long text | |
| `author` | Text | |
| `date` | Date | |
| `link` | Text | URL to LinkedIn post or paper |
| `image` | Media (single) | Cover image |
| `tag` | Enumeration | Research, News, LinkedIn, Event |
| `source` | Enumeration | LinkedIn, Nature, Internal, External |

Set collection to public read: Settings > Roles > Public > Insight > find (enabled).

**Step 2 — Frontend (ready to build once Strapi collection exists):**

Create `src/services/getInsights.ts` following the same pattern as `getPartners.ts` and `getMembers.ts`, pointing to `/api/insights?populate=*&sort=date:desc`. Then update `src/pages/insights.astro` to use a React island with `useInsightsQuery()` instead of `mockcarrousel`.

### LinkedIn > Insights automation (future)

Once the Strapi collection is live, connect it to Zapier:
- Trigger: New post on LinkedIn Company Page (Moka Bio)
- Action: Create Insight entry in Strapi via REST API
- Result: Zero manual work — LinkedIn posts appear on the site automatically

Alternative: Apply for LinkedIn API access (`r_organization_social` scope) for a fully native integration.
