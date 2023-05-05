// import React from 'react';
import youtube from './images/Youtube player.png';

const Hero = () => {
  return (
    <div className='px-2 md:px-[37px]  text-white grid md:grid-cols-2  md:place-items-start mt-28 mb-[45px]'>
      <div className='order-2 md:order-1 md:mr-10 md:px-0'>
        <h1 className=' text-left font-extrabold text-lg md:text-3xl leading-snug lg:leading-[62px] lg:text-[38px] mb-[23px] md:mb-[45px] lg:mb-[62px] max-w-xl'>
          the complete suite of software products designed{' '}
          <span className='hero-span'>specifically for schools</span>
        </h1>
        <p className='text-left lg:mb-[62px] mb-[17px] md:mb-[45px] max-w-xl text-sm lg:text-xl font-bold text-[#B0B8BE]'>
          the complete suite of software products designed specifically for
          schools
        </p>
        <button
          className=' w-full md:mx-0 py-3 md:px-[50px] lg:w-[80%] md:mb-0  rounded-[10px] text-base font-bold bg-[#3A95C9] hover:bg-transparent border border-[#3A95C9] hover:border-[#3A95C9] duration-300 transition-all ease-in-out whitespace-nowrap'
          type='button'
        >
          Speak to a representative
        </button>
      </div>
      <div className='order-1 md:order-2'>
        <img
          src={youtube}
          alt=''
          className='mb-[28px] md:mb-2.5 w-full md:w-[500px] md:h-[230px] lg:w-[600px] object-contain lg:h-[346px]'
        />
        <p className='hidden md:block font-bold text-xs text-[#B0B8BE] text-center 2xl:text-left'>
          5 distinctive benefit of working with rapid suite
        </p>
      </div>
    </div>
  );
};

export default Hero;
