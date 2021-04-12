/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import revitalize from '../../assets/portfolioItems/revitalize/revitalize.jpg';
import moviebase from '../../assets/portfolioItems/moviebase/moviebase.png';
const PortfolioItem = (props) => {
  return (
    <>
      {props.match.params.id === 'ReVitalize' && (
        <div>
          <section className="intro">
            <h1 className="section__title section__title--intro">
              This is <strong>ReVitalize</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
              A modern approach to building your community
            </p>

            <img src={revitalize} alt="" className="intro__img" />
          </section>
          {/* <!-- portfolio modal links --> */}
          <div className="modal-links">
            <div className="modal-link ">
              <i className="fas fa-globe"></i>
              <a
                className="styled__link"
                href="https://revitalizecommunity.netlify.app/"
              >
                revitalizecommunity.netlify.app
              </a>
            </div>
            <div className="modal-link">
              <i className="fab fa-github"></i>
              <a
                className="styled__link"
                href="http://www.github.com/Revitalized-Playground"
              >
                www.github.com/revitalized-playground
              </a>
            </div>
          </div>

          {/* <!-- / portfolio-header --> */}
          <div className="portfolio-content"></div>

          <div className="portfolio-item-individual">
            <p className="portfolio-item__subheader">Project Purpose</p>
            <p>
              ReVitalize is a web application that connects vocational and trade
              students with experts in their field in order to collaborate on
              crowd-funded projects. Building owners can create projects that
              need rehabilitating. Students can view and apply to work on
              available projects. Visitors can browse and make donations to
              revitalize projects.
            </p>

            <p className="portfolio-item__subheader">Tech Stack</p>
            <p>
              We used Figma to collaborate on the custom design. The front-end
              was built using React. For styling we used Styled Components and
              SASS. The back-end was built using GraphQL, Apollo, Prisma. It was
              stored in a Docker container and hosted on Heroku.
            </p>

            <p className="portfolio-item__subheader">build process</p>
            <p>
              ReVitalize was built by a team of 7 engineers and 2 designers led
              by a project manager. My Role was Front-End Developer. It was
              built in 2 sprints, with each sprint lasting 2 weeks. As team we
              held daily stand-ups. Engineers were assigned tickets from the
              project manager and pair-programmed to complete tasks. We used
              Notion for documentation and to track tickets.
            </p>

            <p className="portfolio-item__subheader">End Result</p>
            <p>
              Working on ReVitalize was an amazing experience. It provided me
              with experience in a real world environment building a complex app
              that had an impact on communities. You can{' '}
              <a
                className="styled__link"
                href="https://revitalizecommunity.netlify.app/"
              >
                experience
              </a>{' '}
              it for yourself. username:{' '}
              <span className="credentials">jose@gmail.com</span> password:{' '}
              <span className="credentials">password</span>
            </p>
          </div>
        </div>
      )}

      {props.match.params.id === 'MovieBase' && (
        <div>
          <section className="intro">
            <h1 className="section__title section__title--intro">
              This is <strong>Moviebase</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
              Explore. Discover. Remember.
            </p>

            <img src={moviebase} alt="moviebase" className="intro__img" />
          </section>
          {/* <!-- portfolio modal links --> */}
          <div className="modal-links">
            <div className="modal-link ">
              <i className="fas fa-globe"></i>
              <a className="styled__link" href="http://www.moviebase.online">
                www.moviebase.online
              </a>
            </div>
            <div className="modal-link">
              <i className="fab fa-github"></i>
              <a
                className="styled__link"
                href="http://www.github.com/josemariodev/moviebase" //
              >
                www.github.com/josemariodev/moviebase
              </a>
            </div>
          </div>

          {/* <!-- / portfolio-header --> */}
          <div className="portfolio-content">
            <div className="portfolio-item-individual">
              <p className="portfolio-item__subheader">Project Purpose</p>
              <p>
                Moviebase is a web application where visitors can find
                information on their favorite movies and television shows. They
                can view trailers, watch previews, and read information about
                popular actors.
              </p>

              <p className="portfolio-item__subheader">Tech Stack</p>
              <p>
                Moviebase was built using React, SASS, and Bootstrap for the
                front end. The back-end uses{' '}
                <a className="styled__link" href="http://www.themoviedb.org">
                  The Movie DB
                </a>{' '}
                api for data. Movie information is passed from the api to the
                front-end using the Axios HTTP client.
              </p>

              <p className="portfolio-item__subheader">build process</p>
              <p>
                Moviebase was a solo project and was built in a 2 weeks. I used
                Trello to keep track and manage project requirements and ticket
                items.
              </p>

              <p className="portfolio-item__subheader">End Result</p>
              <p>
                <a className="styled__link" href="http://www.moviebase.online">
                  Moviebase
                </a>{' '}
                was a fun project I created out of my love for movies. I gained
                experience using a styling framework and manipulating data
                through an API.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(PortfolioItem);
