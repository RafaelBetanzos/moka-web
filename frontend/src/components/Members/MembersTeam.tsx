import LinkedIn from "@assets/LinkedIn.svg";
import { useMembersQuery } from "@services/getMembers";
import { sortMembersByPosition } from "@utils/SortingNames";
import { VITE_BASE_MOKA_URL } from "astro:env/client";
export const MembersTeam = () => {
  const { dataMembers, isLoading } = useMembersQuery();

  if (isLoading) return <p>Loading...</p>;

  const sortedMembers = sortMembersByPosition(dataMembers?.data);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-secondary font-inter font-semibold xl:text-[18px] lg:text-[16px] md:text-[16px] leading-12 mt-12 text-center mb-16">
        TEAM MEMBERS
      </p>
      <div className="flex justify-center gap-12 flex-wrap max-w-6xl">
        {sortedMembers?.map((member: any) => (
          <div
            className="flex flex-col items-center justify-start"
            key={member.id}
          >
            <img
              src={`${VITE_BASE_MOKA_URL}${member.avatar.url}`}
              alt={`${member.avatar.name}`}
              className="rounded-full max-w-[150px]"
            />
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <img
                src={LinkedIn.src}
                alt="Linkedin"
                className="relative z-10 left-[20%] bottom-5 w-[35px]"
              />
            </a>
            <div className="flex flex-col items-center">
              <p className="text-card font font-bold text-[20px] text-center w-48">
                {member.position}
              </p>
              <p className="text-secondary font font-bold text-[20px] text-center w-48">
                {member.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
