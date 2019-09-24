import React, { Component } from "react";
import screenshot1 from "./screenshot1.png";
import screenshot2 from "./screenshot2.png";
import screenshot3 from "./screenshot3.png";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio">
          <div className="project2">
            <img
              src={screenshot2}
              alt="Project screenshot"
              className="project-image"
            />
            <div className="project-info">
              <h2>Lambda Notes</h2>
              <h3>
                App for creating and storing notes along with functionality
                allowing you to both delete and edit your notes.
              </h3>
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
                className="button"
                href="https://github.com/mitchellr92/front-end-project-week"
              >
                <p>Front-end repository</p>
              </a>
              <a
                className="button"
                href="https://github.com/mitchellr92/back-end-project-week"
              >
                <p>Back-end repository</p>
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src={screenshot3}
              alt="Project screenshot"
              className="project-image2"
            />
            <div className="project-info">
              <a className="rvnav" href="https://www.rvnav.com/">
                <h2>RV Nav</h2>
              </a>
              <h3>
                App designed to provide users the ability to create safe routes
                for RVs and trailers by allowing them upload personalized
                information for their vehicles.
              </h3>
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
                className="button"
                href="https://github.com/labs15-rv-life/frontend"
              >
                <p>Front-end repository</p>
              </a>
              <a
                className="button"
                href="https://github.com/labs15-rv-life/backend"
              >
                <p>Back-end repository</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
