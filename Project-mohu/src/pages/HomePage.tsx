import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Sponsor from '../components/Sponsor';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Sponsor />
      <Contact />
    </div>
  );
};

export default HomePage;