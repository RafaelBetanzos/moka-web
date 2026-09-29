// Content of the two journey pages (/plant-potential/ and /find-your-plant/), in the three locales.
// Written in the visitor's own voice (first person). No durations, prices or legal conclusions.
import type { Locale } from "./sitePages";

export type JourneySlug = "plant-potential" | "find-your-plant";

interface JourneyLink {
  label: string;
  /** Site path without locale prefix, or an absolute URL. */
  href: string;
}

interface JourneySection {
  id: string;
  /** Anchor chip shown under the hero; sections without one aren't listed there. */
  chip?: string;
  thought?: string;
  title: string;
  body: string[];
  /** Sourced statements shown under the answer, each with its citation. */
  cited?: { text: string; source: string; href: string }[];
  links?: JourneyLink[];
  /** Adds links to the four industry pages / the five country pages. */
  industries?: boolean;
  countries?: boolean;
  note?: string;
}

export interface JourneyCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  kicker: string;
  title: string;
  lead: string;
  primary: string;
  secondary: string;
  heroAlt: string;
  chipsLabel: string;
  sections: JourneySection[];
  stepsTitle: string;
  steps: string[];
  stepsLink: JourneyLink;
  aside?: JourneyLink;
  finalTitle: string;
  other: JourneyLink;
}

export const journeyImages: Record<JourneySlug, string> = {
  "plant-potential": "/journeys/plant-potential-hero.webp",
  "find-your-plant": "/journeys/find-your-plant-hero.webp",
};

export const journeyOgImages: Record<JourneySlug, string> = {
  "plant-potential": "/og/og-plant-potential.jpg",
  "find-your-plant": "/og/og-find-your-plant.jpg",
};

const nagoyaArt5 = "https://www.cbd.int/abs/text/articles?sec=abs-05";
const nagoyaArt7 = "https://www.cbd.int/abs/text/articles?sec=abs-07";
const absch = "https://absch.cbd.int/";

export const journeys: Record<JourneySlug, Record<Locale, JourneyCopy>> = {
  "plant-potential": {
    en: {
      metaTitle: "What Is My Plant Worth? Plant Bioactivity | Moka Bio",
      metaDescription: "I have a plant with little or no science behind it. What could it do, is a lab worth it, can I protect it, and can I use it?",
      breadcrumb: "I have a plant",
      kicker: "START WITH A PLANT",
      title: "I have a plant. What can it do?",
      lead: "It's been used for generations, or it grows on my land, or it's part of what I already produce. But there's almost no science on it, so I can't tell what it's worth.",
      primary: "Tell Moka about my plant",
      secondary: "I'd rather explore it myself",
      heroAlt: "Hands holding a freshly collected plant specimen",
      chipsLabel: "Questions on this page",
      sections: [
        {
          id: "studied",
          chip: "Has anyone studied it?",
          thought: "I searched and found almost nothing. Is that good news or bad news?",
          title: "Has anyone ever studied it?",
          body: ["Maybe no one has. Icaros brings together what's already known about a plant and its compounds, and predicts bioactivity where no one has looked yet. A prediction is a hypothesis to test, not a result."],
          links: [{ label: "How Icaros works", href: "/our-technology/#icaros" }],
        },
        {
          id: "lab",
          chip: "Is a lab worth it?",
          title: "Is it worth paying for a lab before I know anything?",
          body: ["Not blindly. I'd rather know which activities are most likely before I spend on assays."],
          links: [{ label: "How prioritization works", href: "/our-technology/" }],
        },
        {
          id: "uses",
          chip: "What could it be used for?",
          title: "What could it be used for?",
          body: ["Food and supplements, skin, crops or medicine. Each industry looks for something different."],
          industries: true,
        },
        {
          id: "protect",
          chip: "Can I protect it?",
          title: "If it turns out to be valuable, can I protect it?",
          body: ["I want to know whether it can be protected before I invest, not after. Moka looks at the IP from the start."],
          links: [{ label: "How a project works", href: "/services/" }],
        },
        {
          id: "legal",
          chip: "Can I use it legally?",
          title: "Can I legally use it? Who else has rights to it?",
          body: ["That depends on where the plant comes from, not on where I am. Many countries regulate access to their plants and the traditional knowledge around them, and may require prior consent and benefit-sharing."],
          cited: [
            { text: "Under the Nagoya Protocol, benefits from using genetic resources must be shared fairly with the providing country, on mutually agreed terms.", source: "Nagoya Protocol, art. 5", href: nagoyaArt5 },
            { text: "If a community has always used it, access to their knowledge may require their consent too.", source: "Nagoya Protocol, art. 7", href: nagoyaArt7 },
          ],
          countries: true,
          links: [{ label: "ABS Clearing-House", href: absch }],
          note: "Rules differ by country. This isn't legal advice.",
        },
      ],
      stepsTitle: "How does it work?",
      steps: [
        "I bring the plant: a native species, my own crop, a plant someone has always used.",
        "Moka finds out what it can do.",
        "Moka takes it to extract, fraction or molecule.",
      ],
      stepsLink: { label: "How a project works", href: "/services/" },
      aside: { label: "Have many plants to choose from?", href: "/our-technology/#research-teams" },
      finalTitle: "Now I know where to start.",
      other: { label: "Starting from a need instead?", href: "/find-your-plant/" },
    },
    es: {
      metaTitle: "¿Qué valor tiene mi planta? Bioactividad | Moka Bio",
      metaDescription: "Tengo una planta con poca o ninguna ciencia detrás. ¿Qué podría hacer, vale la pena un laboratorio, puedo protegerla y puedo usarla?",
      breadcrumb: "Tengo una planta",
      kicker: "EMPIEZA CON UNA PLANTA",
      title: "Tengo una planta. ¿De qué es capaz?",
      lead: "Se ha usado por generaciones, o crece en mi tierra, o es parte de lo que ya produzco. Pero casi no hay ciencia sobre ella, así que no sé cuánto vale.",
      primary: "Contarle a Moka sobre mi planta",
      secondary: "Prefiero explorarla por mi cuenta",
      heroAlt: "Manos sosteniendo un ejemplar de planta recién colectado",
      chipsLabel: "Preguntas en esta página",
      sections: [
        {
          id: "studied",
          chip: "¿Alguien la ha estudiado?",
          thought: "Busqué y casi no encontré nada. ¿Es buena o mala noticia?",
          title: "¿Alguien la ha estudiado alguna vez?",
          body: ["Tal vez nadie. Icaros reúne lo que ya se sabe sobre una planta y sus compuestos, y predice bioactividad donde nadie ha buscado todavía. Una predicción es una hipótesis por comprobar, no un resultado."],
          links: [{ label: "Cómo funciona Icaros", href: "/our-technology/#icaros" }],
        },
        {
          id: "lab",
          chip: "¿Vale la pena un laboratorio?",
          title: "¿Vale la pena pagar un laboratorio antes de saber nada?",
          body: ["No a ciegas. Prefiero saber qué actividades son más probables antes de gastar en ensayos."],
          links: [{ label: "Cómo funciona la priorización", href: "/our-technology/" }],
        },
        {
          id: "uses",
          chip: "¿Para qué podría servir?",
          title: "¿Para qué podría servir?",
          body: ["Alimentos y suplementos, piel, cultivos o medicina. Cada industria busca algo distinto."],
          industries: true,
        },
        {
          id: "protect",
          chip: "¿Puedo protegerla?",
          title: "Si resulta valiosa, ¿puedo protegerla?",
          body: ["Quiero saber si se puede proteger antes de invertir, no después. Moka revisa la PI desde el inicio."],
          links: [{ label: "Cómo funciona un proyecto", href: "/services/" }],
        },
        {
          id: "legal",
          chip: "¿Puedo usarla legalmente?",
          title: "¿Puedo usarla legalmente? ¿Quién más tiene derechos sobre ella?",
          body: ["Depende de dónde viene la planta, no de dónde estoy yo. Muchos países regulan el acceso a sus plantas y a los conocimientos tradicionales asociados, y pueden exigir consentimiento previo y participación en los beneficios."],
          cited: [
            { text: "Según el Protocolo de Nagoya, los beneficios derivados de la utilización de recursos genéticos deben compartirse de forma justa con el país que los aporta, en condiciones mutuamente acordadas.", source: "Protocolo de Nagoya, art. 5", href: nagoyaArt5 },
            { text: "Si una comunidad siempre la ha usado, acceder a su conocimiento también puede requerir su consentimiento.", source: "Protocolo de Nagoya, art. 7", href: nagoyaArt7 },
          ],
          countries: true,
          links: [{ label: "Centro de Intercambio de Información sobre APB (ABSCH)", href: absch }],
          note: "Las reglas cambian según el país. Esto no es asesoría legal.",
        },
      ],
      stepsTitle: "¿Cómo funciona?",
      steps: [
        "Llevo la planta: una especie nativa, mi propio cultivo, una planta que alguien siempre ha usado.",
        "Moka descubre de qué es capaz.",
        "Moka la lleva hasta extracto, fracción o molécula.",
      ],
      stepsLink: { label: "Cómo funciona un proyecto", href: "/services/" },
      aside: { label: "¿Muchas plantas para elegir?", href: "/our-technology/#research-teams" },
      finalTitle: "Ahora sé por dónde empezar.",
      other: { label: "¿Y si empiezo por una necesidad?", href: "/find-your-plant/" },
    },
    pt: {
      metaTitle: "Quanto vale minha planta? Bioatividade | Moka Bio",
      metaDescription: "Tenho uma planta com pouca ou nenhuma ciência por trás. O que ela poderia fazer, vale a pena um laboratório, posso protegê-la e usá-la?",
      breadcrumb: "Tenho uma planta",
      kicker: "COMECE COM UMA PLANTA",
      title: "Tenho uma planta. Do que ela é capaz?",
      lead: "Ela é usada há gerações, ou cresce na minha terra, ou faz parte do que eu já produzo. Mas quase não há ciência sobre ela, então não sei quanto ela vale.",
      primary: "Contar à Moka sobre minha planta",
      secondary: "Prefiro explorar por conta própria",
      heroAlt: "Mãos segurando um exemplar de planta recém-coletado",
      chipsLabel: "Perguntas nesta página",
      sections: [
        {
          id: "studied",
          chip: "Alguém já a estudou?",
          thought: "Pesquisei e quase não encontrei nada. Isso é uma boa ou uma má notícia?",
          title: "Alguém já a estudou?",
          body: ["Talvez ninguém. O Icaros reúne o que já se sabe sobre uma planta e seus compostos, e prevê bioatividade onde ninguém procurou ainda. Uma predição é uma hipótese a testar, não um resultado."],
          links: [{ label: "Como o Icaros funciona", href: "/our-technology/#icaros" }],
        },
        {
          id: "lab",
          chip: "Vale a pena um laboratório?",
          title: "Vale a pena pagar um laboratório antes de saber qualquer coisa?",
          body: ["Não às cegas. Prefiro saber quais atividades são mais prováveis antes de gastar com ensaios."],
          links: [{ label: "Como funciona a priorização", href: "/our-technology/" }],
        },
        {
          id: "uses",
          chip: "Para que ela poderia servir?",
          title: "Para que ela poderia servir?",
          body: ["Alimentos e suplementos, pele, lavouras ou medicina. Cada indústria busca algo diferente."],
          industries: true,
        },
        {
          id: "protect",
          chip: "Posso protegê-la?",
          title: "Se ela se mostrar valiosa, posso protegê-la?",
          body: ["Quero saber se ela pode ser protegida antes de investir, não depois. A Moka avalia a PI desde o início."],
          links: [{ label: "Como funciona um projeto", href: "/services/" }],
        },
        {
          id: "legal",
          chip: "Posso usá-la legalmente?",
          title: "Posso usá-la legalmente? Quem mais tem direitos sobre ela?",
          body: ["Depende de onde a planta vem, não de onde eu estou. Muitos países regulam o acesso às suas plantas e aos conhecimentos tradicionais associados, e podem exigir consentimento prévio e repartição de benefícios."],
          cited: [
            { text: "Pelo Protocolo de Nagoya, os benefícios da utilização de recursos genéticos devem ser repartidos de forma justa com o país provedor, em termos mutuamente acordados.", source: "Protocolo de Nagoya, art. 5", href: nagoyaArt5 },
            { text: "Se uma comunidade sempre a usou, acessar o conhecimento dessa comunidade também pode exigir o consentimento dela.", source: "Protocolo de Nagoya, art. 7", href: nagoyaArt7 },
          ],
          countries: true,
          links: [{ label: "Centro de Intercâmbio de Informações sobre ABS (ABSCH)", href: absch }],
          note: "As regras mudam de país para país. Isto não é aconselhamento jurídico.",
        },
      ],
      stepsTitle: "Como funciona?",
      steps: [
        "Eu levo a planta: uma espécie nativa, meu próprio cultivo, uma planta que alguém sempre usou.",
        "A Moka descobre do que ela é capaz.",
        "A Moka a leva até extrato, fração ou molécula.",
      ],
      stepsLink: { label: "Como funciona um projeto", href: "/services/" },
      aside: { label: "Muitas plantas para escolher?", href: "/our-technology/#research-teams" },
      finalTitle: "Agora sei por onde começar.",
      other: { label: "E se eu começar por uma necessidade?", href: "/find-your-plant/" },
    },
  },
  "find-your-plant": {
    en: {
      metaTitle: "Which Plant Could Be My Next Active? | Moka Bio",
      metaDescription: "I know what I need. I want an active no one else has, with evidence behind it, a clean origin and IP I can protect.",
      breadcrumb: "I know what I need",
      kicker: "START WITH A NEED",
      title: "I know what I need. Which plant could do it?",
      lead: "I have a brief, a target or a gap in my line. What I don't have is an ingredient no one else is already selling.",
      primary: "Share my brief",
      secondary: "Search Icaros myself",
      heroAlt: "Samples of different dried plants arranged for comparison",
      chipsLabel: "Questions on this page",
      sections: [
        {
          id: "new",
          chip: "How do I find something new?",
          thought: "Every supplier offers me the same extracts.",
          title: "How do I find something no one else has?",
          body: ["By starting where no one has looked. New actives, not the usual extract with a new label."],
          industries: true,
        },
        {
          id: "evidence",
          chip: "Can I back it with science?",
          thought: "I need evidence, not a trend.",
          title: "Can I back it with science?",
          body: ["Icaros brings together the evidence on each plant and its compounds, and predicts bioactivity where there's no data yet. A prediction is a hypothesis to test, not a result."],
          links: [{ label: "How Icaros works", href: "/our-technology/#icaros" }],
        },
        {
          id: "lab",
          chip: "Which ones are worth the lab?",
          thought: "I can't afford to test dozens of plants blind.",
          title: "Which ones are worth the lab?",
          body: ["I want to prioritize before paying for a single assay."],
          links: [{ label: "How prioritization works", href: "/our-technology/" }],
        },
        {
          id: "protect",
          chip: "Can we protect it?",
          title: "If we find it, can we protect it?",
          body: ["I want to know before I invest, not after. Moka looks at the IP from the start."],
          links: [{ label: "How a project works", href: "/services/" }],
        },
        {
          id: "origin",
          chip: "Where does it come from?",
          title: "Can I tell where it comes from?",
          body: ["The rules depend on the country the plant comes from. I need to know them before it reaches my product."],
          countries: true,
        },
      ],
      stepsTitle: "How does it work?",
      steps: [
        "I say which active or benefit I'm looking for.",
        "Moka searches Latin American flora until it finds my candidates.",
        "Moka develops them to the level I need.",
      ],
      stepsLink: { label: "How a project works", href: "/services/" },
      finalTitle: "Now I know where to look.",
      other: { label: "Starting with a plant instead?", href: "/plant-potential/" },
    },
    es: {
      metaTitle: "¿Qué planta podría ser mi próximo activo? | Moka Bio",
      metaDescription: "Sé lo que necesito. Quiero un activo que nadie más tenga, con evidencia detrás, un origen limpio y una PI que pueda proteger.",
      breadcrumb: "Sé lo que necesito",
      kicker: "EMPIEZA CON UNA NECESIDAD",
      title: "Sé lo que necesito. ¿Qué planta podría lograrlo?",
      lead: "Tengo un brief, una diana o un hueco en mi línea. Lo que no tengo es un ingrediente que nadie más esté vendiendo ya.",
      primary: "Compartir mi brief",
      secondary: "Buscar en Icaros por mi cuenta",
      heroAlt: "Muestras de distintas plantas secas ordenadas para compararlas",
      chipsLabel: "Preguntas en esta página",
      sections: [
        {
          id: "new",
          chip: "¿Cómo encuentro algo nuevo?",
          thought: "Todos los proveedores me ofrecen los mismos extractos.",
          title: "¿Cómo encuentro algo que nadie más tenga?",
          body: ["Empezando donde nadie ha mirado. Activos nuevos, no el extracto de siempre con otra etiqueta."],
          industries: true,
        },
        {
          id: "evidence",
          chip: "¿Puedo respaldarlo con ciencia?",
          thought: "Necesito evidencia, no una tendencia.",
          title: "¿Puedo respaldarlo con ciencia?",
          body: ["Icaros reúne la evidencia sobre cada planta y sus compuestos, y predice bioactividad donde todavía no hay datos. Una predicción es una hipótesis por comprobar, no un resultado."],
          links: [{ label: "Cómo funciona Icaros", href: "/our-technology/#icaros" }],
        },
        {
          id: "lab",
          chip: "¿Cuáles valen el laboratorio?",
          thought: "No puedo darme el lujo de ensayar decenas de plantas a ciegas.",
          title: "¿Cuáles valen el laboratorio?",
          body: ["Quiero priorizar antes de pagar un solo ensayo."],
          links: [{ label: "Cómo funciona la priorización", href: "/our-technology/" }],
        },
        {
          id: "protect",
          chip: "¿Podemos protegerlo?",
          title: "Si lo encontramos, ¿podemos protegerlo?",
          body: ["Quiero saberlo antes de invertir, no después. Moka revisa la PI desde el inicio."],
          links: [{ label: "Cómo funciona un proyecto", href: "/services/" }],
        },
        {
          id: "origin",
          chip: "¿De dónde viene?",
          title: "¿Puedo contar de dónde viene?",
          body: ["Las reglas dependen del país de donde viene la planta. Necesito conocerlas antes de que llegue a mi producto."],
          countries: true,
        },
      ],
      stepsTitle: "¿Cómo funciona?",
      steps: [
        "Digo qué activo o beneficio busco.",
        "Moka recorre la flora latinoamericana hasta encontrar mis candidatos.",
        "Moka los desarrolla hasta el nivel que necesito.",
      ],
      stepsLink: { label: "Cómo funciona un proyecto", href: "/services/" },
      finalTitle: "Ahora sé dónde buscar.",
      other: { label: "¿Y si empiezo por una planta?", href: "/plant-potential/" },
    },
    pt: {
      metaTitle: "Qual planta pode ser meu próximo ativo? | Moka Bio",
      metaDescription: "Sei do que preciso. Quero um ativo que ninguém mais tem, com evidência por trás, uma origem limpa e uma PI que eu possa proteger.",
      breadcrumb: "Sei do que preciso",
      kicker: "COMECE COM UMA NECESSIDADE",
      title: "Sei do que preciso. Qual planta poderia fazer isso?",
      lead: "Tenho um briefing, um alvo ou uma lacuna na minha linha. O que não tenho é um ingrediente que ninguém mais esteja vendendo.",
      primary: "Compartilhar meu briefing",
      secondary: "Buscar no Icaros por conta própria",
      heroAlt: "Amostras de diferentes plantas secas organizadas para comparação",
      chipsLabel: "Perguntas nesta página",
      sections: [
        {
          id: "new",
          chip: "Como encontro algo novo?",
          thought: "Todo fornecedor me oferece os mesmos extratos.",
          title: "Como encontro algo que ninguém mais tem?",
          body: ["Começando onde ninguém olhou. Ativos novos, não o extrato de sempre com outro rótulo."],
          industries: true,
        },
        {
          id: "evidence",
          chip: "Posso comprovar com ciência?",
          thought: "Preciso de evidência, não de uma tendência.",
          title: "Posso comprovar com ciência?",
          body: ["O Icaros reúne a evidência sobre cada planta e seus compostos, e prevê bioatividade onde ainda não há dados. Uma predição é uma hipótese a testar, não um resultado."],
          links: [{ label: "Como o Icaros funciona", href: "/our-technology/#icaros" }],
        },
        {
          id: "lab",
          chip: "Quais valem o laboratório?",
          thought: "Não posso me dar ao luxo de testar dezenas de plantas às cegas.",
          title: "Quais valem o laboratório?",
          body: ["Quero priorizar antes de pagar um único ensaio."],
          links: [{ label: "Como funciona a priorização", href: "/our-technology/" }],
        },
        {
          id: "protect",
          chip: "Podemos protegê-lo?",
          title: "Se o encontrarmos, podemos protegê-lo?",
          body: ["Quero saber antes de investir, não depois. A Moka avalia a PI desde o início."],
          links: [{ label: "Como funciona um projeto", href: "/services/" }],
        },
        {
          id: "origin",
          chip: "De onde ele vem?",
          title: "Posso contar de onde ele vem?",
          body: ["As regras dependem do país de onde a planta vem. Preciso conhecê-las antes que ela chegue ao meu produto."],
          countries: true,
        },
      ],
      stepsTitle: "Como funciona?",
      steps: [
        "Digo qual ativo ou benefício procuro.",
        "A Moka percorre a flora latino-americana até encontrar meus candidatos.",
        "A Moka os desenvolve até o nível de que preciso.",
      ],
      stepsLink: { label: "Como funciona um projeto", href: "/services/" },
      finalTitle: "Agora sei onde procurar.",
      other: { label: "E se eu começar por uma planta?", href: "/plant-potential/" },
    },
  },
};
