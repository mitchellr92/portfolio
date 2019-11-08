import React, { Component } from "react";
import "./App.css";

// import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

class App extends Component {
  contactMe = () => {
    console.log("click");
    return <div className="contact-modal" style={{ display: "block" }} />;
  };

  render() {
    return (
      <div className="App">
        <div className="contact-modal">
          <Modal />
        </div>
        <div className="profile-main">
          <Profile contactMe={this.contactMe} />
        </div>
      </div>
    );
  }
}

export default App;
