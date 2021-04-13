import React from 'react';
import { skills } from '../../utils/skills';

const Skills = () => {
  return (
    <section className="my-skills" id="skills">
      <h2 className="section__title section__title--skills">Skills</h2>
      <div className="skills">
        {skills.map((data) => (
          <div className="skill" key={Math.random()}>
            <h3>{data.header}</h3>
            <p>{data.body}</p>
            <ul className="skill-icons">
              {data.icons.map((icon) => (
                <li key={Math.random()}>
                  <i className={icon.icon}></i>
                  <p>{icon.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href="#portfolio" className="btn">
        My Work
      </a>
    </section>
  );
};

export default Skills;
