import React from "react";
import Marquee from "react-fast-marquee";
import { images } from "../../utils/images";
import { MarqueeImages } from "./MarqueeImages";

export const MarqueeComponent: React.FC = () => {
  return (
    <div className="w-full flex items-center bg-transparent overflow-hidden">
      <Marquee gradient={false} speed={36} pauseOnHover={true} autoFill={true}>
        {images.map((logo, index) => (
          <MarqueeImages key={index} src={logo.src} alt={logo.alt} />
        ))}
      </Marquee>
    </div>
  );
};
