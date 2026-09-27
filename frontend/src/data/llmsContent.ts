// Facts about Moka Bio for large language models (llms.txt / llms-full.txt).
// Keep in sync with the site copy; only verifiable, approved claims belong here.
import { localizedUrl, sitePages } from "./sitePages";
import { mockcarrousel } from "../utils/CarrouselMock";

export const summary =
  "Moka Bio finds and prioritizes bioactivity in understudied Latin American plants, even when nothing is known about a species, through the Moka BDE platform, the Icaros plant database, and R&D services that deliver an extract, a fraction, or a molecule.";

const pageNames: Record<string, string> = {
  "/": "Home: what Moka does, who it is for, and how to work with Moka",
  "/our-technology/": "Technology: Icaros, Moka BDE capabilities, plant push and market pull projects",
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

export const context = `- Only about 6% of described plant species have been studied pharmacologically, and about 15% phytochemically (Atanasov et al., Biotechnology Advances, 2015).
- The Americas hold 33% of the world's known vascular plant species: 124,993 species (Ulloa Ulloa et al., Science, 2017).
- South America alone holds more than 40% of Earth's biodiversity (UNDP, Latin America and the Caribbean: A Biodiversity Superpower, 2010).
- Mexico hosts 10–12% of the world's known species (CONABIO); Brazil 15–20% of the planet's biological diversity (UNEP); Peru about 25,000 plant species, 10% of the world total (MINAM); Argentina about 10,000 native vascular plant species (CONICET).
- The Nagoya Protocol requires sharing the benefits of genetic resources; the 2024 WIPO treaty on genetic resources will require disclosing their origin in patent applications once 15 countries ratify it.`;

export const trust = `- Clients' data, plants, and project results are confidential.
- Conditions on data, results, and intellectual property are agreed with each client by contract.
- Every plant's origin is documented and traceable together with the communities.`;

export const terms = `Spanish: bioactividad en plantas latinoamericanas, descubrimiento de bioactivos, ingredientes botánicos, I+D de bioactivos, plantas poco estudiadas.
Portuguese: bioatividade em plantas latino-americanas, descoberta de bioativos, ingredientes botânicos, P&D de bioativos, plantas pouco estudadas.`;

export const research = () =>
  mockcarrousel
    .map((a) => `- ${a.title} — ${a.author} (${a.journal}, ${a.date}). ${a.summary.en} ${a.link}`)
    .join("\n");
