import React from 'react';

const Skills = () => {
  return (
  <section className="my-skills" id="skills">
    <h2 className="section__title section__title--skills">Skills</h2>
    <div className="skills">
      <div className="skill">
        <h3>Design</h3>
        <p>
          I like using modern design tools to create intuitive design patterns
          and thoughtful interactions.
        </p>
        <ul className="skill-icons">
          <li>
            <i className="fab fa-figma"></i>
            <p>Figma</p>
          </li>
          <li>
            <i className="fab fa-sketch"></i>
            <p>Sketch</p>
          </li>
          <li>
            <i className="fab fa-adobe"></i>
            <p>Adobe XD</p>
          </li>
        </ul>
      </div>

      <div className="skill">
        <h3>Front-End</h3>
        <p>
          I write clean, modular components using popular frameworks that are
          accessible across all devices.
        </p>
        <ul className="skill-icons">
          <li>
            <i className="fab fa-js"></i>
            <p>JavaScript</p>
          </li>
          <li>
            <i className="fab fa-react"></i>
            <p>React</p>
          </li>
          <li>
            <i className="fas fa-mobile-alt"></i>
            <p>Responsive</p>
          </li>
        </ul>
      </div>

      <div className="skill">
        <h3>Back-End</h3>
        <p>
          I design databases and optimize queries. I am familiar with testing
          and writing documentation.
        </p>
        <ul className="skill-icons">
          <li>
            <i className="fab fa-node-js"></i>
            <p>Node JS</p>
          </li>
          <li>
            <i className="fab fa-python"></i>
            <p>Python</p>
          </li>

          <li>
            <i className="fab fa-git-alt"></i>
            <p>Git</p>
          </li>
        </ul>
      </div>
      <div className="skill">
        <h3>Collaboration</h3>
        <p>
          I genuinely care about people, and love helping fellow developers
          work on their craft.
        </p>
        <ul className="skill-icons">
          <li>
            <i className="fab fa-trello"></i>
            <p>Trello</p>
          </li>

          <li>
            <i className="fas fa-sync"></i>
            <p>Agile</p>
          </li>
          <li>
            <i className="fab fa-slack"></i>
            <p>Slack</p>
          </li>
        </ul>
      </div>
      </div>
         <a href="#portfolio" className="btn">My Work</a>
  </section>
  );
};

export default Skills;
