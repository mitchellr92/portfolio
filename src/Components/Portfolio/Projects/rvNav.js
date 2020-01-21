import React, { Component } from "react";
import screenshot3 from "../Screenshots/screenshot3.png";

export class RvNav extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <div className={this.state.active ? "active-project" : "project"}>
        <a href="https://rvnav.com/" target="_blank">
          RV Nav
        </a>
        <img
          src={screenshot3}
          alt="Project screenshot"
          className="project-image2"
        />
        <div
          className={this.state.active ? "null" : "active-down-arrow"}
          onClick={this.toggleActive}
        >
          <i class="fas fa-arrow-circle-down"></i>
        </div>
        <div
          className={this.state.active ? "active-up-arrow" : "null"}
          onClick={this.toggleActive}
        >
          <i class="fas fa-arrow-circle-up"></i>
        </div>
        <div
          className={this.state.active ? "active-text" : "active-text-collapse"}
        >
          <p>
            App designed to provide users the ability to create safe routes for
            RVs and trailers by allowing them upload personalized information
            for their vehicles.
          </p>
          <p>React, Redux, axios, json, CSS, NodeJS, express, knex</p>
          <p>
            Was in charge of populating Vehicle information forms with correct
            information according to user input. Used the Redux store to manage
            the state between the different forms.
          </p>
        </div>
        <div className="repositories">
          <a
            href="https://github.com/Lambda-School-Labs/rv-nav-fe"
            target="_blank"
          >
            Front-end repository
          </a>
          <a
            href="https://github.com/Lambda-School-Labs/rv-nav-be"
            target="_blank"
          >
            Back-end repository
          </a>
        </div>
      </div>
    );
  }
}

export default RvNav;
