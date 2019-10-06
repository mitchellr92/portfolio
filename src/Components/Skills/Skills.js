import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          <li>
            <i className="fab skill fa-html5"></i>
          </li>
          <li>
            <i className="fab skill fa-css3"></i>
          </li>
          <li>
            <i className="fab skill fa-sass"></i>
          </li>
          <li>
            <i className="fab skill fa-less"></i>
          </li>
          <li>
            <i className="fab skill fa-js-square"></i>
          </li>
          <li>
            <i className="fab skill fa-react"></i>
          </li>
          <li>
            <i className="fab skill fa-node-js"></i>
          </li>
          <li>
            <i className="fab skill fa-python"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
