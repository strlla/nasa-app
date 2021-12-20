import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation  } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';


SwiperCore.use([EffectCoverflow, Pagination, Navigation ]);

const RoverImages = ({ photos }) => {
  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      navigation
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
