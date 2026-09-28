// Content of the industry landing pages (/industries/<slug>/), in the three locales.
// Only approved claims: no health, efficacy, or regulatory promises.
import type { Locale } from "./sitePages";

export type IndustrySlug = "nutraceuticals" | "dermocosmetics" | "agro" | "pharma";

interface IndustryCopy {
  name: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  challengeTitle: string;
  challenges: { title: string; body: string }[];
  platform: string[];
  service: string[];
  questions: string[];
  research?: { label: string; href: string };
  faq: { q: string; a: string }[];
}

export const industrySlugs: IndustrySlug[] = ["nutraceuticals", "dermocosmetics", "agro", "pharma"];

export const industryBotanical: Record<IndustrySlug, string> = {
  nutraceuticals: "/assets/about-botanicals/botanical-line-01.png",
  dermocosmetics: "/assets/about-botanicals/botanical-line-04.png",
  agro: "/assets/about-botanicals/botanical-line-02.png",
  pharma: "/assets/about-botanicals/botanical-line-03.png",
};

export const industryLabels: Record<Locale, {
  kicker: string; demo: string; service: string; platformTitle: string; serviceTitle: string; doTitle: string;
  questionsTitle: string; questionsIntro: string; researchTitle: string; faqTitle: string; othersTitle: string; seeMore: string;
  countriesTitle: string; platformLink: string; servicesLink: string; plantPush: string; marketPull: string;
}> = {
  en: { kicker: "INDUSTRIES", demo: "Book a demo", service: "Request a service", platformTitle: "With the platform", serviceTitle: "With a service", doTitle: "What you can do with Moka", questionsTitle: "Questions you can bring us", questionsIntro: "Every project starts with a question. These are the kind we hear.", researchTitle: "Related research", faqTitle: "Frequently asked questions", othersTitle: "Other industries", seeMore: "See more", countriesTitle: "By country", platformLink: "See the platform", servicesLink: "How a project works", plantPush: "I have a plant", marketPull: "I know what I need" },
  es: { kicker: "INDUSTRIAS", demo: "Agendar demo", service: "Solicitar servicio", platformTitle: "Con la plataforma", serviceTitle: "Con un servicio", doTitle: "Qué puedes hacer con Moka", questionsTitle: "Preguntas que puedes traernos", questionsIntro: "Todo proyecto empieza con una pregunta. Estas son del tipo que escuchamos.", researchTitle: "Investigación relacionada", faqTitle: "Preguntas frecuentes", othersTitle: "Otras industrias", seeMore: "Ver más", countriesTitle: "Por país", platformLink: "Ver la plataforma", servicesLink: "Cómo funciona un proyecto", plantPush: "Tengo una planta", marketPull: "Sé lo que necesito" },
  pt: { kicker: "INDÚSTRIAS", demo: "Agendar demonstração", service: "Solicitar serviço", platformTitle: "Com a plataforma", serviceTitle: "Com um serviço", doTitle: "O que você pode fazer com a Moka", questionsTitle: "Perguntas que você pode nos trazer", questionsIntro: "Todo projeto começa com uma pergunta. Estas são do tipo que ouvimos.", researchTitle: "Pesquisa relacionada", faqTitle: "Perguntas frequentes", othersTitle: "Outras indústrias", seeMore: "Ver mais", countriesTitle: "Por país", platformLink: "Ver a plataforma", servicesLink: "Como funciona um projeto", plantPush: "Tenho uma planta", marketPull: "Sei do que preciso" },
};

export const industries: Record<IndustrySlug, Record<Locale, IndustryCopy>> = {
  nutraceuticals: {
    en: {
      name: "Nutraceuticals",
      metaTitle: "Nutraceutical Ingredients from Plants | Moka Bio",
      metaDescription: "Find new functional ingredients in understudied Latin American plants. Prioritize candidates with Moka BDE or develop them with our R&D service.",
      title: "Nutraceutical ingredients from plants no one has studied.",
      lead: "Your next functional ingredient isn't in the usual catalog. It's in Latin American flora that almost no one has analyzed.",
      challengeTitle: "Why it's hard today",
      challenges: [
        { title: "Everyone sells the same botanicals", body: "When the catalog is the same for everyone, standing out gets harder with every launch." },
        { title: "Every new ingredient costs lab time", body: "Testing plants one by one burns time and budget before you know if it was worth it." },
        { title: "Origin matters more and more", body: "Knowing where an ingredient comes from, and being able to prove it, is now part of the product." },
      ],
      platform: ["Search Icaros for species with bioactivity signals relevant to your line.", "Prioritize candidates before paying for a single assay.", "Check the IP landscape from the start.", "Explore how to bring the active into your product."],
      service: ["Plant push: bring a native species or your own crop, and we find out what it can offer.", "Market pull: tell us what your line needs, and we find the candidate plants.", "We take it to extract, fraction, or molecule."],
      questions: ["Which understudied Latin American species show antioxidant signals?", "Which plant could set my line apart from the competition?", "Is the crop I already grow hiding something else?", "Could an ingredient from this plant be patented?"],
      faq: [
        { q: "Does Moka sell ingredients?", a: "No. We don't sell catalog ingredients: we help you find and develop your own, with the platform or with a service." },
        { q: "Do I need prior data on the plant?", a: "No. Icaros can prioritize bioactivity even in species with no previous studies." },
        { q: "Does Moka define the claims on my product?", a: "No. We give your R&D evidence to decide; product claims depend on the regulation of each market." },
      ],
    },
    es: {
      name: "Nutracéutica",
      metaTitle: "Ingredientes nutracéuticos desde plantas | Moka Bio",
      metaDescription: "Encuentra nuevos ingredientes funcionales en plantas latinoamericanas poco estudiadas. Prioriza con Moka BDE o desarróllalos con nuestro servicio.",
      title: "Ingredientes nutracéuticos desde plantas que nadie ha estudiado.",
      lead: "Tu próximo ingrediente funcional no está en el catálogo de siempre. Está en la flora latinoamericana que casi nadie ha analizado.",
      challengeTitle: "Por qué hoy es difícil",
      challenges: [
        { title: "Todos venden los mismos botánicos", body: "Cuando el catálogo es igual para todos, diferenciarse cuesta más en cada lanzamiento." },
        { title: "Cada ingrediente nuevo cuesta laboratorio", body: "Probar plantas una por una consume tiempo y presupuesto antes de saber si valía la pena." },
        { title: "El origen pesa cada vez más", body: "Saber de dónde viene un ingrediente, y poder demostrarlo, ya es parte del producto." },
      ],
      platform: ["Busca en Icaros especies con señales de bioactividad relevantes para tu línea.", "Prioriza candidatos antes de pagar un solo ensayo.", "Revisa el panorama de PI desde el inicio.", "Explora cómo llevar el activo a tu producto."],
      service: ["Plant push: traes una especie nativa o tu propio cultivo, y descubrimos qué puede ofrecer.", "Market pull: nos dices qué necesita tu línea, y encontramos las plantas candidatas.", "Lo llevamos hasta extracto, fracción o molécula."],
      questions: ["¿Qué especies latinoamericanas poco estudiadas muestran señales antioxidantes?", "¿Qué planta podría diferenciar mi línea frente a la competencia?", "¿El cultivo que ya tengo esconde algo más?", "¿Se podría patentar un ingrediente derivado de esta planta?"],
      faq: [
        { q: "¿Moka vende ingredientes?", a: "No. No vendemos ingredientes de catálogo: te ayudamos a encontrar y desarrollar los tuyos, con la plataforma o con un servicio." },
        { q: "¿Necesito datos previos de la planta?", a: "No. Icaros puede priorizar bioactividad incluso en especies sin estudios previos." },
        { q: "¿Moka define las declaraciones de mi producto?", a: "No. Le damos evidencia a tu I+D para decidir; las declaraciones dependen de la regulación de cada mercado." },
      ],
    },
    pt: {
      name: "Nutracêutica",
      metaTitle: "Ingredientes nutracêuticos de plantas | Moka Bio",
      metaDescription: "Encontre novos ingredientes funcionais em plantas latino-americanas pouco estudadas. Priorize com o Moka BDE ou desenvolva com nosso serviço de P&D.",
      title: "Ingredientes nutracêuticos a partir de plantas que ninguém estudou.",
      lead: "Seu próximo ingrediente funcional não está no catálogo de sempre. Está na flora latino-americana que quase ninguém analisou.",
      challengeTitle: "Por que hoje é difícil",
      challenges: [
        { title: "Todos vendem os mesmos botânicos", body: "Quando o catálogo é igual para todos, se diferenciar fica mais difícil a cada lançamento." },
        { title: "Cada ingrediente novo custa laboratório", body: "Testar plantas uma a uma consome tempo e orçamento antes de saber se valeu a pena." },
        { title: "A origem pesa cada vez mais", body: "Saber de onde vem um ingrediente, e poder comprovar, já faz parte do produto." },
      ],
      platform: ["Busque no Icaros espécies com sinais de bioatividade relevantes para a sua linha.", "Priorize candidatos antes de pagar um único ensaio.", "Avalie o cenário de PI desde o início.", "Explore como levar o ativo ao seu produto."],
      service: ["Plant push: você traz uma espécie nativa ou seu próprio cultivo, e descobrimos o que ela pode oferecer.", "Market pull: você nos diz o que sua linha precisa, e encontramos as plantas candidatas.", "Levamos até extrato, fração ou molécula."],
      questions: ["Quais espécies latino-americanas pouco estudadas mostram sinais antioxidantes?", "Qual planta poderia diferenciar minha linha da concorrência?", "O cultivo que já tenho esconde algo mais?", "Um ingrediente derivado desta planta poderia ser patenteado?"],
      faq: [
        { q: "A Moka vende ingredientes?", a: "Não. Não vendemos ingredientes de catálogo: ajudamos você a encontrar e desenvolver os seus, com a plataforma ou com um serviço." },
        { q: "Preciso de dados prévios sobre a planta?", a: "Não. O Icaros pode priorizar bioatividade mesmo em espécies sem estudos anteriores." },
        { q: "A Moka define as alegações do meu produto?", a: "Não. Damos ao seu P&D evidência para decidir; as alegações dependem da regulação de cada mercado." },
      ],
    },
  },
  dermocosmetics: {
    en: {
      name: "Dermocosmetics",
      metaTitle: "Botanical Actives for Dermocosmetics | Moka Bio",
      metaDescription: "Discover botanical actives backed by evidence in understudied Latin American plants, with traceable origin and IP assessed from the start.",
      title: "Botanical actives for dermocosmetics, with evidence behind them.",
      lead: "Actives that stand on data, not on trends. From Latin American plants your competitors don't know yet.",
      challengeTitle: "Why it's hard today",
      challenges: [
        { title: "The same actives on every label", body: "When every brand uses the same ingredients, the formula stops being a reason to choose you." },
        { title: "Brands want evidence before launching", body: "A good story isn't enough anymore: you need to know why an active could work." },
        { title: "Origin is part of the brand", body: "Where a plant comes from, and who was involved, is now something customers ask about." },
      ],
      platform: ["Look for bioactivity relevant to skin applications in understudied flora.", "Understand likely mechanisms and targets before testing.", "Assess patentability and freedom to operate early.", "Use the formulation module with your team."],
      service: ["Plant push: bring a plant you already work with, and we find out what it can do.", "Market pull: tell us what your line is missing, and we find the candidate plants.", "From extract to molecule, with traceable origin."],
      questions: ["Which Latin American plant could give my line an active no one else has?", "Which skin-relevant targets could this extract act on?", "Can I tell the origin of this active with documentation behind it?", "Is there room to patent this active?"],
      faq: [
        { q: "Does Moka make formulations?", a: "Not as a service. Moka BDE includes a formulation module for your team." },
        { q: "Can I document the plant's origin?", a: "Yes. Every plant's origin is traceable together with the communities." },
        { q: "Do predictions replace safety or efficacy testing?", a: "No. They are hypotheses to prioritize; the tests required by regulation are still necessary." },
      ],
    },
    es: {
      name: "Dermocosmética",
      metaTitle: "Activos botánicos para dermocosmética | Moka Bio",
      metaDescription: "Descubre activos botánicos con evidencia en plantas latinoamericanas poco estudiadas, con origen trazable y PI evaluada desde el inicio.",
      title: "Activos botánicos para dermocosmética, con evidencia detrás.",
      lead: "Activos que se sostienen con datos, no con tendencias. Desde plantas latinoamericanas que tu competencia todavía no conoce.",
      challengeTitle: "Por qué hoy es difícil",
      challenges: [
        { title: "Los mismos activos en todas las etiquetas", body: "Cuando todas las marcas usan los mismos ingredientes, la fórmula deja de ser una razón para elegirte." },
        { title: "Las marcas piden evidencia antes de lanzar", body: "Una buena historia ya no alcanza: necesitas saber por qué un activo podría funcionar." },
        { title: "El origen es parte de la marca", body: "De dónde viene una planta, y quién participó, ya es algo que preguntan tus clientes." },
      ],
      platform: ["Busca bioactividad relevante para aplicaciones en piel en flora poco estudiada.", "Entiende mecanismos y dianas probables antes de ensayar.", "Evalúa patentabilidad y libertad de operación desde temprano.", "Usa el módulo de formulación con tu equipo."],
      service: ["Plant push: traes una planta con la que ya trabajas, y descubrimos de qué es capaz.", "Market pull: nos dices qué le falta a tu línea, y encontramos las plantas candidatas.", "Del extracto a la molécula, con origen trazable."],
      questions: ["¿Qué planta latinoamericana podría darle a mi línea un activo que nadie más tiene?", "¿Sobre qué dianas relevantes para la piel podría actuar este extracto?", "¿Puedo contar el origen de este activo con documentación detrás?", "¿Hay espacio para patentar este activo?"],
      faq: [
        { q: "¿Moka hace formulaciones?", a: "No como servicio. Moka BDE incluye un módulo de formulación para tu equipo." },
        { q: "¿Puedo documentar el origen de la planta?", a: "Sí. El origen de cada planta es trazable junto con las comunidades." },
        { q: "¿Las predicciones sustituyen las pruebas de seguridad o eficacia?", a: "No. Son hipótesis para priorizar; las pruebas que exige la regulación siguen siendo necesarias." },
      ],
    },
    pt: {
      name: "Dermocosmética",
      metaTitle: "Ativos botânicos para dermocosmética | Moka Bio",
      metaDescription: "Descubra ativos botânicos com evidência em plantas latino-americanas pouco estudadas, com origem rastreável e PI avaliada desde o início.",
      title: "Ativos botânicos para dermocosmética, com evidência por trás.",
      lead: "Ativos que se sustentam com dados, não com tendências. A partir de plantas latino-americanas que seus concorrentes ainda não conhecem.",
      challengeTitle: "Por que hoje é difícil",
      challenges: [
        { title: "Os mesmos ativos em todos os rótulos", body: "Quando todas as marcas usam os mesmos ingredientes, a fórmula deixa de ser um motivo para escolher você." },
        { title: "As marcas pedem evidência antes de lançar", body: "Uma boa história já não basta: você precisa saber por que um ativo poderia funcionar." },
        { title: "A origem faz parte da marca", body: "De onde vem uma planta, e quem participou, já é algo que seus clientes perguntam." },
      ],
      platform: ["Busque bioatividade relevante para aplicações na pele em flora pouco estudada.", "Entenda mecanismos e alvos prováveis antes de testar.", "Avalie patenteabilidade e liberdade de operação desde cedo.", "Use o módulo de formulação com sua equipe."],
      service: ["Plant push: você traz uma planta com a qual já trabalha, e descobrimos do que ela é capaz.", "Market pull: você nos diz o que falta à sua linha, e encontramos as plantas candidatas.", "Do extrato à molécula, com origem rastreável."],
      questions: ["Qual planta latino-americana poderia dar à minha linha um ativo que ninguém mais tem?", "Sobre quais alvos relevantes para a pele este extrato poderia agir?", "Posso contar a origem deste ativo com documentação por trás?", "Há espaço para patentear este ativo?"],
      faq: [
        { q: "A Moka faz formulações?", a: "Não como serviço. O Moka BDE inclui um módulo de formulação para sua equipe." },
        { q: "Posso documentar a origem da planta?", a: "Sim. A origem de cada planta é rastreável junto com as comunidades." },
        { q: "As predições substituem os testes de segurança ou eficácia?", a: "Não. São hipóteses para priorizar; os testes exigidos pela regulação continuam necessários." },
      ],
    },
  },
  agro: {
    en: {
      name: "Agro",
      metaTitle: "Plant-Based Bioinputs for Agriculture | Moka Bio",
      metaDescription: "Search Latin American native plants for compounds with agricultural activity, to develop nature-based options for crop protection and nutrition.",
      title: "Plant bioactivity to protect and nourish crops.",
      lead: "The answer to a pest or a struggling crop could be in a native plant that no one has studied.",
      challengeTitle: "Why it's hard today",
      challenges: [
        { title: "Pressure to rely less on synthetic inputs", body: "Growers and buyers are asking for alternatives, and the options on the shelf are few." },
        { title: "Finding active natural compounds is slow", body: "Screening plants for agricultural activity one by one takes seasons you don't have." },
        { title: "Every region has its own problem", body: "A solution that works in one crop or climate may not travel. Local flora may hold the answer." },
      ],
      platform: ["Search Icaros for plants with activity of agricultural interest.", "Prioritize candidates by activity and by origin.", "Check the IP landscape before investing.", "Keep your field and lab results in one place."],
      service: ["Plant push: bring a native species or a crop byproduct, and we find out what it can do.", "Market pull: bring the crop problem, and we look for the plants that could address it.", "We develop the bioactive to extract, fraction, or molecule."],
      questions: ["Which native plant could help against this pest?", "Could a byproduct of my crop become a bioinput?", "Which compounds in this species show agricultural activity?", "Is there anything like this already patented?"],
      research: { label: "A wild cucumber compound turned into a biopesticide (Nature Communications, 2026)", href: "https://doi.org/10.1038/s41467-026-72502-9" },
      faq: [
        { q: "Does Moka register bioinputs?", a: "No. Registration depends on each country's regulation; Moka supports the R&D side." },
        { q: "Can I start from my own crop?", a: "Yes. That's a plant push project: you bring the plant and we find out what it can do." },
        { q: "Do I need prior data on the plant?", a: "No. Icaros can prioritize bioactivity even in species with no previous studies." },
      ],
    },
    es: {
      name: "Agro",
      metaTitle: "Bioinsumos de origen vegetal para agro | Moka Bio",
      metaDescription: "Busca en plantas nativas latinoamericanas compuestos con actividad agrícola para desarrollar opciones naturales de protección y nutrición de cultivos.",
      title: "Bioactividad vegetal para proteger y nutrir cultivos.",
      lead: "La respuesta a una plaga o a un cultivo débil puede estar en una planta nativa que nadie ha estudiado.",
      challengeTitle: "Por qué hoy es difícil",
      challenges: [
        { title: "Presión por depender menos de insumos sintéticos", body: "Productores y compradores piden alternativas, y las opciones en el anaquel son pocas." },
        { title: "Encontrar compuestos naturales activos es lento", body: "Evaluar plantas una por una para uso agrícola consume temporadas que no tienes." },
        { title: "Cada región tiene su propio problema", body: "Lo que funciona en un cultivo o clima puede no servir en otro. La flora local puede tener la respuesta." },
      ],
      platform: ["Busca en Icaros plantas con actividad de interés agrícola.", "Prioriza candidatos por actividad y por origen.", "Revisa el panorama de PI antes de invertir.", "Centraliza tus resultados de campo y laboratorio."],
      service: ["Plant push: traes una especie nativa o un subproducto de tu cultivo, y descubrimos de qué es capaz.", "Market pull: traes el problema del cultivo, y buscamos las plantas que podrían resolverlo.", "Desarrollamos el bioactivo hasta extracto, fracción o molécula."],
      questions: ["¿Qué planta nativa podría ayudar contra esta plaga?", "¿Un subproducto de mi cultivo podría convertirse en un bioinsumo?", "¿Qué compuestos de esta especie muestran actividad agrícola?", "¿Ya existe algo parecido patentado?"],
      research: { label: "Un compuesto de pepino silvestre convertido en bioplaguicida (Nature Communications, 2026)", href: "https://doi.org/10.1038/s41467-026-72502-9" },
      faq: [
        { q: "¿Moka registra bioinsumos?", a: "No. El registro depende de la regulación de cada país; Moka apoya la parte de I+D." },
        { q: "¿Puedo empezar desde mi propio cultivo?", a: "Sí. Es un proyecto plant push: traes la planta y descubrimos de qué es capaz." },
        { q: "¿Necesito datos previos de la planta?", a: "No. Icaros puede priorizar bioactividad incluso en especies sin estudios previos." },
      ],
    },
    pt: {
      name: "Agro",
      metaTitle: "Bioinsumos de origem vegetal para o agro | Moka Bio",
      metaDescription: "Busque em plantas nativas latino-americanas compostos com atividade agrícola para desenvolver opções naturais de proteção e nutrição de lavouras.",
      title: "Bioatividade vegetal para proteger e nutrir lavouras.",
      lead: "A resposta para uma praga ou uma lavoura fraca pode estar em uma planta nativa que ninguém estudou.",
      challengeTitle: "Por que hoje é difícil",
      challenges: [
        { title: "Pressão para depender menos de insumos sintéticos", body: "Produtores e compradores pedem alternativas, e as opções na prateleira são poucas." },
        { title: "Encontrar compostos naturais ativos é lento", body: "Avaliar plantas uma a uma para uso agrícola consome safras que você não tem." },
        { title: "Cada região tem seu próprio problema", body: "O que funciona em uma lavoura ou clima pode não servir em outro. A flora local pode ter a resposta." },
      ],
      platform: ["Busque no Icaros plantas com atividade de interesse agrícola.", "Priorize candidatos por atividade e por origem.", "Avalie o cenário de PI antes de investir.", "Centralize seus resultados de campo e laboratório."],
      service: ["Plant push: você traz uma espécie nativa ou um subproduto da sua lavoura, e descobrimos do que é capaz.", "Market pull: você traz o problema da lavoura, e buscamos as plantas que poderiam resolvê-lo.", "Desenvolvemos o bioativo até extrato, fração ou molécula."],
      questions: ["Qual planta nativa poderia ajudar contra esta praga?", "Um subproduto da minha lavoura poderia virar um bioinsumo?", "Quais compostos desta espécie mostram atividade agrícola?", "Já existe algo parecido patenteado?"],
      research: { label: "Um composto de pepino selvagem transformado em biopesticida (Nature Communications, 2026)", href: "https://doi.org/10.1038/s41467-026-72502-9" },
      faq: [
        { q: "A Moka registra bioinsumos?", a: "Não. O registro depende da regulação de cada país; a Moka apoia a parte de P&D." },
        { q: "Posso começar pela minha própria lavoura?", a: "Sim. É um projeto plant push: você traz a planta e descobrimos do que ela é capaz." },
        { q: "Preciso de dados prévios sobre a planta?", a: "Não. O Icaros pode priorizar bioatividade mesmo em espécies sem estudos anteriores." },
      ],
    },
  },
  pharma: {
    en: {
      name: "Pharma",
      metaTitle: "Plant-Derived Drug Discovery in Latin America | Moka Bio",
      metaDescription: "Start early-stage discovery with Latin American plants no one has characterized: prioritize species, compounds, and mechanisms before the lab.",
      title: "Start with the plants no one has characterized.",
      lead: "Prioritize species, compounds, and mechanisms before the lab. Develop the candidate to extract, fraction, or molecule.",
      challengeTitle: "Why it's hard today",
      challenges: [
        { title: "Discovery is slow, expensive, and uncertain", body: "Most natural candidates are ruled out late, after the budget is gone." },
        { title: "Latin American chemistry is underrepresented", body: "Much of the region's flora has never been characterized, so it rarely enters a pipeline." },
        { title: "IP decides early", body: "A promising candidate with no room to protect it is a candidate you can't move forward." },
      ],
      platform: ["Predict bioactivity, even in plants with no prior studies.", "Understand likely mechanisms and targets before testing.", "Assess patentability and freedom to operate early.", "Connect your experimental data to what is known about each plant."],
      service: ["Plant push: bring a species of interest, and we find out what it can do.", "Market pull: bring a target or a therapeutic need, and we find the candidate plants.", "Extract, fraction, or molecule, with an IP assessment."],
      questions: ["Which Latin American species could act on this target?", "What mechanism could explain this extract's activity?", "Is there freedom to operate for this molecule?", "Which understudied family should we explore first?"],
      research: { label: "The genes behind quinine, an Andean plant compound (Nature, 2026)", href: "https://doi.org/10.1038/s41586-026-10227-x" },
      faq: [
        { q: "Does Moka run clinical trials?", a: "No. Moka works in early discovery: prioritizing and developing candidates up to extract, fraction, or molecule." },
        { q: "Does Moka have its own candidates?", a: "Yes. We have a patent pending for an immunomodulator candidate identified through our discovery pipeline." },
        { q: "Are predictions validated?", a: "Predictions are hypotheses to prioritize. Our R&D service takes the selected candidates into the lab." },
      ],
    },
    es: {
      name: "Pharma",
      metaTitle: "Descubrimiento de fármacos desde plantas | Moka Bio",
      metaDescription: "Descubrimiento temprano con plantas latinoamericanas que nadie ha caracterizado: prioriza especies, compuestos y mecanismos antes del laboratorio.",
      title: "Empieza por las plantas que nadie ha caracterizado.",
      lead: "Prioriza especies, compuestos y mecanismos antes del laboratorio. Desarrolla el candidato hasta extracto, fracción o molécula.",
      challengeTitle: "Por qué hoy es difícil",
      challenges: [
        { title: "Descubrir es lento, caro e incierto", body: "La mayoría de los candidatos naturales se descartan tarde, cuando el presupuesto ya se fue." },
        { title: "La química latinoamericana está subrepresentada", body: "Gran parte de la flora de la región nunca se ha caracterizado, así que rara vez entra a un pipeline." },
        { title: "La PI decide temprano", body: "Un candidato prometedor sin espacio para protegerlo es un candidato que no puedes avanzar." },
      ],
      platform: ["Predice bioactividad, incluso en plantas sin estudios previos.", "Entiende mecanismos y dianas probables antes de ensayar.", "Evalúa patentabilidad y libertad de operación desde temprano.", "Conecta tus datos experimentales con lo que se sabe de cada planta."],
      service: ["Plant push: traes una especie de interés, y descubrimos de qué es capaz.", "Market pull: traes una diana o una necesidad terapéutica, y encontramos las plantas candidatas.", "Extracto, fracción o molécula, con evaluación de PI."],
      questions: ["¿Qué especies latinoamericanas podrían actuar sobre esta diana?", "¿Qué mecanismo explicaría la actividad de este extracto?", "¿Hay libertad de operación para esta molécula?", "¿Qué familia poco estudiada conviene explorar primero?"],
      research: { label: "Los genes detrás de la quinina, un compuesto de plantas andinas (Nature, 2026)", href: "https://doi.org/10.1038/s41586-026-10227-x" },
      faq: [
        { q: "¿Moka hace ensayos clínicos?", a: "No. Moka trabaja en descubrimiento temprano: prioriza y desarrolla candidatos hasta extracto, fracción o molécula." },
        { q: "¿Moka tiene candidatos propios?", a: "Sí. Tenemos una patente pendiente para un candidato inmunomodulador identificado con nuestro pipeline de descubrimiento." },
        { q: "¿Las predicciones se validan?", a: "Las predicciones son hipótesis para priorizar. Nuestro servicio de I+D lleva a los candidatos seleccionados al laboratorio." },
      ],
    },
    pt: {
      name: "Pharma",
      metaTitle: "Descoberta de fármacos a partir de plantas | Moka Bio",
      metaDescription: "Comece a descoberta inicial com plantas latino-americanas que ninguém caracterizou: priorize espécies, compostos e mecanismos antes do laboratório.",
      title: "Comece pelas plantas que ninguém caracterizou.",
      lead: "Priorize espécies, compostos e mecanismos antes do laboratório. Desenvolva o candidato até extrato, fração ou molécula.",
      challengeTitle: "Por que hoje é difícil",
      challenges: [
        { title: "Descobrir é lento, caro e incerto", body: "A maioria dos candidatos naturais é descartada tarde, quando o orçamento já acabou." },
        { title: "A química latino-americana está sub-representada", body: "Grande parte da flora da região nunca foi caracterizada, por isso raramente entra em um pipeline." },
        { title: "A PI decide cedo", body: "Um candidato promissor sem espaço para protegê-lo é um candidato que você não consegue avançar." },
      ],
      platform: ["Preveja bioatividade, mesmo em plantas sem estudos anteriores.", "Entenda mecanismos e alvos prováveis antes de testar.", "Avalie patenteabilidade e liberdade de operação desde cedo.", "Conecte seus dados experimentais ao que se sabe sobre cada planta."],
      service: ["Plant push: você traz uma espécie de interesse, e descobrimos do que ela é capaz.", "Market pull: você traz um alvo ou uma necessidade terapêutica, e encontramos as plantas candidatas.", "Extrato, fração ou molécula, com avaliação de PI."],
      questions: ["Quais espécies latino-americanas poderiam agir sobre este alvo?", "Qual mecanismo explicaria a atividade deste extrato?", "Há liberdade de operação para esta molécula?", "Qual família pouco estudada vale explorar primeiro?"],
      research: { label: "Os genes por trás da quinina, um composto de plantas andinas (Nature, 2026)", href: "https://doi.org/10.1038/s41586-026-10227-x" },
      faq: [
        { q: "A Moka faz ensaios clínicos?", a: "Não. A Moka trabalha na descoberta inicial: prioriza e desenvolve candidatos até extrato, fração ou molécula." },
        { q: "A Moka tem candidatos próprios?", a: "Sim. Temos uma patente pendente para um candidato imunomodulador identificado com nosso pipeline de descoberta." },
        { q: "As predições são validadas?", a: "As predições são hipóteses para priorizar. Nosso serviço de P&D leva os candidatos selecionados ao laboratório." },
      ],
    },
  },
};

// Service bullets start with "Plant push:" or "Market pull:". Industry and country pages show that
// prefix as a link to the matching journey page, with its visible label.
export const journeyBullet = (item: string, locale: Locale) => {
  const match = item.match(/^(Plant push|Market pull):\s*(.*)$/);
  if (!match) return null;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const push = match[1] === "Plant push";
  return {
    label: push ? industryLabels[locale].plantPush : industryLabels[locale].marketPull,
    href: `${prefix}${push ? "/plant-potential/" : "/find-your-plant/"}`,
    rest: match[2],
  };
};
