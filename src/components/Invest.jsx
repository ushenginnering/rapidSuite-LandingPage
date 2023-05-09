import React, { useState } from 'react';
import investments from '../utils';
import nextbtn from '../components/images/navigate_next.png';
import prevbtn from '../components/images/navigate_prev.png';

const Invest = () => {
  const [invests] = useState(investments);
  const [value, setValue] = useState(0);

  const { image, text, subtext, vid } = invests[value];

  const handleNext = () => {
    setValue((prevValue) => {
      return prevValue === invests.length - 1 ? 0 : prevValue + 1;
    });
  };
  const handlePrev = () => {
    setValue((prevValue) => {
      return prevValue === 0 ? invests.length - 1 : prevValue - 1;
    });
  };

  return (
    <article>
      <h3 className='font-bold text-white text-xl md:text-2xl md:text-[32px] mb-[60px] text-center px-2 md:px-0'>
        {' '}
        see what happens when you invest in your school
      </h3>
      <div className='mx-auto max-w-[1400px] px-6 md:px-16 '>
        <div className='invest-bg'></div>
        <article className='flex items-center gap-6 justify-center'>
          {invests.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={index === value && 'bg-white/10 py-1'}
              >
                <img
                  src={item.image}
                  alt=''
                  className='w-[50px] h-[40px] object-contain'
                />
              </button>
            );
          })}
        </article>

        {/* info */}
        <article className='rounded-[11px] mt-[40px] border-white/50 border bg-gradient-to-r from-white/5 to-transparent]'>
          <img
            src={image}
            alt=''
            className='mt-6 pl-5  md:mt-[38px] lg:pl-[80px]  '
          />
          <div className='grid md:grid-cols-2 px-5 mt-[22px] mb-[62px] gap-8 lg:px-[80px]'>
            <div className=' text-white '>
              <h3 className='text-xl mb-[22px] font-bold'>{text}</h3>
              <p className=' text-base md:text-lg  leading-normal mb-5 lg:mb-0'>
                {subtext}
              </p>
            </div>
            <div>
              {/* <img
                src={vid}
                alt=''
                className=' w-full lg:w-[408px] lg:h-[290px] xl:w-full'
              /> */}

              <video
                controls
                muted
                autoPlay
                loop
                className=' w-full lg:w-[408px] lg:h-[290px] xl:w-full'
              >
                <source src={vid} type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='text-center mb-[37px]'>
            <button className='cursor-pointer mr-[5px] ' onClick={handlePrev}>
              <img
                src={prevbtn}
                alt='prev button'
                className='py-5 px-5 rounded-full hover:bg-transparent transition-all duration-300 ease-in-out  bg-[#1393EC] border border-[#1393EC]'
              />
            </button>
            <button className='cursor-pointer' onClick={handleNext}>
              <img
                src={nextbtn}
                alt='next button'
                className=' rounded-full hover:bg-transparent transition-all duration-300 ease-in-out  bg-[#1393EC] py-5 px-5 border border-[#1393EC]'
              />
            </button>
          </div>
        </article>
        {/* btn pagination */}
        <article className='flex items-center gap-[6.6px] justify-center mt-[58px] mb-28 md:mb-[175px]'>
          {invests.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={` rounded-full h-[9px] w-[9px]  cursor-pointer lg:mb-8  ${
                  index === value
                    ? 'bg-[#1393EC]'
                    : 'bg-[rgba(12,227,123,0.17)]'
                }`}
              ></button>
            );
          })}
        </article>
      </div>
    </article>
  );
};

export default Invest;
