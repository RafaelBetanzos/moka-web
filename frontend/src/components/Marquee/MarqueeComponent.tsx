import "@styles/MarqueeComponent.style.css";
import Marquee from "react-fast-marquee";
import { MarqueeImages } from "./MarqueeImages";
import { usePartnersQuery } from "services/getPartners";
import { VITE_BASE_MOKA_URL } from "astro:env/client";

export const MarqueeComponent: React.FC = () => {
  const { data, isLoading } = usePartnersQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="relative overflow-hidden bg-white py-8 mb-32 shadow-sm">
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-12 bg-white">
          {data?.data?.map((image: any) => (
            <MarqueeImages
              key={image?.id}
              src={`${VITE_BASE_MOKA_URL}${image?.logo?.url}`}
              alt={image?.logo?.name}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
