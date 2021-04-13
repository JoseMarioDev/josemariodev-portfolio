import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/main.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import PortfolioItem from './components/portfolio/PortfolioItem';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/skills" render={() => <Skills />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/portfolio" render={() => <Portfolio />} />
      <Route exact path="/portfolio/:id" render={() => <PortfolioItem />} />
      <Footer />
    </Router>
  );
}

export default App;
