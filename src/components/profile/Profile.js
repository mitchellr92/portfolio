import React, { Component } from "react";
import profilePic from "./profilePic.png";
import "./Profile.css";

class Profile extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className={this.props.display}>
        <div className="profile">
          <div className="main-title">
            <p className="name">Mitchell Robles</p>
            <p className="divider">|</p>
            <p className="title">Web Developer</p>
          </div>
          <div className="about-me-container" onClick={this.toggleActive}>
            <div className={this.state.active ? "null" : "down-arrow"}>
              <i className="fas fa-arrow-circle-down"></i>
            </div>
            <div className={this.state.active ? "up-arrow" : "null"}>
              <i className="fas fa-arrow-circle-up"></i>
            </div>
            <p className="about-me">About Me</p>
          </div>
        </div>
        <div
          className={
            this.state.active ? "profile-summary" : "collapsed-profile-summary"
          }
        >
          <div className={this.state.active ? "summary" : "collapsed-summary"}>
            <img src={profilePic} alt="profile" className="profile-pic" />
            <p>
              I am a full stack web developer with a passion for creating
              things. I love putting myself in challenging situations to help
              grow not only professionally, but also as a person. I enjoy
              working collaboratively with others and consider myself a people
              person. Outside of web development I enjoy camping, woodworking
              and spending time with my family. I'm looking forward to talking
              with you!
            </p>
          </div>
          <div className={this.state.active ? "skills" : "collapsed-skills"}>
            <div className="row-1">
              <i className="fab fa-skill fa-js-square"></i>
              <i className="fab fa-skill fa-react"></i>
              <i className="fab fa-skill fa-node-js"></i>
              <i className="fab fa-skill fa-html5"></i>
            </div>
            <div className="row-2">
              <i className="fab fa-skill fa-css3"></i>
              <i className="fab fa-skill fa-sass"></i>
              <i className="fab fa-skill fa-less"></i>
              <i className="fab fa-skill fa-python"></i>
            </div>
          </div>
        </div>
        <hr className="border-divider" />
        <div className="links">
          <div className="info-buttons">
            <a
              className="info-button"
              target="_blank"
              href="https://github.com/mitchellr92"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="info-button"
              target="_blank"
              href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <div className="info-button" onClick={this.props.openModal}>
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <p className="projects-button" onClick={this.props.openPortfolio}>
            Projects
          </p>
        </div>
      </div>
    );
  }
}

export default Profile;
