import "@styles/MarqueeComponent.style.css";

interface MarqueeImagesProps {
  src: string;
  alt: string;
}

export const MarqueeImages: React.FC<MarqueeImagesProps> = ({ src, alt }) => {
  return (
    <div className="bg-white">
      <img src={src} alt={alt} className="w-full h-full object-fit" />
    </div>
  );
};
