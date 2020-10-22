import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroCarouselItem from './HeroCarouselItem';

const Hero = () => {
  return (
    <div>
      <HeroCarousel>
        <HeroCarouselItem />
      </HeroCarousel>
    </div>
  );
};

export default Hero;
