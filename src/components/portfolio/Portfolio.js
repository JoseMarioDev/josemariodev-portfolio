import React from 'react';
import { items } from '../../utils/portfolioItems';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section__title section__title--work">Portfolio</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my work
      </p>
      <div className="portfolio-items">
        {items.map((item) => (
          <div className="portfolio-item" key={Math.random()}>
            <img
              className="portfolio-image"
              src={item.image}
              alt="portfolio item"
            />
            <figcaption>
              <h2 className="portfolio-title">{item.title}</h2>
              <p className="portfolio-desc">{item.desc}</p>
              <Link
                to={{ pathname: `/portfolio/${item.id}`, item: { item } }}
                className="portfolio-link"
              >
                Learn More
              </Link>
            </figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
