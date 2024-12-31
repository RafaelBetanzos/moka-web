import "@styles/MarqueeComponent.style.css";
import { images } from "@utils/images";
import Marquee from "react-fast-marquee";
import { MarqueeImages } from "./MarqueeImages";

export const MarqueeComponent: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white py-8 mb-32 shadow-sm">
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-12 bg-white">
          {images.map((image, index) => (
            <MarqueeImages
              key={index}
              index={index}
              src={image.src.src}
              alt={image.alt}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
