import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/main.scss';

import Header from './components/header/Header';
import Home from './components/home/Home';
import PortfolioItem from './components/portfolio/PortfolioItem';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/portfolio/:id" render={() => <PortfolioItem />} />
    </Router>
  );
}

export default App;
