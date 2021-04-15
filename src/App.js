/* eslint-disable react/prop-types */
import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import './scss/main.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import PortfolioItem from './components/portfolio/PortfolioItem';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import ErrorPage from './components/error/ErrorPage';
import Footer from './components/footer/Footer';

const App = ({ location }) => {
  const routeArray = [
    '/',
    '/skills',
    '/about',
    '/portfolio',
    '/portfolio/ReVitalize',
    '/portfolio/MovieBase',
    '/portfolio/josemariodev'
  ];
  return (
    <div>
      {routeArray.includes(location.pathname) && <Header />}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/skills" render={() => <Skills />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/portfolio/:id" render={() => <PortfolioItem />} />
        <Route path="*" render={() => <ErrorPage />} />
      </Switch>
      {routeArray.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default withRouter(App);
