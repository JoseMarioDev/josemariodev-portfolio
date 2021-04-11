import React from 'react';
import selfie from '../../assets/selfie-13.png';
const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jose Mario</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full-Stack Developer
      </p>
      <div className="img-wrapper">
        <img src={selfie} alt="Jose selfie" className="intro__img" />
      </div>
    </section>
  );
};

export default Intro;
