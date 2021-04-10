import React from 'react';
import selfie from '../../assets/selfie-11.jpg';
const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jose Mario</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full-Stack Developer
      </p>
      <img src={selfie} alt="Jose red selfie" className="intro__img" />
    </section>
  );
};

export default Intro;
