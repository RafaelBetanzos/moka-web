import React from "react";
import Marquee from "react-fast-marquee";
import { images } from "../../utils/images"; 

export const MarqueeComponent: React.FC = () => {
  return (
    /* h-16 makes the bar slim. my-0 removes the giant vertical gaps. */
    <div className="w-full h-16 flex items-center bg-transparent my-0 overflow-hidden">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {images.map((logo, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              /* h-10 fits perfectly in a h-16 container */
              className="h-10 w-auto object-contain brightness-0 opacity-50 hover:opacity-100 transition-all duration-300"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};