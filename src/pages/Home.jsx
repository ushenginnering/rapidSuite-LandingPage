import React from 'react';
import {
  Benefits,
  Faqs,
  Footer,
  Header,
  Hero,
  Invest,
  Logo,
  Rapid,
  Rep,
} from '../components';

const Home = () => {
  return (
    <div>
      <Header />
      {/* hero */}
      <section id='#' className='hero-bg'>
        <Hero />
      </section>

      <section className='logo-bg'>
        <Logo />
      </section>

      <section id='faq' className=''>
        <Faqs />
      </section>

      <section id='rapid'>
        <Rapid />
      </section>
      <section id=''>
        <Benefits />
      </section>
      <section id='' className='relative blue-bg'>
        <Invest />
      </section>
      <section className='relative'>
        <Rep />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
