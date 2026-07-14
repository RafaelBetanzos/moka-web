import React, { useMemo } from "react";
import LinkedInIcon from "@assets/LinkedIn.svg";
import Mexico from "@assets/icons/Mexico.svg";
import Argentina from "@assets/icons/Argentina.svg";
import { sortMembersByPosition } from "@utils/SortingNames";

type Locale = "en" | "es" | "pt";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  linkedin: string;
  fileName: string;
  bio: Record<Locale, string>;
}

interface MembersTeamProps {
  locale?: Locale;
}

const copy = {
  en: {
    sectionTitle: "Founder Team",
  },
  es: {
    sectionTitle: "Equipo fundador",
  },
  pt: {
    sectionTitle: "Equipe fundadora",
  },
} satisfies Record<Locale, { sectionTitle: string }>;

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Rafa",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/rafabetanzos/",
    fileName: "Rafa.jpg",
    bio: {
      en: "Ms.C. & J.D. Deep-tech strategist integrating AI-driven molecular discovery with global IP leadership to digitize the plant kingdom’s chemical potential.",
      es: "Mtra. y abogada. Estratega deep-tech que integra descubrimiento molecular impulsado por IA con liderazgo global en propiedad intelectual para digitalizar el potencial químico del reino vegetal.",
      pt: "M.Sc. e advogada. Estrategista deep-tech que integra descoberta molecular orientada por IA com liderança global em propriedade intelectual para digitalizar o potencial químico do reino vegetal.",
    },
  },
  {
    id: 2,
    name: "Facu",
    position: "CSO",
    linkedin: "https://www.linkedin.com/in/facugulias/",
    fileName: "Facu.png",
    bio: {
      en: "Ph.D. in Biological Chemistry specializing in plant cell engineering and metabolic signaling for high-precision bioactive validation.",
      es: "Doctor en Química Biológica, especializado en ingeniería celular vegetal y señalización metabólica para validación bioactiva de alta precisión.",
      pt: "Doutor em Química Biológica, especializado em engenharia celular vegetal e sinalização metabólica para validação bioativa de alta precisão.",
    },
  },
];

export const MembersTeam = ({ locale = "en" }: MembersTeamProps) => {
  const sortedMembers = useMemo(() => sortMembersByPosition(teamData), []);
  const t = copy[locale];

  const getFlagSrc = (name: string) => {
    const founder = name.toLowerCase();
    if (founder.includes("rafa")) return Mexico.src;
    if (founder.includes("facu")) return Argentina.src;
    return null;
  };

  return (
    <section className="flex flex-col items-center gap-12 pb-10 pt-2 bg-transparent w-full">
      <div className="text-center px-4">
        <h2 className="text-secondary font-bold tracking-[0.3em] text-xl uppercase">
          {t.sectionTitle}
        </h2>
      </div>

      <div className="flex justify-center gap-12 flex-wrap max-w-4xl px-8">
        {sortedMembers.map((member: TeamMember) => {
          const flagImg = getFlagSrc(member.name);

          return (
            <div className="group flex flex-col items-center w-full max-w-sm md:w-[20rem]" key={member.id}>
              <div className="relative mb-6">
                <div className="overflow-hidden rounded-full bg-gray-200 aspect-square w-44 shadow-md border-2 border-transparent group-hover:border-secondary transition-all duration-500">
                  <img
                    src={`/teampics/${member.fileName}`}
                    alt={member.name}
                    loading="lazy"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/teampics/placeholder.jpg'; }}
                  />
                </div>

                <div className="absolute bottom-2 right-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block hover:scale-125 transition-transform duration-300"
                  >
                    <img
                      src={typeof LinkedInIcon === 'string' ? LinkedInIcon : LinkedInIcon.src}
                      alt="Linkedin"
                      className="w-7 h-7 opacity-80 group-hover:opacity-100 drop-shadow-sm"
                    />

                    {flagImg && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-white shadow-sm overflow-hidden bg-white">
                        <img
                          src={flagImg}
                          alt="Origin Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <p className="text-secondary font-bold text-2xl leading-tight">
                  {member.name}
                </p>

                <span className="text-birch font-semibold text-sm tracking-[0.1em] uppercase mt-1 mb-3">
                  {member.position}
                </span>

                <p className="text-birch text-[13px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {member.bio[locale]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
