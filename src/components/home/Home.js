import React from 'react';
import Intro from '../intro/Intro';
import Skills from '../skills/Skills';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home;
