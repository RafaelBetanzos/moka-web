import ArrowDiagonal from "@assets/icons/ArrowDiagonal.svg";

interface Article {
  title: string;
  author: string;
  image: string;
  alt: string;
  link?: string;
}

export const CardHomeComponent = ({ article }: { article: Article }) => {
  return (
    <div className="group relative flex w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full bg-[rgba(143,192,169,0.3)] backdrop-blur-sm p-8 lg:p-16 rounded-[2.5rem] shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-[rgba(143,192,169,0.5)] border border-white/20">
        
        {/* LEFT SIDE: Content */}
        <div className="flex flex-col flex-1 text-left transition-transform duration-500 group-hover:translate-x-2">
          <div className="bg-white/80 backdrop-blur-md rounded-full w-fit py-1.5 px-5 mb-6 shadow-sm transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
            <p className="font-roboto text-xs lg:text-sm font-bold tracking-widest text-secondary group-hover:text-white uppercase">
              Articles
            </p>
          </div>
          
          <h2 className="font-inter text-2xl md:text-3xl lg:text-4xl text-blackcolor font-semibold leading-tight transition-colors duration-300 group-hover:text-secondary">
            {article?.title}
          </h2>

          <p className="font-inter mt-6 text-[#535353] text-sm lg:text-lg italic opacity-80 group-hover:opacity-100">
            By {article?.author}
          </p>
        </div>

        {/* RIGHT SIDE: Animated Image & Interactive Button */}
        <div className="relative flex flex-col items-center shrink-0">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={article?.image}
              alt={article?.alt}
              className="object-cover w-[280px] h-[200px] lg:w-[420px] lg:h-[300px] transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* THE BUTTON - Now pops on hover */}
            <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-white rounded-full shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-secondary/20 z-20 border border-gray-100">
              <a 
                className="flex items-center gap-3 px-6 py-3 whitespace-nowrap" 
                href={article?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-secondary text-sm lg:text-base font-roboto font-black tracking-tight uppercase">
                  Learn more
                </p>
                <div className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <img
                    src={typeof ArrowDiagonal === 'string' ? ArrowDiagonal : ArrowDiagonal.src}
                    alt="Arrow"
                    className="w-5 h-5"
                  />
                </div>
              </a>
            </div>
          </div>
          
          {/* Subtle glow effect behind the image on hover */}
          <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
        </div>

      </div>
    </div>
  );
};