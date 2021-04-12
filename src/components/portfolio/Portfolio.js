import React from 'react';
// import PortfolioModal from './PortfolioModal';
import { portfolioItems } from '../../data';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section__title section__title--work">Portfolio</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my work
      </p>
      <div className="portfolio-items">
        {portfolioItems.map((item) => (
          <div className="portfolio-item" key={Math.random()}>
            <img
              className="portfolio-image"
              src={item.image}
              alt="portfolio item"
            />
            <figcaption>
              <h2 className="portfolio-title">{item.title}</h2>
              <p className="portfolio-desc">{item.desc}</p>
              <a href="#revitalize" className="portfolio-link">
                More info
              </a>
            </figcaption>
            {/* <PortfolioModal /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;