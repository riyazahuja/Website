import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './ImageSwiper2.css';

const ImageSwiper2 = ({ items }) => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView="auto"
      freeMode={true}
      mousewheel={true}
      className="mySwiper2"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide-2">
          <img src={item} alt={`Project Image ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper2;
