import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

class App extends Component {
  state = {
    display: "none",
    messages: []
  };

  newMessage = message => {
    axios
      .post(`http://localhost:1234/api/message`, message)
      .then(response => {
        this.setState({ messages: response.data });
        console.log('message sent!')
      })
      .catch(error => console.log("error!"));
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
        <Route
          exact
          path="/"
          render={props => (
            <Modal
              display={this.state.display}
              send={this.state.send}
              closeModal={this.closeModal}
              newMessage={this.newMessage}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Profile contactMe={this.contactMe} />}
        />

        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    );
  }
}

export default App;
