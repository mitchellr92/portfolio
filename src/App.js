import React from "react";
import "./App.css";

// import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

function App() {
  return (
    <div className="App">
      <div className="contact-modal">
        <Modal />
      </div>
      <div className="profile-main">
        <Profile />
      </div>
    </div>
  );
}

export default App;
