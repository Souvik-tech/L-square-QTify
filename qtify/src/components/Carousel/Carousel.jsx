import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from '../Card/Card';
import 'swiper/css';
import 'swiper/css/navigation';
// import './Carousel.css';

const Carousel = ({ data, cardType }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Card data={item} cardType={cardType} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
