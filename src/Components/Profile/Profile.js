import React, { Component } from "react";
import HeadShot from "./headshot.jpg";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
          <div className="links">
            <a className="button" href="https://github.com/mitchellr92">
              <i className="fab fa-github" />
            </a>
            <a
              className="button"
              href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        <div className="profile">
          <img src={HeadShot} alt="Head shot" className="image" />
          <div className="main-info">
            <h2>Mitchell Robles</h2>
            <h3>Full-Stack Web Developer</h3>
            <h3>Riverside, California</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
