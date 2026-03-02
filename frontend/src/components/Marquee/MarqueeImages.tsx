import React from "react";

interface MarqueeImagesProps {
  src: string;
  alt: string;
}

export const MarqueeImages: React.FC<MarqueeImagesProps> = ({ src, alt }) => {
  return (
    /* We use 'flex-shrink-0' to ensure the marquee doesn't squash the logo */
    <div className="flex flex-shrink-0 items-center justify-center px-10">
      <img 
        src={src} 
        alt={alt} 
        /* h-12 (48px) ensures the image has a physical size */
        className="h-12 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-all duration-300" 
        /* Fallback if an image is broken so it doesn't break the whole loop */
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
    </div>
  );
};