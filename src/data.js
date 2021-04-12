/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-lone-blocks */
import Revitalize from './assets/portfolioItems/revitalize/revitalize.jpg';
import MovieBase from './assets/portfolioItems/moviebase/moviebase.png';
import Delicious from './assets/portfolioItems/delicious/delicious.png';

export const links = [
  { route: '/', name: 'Home' },
  { route: '/skills', name: 'Skills' },
  { route: '/about', name: 'About Me' },
  { route: '/portfolio', name: 'Portfolio' },
  { route: '/contact', name: 'Resume' }
];

export const socials = [
  {
    link: 'http://www.linkedin.com/in/josemariodev/',
    className: 'fab fa-linkedin',
    title: 'LinkedIn'
  },
  {
    link: 'http://www.github.com/josemariodev/',
    className: 'fab fa-github',
    title: 'Github'
  },
  {
    link: 'http://www.twitter.com/josemariodev/',
    className: 'fab fa-twitter',
    title: 'Twitter'
  }
];
export const skills = [
  {
    header: 'Design',
    body:
      'I like using modern design tools to create intuitive design patterns and thoughtful interactions.',
    icons: [
      {
        icon: 'fab fa-figma',
        title: 'Figma'
      },
      {
        icon: 'fab fa-sketch',
        title: 'Sketch'
      },
      {
        icon: 'fab fa-adobe',
        title: 'Adobe'
      }
    ]
  },
  {
    header: 'Front-End',
    body:
      'I write clean, modular components using popular frameworks that are accessible across all devices.',
    icons: [
      {
        icon: 'fab fa-js',
        title: 'JavaScript'
      },
      {
        icon: 'fab fa-react',
        title: 'React'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Responsive'
      }
    ]
  },
  {
    header: 'Back-End',
    body:
      'I design databases and optimize queries. I am familiar with testing and writing documentation.',
    icons: [
      {
        icon: 'fab fa-node-js',
        title: 'NodeJS'
      },
      {
        icon: 'fab fa-python',
        title: 'Python'
      },
      {
        icon: 'fab fa-git-alt',
        title: 'Git'
      }
    ]
  },
  {
    header: 'Collaboration',
    body:
      'I genuinely care about people, and love helping fellow developers work on their craft.',
    icons: [
      {
        icon: 'fab fa-trello',
        title: 'Trello'
      },
      {
        icon: 'fas fa-sync',
        title: 'Agile'
      },
      {
        icon: 'fab fa-slack',
        title: 'Slack'
      }
    ]
  }
];

export const portfolioItems = [
  {
    id: 'ReVitalize',
    image: `${Revitalize}`,
    title: 'ReVitalize',
    desc: 'A modern approach to building your community',
    modal: {
      modalTitle: 'ReVitalize',
      modalIntro: 'A modern approach to building your community',
      introImg: `${Revitalize}`,
      website: 'https://revitalizecommunity.netlify.app/',
      github: 'http://www.github.com/Revitalized-Playground',
      purpose:
        'ReVitalize is a web application that connects vocational and trade students with experts in their field in order to collaborate on crowd-funded projects. Building owners can create projects that need rehabilitating. Students can view and apply to work on available projects. Visitors can browse and make donations to revitalize projects.',
      stack:
        'We used Figma to collaborate on the custom design. The front-end was built using React. For styling we used Styled Components and SASS. The back-end was built using GraphQL, Apollo, Prisma. It was stored in a Docker container and hosted on Heroku.',
      process:
        'ReVitalize was built by a team of 7 engineers and 2 designers led by a project manager. My Role was Front-End Developer. It was built in 2 sprints, with each sprint lasting 2 weeks. As team we held daily stand-ups. Engineers were assigned tickets from the project manager and pair-programmed to complete tasks. We used Notion for documentation and to track tickets.'
    }
  },
  {
    id: 'MovieBase',
    image: `${MovieBase}`,
    title: 'MovieBase',
    desc: 'Explore. Discover. Remember.'
  },
  {
    id: 'Delicious',
    image: `${Delicious}`,
    title: 'Now That is delicious',
    desc: 'Good food, reviewed'
  }
];

{
  /* <!-- Portfolio item 2 moviebase --> */
}
// {/* <div className="portfolio-item">
//
//
//   <div className="portfolio-modal" id="moviebase">
//     <button className="modal-close">
//       <svg x="0px" y="0px" viewBox="0 0 30 17" height="17" width="30">
//         <g transform="translate(-15 -15)">
//           <polygon
//             className="st0"
//             points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 30,22.3
//                 35.8,16.5 37,17.7"
//           />
//         </g>
//       </svg>
//     </button>

//     <section className="intro">
//       <h1 className="section__title section__title--intro">
//         This is <strong>Moviebase</strong>
//       </h1>
//       <p className="section__subtitle section__subtitle--intro">
//         Explore. Discover. Remember.
//       </p>

//       <img
//         src="assets/projects/moviebase/moviebase-homescreen.png"
//         alt=""
//         className="intro__img"
//       />
//     </section>
//     {/* <!-- portfolio modal links --> */}
//     <div className="modal-links">
//       <div className="modal-link ">
//         <i className="fas fa-globe"></i>
//         <a
//           className="styled__link"
//           href="http://www.moviebase.online"
//           onClick="window.open(this.href); return false;"
//           onKeyPress="window.open(this.href); return false;"
//         >
//           www.moviebase.online
//         </a>
//       </div>
//       <div className="modal-link">
//         <i className="fab fa-github"></i>
//         <a
//           className="styled__link"
//           href="http://www.github.com/josemariodev/moviebase"
//           onClick="window.open(this.href); return false;"
//           onKeyPress="window.open(this.href); return false;"
//         >
//           www.github.com/josemariodev/moviebase
//         </a>
//       </div>
//     </div>

//     {/* <!-- / portfolio-header --> */}
//     <div className="portfolio-content">
//       <div className="portfolio-item-individual">
//         <img src="assets/projects/moviebase/moviebase-walkthru.gif" alt="" />

//         <p className="portfolio-item__subheader">Project Purpose</p>
//         <p>
//           Moviebase is a web application where visitors can find information on
//           their favorite movies and television shows. They can view trailers,
//           watch previews, and read information about popular actors.
//         </p>

//         <p className="portfolio-item__subheader">Tech Stack</p>
//         <p>
//           Moviebase was built using React, SASS, and Bootstrap for the front
//           end. The back-end uses{' '}
//           <a
//             className="styled__link"
//             href="http://www.themoviedb.org"
//             onClick="window.open(this.href); return false;"
//             onKeyPress="window.open(this.href); return false;"
//           >
//             The Movie DB
//           </a>{' '}
//           api for data. Movie information is passed from the api to the
//           front-end using the Axios HTTP client.
//         </p>

//         <p className="portfolio-item__subheader">build process</p>
//         <p>
//           Moviebase was a solo project and was built in a 2 weeks. I used Trello
//           to keep track and manage project requirements and ticket items.
//         </p>

//         <p className="portfolio-item__subheader">End Result</p>
//         <p>
//           <a
//             className="styled__link"
//             href="http://www.moviebase.online"
//             onClick="window.open(this.href); return false;"
//             onKeyPress="window.open(this.href); return false;"
//           >
//             Moviebase
//           </a>{' '}
//           was a fun project I created out of my love for movies. I gained
//           experience using a styling framework and manipulating data through an
//           API.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>; */}
