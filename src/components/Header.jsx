import { useState } from 'react';
import logo from './images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // handle nav functionality
  const handleNavToggle = () => {
    setIsNavOpen((currNav) => !currNav);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // change nav color when scrolling
  const [color, setColor] = useState(false);

  // 75 is the height of our header its in px
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <header className={color ? 'header header-bg' : 'header'}>
      <nav className=' flex items-center justify-between py-[20px] md:py-6 px-[10px] md:px-[37px]'>
        {/* logo */}
        <img src={logo} alt='Rapid logo' className='w-[54px] h-[38px]' />

        {/* links */}
        <ul className='hidden md:flex md:gap-12 lg:gap-[4rem] text-[#FFFFFF] text-base font-medium'>
          <li className='text-gradient text-lg transition-all duration-300 ease-in-out'>
            <a href='#'>Home</a>
          </li>
          <li className='text-gradient text-lg  transition-all duration-300 ease-in-out'>
            <a href='#faq'>FAQ</a>
          </li>
          <li className='text-gradient text-lg  transition-all duration-300 ease-in-out'>
            <a href='#rapid'>Rapid suite</a>
          </li>
        </ul>

        {/* btn container */}
        <div className='hidden md:flex items-center md:gap-8 lg:gap-[2.3rem] cursor-pointer'>
          <Link to='/login'>
            <button className='text-[#3A95C9] text-base font-semibold hover:text-[#0CE37B] hover:border-b-2 hover:border-[#0CE37B] transition-all duration-300 ease-in-out'>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button className='bg-[#3A95C9] text-[#ffffff] py-2 font-semibold  rounded-[10px] px-4 hover:bg-transparent border text-base border-[#3A95C9] transition-all duration-300 ease-in-out'>
              Sign up
            </button>
          </Link>
        </div>

        {/* icon */}
        <button onClick={handleNavToggle} className='md:hidden z-20 '>
          {isNavOpen ? (
            <FaTimes size={30} style={{ color: 'white' }} className='z-10' />
          ) : (
            <FaBars size={30} style={{ color: 'white' }} />
          )}
        </button>

        {/* mobile links  */}
        {isNavOpen && (
          <div
            className='fixed flex flex-col  w-[50%] h-screen z-[999]  top-[75px] left-0 justify-center rounded-[10px] text-white bg-[rgb(1,27,51)]  md:hidden transition
          ease-in-out duration-300 text-lg font-medium '
          >
            <ul className='md:hidden '>
              <li className='text-gradient text-lg transition-all duration-300 ease-in-out'>
                <a onClick={closeNav} href='#'>
                  Home
                </a>
              </li>
              <li className='text-gradient text-lg  transition-all duration-300 ease-in-out'>
                <a onClick={closeNav} href='#faq'>
                  FAQ
                </a>
              </li>
              <li className='text-gradient text-lg  transition-all duration-300 ease-in-out'>
                <a onClick={closeNav} href='#rapid'>
                  Rapid suite
                </a>
              </li>
            </ul>

            <div className=' md:hidden  cursor-pointer'>
              <button className='text-[#3A95C9] text-base font-semibold hover:text-[#0CE37B] hover:border-b-2 hover:border-[#0CE37B] transition-all duration-300 ease-in-out'>
                Login
              </button>
              <button className='bg-[#3A95C9] text-[#ffffff] py-2 font-semibold  rounded-[10px] px-4 hover:bg-transparent border text-base border-[#3A95C9] transition-all duration-300 ease-in-out'>
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// flex flex-col w-[230px] h-[600px] mt-8 px-10 right-0 mx-[26px] absolute top-10 justify-center rounded-[10px] bg-white  md:hidden transition
//           ease-in-out duration-300 text-lg font-medium
