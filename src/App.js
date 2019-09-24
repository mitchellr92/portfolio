import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
