import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper';

// Import styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

function HeroCarousel({ children }) {
  return (
    <React.Fragment>
      <div className='Hero'>
        <h1 className='Hero__title'>Top 100</h1>
        <Swiper
          id='hero'
          tag='section'
          className='Hero__slider'
          wrapperTag='article'
          navigation
          pagination
          slidesPerView={5}
          centeredSlides={true}
          effect='coverflow'
          coverflowEffect={{
            rotate: 45,
            slideShadows: false,
            stretch: 25,
            modifier: 1,
            depth: 200,
          }}
          autoplay={{
            delay: 6000,
          }}
          onClick={(e) => {
            console.log(e.clickedIndex);
          }}
          breakpoints={{
            500: {
              slidesPerView: 3,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </React.Fragment>
  );
}

export default HeroCarousel;
