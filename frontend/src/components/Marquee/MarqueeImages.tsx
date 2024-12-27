import "@styles/MarqueeComponent.style.css";

interface MarqueeImagesProps {
  index: number;
  src: string;
  alt: string;
}

export const MarqueeImages: React.FC<MarqueeImagesProps> = ({
  index,
  src,
  alt,
}) => {
  return (
    <div key={index} className="bg-white">
      <img src={src} alt={alt} className="w-full h-full object-fit" />
    </div>
  );
};
