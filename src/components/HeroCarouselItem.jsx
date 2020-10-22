import React from 'react';
import { SwiperSlide } from 'swiper/react';

export default function HeroCarouselItem() {
  const slides = [];

  for (let i = 9; i < 18; i += 1) {
    slides.push(
      <SwiperSlide tag='div' key={`slide-${i}`}>
        <h4>Futuro nombre de la pelicula {i} </h4>
        <img
          src={`https://picsum.photos/id/${i + 1}/280/500`}
          alt={`Slide ${i}`}
        />
        <p>Categorias</p>
      </SwiperSlide>
    );
  }
  return slides;
}
