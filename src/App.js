import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.scss';

import PortfolioModal from './components/portfolio/PortfolioModal';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/modal" render={() => <PortfolioModal />} />
    </Router>
  );
}

export default App;
