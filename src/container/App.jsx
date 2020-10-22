import React from 'react';

import '../assets/styles/App.scss';
import HeroCarousel from '../components/HeroCarousel';
import HeroCarouselItem from '../components/HeroCarouselItem';

const App = () => {
  return (
    <React.Fragment>
      <HeroCarousel>{HeroCarouselItem()}</HeroCarousel>
    </React.Fragment>
  );
};

export default App;
