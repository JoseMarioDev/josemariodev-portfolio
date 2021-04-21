/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react';
import selfie from '../../assets/selfie-13.png';
import axios from 'axios';
import Spinner from '../spinner/Spinner';

const Intro = () => {
  const [counter, setCounter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://u4ojkz3kij.execute-api.us-east-1.amazonaws.com/prod/num'
      );
      setCounter(JSON.parse(res.data.body));
      setLoading(false);
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
        {loading ? (
          <Spinner />
        ) : (
          <>
            <p>
              My website has been visited{' '}
              <strong>{counter.visitorCount}</strong> times
            </p>
            <div className="section__counter--logo">
              <a href="https://aws.amazon.com/what-is-cloud-computing">
                <img
                  src="https://d0.awsstatic.com/logos/powered-by-aws.png"
                  alt="Powered by AWS Cloud Computing"
                />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Intro;
