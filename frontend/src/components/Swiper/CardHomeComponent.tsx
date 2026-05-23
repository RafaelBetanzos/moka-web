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
      <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 w-full bg-deepforest/80 backdrop-blur-sm p-8 lg:p-16 rounded-[2rem] shadow-2xl shadow-black/25 transition-all duration-500 hover:border-freshgreen/40 border border-sage/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(110,191,126,0.12),transparent_34%),linear-gradient(135deg,rgba(18,18,18,0.25),rgba(19,45,37,0.45))]" />
        
        {/* LEFT SIDE: Content */}
        <div className="relative z-10 flex flex-col flex-1 text-left transition-transform duration-500 group-hover:translate-x-2">
          <div className="bg-charcoal/70 border border-freshgreen/25 backdrop-blur-md rounded-full w-fit py-1.5 px-5 mb-6 shadow-sm transition-all duration-300 group-hover:bg-freshgreen group-hover:scale-105">
            <p className="font-roboto text-xs lg:text-sm font-bold tracking-widest text-freshgreen group-hover:text-charcoal uppercase">
              Articles
            </p>
          </div>
          
          <h2 className="font-inter text-2xl md:text-3xl lg:text-4xl text-pure font-semibold leading-tight transition-colors duration-300 group-hover:text-freshgreen">
            {article?.title}
          </h2>

          <p className="font-inter mt-6 text-birch/75 text-sm lg:text-lg italic opacity-90 group-hover:opacity-100">
            By {article?.author}
          </p>
        </div>

        {/* RIGHT SIDE: Animated Image & Interactive Button */}
        <div className="relative z-10 flex flex-col items-center shrink-0">
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-sage/30">
            <img
              src={article?.image}
              alt={article?.alt}
              className="object-cover w-[280px] h-[200px] lg:w-[420px] lg:h-[300px] transition-transform duration-1000 group-hover:scale-110 grayscale contrast-125 brightness-75"
            />
            <div className="absolute inset-0 bg-freshgreen/10 mix-blend-screen"></div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-charcoal/80"></div>
            
            {/* THE BUTTON - Now pops on hover */}
            <div className="absolute bottom-4 right-4 bg-pure rounded-full shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:bg-freshgreen z-20 border border-white/10">
              <a 
                className="flex items-center gap-3 px-5 py-2.5 whitespace-nowrap" 
                href={article?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-charcoal text-sm lg:text-base font-roboto font-black tracking-tight uppercase">
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
          <div className="absolute inset-0 bg-freshgreen/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
        </div>

      </div>
    </div>
  );
};
