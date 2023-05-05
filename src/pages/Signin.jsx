import React, { useState } from 'react';
import logo from '../components/images/logo.png';
import { Link } from 'react-router-dom';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  let { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='mb-10'>
      <header className='mb-[51.42px] text-white flex items-center justify-between px-[37px] pt-[31px]'>
        <Link to='/'>
          <img src={logo} alt='' className='w-[54px] h-[38.58px]' />
        </Link>
        <Link to='/register'>
          <button className='text-[#FFFFFF] text-base font-semibold bg-[#3A95C9] py-[10px] px-[26px] rounded-[10px]'>
            Signup
          </button>
        </Link>
      </header>
      <h3 className='font-extrabold text-2xl text-[#FFFFFF] text-center'>
        Get started
      </h3>
      <h1 className='text-center font-extrabold text-[51px] leading-[80px] signup-text max-w-4xl mx-auto'>
        Welcome back let’s get to it
      </h1>

      <form
        onSubmit={handleSubmit}
        className='mt-[45px] text-white w-full md:w-2/3 lg:w-[594px] px-4 md:px-0 mx-auto mb-[101px]'
      >
        <div className='mb-[25px]'>
          <label htmlFor='email' className='block mb-[19px]'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={handleChange}
            placeholder='hello@gmail.com'
            className='w-full py-[21px]  pl-7 md:pl-[34px] text-[#7B7B7B] outline-none font-bold text-base rounded-[10px]'
            required
          />
        </div>

        <div>
          <label htmlFor='password' className='block  mb-[19px]'>
            Password
          </label>
          <div className='flex items-center border relative bg-white rounded-[10px]'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              value={password}
              onChange={handleChange}
              className='w-full py-[21px] bg-white outline-none font-bold text-base text-[#7B7B7B] pl-7 md:pl-[34px] rounded-[10px]'
              required
            />
            {showPassword ? (
              <FiEyeOff
                className='cursor-pointer absolute right-[22px]  '
                onClick={() => setShowPassword((prevState) => !prevState)}
                style={{ color: '#7B7B7B' }}
                size={20}
              />
            ) : (
              <FiEye
                className='cursor-pointer absolute right-[22px] '
                onClick={() => setShowPassword((prevState) => !prevState)}
                style={{ color: '#7B7B7B' }}
                size={20}
              />
            )}
          </div>
        </div>
        <button
          type='submit'
          className='text-center py-[21px] mt-[25px] rounded-[10px] text-base w-full bg-[#3A95C9] font-bold outline-none'
        >
          Login
        </button>
      </form>

      <div className='text-white px-4 md:px-0 max-w-xl mx-auto mb-[18px] font-semibold text-base leading-[36px]'>
        <div className='px-4 md:px-0 flex items-center'>
          <p className='text-white mr-[23.5px]'>Don’t have an account?</p>
          <Link
            to='/register'
            className='text-[#3A95C9] text-base font-semibold'
          >
            signup{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
