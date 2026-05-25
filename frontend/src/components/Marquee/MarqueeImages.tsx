export const MarqueeImages: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="flex flex-shrink-0 items-center justify-center px-10 sm:px-14">
      <img
        src={src}
        alt={alt}
        className="h-16 sm:h-20 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
    </div>
  );
};
