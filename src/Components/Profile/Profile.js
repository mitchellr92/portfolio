import React, { Component } from "react";
import { Link } from "react-router-dom";
import profilePic from "./download.png";
import "./Profile.css";

class Profile extends Component {
  state = {
    resumeButton: "none"
  };

  resumeDownload = () => {
    if (this.state.resumeButton === "none") {
      this.setState({ resumeButton: "flex" });
    } else if (this.state.resumeButton === "flex") {
      this.setState({ resumeButton: "none" });
    }
  };

  render() {
    console.log(this.props.contactMe);
    return (
      <div className="page-container">
        <div className="profile-container">
          <div className="profile">
            <p className="name">Mitchell Robles</p>
            <p className="divider">|</p>
            <p className="title">Web Developer</p>
          </div>
          <div className="links">
            <div className="link-buttons">
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
              <a className="button" onClick={this.props.contactMe}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <Link className="projects" to={"/portfolio"}>
              Projects
            </Link>
          </div>
        </div>
        <div className="profile-summary">
          <img src={profilePic} className="profile-pic" />
          <p>Collaborative Full Stack Web Developer with experience working on multiple distributed cross-functional agile development teams. Built multiple projects using JavaScript, HTML, CSS, and Node.js. 7 years’ experience as an Electrician developing attention to detail, critical thinking, and project management skill set.</p>
        </div>
      </div>
    );
  }
}

export default Profile;
