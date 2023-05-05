import React from 'react';
import line from './images/Line.png';
import { struggles } from '../utils';

const Faqs = () => {
  return (
    <div className='pt-20 md:pt-[94px] px-3  md:mb-[100px] '>
      <h3 className='faq-text text-base md:text-2xl md:text-[32px] mb-[50px] md:mb-[78px] text-center font-bold'>
        Is your school struggling to grow for any of this reason?
      </h3>

      <div className='grid md:grid-cols-2 max-w-7xl mx-auto mb-[55px] md:mb-[100px] gap-5 md:gap-x-8 md:gap-y-16 '>
        {struggles.map((struggle) => {
          const { id, img, text, subText } = struggle;
          return (
            <article key={id} className='text-white flex'>
              <div className=''>
                <img src={img} alt='' className='object-contain w-16 h-6 ' />
              </div>
              <div className='ml-[11px] md:ml-[20px]'>
                <h3 className='font-bold text-base md:text-xl'>
                  {text}
                  <span className='font-normal text-sm md:text-lg'>
                    {' '}
                    {subText}
                  </span>
                </h3>
              </div>
            </article>
          );
        })}
      </div>
      <img src={line} alt='' className='px-7  mx-auto' />
    </div>
  );
};

export default Faqs;
