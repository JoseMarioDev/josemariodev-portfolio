/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { idHandler } from '../../utils/portfolioItems';
import Slideshow from './Slideshow';

const PortfolioItem = (props) => {
  const data = idHandler(props.match.params.id.toLowerCase());

  return (
    <>
      <div>
        <section className="intro">
          <h1 className="section__title section__title--intro">
            This is <strong>{data.id}</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            {data.desc}
          </p>

          <img src={data.image} alt="item image" className="intro__img" />
        </section>

        <div className="item-links">
          <div className="item-link ">
            <i className="fas fa-globe"></i>
            <a className="styled__link" href={data.website}>
              {data.website}
            </a>
          </div>
          <div className="item-link">
            <i className="fab fa-github"></i>
            <a className="styled__link" href={data.github}>
              {data.github}
            </a>
          </div>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-item-individual">
            <Slideshow images={data.images}/>
            <p className="portfolio-item__subheader">Project Purpose</p>
            <p>{data.purpose}</p>

            <p className="portfolio-item__subheader">Tech Stack</p>
            <p>{data.stack}</p>

            <p className="portfolio-item__subheader">build process</p>
            <p>{data.process}</p>

            {/* <p className="portfolio-item__subheader">End Result</p>
            <p>
              <a className="styled__link" href="http://www.moviebase.online">
                Moviebase
              </a>{' '}
              was a fun project I created out of my love for movies. I gained
              experience using a styling framework and manipulating data through
              an API.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(PortfolioItem);
