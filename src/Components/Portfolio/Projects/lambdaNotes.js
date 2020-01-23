import React, { Component } from "react";
import screenshot2 from "../Screenshots/screenshot2.png";

export class LambdaNotes extends Component {
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
        <div className="project-link">Lambda Notes</div>
        <img
          src={screenshot2}
          alt="Project screenshot"
          className="project-image"
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
          <p>React, Axios, JSON, CSS, NodeJS, Express, Knex</p>
          <p className="description">
            Allows user to creat, save, edit and delete notes.
          </p>
          <ul>
            <li>
              Built out both the front-end and back-end to communicate with each
              other and carry out complete CRUD functionality.
            </li>
            <br />
            <li>
              Deployed back end through Heroku to host database on a live
              server.
            </li>
          </ul>
        </div>
        <div className="repositories">
          <a
            href="https://github.com/mitchellr92/front-end-project-week"
            target="_blank"
          >
            Front-end repository
          </a>
          <a
            href="https://github.com/mitchellr92/back-end-project-week"
            target="_blank"
          >
            Back-end repository
          </a>
        </div>
      </div>
    );
  }
}

export default LambdaNotes;
