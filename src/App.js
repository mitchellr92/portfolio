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
  };

  closePortfolio = () => {
    if (this.state.portfolio === true) {
      this.setState({ portfolio: false });
    }
  };

  render() {
    return (
      <div className="App">
        {/* <Route
          exact
          path="/"
          render={props => (
            )}
        /> */}
            <Modal
              display={this.state.modal}
              closeModal={this.closeModal}
              newMessage={this.newMessage}
            />
        {/* <Route
          exact
          path="/"
          render={props => (
            )}
        /> */}
            <Profile
              className="profile-root"
              openModal={this.openModal}
              openPortfolio={this.openPortfolio}
            />
        {/* <Route
          exact
          path="/"
          render={props => (
            )}
        /> */}
            <Portfolio
              className="portfolio-root"
              display={this.state.portfolio}
              closePortfolio={this.closePortfolio}
            />
      </div>
    );
  }
}

export default App;
