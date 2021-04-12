import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.scss';

import PortfolioItem from './components/portfolio/PortfolioItem';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/portfolioItem" render={() => <PortfolioItem />} />
    </Router>
  );
}

export default App;
