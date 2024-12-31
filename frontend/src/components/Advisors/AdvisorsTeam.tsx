import { useMembersQuery } from "@services/getMembers";
import { VITE_BASE_MOKA_URL } from "astro:env/client";
import LinkedIn from "@assets/LinkedIn.svg";
import { sortMembersByPosition } from "@utils/SortingNames";
import { useAdvisorsQuery } from "@services/getAdvisors";

export const AdvisorsTeam = () => {
  const { dataAdvisors, isLoading } = useAdvisorsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-4 mt-20">
      <p className="text-secondary font-inter font-semibold xl:text-[18px] lg:text-[16px] md:text-[16px] leading-12 mt-12 text-center mb-16">
        ADVISORS
      </p>
      <div className="flex justify-center items-center gap-12 mx-auto">
        {dataAdvisors?.data?.map((advisor: any) => (
          <div
            className="flex flex-col items-center justify-center"
            key={advisor.id}
          >
            <div className="relative">
              <img
                src={`${VITE_BASE_MOKA_URL}${advisor.avatar.url}`}
                alt={`${advisor.avatar.name}`}
                className="rounded-full max-w-[150px]"
              />
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-3 right-14"
              >
                <img src={LinkedIn.src} alt="Linkedin" className="w-[35px]" />
              </a>
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-secondary font-bold text-[20px] text-center">
                {advisor.name}
              </p>
              <p className="text-secondary text-[17px] text-center xl:mx-20">
                {advisor.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
