import React from 'react';

import '../assets/styles/App.scss';
import HeroCarousel from '../components/HeroCarousel';
import { SwiperSlide } from 'swiper/react';

const App = () => {
  const slides = [];

  for (let i = 9; i < 18; i += 1) {
    slides.push(
      <SwiperSlide tag='div' key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/280/500`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <HeroCarousel>{slides}</HeroCarousel>
    </React.Fragment>
  );
};

export default App;
