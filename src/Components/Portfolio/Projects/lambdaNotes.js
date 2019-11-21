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
      <div
        className={this.state.active ? "active-project" : "project"}
        onClick={this.toggleActive}
      >
        Lambda Notes
        <img
          src={screenshot2}
          alt="Project screenshot"
          className="project-image"
        />
      </div>
    );
  }
}

{
  /* <div
            className="project"
            onClick={this.click}
          >
            Lambda Notes
            <img
              src={screenshot2}
              alt="Project screenshot"
              className="project-image"
            />
            {/* <div className="project-info">
              <h2>Lambda Notes</h2>
              <p>
                App for creating and storing notes along with functionality
                allowing you to both delete and edit your notes.
              </p>
              <p>
                Built using - React, axios, json, CSS, NodeJS, express, knex
              </p>
              <ul>
                <li>
                  Built out both the front-end and back-end to communicate with
                  each other and carry out complete CRUD functionality.
                </li>
              </ul>
              <a
                className="repo-link"
                href="https://github.com/mitchellr92/front-end-project-week"
              >
                <p>Front-end repository</p>
              </a>
              <a
                className="repo-link"
                href="https://github.com/mitchellr92/back-end-project-week"
              >
                <p>Back-end repository</p>
              </a>
            </div> */
}
{
  /* </div> */
}

export default LambdaNotes;
