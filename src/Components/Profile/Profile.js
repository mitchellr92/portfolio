import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile">
          <p className="name">Mitchell Robles</p>
          <p className="title">Web Developer</p>
        </div>
        <div className="links">
          <a
            className="button"
            target="_blank"
            href="https://github.com/mitchellr92"
          >
            <i className="fab fa-github" />
          </a>
          <a
            className="button"
            target="_blank"
            href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
          >
            <i class="fas fa-envelope"></i>
          </a>
          <a
            className="button"
            href="./resume.pdf"
            download
          >
            <i class="fas fa-file-download"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
