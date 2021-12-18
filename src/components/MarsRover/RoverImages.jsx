import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([EffectCoverflow, Pagination]);

const RoverImages = ({ photos }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
    >
      {photos.map((rover) => (
        <SwiperSlide key={rover.id}>
          <img src={rover.img_src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RoverImages;
