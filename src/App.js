import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/main.scss';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Intro />
      </div>
    </Router>
  );
}

export default App;
