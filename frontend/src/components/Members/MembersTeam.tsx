import { useMembersQuery } from "@services/getMembers";
import { VITE_BASE_MOKA_URL } from "astro:env/client";
import LinkedIn from "@assets/LinkedIn.svg";
import { sortMembersByPosition } from "@utils/SortingNames";
export const MembersTeam = () => {
  const { dataMembers, isLoading } = useMembersQuery();

  if (isLoading) return <p>Loading...</p>;

  const sortedMembers = sortMembersByPosition(dataMembers?.data);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-secondary font-inter font-semibold xl:text-[18px] lg:text-[16px] md:text-[16px] leading-12 mt-12 text-center mb-16">
        TEAM MEMBERS
      </p>
      <div className="flex justify-center items-center gap-12">
        {sortedMembers?.map((member: any) => (
          <div
            className="flex flex-col items-center justify-center"
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
              <p className="text-card font font-bold text-[20px]">
                {member.position}
              </p>
              <p className="text-secondary font font-bold text-[20px]">
                {member.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
