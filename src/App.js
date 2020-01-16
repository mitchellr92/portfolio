import React, { Component } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

class App extends Component {
  state = {
    modal: false,
    portfolio: false,
    profile: "profile-initial",
    messages: []
  };

  newMessage = message => {
    axios
      .post(`https://mitchellrobles-backend.herokuapp.com/api/message`, message)
      .then(response => {
        this.setState({ messages: response.data });
        console.log("message sent!");
      })
      .catch(error => console.log("error!"));
  };

  openModal = () => {
    if (this.state.modal === false) {
      this.setState({ modal: true });
    }
  };

  closeModal = () => {
    if (this.state.modal === true) {
      this.setState({ modal: false });
    }
  };

  openPortfolio = () => {
    if (this.state.portfolio === false) {
      this.setState({ portfolio: true });
    }
    if (this.state.profile === "profile-visible" || this.state.profile === "profile-initial") {
      this.setState({ profile: "profile-hidden" });
    }
  };

  closePortfolio = e => {
    if (this.state.portfolio === true) {
      this.setState({ portfolio: false });
    }
    if (this.state.profile === "profile-hidden"){
      this.setState({ profile: "profile-visible" });
    }
  };

  render() {
    return (
      <div className="App">
        <Modal
          display={this.state.modal}
          closeModal={this.closeModal}
          newMessage={this.newMessage}
        />
        <Profile
          hideProfile={this.hideProfile}
          display={this.state.profile}
          openModal={this.openModal}
          openPortfolio={this.openPortfolio}
        />
        <Portfolio
          display={this.state.portfolio}
          closePortfolio={this.closePortfolio}
        />
      </div>
    );
  }
}

export default App;
