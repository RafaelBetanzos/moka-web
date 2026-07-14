import LinkedInIcon from "@assets/LinkedIn.svg";
import Argentina from "@assets/icons/Argentina.svg";
import Brazil from "@assets/icons/Brazil.svg";

type Locale = "en" | "es" | "pt";

interface Advisor {
  id: string | number;
  name: string;
  title: Record<Locale, string>;
  linkedin: string;
  localImg?: string;
  flag?: string;
}

interface AdvisorsTeamProps {
  locale?: Locale;
}

const copy = {
  en: {
    sectionTitle: "Advisors",
  },
  es: {
    sectionTitle: "Asesores",
  },
  pt: {
    sectionTitle: "Conselheiros",
  },
} satisfies Record<Locale, { sectionTitle: string }>;

const advisors: Advisor[] = [
  {
    id: "local-1",
    name: "Alejandrina Vendrell",
    title: { en: "Advisor", es: "Asesora", pt: "Conselheira" },
    linkedin: "https://www.linkedin.com/in/alejandrina-vendrell/",
    localImg: "/advisorspics/AleVendrell.jpg",
    flag: Argentina.src,
  },
  {
    id: "local-2",
    name: "Claudia Benjamin",
    title: { en: "Advisor", es: "Asesora", pt: "Conselheira" },
    linkedin: "https://www.linkedin.com/in/claudia-benjamim-25643139/",
    localImg: "/advisorspics/ClaudiaBenjamim.png",
    flag: Brazil.src,
  },
  {
    id: "local-3",
    name: "Adam Joswiak",
    title: { en: "Advisor", es: "Asesor", pt: "Conselheiro" },
    linkedin: "https://www.linkedin.com/in/adam-jozwiak-470135153/",
    localImg: "/advisorspics/AdamJozwiak.jpg",
  },
  {
    id: "local-4",
    name: "Guillermo Repizo",
    title: { en: "Advisor", es: "Asesor", pt: "Conselheiro" },
    linkedin: "https://www.linkedin.com/in/guillermorepizo",
    localImg: "/advisorspics/guillermo.png",
    flag: Argentina.src,
  },
  {
    id: "local-5",
    name: "Luis Regalini",
    title: { en: "Advisor", es: "Asesor", pt: "Conselheiro" },
    linkedin: "https://ar.linkedin.com/in/luisregalini",
    localImg: "/advisorspics/luis.png",
    flag: Argentina.src,
  },
];

export const AdvisorsTeam = ({ locale = "en" }: AdvisorsTeamProps) => {
  const visibleAdvisors = advisors.filter((advisor) => advisor.name !== "Adam Joswiak");
  const t = copy[locale];

  return (
    <section className="flex flex-col items-center gap-12 pb-10 pt-2 w-full">
      <div className="text-center px-4">
        <h2 className="text-freshgreen font-bold tracking-[0.3em] text-xl uppercase">
          {t.sectionTitle}
        </h2>
      </div>

      <div className="flex justify-center gap-16 mx-auto flex-wrap max-w-6xl px-8">
        {visibleAdvisors.map((advisor) => (
          <div className="group flex flex-col items-center w-48" key={advisor.id}>
            <div className="relative mb-4">
              <div className="overflow-hidden rounded-full bg-charcoal aspect-square w-32 shadow-md border-2 border-sage/30 group-hover:border-freshgreen transition-all duration-500">
                <img
                  src={advisor.localImg}
                  alt={advisor.name}
                  loading="eager"
                  decoding="async"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('placeholder.png')) {
                      target.src = '/advisorspics/placeholder.png';
                    }
                  }}
                />
              </div>

              <div className="absolute bottom-0 right-0">
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block hover:scale-125 transition-transform duration-300"
                >
                  <img
                    src={typeof LinkedInIcon === 'string' ? LinkedInIcon : LinkedInIcon.src}
                    alt="Linkedin"
                    className="w-6 h-6 opacity-70 group-hover:opacity-100"
                  />

                  {advisor.flag && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-white shadow-sm overflow-hidden bg-white">
                      <img
                        src={advisor.flag}
                        alt="Country Flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="text-freshgreen font-bold text-lg leading-tight">
                {advisor.name}
              </p>
              <p className="text-birch text-sm opacity-80 mt-1">
                {advisor.title[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
