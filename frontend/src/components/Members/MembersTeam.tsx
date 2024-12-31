import { useMembersQuery } from "@services/getMembers";

export const MembersTeam = () => {
  const { dataMembers, isLoading } = useMembersQuery();

  console.log(dataMembers);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-secondary font-inter font-semibold xl:text-[18px] lg:text-[16px] md:text-[16px] leading-12 mt-12 text-center mb-16">
        TEAM MEMBERS
      </p>
      <div className="flex gap-12">
        {/**
         * <div>
          <div>
            {}<img src={Rafa} alt="Rafa" className="rounded-full" />
            <img
              src={LinkedIn}
              alt="Linkedin"
              className="relative z-10 left-[44%] bottom-4"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-card font font-bold text-[20px]">CEO</p>
            <p className="text-secondary font font-bold text-[20px]">
              Rafael Betanzos
            </p>
          </div>
        </div>
         */}
      </div>
    </div>
  );
};
