import React from 'react';

const Rep = () => {
  return (
    <div className='text-white text-center rep-blue-bg'>
      <div className=''></div>
      <h1 className='text-2xl md:text-[40px] font-bold mb-[33px]'>
        NOT Ready to speak to a representative
      </h1>
      <p className='text-base md:text-lg px-3 md:px-0 leading-normal font-medium max-w-6xl mx-auto mb-[53px]'>
        Not quite ready to speak with one of our representatives? No problem.
        Join our Rapid Suite Learning Center to gain access to a wealth of
        resources, including live virtual events with our expert coaches. Stay
        ahead of the curve and take your school&apos;s growth to the next level
        with Rapid Suite.
      </p>
      <button
        type='button'
        className='text-sm md:text-lg font-bold hover:bg-transparent duration-300 ease-in-out transition-all bg-[#1393EC] py-[21px] px-14 md:px-[70px] mb-[106px] rounded-[10px] border border-[#1393EC]'
      >
        Join the learning center
      </button>

      <div className='cto mb-[60px]'>
        <h1 className='z-10 pt-[77px] pb-[48px] font-bold text-[23px] md:text-[32px] leading-normal max-w-[800px] mx-auto '>
          Schedule your meeting with our representative to get started
        </h1>
        <button
          type='button'
          className='text-sm md:text-lg font-bold bg-[#1393EC] py-[21px] px-14 md:px-[70px] mb-[106px] rounded-[10px] z-10 hover:bg-[#1E1E1E] duration-300 ease-in-out transition-all  border border-[#1393EC] '
        >
          Speak to a representative
        </button>
      </div>
      <div className='border-b mb-[38px] border-[rgba(19,147,236,0.68)]'></div>
    </div>
  );
};

export default Rep;
