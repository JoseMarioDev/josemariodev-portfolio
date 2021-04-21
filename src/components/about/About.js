import React from 'react';

import action from '../../assets/action.jpg';
import resume from '../../assets/Resume4.21.21.pdf';

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Designer & Developer
      </p>

      <div className="about-me__body">
        <p>
          I&apos;m an AWS Certified Professional and full-stack developer in Chicago.  I&apos;m also a proud graduate of Lambda School&apos;s web development program where I learned modern frameworks, technologies, and CS fundamentals by working in teams to build real world projects.
        </p>
        <p>
          I have previous&nbsp;
          <a
            href={resume}
            className="styled__link"
            target="_blank"
            rel="noreferrer"
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
