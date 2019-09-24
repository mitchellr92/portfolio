import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills">
          <ul>
            <li>
              <p className="skill">WEB TECHNOLOGIES AND FRAMEWORKS -</p>
              <p>React, Redux, Node.js, Express, HTML, CSS, LESS</p>
            </li>
            <li>
              <p className="skill">SCRIPTS/UI -</p>{" "}
              <p>JavaScript, BootStrap, Axios</p>
            </li>
            <li>
              <p className="skill">DATABASE -</p> <p>postgreSQL, SQLite</p>
            </li>
            <li>
              <p className="skill">WEB DEBUG TOOLS -</p>{" "}
              <p>Chrome Developer Tools</p>
            </li>
            <li>
              <p className="skill">VERSIONING AND OTHER TOOLS -</p>{" "}
              <p>Gitbash, Github</p>
            </li>
            <li>
              <p className="skill">DEPLOYMENT TOOLS -</p> <p>Heroku, Netlify</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
