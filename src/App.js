import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Modal from "./Components/Modal/modal";

class App extends Component {
  state = {
    display: false,
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

  contactMe = () => {
    if (this.state.display === false) {
      this.setState({ display: true });
    }
  };

  closeModal = () => {
    if (this.state.display === true) {
      this.setState({ display: false });
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
              visible={this.state.visibility}
              display={this.state.display}
              closeModal={this.closeModal}
              newMessage={this.newMessage}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Profile
              contactMe={this.contactMe}
              visibility={this.state.visibility}
            />
          )}
        />

        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    );
  }
}

export default App;
