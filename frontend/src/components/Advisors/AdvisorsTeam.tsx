import LinkedIn from "@assets/LinkedIn.svg";
import { useAdvisorsQuery } from "@services/getAdvisors";
import { VITE_BASE_MOKA_URL } from "astro:env/client";
import { useMemo } from "react";

// 1. Define an Interface to clear TypeScript warnings
interface Advisor {
  id: string | number;
  name: string;
  title: string;
  linkedin: string;
  localImg?: string;
  avatar?: {
    url: string;
  };
}

export const AdvisorsTeam = () => {
  const { dataAdvisors, isLoading } = useAdvisorsQuery();

  const localAdvisors: Advisor[] = [
    {
      id: "local-1",
      name: "Alejandrina Vendrell",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/alejandrina-vendrell/", 
      localImg: "/teampics/Alejandrina.jpeg"
    },
    {
      id: "local-2",
      name: "Claudia Benjamin",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/claudia-benjamin/",
      localImg: "/teampics/Claudia.jpg"
    },
    {
      id: "local-3",
      name: "Adam Joswiak",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/adam-joswiak/",
      localImg: "/teampics/Adam.jpg"
    }
  ];

  const allAdvisors = useMemo(() => {
    const apiData = dataAdvisors?.data || [];
    return [...apiData, ...localAdvisors];
  }, [dataAdvisors]);

  if (isLoading) return <p className="text-center text-secondary">Loading...</p>;

  return (
    <div className="flex flex-col gap-4 mt-10 w-full">
      <p className="text-secondary font-inter font-bold tracking-[0.3em] text-[18px] text-center mb-12 uppercase">
        Advisors
      </p>
      
      <div className="flex justify-center gap-16 mx-auto flex-wrap max-w-6xl px-8">
        {allAdvisors.map((advisor) => (
          <div className="group flex flex-col items-center w-48" key={advisor.id}>
            <div className="relative mb-4">
              <img
                src={advisor.localImg || `${VITE_BASE_MOKA_URL}${advisor.avatar?.url}`}
                alt={advisor.name}
                className="rounded-full w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-md border-2 border-transparent group-hover:border-secondary"
                onError={(e) => { (e.target as HTMLImageElement).src = '/teampics/placeholder.jpg' }} // Fallback if image is missing
              />
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 hover:scale-125 transition-transform duration-300"
              >
                <img src={LinkedIn.src} alt="Linkedin" className="w-6 h-6 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-secondary font-bold text-lg leading-tight">{advisor.name}</p>
              <p className="text-black text-sm opacity-80 mt-1">{advisor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};