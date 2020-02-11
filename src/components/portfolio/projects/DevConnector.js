import React, { Component } from "react";
import screenshot1 from "../screenshots/screenshot1.png";

export class DevConnector extends Component {
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
        <a
          className="project-link"
          href="https://mysterious-thicket-85025.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Connector
        </a>
        <img
          src={screenshot1}
          alt="Project screenshot"
          className="project-image"
        />
        <div
          className={this.state.active ? "null" : "active-down-arrow"}
          onClick={this.toggleActive}
        >
          <i className="fas fa-arrow-circle-down"></i>
        </div>
        <div
          className={this.state.active ? "active-up-arrow" : "null"}
          onClick={this.toggleActive}
        >
          <i className="fas fa-arrow-circle-up"></i>
        </div>
        <div
          className={this.state.active ? "active-text" : "active-text-collapse"}
        >
          <p>React, Redux, Axios, JSON, CSS, NodeJS, Express</p>
          <p className="description">
            Platform that allows developers to create and manage profiles and
            have interactive conversations.
          </p>
          <ul>
            <li>Used MongoDB for storing and managing user data.</li>
            <br />
            <li>
              Kept front and back end in one repository and deployed the entire
              app through Heroku.
            </li>
          </ul>
        </div>
        <div className="repositories">
          <a
            href="https://github.com/mitchellr92/dev-connector"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </div>
      </div>
    );
  }
}

export default DevConnector;
