// Content of the country landing pages (/countries/<slug>/), in the three locales.
// Figures come from official sources and are cited on the page. Regulatory notes
// were verified against the CBD list of Nagoya Protocol parties.
import type { Locale } from "./sitePages";

export type CountrySlug = "mexico" | "brazil" | "peru" | "argentina" | "colombia";

interface CountryCopy {
  name: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  stats: { value: string; label: string; source: string }[];
  platform: string[];
  service: string[];
  access: string;
  faq: { q: string; a: string }[];
}

export const countrySlugs: CountrySlug[] = ["mexico", "brazil", "peru", "argentina", "colombia"];

export const countryBotanical: Record<CountrySlug, string> = {
  mexico: "/assets/about-botanicals/botanical-line-05.png",
  brazil: "/assets/about-botanicals/botanical-line-04.png",
  peru: "/assets/about-botanicals/botanical-line-03.png",
  argentina: "/assets/about-botanicals/botanical-line-02.png",
  colombia: "/assets/about-botanicals/botanical-line-01.png",
};

export const countryLabels: Record<Locale, {
  kicker: string; statsTitle: string; doTitle: string; platformTitle: string; serviceTitle: string;
  accessTitle: string; accessNote: string; industriesTitle: string; faqTitle: string; othersTitle: string;
  demo: string; service: string;
}> = {
  en: { kicker: "LATIN AMERICA", statsTitle: "What we know, and how little", doTitle: "What you can do with Moka", platformTitle: "With the platform", serviceTitle: "With a service", accessTitle: "Access and traceability", accessNote: "Every plant's origin is documented and traceable together with the communities, and each project is assessed against the applicable access rules.", industriesTitle: "By industry", faqTitle: "Frequently asked questions", othersTitle: "Other countries", demo: "Book a demo", service: "Request a service" },
  es: { kicker: "AMÉRICA LATINA", statsTitle: "Lo que se sabe, y lo poco que es", doTitle: "Qué puedes hacer con Moka", platformTitle: "Con la plataforma", serviceTitle: "Con un servicio", accessTitle: "Acceso y trazabilidad", accessNote: "El origen de cada planta se documenta y es trazable junto con las comunidades, y cada proyecto se evalúa según las reglas de acceso aplicables.", industriesTitle: "Por industria", faqTitle: "Preguntas frecuentes", othersTitle: "Otros países", demo: "Agendar demo", service: "Solicitar servicio" },
  pt: { kicker: "AMÉRICA LATINA", statsTitle: "O que se sabe, e o pouco que é", doTitle: "O que você pode fazer com a Moka", platformTitle: "Com a plataforma", serviceTitle: "Com um serviço", accessTitle: "Acesso e rastreabilidade", accessNote: "A origem de cada planta é documentada e rastreável junto com as comunidades, e cada projeto é avaliado segundo as regras de acesso aplicáveis.", industriesTitle: "Por indústria", faqTitle: "Perguntas frequentes", othersTitle: "Outros países", demo: "Agendar demonstração", service: "Solicitar serviço" },
};

const faqBase = {
  en: (name: string) => [
    { q: `Can I work with a plant from ${name} that has never been studied?`, a: "Yes. That is exactly where Moka starts: Icaros can prioritize bioactivity even in species with no previous studies." },
    { q: "Does Moka sell plants or ingredients?", a: "No. Moka gives you the platform to find bioactivity and the service to develop it into an extract, fraction, or molecule." },
  ],
  es: (name: string) => [
    { q: `¿Puedo trabajar con una planta de ${name} que nunca se ha estudiado?`, a: "Sí. Justo ahí empieza Moka: Icaros puede priorizar bioactividad incluso en especies sin estudios previos." },
    { q: "¿Moka vende plantas o ingredientes?", a: "No. Moka te da la plataforma para encontrar bioactividad y el servicio para desarrollarla hasta extracto, fracción o molécula." },
  ],
  pt: (name: string) => [
    { q: `Posso trabalhar com uma planta ${name} que nunca foi estudada?`, a: "Sim. É exatamente aí que a Moka começa: o Icaros pode priorizar bioatividade mesmo em espécies sem estudos anteriores." },
    { q: "A Moka vende plantas ou ingredientes?", a: "Não. A Moka oferece a plataforma para encontrar bioatividade e o serviço para desenvolvê-la até extrato, fração ou molécula." },
  ],
};

export const countries: Record<CountrySlug, Record<Locale, CountryCopy>> = {
  mexico: {
    en: {
      name: "Mexico",
      metaTitle: "Plant Bioactivity in Mexico | Moka Bio",
      metaDescription: "Mexico hosts 10–12% of the world's known species. Find and prioritize bioactivity in understudied Mexican plants with Moka BDE or our R&D service.",
      title: "Mexico's flora is barely studied. That's where your next active is.",
      lead: "Mexico hosts between 10 and 12% of the world's known species. Moka helps you find bioactivity in the ones no one has analyzed.",
      stats: [
        { value: "10–12%", label: "of the world's known species live in Mexico", source: "CONABIO" },
        { value: "~22,000–23,400", label: "vascular plant species", source: "CONABIO" },
      ],
      platform: ["Search Icaros for Mexican species with bioactivity signals.", "Prioritize candidates by activity and by region of origin.", "Check the IP landscape before investing."],
      service: ["Plant push: bring a Mexican species or your own crop, and we find out what it can do.", "Market pull: tell us what you need, and we look for it in Mexican flora.", "Extract, fraction, or molecule."],
      access: "Mexico has been a Party to the Nagoya Protocol on access and benefit-sharing since 2014.",
      faq: [...faqBase.en("Mexico"), { q: "Is Mexico part of the Nagoya Protocol?", a: "Yes. Mexico ratified it in 2012 and it entered into force in 2014." }],
    },
    es: {
      name: "México",
      metaTitle: "Bioactividad en plantas de México | Moka Bio",
      metaDescription: "México alberga entre 10 y 12 % de las especies conocidas del mundo. Encuentra bioactividad en plantas mexicanas poco estudiadas con Moka BDE o un servicio.",
      title: "La flora de México casi no se ha estudiado. Ahí está tu próximo activo.",
      lead: "En México vive entre el 10 y el 12 % de las especies conocidas del mundo. Moka te ayuda a encontrar bioactividad en las que nadie ha analizado.",
      stats: [
        { value: "10–12 %", label: "de las especies conocidas del mundo viven en México", source: "CONABIO" },
        { value: "~22,000–23,400", label: "especies de plantas vasculares", source: "CONABIO" },
      ],
      platform: ["Busca en Icaros especies mexicanas con señales de bioactividad.", "Prioriza candidatos por actividad y por región de origen.", "Revisa el panorama de PI antes de invertir."],
      service: ["Plant push: traes una especie mexicana o tu propio cultivo, y descubrimos de qué es capaz.", "Market pull: nos dices qué necesitas, y lo buscamos en la flora mexicana.", "Extracto, fracción o molécula."],
      access: "México es parte del Protocolo de Nagoya sobre acceso y participación en los beneficios desde 2014.",
      faq: [...faqBase.es("México"), { q: "¿México es parte del Protocolo de Nagoya?", a: "Sí. Lo ratificó en 2012 y entró en vigor en 2014." }],
    },
    pt: {
      name: "México",
      metaTitle: "Bioatividade em plantas do México | Moka Bio",
      metaDescription: "O México abriga de 10 a 12% das espécies conhecidas do mundo. Encontre bioatividade em plantas mexicanas pouco estudadas com o Moka BDE ou um serviço.",
      title: "A flora do México quase não foi estudada. É ali que está seu próximo ativo.",
      lead: "No México vivem de 10 a 12% das espécies conhecidas do mundo. A Moka ajuda você a encontrar bioatividade nas que ninguém analisou.",
      stats: [
        { value: "10–12%", label: "das espécies conhecidas do mundo vivem no México", source: "CONABIO" },
        { value: "~22.000–23.400", label: "espécies de plantas vasculares", source: "CONABIO" },
      ],
      platform: ["Busque no Icaros espécies mexicanas com sinais de bioatividade.", "Priorize candidatos por atividade e por região de origem.", "Avalie o cenário de PI antes de investir."],
      service: ["Plant push: você traz uma espécie mexicana ou seu próprio cultivo, e descobrimos do que é capaz.", "Market pull: você nos diz o que precisa, e buscamos na flora mexicana.", "Extrato, fração ou molécula."],
      access: "O México é parte do Protocolo de Nagoya sobre acesso e repartição de benefícios desde 2014.",
      faq: [...faqBase.pt("do México"), { q: "O México é parte do Protocolo de Nagoya?", a: "Sim. Ratificou em 2012 e o protocolo entrou em vigor em 2014." }],
    },
  },
  brazil: {
    en: {
      name: "Brazil",
      metaTitle: "Plant Bioactivity in Brazil | Moka Bio",
      metaDescription: "Brazil has more than 44,000 known plant species. Find and prioritize bioactivity in understudied Brazilian plants with Moka BDE or our R&D service.",
      title: "More than 44,000 plant species. Most of them waiting to be studied.",
      lead: "Brazil holds about 15% of the world's species. Moka helps you find bioactivity where no one has looked yet.",
      stats: [
        { value: "44,000+", label: "known plant species in Brazil", source: "Ministry of the Environment of Brazil" },
        { value: "~15%", label: "of all the world's species", source: "Ministry of the Environment of Brazil" },
      ],
      platform: ["Search Icaros for Brazilian species across biomes.", "Prioritize candidates by activity and by biome of origin.", "Check the IP landscape before investing."],
      service: ["Plant push: bring a Brazilian species or your own crop, and we find out what it can do.", "Market pull: tell us what you need, and we look for it in Brazilian flora.", "Extract, fraction, or molecule."],
      access: "Brazil has been a Party to the Nagoya Protocol since 2021. Access to its genetic heritage is regulated by Law 13,123/2015 and registered in SisGen.",
      faq: [...faqBase.en("Brazil"), { q: "How is access to Brazilian genetic heritage regulated?", a: "Through Law 13,123/2015, with registration in SisGen. Brazil is also a Party to the Nagoya Protocol since 2021." }],
    },
    es: {
      name: "Brasil",
      metaTitle: "Bioactividad en plantas de Brasil | Moka Bio",
      metaDescription: "Brasil tiene más de 44,000 especies de plantas conocidas. Encuentra bioactividad en plantas brasileñas poco estudiadas con Moka BDE o un servicio de I+D.",
      title: "Más de 44,000 especies de plantas. La mayoría esperando a ser estudiadas.",
      lead: "Brasil reúne cerca del 15 % de las especies del mundo. Moka te ayuda a encontrar bioactividad donde nadie ha buscado.",
      stats: [
        { value: "44,000+", label: "especies de plantas conocidas en Brasil", source: "Ministerio del Medio Ambiente de Brasil" },
        { value: "~15 %", label: "de todas las especies del mundo", source: "Ministerio del Medio Ambiente de Brasil" },
      ],
      platform: ["Busca en Icaros especies brasileñas de todos los biomas.", "Prioriza candidatos por actividad y por bioma de origen.", "Revisa el panorama de PI antes de invertir."],
      service: ["Plant push: traes una especie brasileña o tu propio cultivo, y descubrimos de qué es capaz.", "Market pull: nos dices qué necesitas, y lo buscamos en la flora brasileña.", "Extracto, fracción o molécula."],
      access: "Brasil es parte del Protocolo de Nagoya desde 2021. El acceso a su patrimonio genético se regula por la Ley 13.123/2015 y se registra en el SisGen.",
      faq: [...faqBase.es("Brasil"), { q: "¿Cómo se regula el acceso al patrimonio genético de Brasil?", a: "Con la Ley 13.123/2015 y el registro en el SisGen. Brasil también es parte del Protocolo de Nagoya desde 2021." }],
    },
    pt: {
      name: "Brasil",
      metaTitle: "Bioatividade em plantas do Brasil | Moka Bio",
      metaDescription: "O Brasil tem mais de 44 mil espécies de plantas conhecidas. Encontre bioatividade em plantas brasileiras pouco estudadas com o Moka BDE ou um serviço.",
      title: "Mais de 44 mil espécies de plantas. A maioria esperando para ser estudada.",
      lead: "O Brasil reúne cerca de 15% das espécies do mundo. A Moka ajuda você a encontrar bioatividade onde ninguém procurou.",
      stats: [
        { value: "44 mil+", label: "espécies da flora conhecidas no Brasil", source: "Ministério do Meio Ambiente" },
        { value: "~15%", label: "do total de espécies do mundo", source: "Ministério do Meio Ambiente" },
      ],
      platform: ["Busque no Icaros espécies brasileiras de todos os biomas.", "Priorize candidatos por atividade e por bioma de origem.", "Avalie o cenário de PI antes de investir."],
      service: ["Plant push: você traz uma espécie brasileira ou seu próprio cultivo, e descobrimos do que é capaz.", "Market pull: você nos diz o que precisa, e buscamos na flora brasileira.", "Extrato, fração ou molécula."],
      access: "O Brasil é parte do Protocolo de Nagoya desde 2021. O acesso ao patrimônio genético é regulado pela Lei 13.123/2015 e cadastrado no SisGen.",
      faq: [...faqBase.pt("brasileira"), { q: "Como é regulado o acesso ao patrimônio genético brasileiro?", a: "Pela Lei 13.123/2015, com cadastro no SisGen. O Brasil também é parte do Protocolo de Nagoya desde 2021." }],
    },
  },
  peru: {
    en: {
      name: "Peru",
      metaTitle: "Plant Bioactivity in Peru | Moka Bio",
      metaDescription: "Peru has about 25,000 plant species, 10% of the world total. Find and prioritize bioactivity in understudied Peruvian plants with Moka BDE or a service.",
      title: "From the Andes to the Amazon: 25,000 plants, and many still unknown.",
      lead: "Peru holds about 10% of the world's plant species, and people use around 1,400 of them medicinally. Moka helps you find what the rest can do.",
      stats: [
        { value: "~25,000", label: "plant species, about 10% of the world total", source: "MINAM" },
        { value: "~1,400", label: "species with medicinal uses", source: "MINAM" },
      ],
      platform: ["Search Icaros for Andean and Amazonian species.", "Prioritize candidates by activity and by ecosystem of origin.", "Check the IP landscape before investing."],
      service: ["Plant push: bring a Peruvian species or your own crop, and we find out what it can do.", "Market pull: tell us what you need, and we look for it in Peruvian flora.", "Extract, fraction, or molecule."],
      access: "Peru has been a Party to the Nagoya Protocol since 2014. Access to genetic resources also follows Decision 391 of the Andean Community.",
      faq: [...faqBase.en("Peru"), { q: "Which rules apply to genetic resources in Peru?", a: "Peru is a Party to the Nagoya Protocol since 2014, and access to genetic resources also follows Decision 391 of the Andean Community." }],
    },
    es: {
      name: "Perú",
      metaTitle: "Bioactividad en plantas de Perú | Moka Bio",
      metaDescription: "Perú tiene cerca de 25,000 especies de plantas, el 10 % del total mundial. Encuentra bioactividad en plantas peruanas poco estudiadas con Moka BDE.",
      title: "De los Andes a la Amazonía: 25,000 plantas, y muchas aún desconocidas.",
      lead: "Perú guarda cerca del 10 % de las especies de plantas del mundo, y unas 1,400 tienen uso medicinal. Moka te ayuda a descubrir de qué son capaces las demás.",
      stats: [
        { value: "~25,000", label: "especies de plantas, cerca del 10 % del total mundial", source: "MINAM" },
        { value: "~1,400", label: "especies de uso medicinal", source: "MINAM" },
      ],
      platform: ["Busca en Icaros especies andinas y amazónicas.", "Prioriza candidatos por actividad y por ecosistema de origen.", "Revisa el panorama de PI antes de invertir."],
      service: ["Plant push: traes una especie peruana o tu propio cultivo, y descubrimos de qué es capaz.", "Market pull: nos dices qué necesitas, y lo buscamos en la flora peruana.", "Extracto, fracción o molécula."],
      access: "Perú es parte del Protocolo de Nagoya desde 2014. El acceso a recursos genéticos también se rige por la Decisión 391 de la Comunidad Andina.",
      faq: [...faqBase.es("Perú"), { q: "¿Qué reglas aplican a los recursos genéticos en Perú?", a: "Perú es parte del Protocolo de Nagoya desde 2014, y el acceso a recursos genéticos también se rige por la Decisión 391 de la Comunidad Andina." }],
    },
    pt: {
      name: "Peru",
      metaTitle: "Bioatividade em plantas do Peru | Moka Bio",
      metaDescription: "O Peru tem cerca de 25 mil espécies de plantas, 10% do total mundial. Encontre bioatividade em plantas peruanas pouco estudadas com o Moka BDE.",
      title: "Dos Andes à Amazônia: 25 mil plantas, e muitas ainda desconhecidas.",
      lead: "O Peru guarda cerca de 10% das espécies de plantas do mundo, e cerca de 1.400 têm uso medicinal. A Moka ajuda você a descobrir do que as outras são capazes.",
      stats: [
        { value: "~25 mil", label: "espécies de plantas, cerca de 10% do total mundial", source: "MINAM" },
        { value: "~1.400", label: "espécies de uso medicinal", source: "MINAM" },
      ],
      platform: ["Busque no Icaros espécies andinas e amazônicas.", "Priorize candidatos por atividade e por ecossistema de origem.", "Avalie o cenário de PI antes de investir."],
      service: ["Plant push: você traz uma espécie peruana ou seu próprio cultivo, e descobrimos do que é capaz.", "Market pull: você nos diz o que precisa, e buscamos na flora peruana.", "Extrato, fração ou molécula."],
      access: "O Peru é parte do Protocolo de Nagoya desde 2014. O acesso a recursos genéticos também segue a Decisão 391 da Comunidade Andina.",
      faq: [...faqBase.pt("do Peru"), { q: "Quais regras se aplicam aos recursos genéticos no Peru?", a: "O Peru é parte do Protocolo de Nagoya desde 2014, e o acesso a recursos genéticos também segue a Decisão 391 da Comunidade Andina." }],
    },
  },
  argentina: {
    en: {
      name: "Argentina",
      metaTitle: "Plant Bioactivity in Argentina | Moka Bio",
      metaDescription: "Argentina has about 10,000 native vascular plants, about 2,000 found nowhere else. Find bioactivity in understudied Argentine plants with Moka BDE.",
      title: "About 2,000 plants that grow only in Argentina. How many have been studied?",
      lead: "Argentina has about 10,000 native vascular plant species, and roughly one in five is endemic. Moka helps you find bioactivity in them.",
      stats: [
        { value: "~10,000", label: "native vascular plant species", source: "CONICET" },
        { value: "~2,000", label: "endemic species, found only in Argentina", source: "CONICET" },
      ],
      platform: ["Search Icaros for Argentine species, from the Patagonia to the Yungas.", "Prioritize candidates by activity and by region of origin.", "Check the IP landscape before investing."],
      service: ["Plant push: bring an Argentine species or your own crop, and we find out what it can do.", "Market pull: tell us what you need, and we look for it in Argentine flora.", "Extract, fraction, or molecule."],
      access: "Argentina has been a Party to the Nagoya Protocol on access and benefit-sharing since 2017.",
      faq: [...faqBase.en("Argentina"), { q: "Is Argentina part of the Nagoya Protocol?", a: "Yes. Argentina ratified it in 2016 and it entered into force for the country in 2017." }],
    },
    es: {
      name: "Argentina",
      metaTitle: "Bioactividad en plantas de Argentina | Moka Bio",
      metaDescription: "Argentina tiene cerca de 10,000 plantas vasculares nativas, unas 2,000 endémicas. Encuentra bioactividad en plantas argentinas poco estudiadas con Moka.",
      title: "Unas 2,000 plantas que solo crecen en Argentina. ¿Cuántas se han estudiado?",
      lead: "Argentina tiene cerca de 10,000 especies de plantas vasculares nativas, y una de cada cinco es endémica. Moka te ayuda a encontrar bioactividad en ellas.",
      stats: [
        { value: "~10,000", label: "especies de plantas vasculares nativas", source: "CONICET" },
        { value: "~2,000", label: "especies endémicas, que solo crecen en Argentina", source: "CONICET" },
      ],
      platform: ["Busca en Icaros especies argentinas, de la Patagonia a las Yungas.", "Prioriza candidatos por actividad y por región de origen.", "Revisa el panorama de PI antes de invertir."],
      service: ["Plant push: traes una especie argentina o tu propio cultivo, y descubrimos de qué es capaz.", "Market pull: nos dices qué necesitas, y lo buscamos en la flora argentina.", "Extracto, fracción o molécula."],
      access: "Argentina es parte del Protocolo de Nagoya sobre acceso y participación en los beneficios desde 2017.",
      faq: [...faqBase.es("Argentina"), { q: "¿Argentina es parte del Protocolo de Nagoya?", a: "Sí. Lo ratificó en 2016 y entró en vigor para el país en 2017." }],
    },
    pt: {
      name: "Argentina",
      metaTitle: "Bioatividade em plantas da Argentina | Moka Bio",
      metaDescription: "A Argentina tem cerca de 10 mil plantas vasculares nativas, cerca de 2 mil endêmicas. Encontre bioatividade em plantas argentinas pouco estudadas.",
      title: "Cerca de 2 mil plantas que só crescem na Argentina. Quantas foram estudadas?",
      lead: "A Argentina tem cerca de 10 mil espécies de plantas vasculares nativas, e uma em cada cinco é endêmica. A Moka ajuda você a encontrar bioatividade nelas.",
      stats: [
        { value: "~10 mil", label: "espécies de plantas vasculares nativas", source: "CONICET" },
        { value: "~2 mil", label: "espécies endêmicas, que só crescem na Argentina", source: "CONICET" },
      ],
      platform: ["Busque no Icaros espécies argentinas, da Patagônia às Yungas.", "Priorize candidatos por atividade e por região de origem.", "Avalie o cenário de PI antes de investir."],
      service: ["Plant push: você traz uma espécie argentina ou seu próprio cultivo, e descobrimos do que é capaz.", "Market pull: você nos diz o que precisa, e buscamos na flora argentina.", "Extrato, fração ou molécula."],
      access: "A Argentina é parte do Protocolo de Nagoya sobre acesso e repartição de benefícios desde 2017.",
      faq: [...faqBase.pt("da Argentina"), { q: "A Argentina é parte do Protocolo de Nagoya?", a: "Sim. Ratificou em 2016 e o protocolo entrou em vigor para o país em 2017." }],
    },
  },
  colombia: {
    en: {
      name: "Colombia",
      metaTitle: "Plant Bioactivity in Colombia | Moka Bio",
      metaDescription: "More than 36,000 plant species are recorded in Colombia. Find and prioritize bioactivity in understudied Colombian plants with Moka BDE or a service.",
      title: "More than 36,000 plant species recorded. Most have never been in a lab.",
      lead: "Colombia is one of the most biodiverse countries on Earth. Moka helps you find bioactivity in the plants no one has analyzed.",
      stats: [
        { value: "36,310", label: "plant species recorded in Colombia", source: "SiB Colombia" },
        { value: "204", label: "endemic medicinal plant species", source: "SiB Colombia / Universidad Javeriana" },
      ],
      platform: ["Search Icaros for Colombian species, from the páramo to the Amazon.", "Prioritize candidates by activity and by region of origin.", "Check the IP landscape before investing."],
      service: ["Plant push: bring a Colombian species or your own crop, and we find out what it can do.", "Market pull: tell us what you need, and we look for it in Colombian flora.", "Extract, fraction, or molecule."],
      access: "Colombia signed the Nagoya Protocol but has not ratified it. Access to genetic resources follows Decision 391 of the Andean Community.",
      faq: [...faqBase.en("Colombia"), { q: "Which rules apply to genetic resources in Colombia?", a: "Colombia signed the Nagoya Protocol but has not ratified it; access to genetic resources follows Decision 391 of the Andean Community." }],
    },
    es: {
      name: "Colombia",
      metaTitle: "Bioactividad en plantas de Colombia | Moka Bio",
      metaDescription: "En Colombia hay más de 36,000 especies de plantas registradas. Encuentra bioactividad en plantas colombianas poco estudiadas con Moka BDE o un servicio.",
      title: "Más de 36,000 especies de plantas registradas. Casi ninguna ha pisado un laboratorio.",
      lead: "Colombia es uno de los países más biodiversos del planeta. Moka te ayuda a encontrar bioactividad en las plantas que nadie ha analizado.",
      stats: [
        { value: "36,310", label: "especies de plantas registradas en Colombia", source: "SiB Colombia" },
        { value: "204", label: "especies medicinales endémicas", source: "SiB Colombia / Universidad Javeriana" },
      ],
      platform: ["Busca en Icaros especies colombianas, del páramo a la Amazonía.", "Prioriza candidatos por actividad y por región de origen.", "Revisa el panorama de PI antes de invertir."],
      service: ["Plant push: traes una especie colombiana o tu propio cultivo, y descubrimos de qué es capaz.", "Market pull: nos dices qué necesitas, y lo buscamos en la flora colombiana.", "Extracto, fracción o molécula."],
      access: "Colombia firmó el Protocolo de Nagoya, pero no lo ha ratificado. El acceso a recursos genéticos se rige por la Decisión 391 de la Comunidad Andina.",
      faq: [...faqBase.es("Colombia"), { q: "¿Qué reglas aplican a los recursos genéticos en Colombia?", a: "Colombia firmó el Protocolo de Nagoya, pero no lo ha ratificado; el acceso a recursos genéticos se rige por la Decisión 391 de la Comunidad Andina." }],
    },
    pt: {
      name: "Colômbia",
      metaTitle: "Bioatividade em plantas da Colômbia | Moka Bio",
      metaDescription: "A Colômbia tem mais de 36 mil espécies de plantas registradas. Encontre bioatividade em plantas colombianas pouco estudadas com o Moka BDE ou um serviço.",
      title: "Mais de 36 mil espécies de plantas registradas. Quase nenhuma passou por um laboratório.",
      lead: "A Colômbia é um dos países mais biodiversos do planeta. A Moka ajuda você a encontrar bioatividade nas plantas que ninguém analisou.",
      stats: [
        { value: "36.310", label: "espécies de plantas registradas na Colômbia", source: "SiB Colombia" },
        { value: "204", label: "espécies medicinais endêmicas", source: "SiB Colombia / Universidad Javeriana" },
      ],
      platform: ["Busque no Icaros espécies colombianas, do páramo à Amazônia.", "Priorize candidatos por atividade e por região de origem.", "Avalie o cenário de PI antes de investir."],
      service: ["Plant push: você traz uma espécie colombiana ou seu próprio cultivo, e descobrimos do que é capaz.", "Market pull: você nos diz o que precisa, e buscamos na flora colombiana.", "Extrato, fração ou molécula."],
      access: "A Colômbia assinou o Protocolo de Nagoya, mas não o ratificou. O acesso a recursos genéticos segue a Decisão 391 da Comunidade Andina.",
      faq: [...faqBase.pt("da Colômbia"), { q: "Quais regras se aplicam aos recursos genéticos na Colômbia?", a: "A Colômbia assinou o Protocolo de Nagoya, mas não o ratificou; o acesso a recursos genéticos segue a Decisão 391 da Comunidade Andina." }],
    },
  },
};
