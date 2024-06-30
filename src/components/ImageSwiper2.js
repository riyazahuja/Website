// ImageSwiper2.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './ImageSwiper2.css';

const ImageSwiper2 = ({ items, darkMode }) => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView="auto"
      freeMode={true}
      loop= {true}
      mousewheel={true}
      className="mySwiper2"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide-2">
          {item.endsWith('.mov') || item.endsWith('.mp4') ? (
            <video controls style={{border: `${darkMode ?  '2px solid #F7F3E3':'3px solid #2E242A'}`}}>
              <source src={item} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item} alt={`Project Item ${index + 1}`} style={{border: `${darkMode ?  '2px solid #F7F3E3':'3px solid #2E242A'}`}} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper2;
