import React, { Component } from "react";
import HeadShot from "./headshot.jpg";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile">
          <img src={HeadShot} alt="Head shot" className="image" />
          <div className="main-info">
            <h2>Mitchell Robles</h2>
            <h3>Full-Stack Web Developer</h3>
            <h3>Riverside, California</h3>
            <h3>mitchellr92@live.com</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
