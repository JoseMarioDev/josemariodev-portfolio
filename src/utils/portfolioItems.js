import Revitalize from '../assets/portfolioItems/revitalize/revitalize.jpg';

import MovieBase from '../assets/portfolioItems/moviebase/moviebase.png';
import mbHomepage from '../assets/portfolioItems/moviebase/mb-homepage.png';
import mbMovies from '../assets/portfolioItems/moviebase/mb-movies.png';
import mbMovie from '../assets/portfolioItems/moviebase/mb-movie.png';
import mbDetails from '../assets/portfolioItems/moviebase/mb-details.png';
import mbCicd from '../assets/portfolioItems/moviebase/mb-cicd.png';

import portfolioHome from '../assets/portfolioItems/portfolio/portfolioHome.png';
import portfolioMenu from '../assets/portfolioItems/portfolio/portfolioMenu.png';
import portfolioProjects from '../assets/portfolioItems/portfolio/portfolioProjects.png';
import portfolioProject from '../assets/portfolioItems/portfolio/portfolioProject.png';

export const items = [
  {
    id: 'ReVitalize',
    image: `${Revitalize}`,
    title: 'ReVitalize',
    desc: 'A modern approach to building your community',
    website: 'https://revitalizecommunity.netlify.app/',
    github: 'http://www.github.com/Revitalized-Playground',
    images: [
      {
        url: `${Revitalize}`
      },
      {
        url: `${MovieBase}`
      },
      {
        url: `${Revitalize}`
      }
    ],
    purpose:
      'ReVitalize is a web application that connects vocational and trade students with experts in their field in order to collaborate on crowd-funded projects. Building owners can create projects that need rehabilitating. Students can view and apply to work on available projects. Visitors can browse and make donations to revitalize projects.',
    stack:
      'We used Figma to collaborate on the custom design. The front-end was built using React. For styling we used Styled Components and SASS. The back-end was built using GraphQL, Apollo, Prisma. It was stored in a Docker container and hosted on Heroku.',
    process:
      'ReVitalize was built by a team of 7 engineers and 2 designers led by a project manager. My Role was Front-End Developer. It was built in 2 sprints, with each sprint lasting 2 weeks. As team we held daily stand-ups. Engineers were assigned tickets from the project manager and pair-programmed to complete tasks. We used Notion for documentation and to track tickets.'
  },
  {
    id: 'MovieBase',
    image: `${MovieBase}`,
    title: 'MovieBase',
    desc: 'Rediscover your favorites',
    website: 'https://www.moviebase.online',
    github: 'http://www.github.com/josemariodev/movieapp',
    images: [
      {
        url: `${MovieBase}`
      },
      {
        url: `${mbHomepage}`
      },
      {
        url: `${mbMovies}`
      },
      {
        url: `${mbMovie}`
      },
      {
        url: `${mbDetails}`
      },
      {
        url: `${mbCicd}`
      }
    ],
    purpose:
      'Moviebase is a web application where visitors can find information on their favorite movies and television shows. They can view trailers, watch previews, and read information about popular actors.',
    stack:
      'Moviebase was built using React, SASS, and Bootstrap for the front end. The back-end uses The Movie DB api for data. Movie information is passed from the api to the front-end using the Axios HTTP client.',
    process:
      'Moviebase was a solo project and was built in a 2 weeks. I used Trello to keep track and manage project requirements and ticket items.'
  },
  {
    id: 'josemariodev',
    image: `${portfolioHome}`,
    title: 'portfolio',
    desc: 'Learn about me and my work',
    website: 'https://www.josemario.dev',
    github: 'http://www.github.com/josemariodev/josemariodev-portfolio',
    images: [
      {
        url: `${portfolioHome}`
      },
      {
        url: `${portfolioMenu}`
      },
      {
        url: `${portfolioProjects}`
      },
      {
        url: `${portfolioProject}`
      }
    ],
    purpose:
      'Moviebase is a web application where visitors can find information on their favorite movies and television shows. They can view trailers, watch previews, and read information about popular actors.',
    stack:
      'Moviebase was built using React, SASS, and Bootstrap for the front end. The back-end uses The Movie DB api for data. Movie information is passed from the api to the front-end using the Axios HTTP client.',
    process:
      'Moviebase was a solo project and was built in a 2 weeks. I used Trello to keep track and manage project requirements and ticket items.'
  }
];

export const idHandler = (id) => {
  let data = {};
  if (id === 'revitalize') {
    data = items[0];
  } else if (id === 'moviebase') {
    data = items[1];
  } else if (id === 'josemariodev') {
    data = items[2];
  }
  return data;
};
