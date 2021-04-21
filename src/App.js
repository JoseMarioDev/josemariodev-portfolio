import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './scss/main.scss';
import ScrollToTop from './utils/ScrollToTop';
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
    '/portfolio/josemario'
  ];
  return (
    <div>
      {routeArray.includes(location.pathname) && <Header />}
      <ScrollToTop>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/skills" render={() => <Skills />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/portfolio" render={() => <Portfolio />} />
          <Route exact path="/portfolio/:id" render={() => <PortfolioItem />} />
          <Route path="*" render={() => <ErrorPage />} />
        </Switch>
      </ScrollToTop>
      {routeArray.includes(location.pathname) && <Footer />}
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
  pathname: PropTypes.string
};

export default withRouter(App);
