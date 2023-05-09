import React from 'react';
import twitter from '../components/images/twitter.png';
import linkedin from '../components/images/linkedin.png';
import facebook from '../components/images/facebook.png';
import logo from '../components/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className='mb-[67px] flex items-center justify-center px-2 gap-6 md:gap-[137px]'>
        <ul className=''>
          <h3 className='text-xl font-bold text-white mb-2'>All Tools</h3>
          <li className='text-[#EAEAEA] font-light text-xl mb-2'>Paymoff</li>
          <li className='text-[#EAEAEA] font-light text-xl mb-2'>Rapid web</li>
          <li className='text-[#EAEAEA] font-light text-xl mb-2'>
            Rapid driller
          </li>
          <li className='text-[#EAEAEA] font-light text-xl'>Rapid compiler</li>
        </ul>

        <ul className='text-white'>
          <h3 className='text-xl font-bold text-white mb-2'>Links</h3>
          <li>
            <a href='#' className='font-light text-lg'>
              Home
            </a>
          </li>
          <li>
            <a href='#faq' className='font-light text-lg'>
              FAQ
            </a>
          </li>
          <li>
            <a href='#rapid' className='font-light text-lg'>
              Rapid Suite
            </a>
          </li>
        </ul>
      </div>

      <div className='footer-bg'>
        {/* social icon */}
        <div className='flex items-center justify-center mb-[31.5px] text-white gap-3.5 md:gap-[76px] px-2'>
          <a
            href='https://twitter.com/ush_ventures'
            className='flex text-sm sm:text-xl font-normal items-center gap-1 md:gap-6'
          >
            <img src={twitter} alt='twitter' />
            Twitter
          </a>
          <a
            href='https://www.linkedin.com/in/ush-engineering-ventures-145969226/'
            className='flex text-sm sm:text-xl font-normal items-center gap-1 md:gap-6'
          >
            <img src={linkedin} alt='linkedin' />
            Linkedin
          </a>
          <a
            href='https://www.facebook.com/ushengineering/'
            className='flex text-base sm:text-xl font-normal items-center gap-1 md:gap-6'
          >
            <img src={facebook} alt='facebook' />
            Facebook
          </a>
        </div>
        {/* copyright */}
        <div className=''>
          <p className='text-white text-xs sm:text-sm font-light tracking-wider text-center'>
            COPYRIGHT: ushengineering @{currentYear}
          </p>

          {/* powered */}
          <div className='flex items-center justify-center text-[#EAEAEA] gap-[6px] mt-3 '>
            <img src={logo} alt='' className='w-8 h-8 object-contain' />
            <p className='text-sm'>Powered by ush</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
