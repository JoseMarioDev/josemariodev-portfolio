import React from 'react';

import action from '../../assets/action.jpg';

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Designer & Developer
      </p>

      <div className="about-me__body">
        <p>
          I am a full-stack developer in Chicago and graduate of Lambda School.
          I was enrolled in the web development program where I learned web
          development and CS fundamentals by working in teams to build real
          world projects.
        </p>
        <p>
          I have previous&nbsp;
          <a
            href="/Jose-Montero-resume.pdf"
            className="styled__link"
            target="_blank"
          >
            experience&nbsp;
          </a>
          in the insurance and service industries in a management capacity. I’m
          looking for an opportunity where I can put my abilities to work for a
          mission I’m passionate about.
        </p>
      </div>

      <img src={action} alt="Jose smiling" className="about-me__img" />
    </section>
  );
};

export default About;
