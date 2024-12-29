import { images } from "@utils/images";
import "@styles/MarqueeComponent.style.css";
import { MarqueeImages } from "./MarqueeImages";
import Marquee from "react-fast-marquee";

export const MarqueeComponent: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
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
