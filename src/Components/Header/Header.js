import React, { Component } from "react";
import { Link } from "react-router-dom";
// import 'font-awesome/less/font-awesome.less';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="button">Top</div>
          <div className="button">About Me</div>
          <div className="button">Skills</div>
          <div className="button">Portfolio</div>
          <a className="button" href="https://github.com/mitchellr92">
            <i class="fab fa-github" />
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
          >
            <i class="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
