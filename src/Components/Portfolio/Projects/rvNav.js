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
      <div
        className={this.state.active ? "active-project" : "project"}
        onClick={this.toggleActive}
      >
        RV Nav
        <img
          src={screenshot3}
          alt="Project screenshot"
          className="project-image2"
        />
        {/* <div className="project-info">
              <a className="rvnav" href="https://www.rvnav.com/">
                <h2>RV Nav</h2>
              </a>
              <p>
                App designed to provide users the ability to create safe routes
                for RVs and trailers by allowing them upload personalized
                information for their vehicles.
              </p>
              <p>
                Built using - React, Redux, axios, json, CSS, NodeJS, express,
                knex
              </p>
              <ul>
                <li>
                  Was in charge of populating Vehicle information forms with
                  correct information according to user input. Used the Redux
                  store to manage the state between the different forms.
                </li>
                <br></br>
                <li>
                  Styled the landing and authentication pages to be full
                  responsive. Used vanilla CSS while utilizing flexbox to help
                  manage the elements being styled.
                </li>
              </ul>
              <a
                className="repo-link"
                href="https://github.com/labs15-rv-life/frontend"
              >
                <p>Front-end repository</p>
              </a>
              <a
                className="repo-link"
                href="https://github.com/labs15-rv-life/backend"
              >
                <p>Back-end repository</p>
              </a>
            </div> */}
      </div>
    );
  }
}

export default RvNav;
