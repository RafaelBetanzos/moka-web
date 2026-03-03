import React, { useMemo } from "react";
import LinkedInIcon from "@assets/LinkedIn.svg";
import { sortMembersByPosition } from "@utils/SortingNames";

// 1. Define the Interface to stop "any" type warnings
interface TeamMember {
  id: number;
  name: string;
  position: string;
  linkedin: string;
  fileName: string;
  bio: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Rafa",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/rafabetanzos/",
    fileName: "Rafa.jpg",
    bio: "Ms.C. & J.D. Deep-tech strategist integrating AI-driven molecular discovery with global IP leadership to digitize the plant kingdom’s chemical potential."
  },
  {
    id: 2,
    name: "Facu",
    position: "CSO",
    linkedin: "https://www.linkedin.com/in/facugulias/",
    fileName: "Facu.png",
    bio: "Ph.D. in Biological Chemistry specializing in plant cell engineering and metabolic signaling for high-precision bioactive validation."
  },
  {
    id: 3,
    name: "Flor",
    position: "CTO",
    linkedin: "https://www.linkedin.com/in/florencia-a-castello/",
    fileName: "Flor.jpg",
    bio: "Ph.D. Bioinformatician leveraging a decade of molecular research to decode plant biodiversity into scalable biotechnological innovation."
  },
  {
    id: 4,
    name: "Leo",
    position: "COO",
    linkedin: "https://www.linkedin.com/in/joseleonardoescalona/",
    fileName: "Leo.png",
    bio: "Ms.C. Protein chemistry expert bridging academic rigor with industrial biomanufacturing to optimize advanced molecular characterization and scaling."
  }
];

export const MembersTeam = () => {
  // 2. Move useMemo HERE. Calling it inside the return (JSX) causes warnings/errors.
  const sortedMembers = useMemo(() => sortMembersByPosition(teamData), []);

  return (
    <section className="flex flex-col items-center gap-12 pb-10 pt-2 bg-transparent w-full">
      <div className="text-center px-4">
        <h2 className="text-secondary font-bold tracking-[0.3em] text-xl">
          FOUNDER TEAM
        </h2>
      </div>

      <div className="flex justify-center gap-12 flex-wrap max-w-6xl px-8">
        {sortedMembers.map((member: TeamMember) => (
          <div className="group flex flex-col items-center w-64" key={member.id}>
            
            <div className="relative mb-6">
              <div className="overflow-hidden rounded-full bg-gray-200 border border-gray-300 aspect-square w-48 shadow-xl">
                <img
                  src={`/teampics/${member.fileName}`} 
                  alt={member.name}
                  loading="lazy"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/teampics/placeholder.jpg' }}
                />
              </div>
              
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-1 right-1 hover:scale-125 transition-transform duration-300"
              >
                <img 
                  src={LinkedInIcon.src || LinkedInIcon} 
                  alt="Linkedin" 
                  className="w-7 h-7 opacity-80 group-hover:opacity-100" 
                />
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="text-secondary font-bold text-2xl">
                {member.name}
              </p>

              <span className="text-black font-semibold text-sm tracking-[0.1em] uppercase mt-1 mb-3">
                {member.position}
              </span>
              
              <p className="text-black text-[13px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};