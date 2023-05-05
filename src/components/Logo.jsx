// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slides } from '../utils';

import line from './images/Line.png';

const Logo = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className='text-white '>
      <h3 className='text-center text-[#FFFFFF] font-semibold text-base md:text-xl mb-[27.24px] md:mb-[61px]'>
        Trusted by 10+ schools
      </h3>
      <div className='mx-10 lg:mx-16 md:mb-[96px] '>
        <Slider {...settings}>
          {slides.map((slide) => {
            return (
              <div key={slide.id} className='px-[14px] md:px-1 '>
                <img src={slide.img} alt='' className='object-contain ' />
              </div>
            );
          })}
        </Slider>
      </div>
      <img
        src={line}
        alt=''
        className='mt-[32.47px] md:mt-[62px] px-10 mx-auto'
      />
    </div>
  );
};

export default Logo;
