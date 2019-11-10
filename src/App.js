import React, { Component } from "react";
import "./App.css";

// import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

class App extends Component {
  constructor() {
    super();
  }

  state = {
    display: "none"
  };

  contactMe = () => {
    if (this.state.display === "none") {
      this.setState({ display: "block" });
    }
  };

  closeModal = () => {
    if (this.state.display === "block") {
      this.setState({ display: "none" });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="contact-modal">
          <Modal display={this.state.display} closeModal={this.closeModal}/>
        </div>
        <div className="profile-main">
          <Profile contactMe={this.contactMe} />
        </div>
      </div>
    );
  }
}

export default App;
