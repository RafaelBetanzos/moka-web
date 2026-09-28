// Facts about Moka Bio for large language models (llms.txt / llms-full.txt).
// Keep in sync with the site copy; only verifiable, approved claims belong here.
import { localizedUrl, sitePages } from "./sitePages";
import { mockcarrousel } from "../utils/CarrouselMock";

export const summary =
  "Moka Bio finds and prioritizes bioactivity in understudied Latin American plants, even when nothing is known about a species, through the Moka BDE platform, the Icaros plant database, and R&D services that deliver an extract, a fraction, or a molecule.";

const pageNames: Record<string, string> = {
  "/": "Home: what Moka does, who it is for, and how to work with Moka",
  "/platform/": "Platform: Moka BDE and the Icaros plant database, capabilities and product screens",
  "/services/": "Services: plant bioactivity R&D, from a plant or a need to extract, fraction, or molecule",
  "/plant-potential/": "Start with a plant: what a plant with little or no science behind it could be worth",
  "/find-your-plant/": "Start with a need: finding the plant behind a new active",
  "/contact-us/": "Contact: book a Moka BDE demo or request an R&D service",
  "/industries/nutraceuticals/": "Nutraceuticals: new functional ingredients from understudied plants",
  "/industries/dermocosmetics/": "Dermocosmetics: botanical actives with evidence and traceable origin",
  "/industries/agro/": "Agro: plant bioactivity to protect and nourish crops",
  "/industries/pharma/": "Pharma: early drug discovery from uncharacterized Latin American plants",
  "/countries/mexico/": "Mexico: plant bioactivity in Mexican flora",
  "/countries/brazil/": "Brazil: plant bioactivity in Brazilian flora",
  "/countries/peru/": "Peru: plant bioactivity in Andean and Amazonian flora",
  "/countries/argentina/": "Argentina: plant bioactivity in Argentine flora",
  "/countries/colombia/": "Colombia: plant bioactivity in Colombian flora",
  "/about-us/": "About: team, founders, and mission",
  "/insights/": "Insights: selected research on plant bioactivity",
  "/privacy/": "Privacy policy",
  "/terms/": "Terms of service",
};

export const keyPages = () =>
  sitePages
    .map(
      (page) =>
        `- [${pageNames[page.path]}](${localizedUrl(page.path, "en")}) · Español: ${localizedUrl(page.path, "es")} · Português: ${localizedUrl(page.path, "pt")}`,
    )
    .join("\n");

export const company = `- Company: Moka Bio, Inc., a Delaware (United States) corporation focused on Latin America.
- Founders: Rafael Betanzos San Juan (CEO) and Juan Facundo Gulías (CSO).
- Contact: info@moka.bio. Moka replies within 1 business day with a calendar to schedule a meeting.
- Profiles: https://www.linkedin.com/company/mokabio · https://www.instagram.com/mokabio`;

export const offer = `### Moka BDE (SaaS platform)
For R&D, innovation, and formulation teams that want to do the research themselves. Includes access to Icaros, Moka's database of Latin American plants, and modules to:
- Explore plants, compounds, and their evidence in a single search.
- Predict bioactivity, including in plants with no previous studies.
- Understand likely mechanisms and biological targets before testing.
- Assess intellectual property: patentability and freedom to operate.
- Formulate: bring actives into products.
- Keep lab results in one place, connected to what is known about each plant.
Call to action: book a demo.

### R&D service
For companies that want the bioactive developed. Every project starts in one of two ways:
- Plant push: the client brings a plant of interest (a native species, their own crop, or a plant with traditional use) and Moka uncovers its bioactivity.
- Market pull: the client brings a product need and Moka searches Latin American flora for candidates.
Deliverables: extract, fraction, or molecule(s), together with an intellectual property assessment.
Call to action: request a service.`;

export const audience = `- Entrepreneurs and innovators with a plant or a product idea.
- Companies and startups whose portfolio needs differentiated actives.
- Universities and research centers that need to decide what to research first.
- Industries: nutraceuticals, dermocosmetics, agro (crop protection and nutrition), and pharma.`;

export const proof = `- 30,000+ species indexed in Icaros.
- Patent pending: a non-provisional patent application has been filed for an immunomodulator candidate identified through Moka's discovery pipeline.`;

export const context = `- An estimated ~6% of plant species have been systematically investigated pharmacologically and ~15% phytochemically; a global estimate (Atanasov et al., Biotechnology Advances, 2015, https://doi.org/10.1016/j.biotechadv.2015.08.001).
- About 1 in 3 of the world's known vascular plant species are native to the Americas (Ulloa Ulloa et al., Science, 2017, https://doi.org/10.1126/science.aao0398).
- About 45% of flowering plant species may be threatened with extinction, according to a global model estimate (Bachman et al., New Phytologist, 2024, https://doi.org/10.1111/nph.19592).
- Mexico hosts 10–12% of the world's known species (CONABIO); Brazil about 15% of the world's species (MMA); about 10,000 vascular plant species grow in Argentina, about 2,000 of them endemic (CONICET, 2013).
- Under the Nagoya Protocol, benefits from using genetic resources must be shared fairly with the providing country, on mutually agreed terms.
- A WIPO treaty adopted in 2024 would require patent applicants to disclose the origin of genetic resources, once it enters into force.`;

export const trust = `- Data, results and IP are governed by a written agreement for each project.
- Every plant's origin is documented and traceable together with the communities.`;

export const terms = `Spanish: bioactividad en plantas latinoamericanas, descubrimiento de bioactivos, ingredientes botánicos, I+D de bioactivos, plantas poco estudiadas.
Portuguese: bioatividade em plantas latino-americanas, descoberta de bioativos, ingredientes botânicos, P&D de bioativos, plantas pouco estudadas.`;

export const research = () =>
  mockcarrousel
    .map((a) => `- ${a.title} — ${a.author} (${a.journal}, ${a.date}). ${a.summary.en} ${a.link}`)
    .join("\n");
