import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/main.scss';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Intro />
        <Skills />
        <About />
      </div>
    </Router>
  );
}

export default App;
