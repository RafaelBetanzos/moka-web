import ArrowDiagonal from "@assets/icons/ArrowDiagonal.svg";

export const CardHomeComponent = ({ article }) => {
  return (
    <div
      className={`bg-[rgba(143,192,169,0.5)] p-6 rounded-xl relative flex gap-8 shadow-lg mx-[25%] mt-[10%]`}
    >
      <div className="flex items-center opacity-100 justify-center gap-8 my-[8%] xl:mx-[10%] lg:mx-[3%]">
        <div className="flex flex-col">
          <div className="bg-secondcard rounded-full w-fit py-1 px-2">
            <p className="font-roboto text-lg font-medium text-secondary">
              Articles
            </p>
          </div>
          <div>
            <p className="font-inter md:text-[18px] lg:text-[18px] xl:text-[28px] text-blackcolor font-semibold mt-2">
              {article?.title}
            </p>
          </div>

          <div className="font-inter mt-4 text-[#535353] xl:text-[14px] lg:text-[12px] md:text-[12px] lg:mr-4 md:mr-8 xl:mr-36">
            {article?.author}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={article?.image}
            alt={article?.alt}
            className="rounded-lg object-fit"
          />
          <div className="text-secondary text-[12px] font-roboto font-medium mt-4 relative bg-white rounded-full w-fit flex p-1 z-10 bottom-12 left-16">
            <a className="flex gap-2 px-2" href="#">
              <p>Learn more</p>
              <img
                src={ArrowDiagonal.src}
                alt="Arrow Learn More"
                className="w-fit"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
