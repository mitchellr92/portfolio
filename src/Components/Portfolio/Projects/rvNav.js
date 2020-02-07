import React, { Component } from "react";
import screenshot3 from "../screenshots/screenshot3.png";

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
        <a
          className="project-link"
          href="https://rvnav.com/"
          target="_blank"
          rel="noopener norefferer"
        >
          RV Nav
        </a>
        <img
          src={screenshot3}
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
          <p>React, Redux, Axios, JSON, CSS, NodeJS, Express, Knex</p>
          <p className="description">
            Empowers users to create safe travel routes for Recreational
            Vehicles and Trailers by uploading vehicle specifications to a
            personal profile.
          </p>
          <ul>
            <li>
              Was in charge of populating Vehicle information forms with correct
              information according to user input.
            </li>
            <br />
            <li>
              Completed in 8 weeks on 10 person team of: Data Scientists, iOS
              developers and Full Stack Web Developers.
            </li>
          </ul>
        </div>
        <div className="repositories">
          <a
            href="https://github.com/Lambda-School-Labs/rv-nav-fe"
            target="_blank"
            rel="noopener norefferer"
          >
            Front-end repository
          </a>
          <a
            href="https://github.com/Lambda-School-Labs/rv-nav-be"
            target="_blank"
            rel="noopener norefferer"
          >
            Back-end repository
          </a>
        </div>
      </div>
    );
  }
}

export default RvNav;
