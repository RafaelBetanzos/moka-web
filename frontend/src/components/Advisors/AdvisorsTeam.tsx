import LinkedInIcon from "@assets/LinkedIn.svg";
import { useAdvisorsQuery } from "@services/getAdvisors";
import { VITE_BASE_MOKA_URL } from "astro:env/client";
import { useMemo } from "react";

// 1. Interfaz estricta para evitar errores de tipo
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
  const { dataAdvisors } = useAdvisorsQuery();

  // 2. Datos locales (Estáticos, cargan al instante)
  const localAdvisors: Advisor[] = [
    {
      id: "local-1",
      name: "Alejandrina Vendrell",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/alejandrina-vendrell/", 
      localImg: "/advisorspics/AleVendrell.jpg"
    },
    {
      id: "local-2",
      name: "Claudia Benjamin",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/claudia-benjamim-25643139/",
      localImg: "/advisorspics/ClaudiaBenjamim.png"
    },
    {
      id: "local-3",
      name: "Adam Joswiak",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/adam-jozwiak-470135153/",
      localImg: "/advisorspics/AdamJozwiak.jpg"
    },
    {
      id: "local-4",
      name: "Leonardo Escalona",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/joseleonardoescalona/",
      localImg: "/advisorspics/Leo.png"
    }
  ];

  // 3. Unión de datos sin lógica de "isLoading" para evitar parpadeos
  const allAdvisors = useMemo(() => {
    const apiData = dataAdvisors?.data || [];
    return [...apiData, ...localAdvisors];
  }, [dataAdvisors]);

  return (
    <section className="flex flex-col items-center gap-12 pb-10 pt-2 w-full">
      <div className="text-center px-4">
        <h2 className="text-secondary font-bold tracking-[0.3em] text-xl uppercase">
          Advisors
        </h2>
      </div>

      <div className="flex justify-center gap-16 mx-auto flex-wrap max-w-6xl px-8">
        {allAdvisors.map((advisor) => (
          <div className="group flex flex-col items-center w-48" key={advisor.id}>
            <div className="relative mb-4">
              {/* Contenedor de tamaño fijo que previene el salto de diseño */}
              <div className="overflow-hidden rounded-full bg-gray-200 aspect-square w-32 shadow-md border-2 border-transparent group-hover:border-secondary transition-all duration-500">
                <img
                  src={advisor.localImg || `${VITE_BASE_MOKA_URL}${advisor.avatar?.url}`}
                  alt={advisor.name}
                  loading="eager"
                  decoding="async"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    // Previene bucle infinito si el placeholder también falla
                    if (!target.src.includes('placeholder.png')) {
                      target.src = '/advisorspics/placeholder.png';
                    }
                  }}
                />
              </div>
              
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 hover:scale-125 transition-transform duration-300"
              >
                <img 
                  /* FIX: Accedemos a .src para evitar el error de ImageMetadata de Astro */
                  src={typeof LinkedInIcon === 'string' ? LinkedInIcon : LinkedInIcon.src} 
                  alt="Linkedin" 
                  className="w-6 h-6 opacity-70 group-hover:opacity-100" 
                />
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="text-secondary font-bold text-lg leading-tight">
                {advisor.name}
              </p>
              <p className="text-black text-sm opacity-80 mt-1">
                {advisor.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};