import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { mockcarrousel } from "@utils/CarrouselMock";
import { CardHomeComponent } from "./CardHomeComponent";

export const ArticlesCarrousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView="auto"
      className="mySwiper"
      pagination={{
        clickable: true,
        type: "bullets",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
    >
      {mockcarrousel.map((article, index) => (
        <SwiperSlide key={index}>
          <CardHomeComponent article={article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
