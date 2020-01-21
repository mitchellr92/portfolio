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
      <div className={this.state.active ? "active-project" : "project"}>
        <a
          className="project-link"
          href="https://spooky-mud.netlify.com/"
          target="_blank"
        >
          Haunted House
        </a>
        <img
          src={screenshot4}
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
            Interactive game that allows you to move a sprite throughout a maze.
          </p>
          <p>React, axios, json, CSS, Django</p>
          <p>
            Was in charge of deploying a back-end to Heroku while learning
            Django in a restricted amount of time. Worked with a team member to
            supply the front-end with a map generator for displaying the tiles.
          </p>
        </div>
        <div className="repositories">
          <a
            href="https://github.com/CS22-Team-2-haunted-house/Front_End"
            target="_blank"
          >
            Front-end repository
          </a>
          <a
            href="https://github.com/CS22-Team-2-haunted-house/Back_End"
            target="_blank"
          >
            Back-end repository
          </a>
        </div>
      </div>
    );
  }
}

export default HauntedHouse;
