import Revitalize from '../assets/portfolioItems/revitalize/revitalize.jpg';
import revDo from '../assets/portfolioItems/revitalize/revitalize-do.png';
import revProj from '../assets/portfolioItems/revitalize/revitalize-projects.png';
import revSpot from '../assets/portfolioItems/revitalize/revitalize-spotlight.png';

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
    id: 'MovieBase',
    image: `${MovieBase}`,
    title: 'MovieBase',
    desc: 'Rediscover your favorites',
    website: 'https://www.mymoviebase.com',
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
      'Moviebase is a web application where visitors can find information on their favorite movies.  Visitors can view trailers, watch previews, and read information about cast and crew.',
    stack:
      'The front-end was built using ReactJS and SASS for styling.  The back-end uses The Movie DB api for data.  Moviebase utilizes several AWS Services: S3 for storage and hosting, Cloudfront as a CDN, Route 53 for domain registration, and Certificate Manager for SSL certification.',
    process:
      'Moviebase uses Github for version control.  Multiple branches were created for features and staging.  CircleCI was used to create pipelines for CI/CD.  The AWS resources were created using Terraform for Infrastructure-as-Code.'
  },
  {
    id: 'josemario',
    image: `${portfolioHome}`,
    title: 'Portfolio',
    desc: 'The tech behind this portfolio site',
    website: 'https://www.josemario.me',
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
      'This portfolio was built as part of the Cloud Resume Challenge created by Forrest Brazeal of A Cloud Guru.  The challenge is a 16 step process of building a modern resume or portfolio using modern frameworks, automation, and serverless cloud technologies.',
    stack:
      'The front-end for this site was built using ReactJS and SASS for styling. The site also uses several AWS Services: S3 for storage and hosting, Cloudfront as a CDN, Route 53 for domain registration, and Certificate Manager for SSL certification.  The back-end that provides the visitor counter logic was built using API Gateway, A Lambda function coded in Python, and DynamoDB to store the number of visits. ',
    process:
      'Github was used for version control.  Multiple branches were created for features and staging.  CircleCI was used to create pipelines for CI/CD.  The AWS resources were created using Terraform for Infrastructure-as-Code.'
  },
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
        url: `${revDo}`
      },
      {
        url: `${revProj}`
      },
      {
        url: `${revSpot}`
      }
    ],
    purpose:
      'ReVitalize is a web application that connects vocational and trade students with experts in their field in order to collaborate on crowd-funded projects. Building owners can create projects that need rehabilitating. Students can view and apply to work on available projects. Visitors can browse and make donations to revitalize projects.',
    stack:
      'We used Figma to collaborate on the custom design. The front-end was built using React. For styling we used Styled Components and SASS. The back-end was built using GraphQL, Apollo, Prisma. It was stored in a Docker container and hosted on Heroku.',
    process:
      'ReVitalize was built by a team of 7 engineers and 2 designers led by a project manager. My Role was Front-End Developer. It was built in 2 sprints, with each sprint lasting 2 weeks. As team we held daily stand-ups. Engineers were assigned tickets from the project manager and pair-programmed to complete tasks. We used Notion for documentation and to track tickets.'
  }
];

export const idHandler = (id) => {
  let data = {};
  if (id === 'revitalize') {
    data = items[2];
  } else if (id === 'moviebase') {
    data = items[0];
  } else if (id === 'josemario') {
    data = items[1];
  }
  return data;
};
