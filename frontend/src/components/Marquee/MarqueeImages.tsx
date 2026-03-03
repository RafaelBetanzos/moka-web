export const MarqueeImages: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="flex flex-shrink-0 items-center justify-center w-64 sm:w-80 h-full"> 
      <img 
        src={src} 
        alt={alt} 
        /* ESTE FILTRO CONVIERTE CUALQUIER LOGO A #4F7363 (Moka Green):
           - brightness(0): lo hace negro puro.
           - invert(42%): lo lleva al brillo del verde.
           - sepia(11%): añade la calidez del tono.
           - saturate(800%): le da la intensidad necesaria.
           - hue-rotate(113deg): lo posiciona en el verde exacto.
        */
        className="h-16 w-full object-contain filter brightness-0 invert-[42%] saturate-[0%] hue-rotate-[113deg] brightness-[94%] contrast-[100%] drop-shadow-[0_4px_3px_rgba(0,0,0,0.05)] transition-all duration-300" 
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
    </div>
  );
};