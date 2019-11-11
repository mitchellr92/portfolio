import React, { Component } from "react";
import "./App.css";

import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

class App extends Component {
  state = {
    display: "none"
  };

  contactMe = () => {
    if (this.state.display === "none") {
      this.setState({ display: "flex" });
    }
  };

  closeModal = () => {
    if (this.state.display === "flex") {
      this.setState({ display: "none" });
    }
  };

  render() {
    return (
      <div className="App">
        <Modal display={this.state.display} closeModal={this.closeModal} />

        <Profile contactMe={this.contactMe} />

        <Portfolio path="/portfolio" />
      </div>
    );
  }
}

export default App;
