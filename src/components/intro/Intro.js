import React, { useState, useEffect } from 'react';
import selfie from '../../assets/selfie-13.png';
import axios from 'axios';

const Intro = () => {
  const [counter, setCounter] = useState([]);
  const API_KEY = process.env.REACT_APP_API_SECRET;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${API_KEY}`);

      setCounter(res.data.Attributes.visitNum);
    };
    fetchData();
  }, []);

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
      <div className="section__counter">
        <p>
          My website has been visited <strong>{counter}</strong> times.
        </p>
        <div className="section__counter--logo">
          <a href="https://aws.amazon.com/what-is-cloud-computing">
            <img
              src="https://d0.awsstatic.com/logos/powered-by-aws.png"
              alt="Powered by AWS Cloud Computing"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
