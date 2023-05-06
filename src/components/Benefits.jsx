import React from 'react';
import droplet from './images/droplet.png';
import line from './images/Line.png';
// benefits
import construction from './images/construction.png';
import school from './images/school.png';
import bar_chart from './images/bar_chart.png';

const Benefits = () => {
  return (
    <div className='flex flex-col  mb-[100px]  items-center justify-center'>
      <img
        src={droplet}
        alt=''
        className='mx-auto w-[11px] h-[16px] md:w-[22px] md:h-[34px] mb-5 md:mb-3'
      />
      <p className='uppercase font-normal text-[10px] md:text-base tracking-[0.225em] border rounded-[49px] pt-[7px] bg-[#152032] py-[4px] px-[8px] md:py-[6px] md:pl-[12px] md:pr-[13px] border-[#1393EC]/20 rapid-text mb-[32px] md:mb-[40px]'>
        Let’s win together
      </p>
      <h1 className='rapid-h1 text-lg md:text-2xl md:text-[32px] max-w-3xl leading-normal font-bold text-center mb-[40px]'>
        RAPID SUITE helps your school win in today’s digital age (without
        stress)
      </h1>
      <p className='text-white font-normal md:font-semibold px-[10px] md:px-0 text-[14px] md:text-xl mb-[40px] md:mb-[100px] text-center max-w-5xl leading-relaxed'>
        Rapid Suite: the digital solution that can help you streamline your
        school&apos;s operations and enhance learning outcomes. Our suite of
        powerful tools is designed to address the specific pain points that
        schools face in today&apos;s digital world.
      </p>
      <img src={line} alt='' className='px-7 mb-[40px] mx-auto' />
      <img
        src={droplet}
        alt=''
        className='mx-auto w-[11px] h-[16px] md:w-[22px] md:h-[34px] mb-3'
      />
      <p className='uppercase font-normal text-[10px] md:text-base tracking-[0.225em] border rounded-[49px] pt-[7px] bg-[#152032] py-[4px] px-[8px] md:py-[6px] md:pl-[12px] md:pr-[13px] border-[#1393EC]/20 rapid-text mb-[40px]'>
        ENJOY
      </p>
      <h3 className='faq-text text-xl md:text-[32px] mb-10 md:mb-[60px] text-center font-bold'>
        BENEFITS
      </h3>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-10 md:gap-y-14 max-w-[1400px] mx-auto px-6 md:px-16'>
        {/* 1st */}
        <article className='rounded-[11px] bg-white/5 border-white/50 border'>
          <img
            src={construction}
            alt=''
            className='mt-[42px] mx-auto w-10 md:w-[54px] md:h-[52px] mb-[16px]'
          />
          <h3 className='faq-text text-center font-bold text-xl md:text-2xl mb-[32px]'>
            Quickly deploy tools
          </h3>
          <p className='text-sm md:text-base text-center text-white font-normal leading-relaxed mb-[100px] px-[18px]'>
            Our suite of powerful digital tools is designed to be user-friendly
            and easy to deploy, empowering your school to compete favorably in
            today&apos;s digital world.
          </p>
        </article>

        {/* 2nd */}
        <article className='rounded-[11px] bg-white/5 border-white/50 border'>
          <img
            src={school}
            alt=''
            className='mt-[42px] mx-auto w-10 md:w-[54px] md:h-[52px] mb-[16px]'
          />
          <h3 className='school text-center font-bold text-xl md:text-2xl mb-[32px]'>
            Train Staff
          </h3>
          <p className='text-sm md:text-base text-center text-white font-normal leading-relaxed mb-[100px] px-[18px]'>
            Rapid Suite, we believe that the key to success in the school
            industry lies in empowering your staff with the right tools and
            training. you can ensure that your staff is educated, confident, and
            capable of delivering the best possible learning experiences to your
            students
          </p>
        </article>

        {/* 3rd */}
        <article className='rounded-[11px] bg-white/5 border-white/50 border'>
          <img
            src={bar_chart}
            alt=''
            className='mt-[42px] mx-auto w-10 md:w-[54px] md:h-[52px] mb-[16px]'
          />
          <h3 className='bar text-center font-bold text-xl md:text-2xl mb-[32px]'>
            Manage Growth
          </h3>
          <p className='text-sm md:text-base text-center text-white font-normal leading-relaxed mb-[100px] px-[18px]'>
            Manage growth with Rapid Suite: our suite of digital tools is
            designed to help your school scale up and achieve your growth
            objectives. With Rapid Suite you can streamline your operations,
            enhance learning outcomes, and free up valuable time for your staff
            to focus on other important aspects of running your school.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Benefits;
