/* eslint-disable multiline-ternary */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { idHandler } from '../../utils/portfolioItems';
import ErrorPage from '../error/ErrorPage';
import Slideshow from './Slideshow';

const PortfolioItem = (props) => {
  const data = idHandler(props.match.params.id.toLowerCase());
  console.log('dta', props);

  return (
    <>
      {data.id ? (
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
            {data.id !== 'josemariodev' && (
              <div className="item-link ">
                <i className="fas fa-globe"></i>
                <a className="styled__link" href={data.website}>
                  {data.website}
                </a>
              </div>
            )}
            <div className="item-link">
              <i className="fab fa-github"></i>
              <a className="styled__link" href={data.github}>
                {data.github}
              </a>
            </div>
          </div>

          <div className="portfolio-content">
            <div className="portfolio-item-individual">
              <Slideshow images={data.images} />
              <p className="portfolio-item__subheader">Project Purpose</p>
              <p>{data.purpose}</p>

              <p className="portfolio-item__subheader">Tech Stack</p>
              <p>{data.stack}</p>

              <p className="portfolio-item__subheader">build process</p>
              <p>{data.process}</p>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
PortfolioItem.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string
};
export default withRouter(PortfolioItem);
