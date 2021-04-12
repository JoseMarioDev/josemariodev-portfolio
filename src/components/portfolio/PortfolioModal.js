import React from 'react'

const PortfolioModal = () => {
  return (
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
  )
}

export default PortfolioModal
