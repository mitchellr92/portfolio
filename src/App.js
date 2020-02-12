import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    modal: "modal-initial",
    portfolio: "portfolio-initial",
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
    console.log("Modal opened");
    if (
      this.state.modal === "modal-hidden" ||
      this.state.modal === "modal-initial"
    ) {
      this.setState({ modal: "modal-visible" });
    }
  };

  closeModal = () => {
    if (this.state.modal === "modal-visible") {
      this.setState({ modal: "modal-hidden" });
    }
  };

  openPortfolio = () => {
    if (
      this.state.portfolio === "portfolio-hidden" ||
      this.state.portfolio === "portfolio-initial"
    ) {
      this.setState({ portfolio: "portfolio-visible" });
    }
    if (
      this.state.profile === "profile-visible" ||
      this.state.profile === "profile-initial"
    ) {
      this.setState({ profile: "profile-hidden" });
    }
  };

  closePortfolio = e => {
    if (this.state.portfolio === "portfolio-visible") {
      this.setState({ portfolio: "portfolio-hidden" });
    }
    if (this.state.profile === "profile-hidden") {
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
