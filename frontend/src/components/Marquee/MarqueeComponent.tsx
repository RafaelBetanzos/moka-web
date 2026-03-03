import React from "react";
import Marquee from "react-fast-marquee";
import { images } from "../../utils/images";
import { MarqueeImages } from "./MarqueeImages";

export const MarqueeComponent: React.FC = () => {
  return (
    /* h-20 y w-full para ocupar todo el ancho */
    <div className="w-full h-20 flex items-center bg-transparent overflow-hidden">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {/* No añadas divs aquí, deja que MarqueeImages maneje el espacio */}
        {images.map((logo, index) => (
          <MarqueeImages key={index} src={logo.src} alt={logo.alt} />
        ))}
      </Marquee>
    </div>
  );
};