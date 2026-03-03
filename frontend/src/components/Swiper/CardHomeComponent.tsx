import ArrowDiagonal from "@assets/icons/ArrowDiagonal.svg";

export const CardHomeComponent = ({ article }) => {
  return (
    <div className="relative flex w-full max-w-6xl mx-auto px-4">
      {/* Contenedor principal: Mantiene tu color y padding original */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full bg-[rgba(143,192,169,0.5)] p-8 lg:p-16 rounded-3xl shadow-lg">
        
        {/* LADO IZQUIERDO: Textos */}
        <div className="flex flex-col flex-1 text-left">
          <div className="bg-secondcard rounded-full w-fit py-1 px-4 mb-4">
            <p className="font-roboto text-sm lg:text-lg font-medium text-secondary">
              Articles
            </p>
          </div>
          
          <h2 className="font-inter text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blackcolor font-semibold leading-tight">
            {article?.title}
          </h2>

          <p className="font-inter mt-4 text-[#535353] text-sm lg:text-base italic">
            {article?.author}
          </p>
        </div>

        {/* LADO DERECHO: Imagen + Botón */}
        <div className="relative flex flex-col items-center shrink-0">
          {/* Contenedor de imagen con tamaño controlado para que no empuje todo */}
          <div className="relative">
            <img
              src={article?.image}
              alt={article?.alt}
              className="rounded-2xl object-cover w-[280px] h-[200px] lg:w-[400px] lg:h-[280px] shadow-md"
            />
            
            {/* BOTÓN: Ahora posicionado de forma absoluta respecto a la imagen */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 z-20">
              <a 
                className="flex items-center gap-2 px-5 py-2 whitespace-nowrap" 
                href={article?.link || "#"}
                target="_blank"
              >
                <p className="text-secondary text-sm lg:text-base font-roboto font-bold">
                  Learn more
                </p>
                <img
                  src={ArrowDiagonal.src || ArrowDiagonal}
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};