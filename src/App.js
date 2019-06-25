import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
