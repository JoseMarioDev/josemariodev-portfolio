import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section__title section__title--work">Portfolio</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my work
      </p>
      <div className="portfolio-items">
        {/* <!-- Portfolio item 1 ReVitalize --> */}
        <div className="portfolio-item">
          <img
            className="portfolio-image"
            src="assets/projects/revitalize/revitalize-homepage.jpg"
            alt="portfolio item"
          />
          <figcaption>
            <h2 className="portfolio-title">ReVitalize</h2>
            <p className="portfolio-desc">
              A modern approach to building your community
            </p>
            <a href="#revitalize" className="portfolio-link">
              More info
            </a>
          </figcaption>

          {/* <!-- Portfolio modal 1 ReVitalize --> */}
          <div className="portfolio-modal" id="revitalize">
            <button className="modal-close">
              <svg x="0px" y="0px" viewBox="0 0 30 17" height="17" width="30">
                <g transform="translate(-15 -15)">
                  <polygon
                    className="st0"
                    points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 30,22.3
                35.8,16.5 37,17.7 	"
                  />
                </g>
              </svg>
            </button>

            <section className="intro">
              <h1 className="section__title section__title--intro">
                This is <strong>ReVitalize</strong>
              </h1>
              <p className="section__subtitle section__subtitle--intro">
                A modern approach to building your community
              </p>

              <img
                src="assets/projects/revitalize/revitalize-homepage.jpg"
                alt=""
                className="intro__img"
              />
            </section>
            {/* <!-- portfolio modal links --> */}
            <div className="modal-links">
              <div className="modal-link ">
                <i className="fas fa-globe"></i>
                <a
                  className="styled__link"
                  href="https://revitalizecommunity.netlify.app/"
                  onClick="window.open(this.href); return false;"
                  onKeyPress="window.open(this.href); return false;"
                >
                  revitalizecommunity.netlify.app
                </a>
              </div>
              <div className="modal-link">
                <i className="fab fa-github"></i>
                <a
                  className="styled__link"
                  href="http://www.github.com/Revitalized-Playground"
                  onClick="window.open(this.href); return false;"
                  onKeyPress="window.open(this.href); return false;"
                >
                  www.github.com/revitalized-playground
                </a>
              </div>
            </div>

            {/* <!-- / portfolio-header --> */}
            <div className="portfolio-content">
              <div className="portfolio-item-individual">
                <img
                  src="assets/projects/revitalize/revitalize-walkthru1.gif"
                  alt=""
                />

                <p className="portfolio-item__subheader">Project Purpose</p>
                <p>
                  ReVitalize is a web application that connects vocational and
                  trade students with experts in their field in order to
                  collaborate on crowd-funded projects. Building owners can
                  create projects that need rehabilitating. Students can view
                  and apply to work on available projects. Visitors can browse
                  and make donations to revitalize projects.
                </p>

                <p className="portfolio-item__subheader">Tech Stack</p>
                <p>
                  We used Figma to collaborate on the custom design. The
                  front-end was built using React. For styling we used Styled
                  Components and SASS. The back-end was built using GraphQL,
                  Apollo, Prisma. It was stored in a Docker container and hosted
                  on Heroku.
                </p>

                <p className="portfolio-item__subheader">build process</p>
                <p>
                  ReVitalize was built by a team of 7 engineers and 2 designers
                  led by a project manager. My Role was Front-End Developer. It
                  was built in 2 sprints, with each sprint lasting 2 weeks. As
                  team we held daily stand-ups. Engineers were assigned tickets
                  from the project manager and pair-programmed to complete
                  tasks. We used Notion for documentation and to track tickets.
                </p>

                <p className="portfolio-item__subheader">End Result</p>
                <p>
                  Working on ReVitalize was an amazing experience. It provided
                  me with experience in a real world environment building a
                  complex app that had an impact on communities. You can{' '}
                  <a
                    className="styled__link"
                    href="https://revitalizecommunity.netlify.app/"
                    onClick="window.open(this.href); return false;"
                    onKeyPress="window.open(this.href); return false;"
                  >
                    experience
                  </a>{' '}
                  it for yourself. username:{' '}
                  <span className="credentials">jose@gmail.com</span> password:{' '}
                  <span className="credentials">password</span>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- /modal --> */}
        </div>

        {/* <!-- Portfolio item 2 moviebase --> */}
        <div className="portfolio-item">
          <img
            className="portfolio-image"
            src="assets/projects/moviebase/moviebase2.png"
            alt="portfolio item"
          />
          <figcaption>
            <h2 className="portfolio-title">Moviebase</h2>
            <p className="portfolio-desc">Explore. Discover. Remember.</p>
            <a href="#moviebase" className="portfolio-link">
              More info
            </a>
          </figcaption>
          <div className="portfolio-modal" id="moviebase">
            <button className="modal-close">
              <svg x="0px" y="0px" viewBox="0 0 30 17" height="17" width="30">
                <g transform="translate(-15 -15)">
                  <polygon
                    className="st0"
                    points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 30,22.3
                35.8,16.5 37,17.7 	"
                  />
                </g>
              </svg>
            </button>

            <section className="intro">
              <h1 className="section__title section__title--intro">
                This is <strong>Moviebase</strong>
              </h1>
              <p className="section__subtitle section__subtitle--intro">
                Explore. Discover. Remember.
              </p>

              <img
                src="assets/projects/moviebase/moviebase-homescreen.png"
                alt=""
                className="intro__img"
              />
            </section>
            {/* <!-- portfolio modal links --> */}
            <div className="modal-links">
              <div className="modal-link ">
                <i className="fas fa-globe"></i>
                <a
                  className="styled__link"
                  href="http://www.moviebase.online"
                  onClick="window.open(this.href); return false;"
                  onKeyPress="window.open(this.href); return false;"
                >
                  www.moviebase.online
                </a>
              </div>
              <div className="modal-link">
                <i className="fab fa-github"></i>
                <a
                  className="styled__link"
                  href="http://www.github.com/josemariodev/moviebase"
                  onClick="window.open(this.href); return false;"
                  onKeyPress="window.open(this.href); return false;"
                >
                  www.github.com/josemariodev/moviebase
                </a>
              </div>
            </div>

            {/* <!-- / portfolio-header --> */}
            <div className="portfolio-content">
              <div className="portfolio-item-individual">
                <img
                  src="assets/projects/moviebase/moviebase-walkthru.gif"
                  alt=""
                />

                <p className="portfolio-item__subheader">Project Purpose</p>
                <p>
                  Moviebase is a web application where visitors can find
                  information on their favorite movies and television shows.
                  They can view trailers, watch previews, and read information
                  about popular actors.
                </p>

                <p className="portfolio-item__subheader">Tech Stack</p>
                <p>
                  Moviebase was built using React, SASS, and Bootstrap for the
                  front end. The back-end uses{' '}
                  <a
                    className="styled__link"
                    href="http://www.themoviedb.org"
                    onClick="window.open(this.href); return false;"
                    onKeyPress="window.open(this.href); return false;"
                  >
                    The Movie DB
                  </a>{' '}
                  api for data. Movie information is passed from the api to the
                  front-end using the Axios HTTP client.
                </p>

                <p className="portfolio-item__subheader">build process</p>
                <p>
                  Moviebase was a solo project and was built in a 2 weeks. I
                  used Trello to keep track and manage project requirements and
                  ticket items.
                </p>

                <p className="portfolio-item__subheader">End Result</p>
                <p>
                  <a
                    className="styled__link"
                    href="http://www.moviebase.online"
                    onClick="window.open(this.href); return false;"
                    onKeyPress="window.open(this.href); return false;"
                  >
                    Moviebase
                  </a>{' '}
                  was a fun project I created out of my love for movies. I
                  gained experience using a styling framework and manipulating
                  data through an API.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Portfolio item 3  Delicious --> */}
        <div className="portfolio-item">
          <img
            className="portfolio-image"
            src="assets/projects/slices/dang-homescreen.png"
            alt="portfolio item"
          />
          <figcaption>
            <h2 className="portfolio-title">Now That's Delicious</h2>
            <p className="portfolio-desc">Good food, reviewed.</p>
            <a href="#dang" className="portfolio-link">
              More info
            </a>
          </figcaption>
          <div className="portfolio-modal" id="dang">
            <button className="modal-close">
              <svg x="0px" y="0px" viewBox="0 0 30 17" height="17" width="30">
                <g transform="translate(-15 -15)">
                  <polygon
                    className="st0"
                    points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 30,22.3
                35.8,16.5 37,17.7 	"
                  />
                </g>
              </svg>
            </button>

            <section className="intro">
              <h1 className="section__title section__title--intro">
                Now That's <strong> Delicious</strong>
              </h1>
              <p className="section__subtitle section__subtitle--intro">
                Good food, reviewed.
              </p>

              <img
                src="assets/projects/slices/dang-review.png"
                alt=""
                className="intro__img"
              />
            </section>

            {/* <!-- portfolio modal links --> */}
            <div className="modal-links">
              <div className="modal-link ">
                <i className="fas fa-globe"></i>
                <a
                  className="styled__link"
                  href="https://thatsdeliciousapp.herokuapp.com/"
                  onClick="window.open(this.href); return false;"
                  onKeyPress="window.open(this.href); return false;"
                >
                  https://thatsdeliciousapp.herokuapp.com
                </a>
              </div>
              <div className="modal-link">
                <i className="fab fa-github"></i>
                <a
                  className="styled__link"
                  href="http://www.github.com/josemariodev/delicious"
                  onClick="window.open(this.href); return false;"
                  onKeyPress="window.open(this.href); return false;"
                >
                  www.github.com/josemariodev/delicious
                </a>
              </div>
            </div>

            {/* <!-- / portfolio-header --> */}
            <div className="portfolio-content">
              <div className="portfolio-item-individual">
                <img
                  src="assets/projects/slices/delicious-walkthru.gif"
                  alt=""
                />

                <p className="portfolio-item__subheader">Project Purpose</p>
                <p>
                  Now That's Delicious is a web application where visitors can
                  find information on their favorite restaurants and leave
                  reviews. Users can search restaurants by descriptive tags,
                  like their favorite restaruants, and view a top ten list of
                  most popular eateries.
                </p>

                <p className="portfolio-item__subheader">Tech Stack</p>
                <p>
                  This web application was built using NodeJS, Express, MongoDB
                  on the back-end. The front-end uses Pug templates to render
                  the views users experience.
                </p>

                <p className="portfolio-item__subheader">build process</p>
                <p>
                  Building Now That's Delicious took place over 3 weeks, staring
                  with the database model and schema. I used MongoDB as it easy
                  to use and scalable. The front-end was built using Pug
                  templates and styled using SASS.
                </p>

                <p className="portfolio-item__subheader">End Result</p>
                <p>
                  Building
                  <a
                    className="styled__link"
                    href="https://thatsdeliciousapp.herokuapp.com/"
                    onClick="window.open(this.href); return false;"
                    onKeyPress="window.open(this.href); return false;"
                  >
                    Now That's Delicious
                  </a>{' '}
                  was a challenging project because I was able to learn and
                  develop new technologies such as MongoDB and Pug.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
