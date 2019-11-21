import React, { Component } from "react";
import screenshot4 from "../Screenshots/screenshot4.png";

export class HauntedHouse extends Component {
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
        Haunted House
        <img
          src={screenshot4}
          alt="Project screenshot"
          className="project-image2"
        />
        {/* <div className="project-info">
              <a className="hauntedhouse" href="https://spooky-mud.netlify.com/">
                <h2>Haunted House</h2>
              </a>
              <p>
                Interactive game that allows you to move a sprite throughout a maze.
              </p>
              <p>
                Built using - React, axios, json, CSS, Django
              </p>
              <ul>
                <li>
                  Was in charge of deploying a back-end to Heroku while learning Django in a restricted amount of time.  Worked with a team member to supply the front-end with a map generator for displaying the tiles.
                </li>
              </ul>
              <a
                className="repo-link"
                href="https://github.com/CS22-Team-2-haunted-house/Front_End"
              >
                <p>Front-end repository</p>
              </a>
              <a
                className="repo-link"
                href="https://github.com/CS22-Team-2-haunted-house/Back_End"
              >
                <p>Back-end repository</p>
              </a>
            </div> */}
      </div>
    );
  }
}

export default HauntedHouse;
