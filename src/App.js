import React from "react";
import "./App.css";

import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Profile />
        <AboutMe />
      </div>
      <div className="mainContent">
        <Skills />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
