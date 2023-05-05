import React from 'react';
import droplet from './images/droplet.png';
import line from './images/Line.png';
import gline from './images/Line 3.png';
import { rapids } from '../utils';

const Rapid = () => {
  return (
    <div className='flex flex-col pt-20 mb-3  md:pt-[90px] md:mb-[100px]  items-center justify-center'>
      <img
        src={droplet}
        alt=''
        className='mx-auto w-[11px] h-[16px] md:w-[22px] md:h-[34px] mb-3'
      />
      <p className='uppercase font-normal text-[10px] md:text-base tracking-[0.225em] border rounded-[49px] pt-[7px] bg-[#152032] py-[4px] px-[8px] md:py-[6px] md:pl-[12px] md:pr-[13px] border-[#1393EC]/20 rapid-text mb-[26px] md:mb-[40px]'>
        Let&apos;s Help you
      </p>
      <h1 className='rapid-h1 text-lg  md:text-[32px] font-bold text-center mb-[60px]'>
        HOW RAPID SUITE CAN HELP YOU
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-14 max-w-[1400px] mx-auto px-[14px] md:px-16'>
        {rapids.map((rapid) => {
          const { id, img, text, subtext, btn } = rapid;
          return (
            <article
              key={id}
              className='bg-white/5 border-white/50 border-b border-l border-r rounded-[20px] hover:border-[#0CE37B]/50 transition-all duration-300 ease-in-out'
            >
              <img src={img} alt='' className='w-full mb-6  object-contain ' />
              <h3 className='text-[#FFFFFF] mb-[35px] font-bold text-base md:text-xl text-center'>
                {text}
              </h3>
              <p className='leading-normal text-xs text-center text-white font-normal mb-[65px] px-6'>
                {subtext}
              </p>

              <button
                type='button'
                className='mb-[41px] font-bold cursor-pointer mx-auto flex text-[#0CE37B] text-lg'
                //  flex mx-auto
              >
                {btn}
              </button>

              <img src={gline} alt='' className='mx-auto pr-14 -mt-10 mb-8' />
            </article>
          );
        })}
      </div>
      <img src={line} alt='' className='px-7 mt-[60px] mx-auto' />
    </div>
  );
};

export default Rapid;
