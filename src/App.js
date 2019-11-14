import React, { Component } from "react";
import { Route } from "react-router-dom";
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
        <Route
          exact
          path="/"
          render={props => (
            <Modal display={this.state.display} closeModal={this.closeModal} />
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
