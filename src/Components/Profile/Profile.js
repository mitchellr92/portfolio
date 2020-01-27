import React, { Component } from "react";
import profilePic from "./download.png";
import "./Profile.css";

class Profile extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    console.log(this.props.contactMe);
    return (
      <div className="page-container">
        <div className={this.props.display}>
          <div className="profile">
            <div className="main-title">
              <p className="name">Mitchell Robles</p>
              <p className="divider">|</p>
              <p className="title">Web Developer</p>
            </div>
            <div className="about-me-container" onClick={this.toggleActive}>
              <div
                className={this.state.active ? "null" : "down-arrow"}
                // onClick={this.toggleActive}
              >
                <i class="fas fa-arrow-circle-down"></i>
              </div>
              <div
                className={this.state.active ? "up-arrow" : "null"}
                // onClick={this.toggleActive}
              >
                <i class="fas fa-arrow-circle-up"></i>
              </div>
              <p className="about-me">About Me</p>
            </div>
          </div>
          <div
            className={
              this.state.active
                ? "profile-summary"
                : "collapsed-profile-summary"
            }
          >
            <div
              className={this.state.active ? "summary" : "collapsed-summary"}
            >
              <img src={profilePic} className="profile-pic" />
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
            <div className={this.state.active ? "skills" : "skills-collapse"}>
              <div className="row-1">
                <i class="fab fa-skill fa-js-square"></i>
                <i class="fab fa-skill fa-react"></i>
                <i class="fab fa-skill fa-node-js"></i>
                <i class="fab fa-skill fa-html5"></i>
              </div>
              <div className="row-2">
                <i class="fab fa-skill fa-css3"></i>
                <i class="fab fa-skill fa-sass"></i>
                <i class="fab fa-skill fa-less"></i>
                <i class="fab fa-skill fa-python"></i>
              </div>
            </div>
          </div>
          <hr className="border-divider" />
          <div className="links">
            <div className="link-buttons">
              <a
                className="button"
                target="_blank"
                href="https://github.com/mitchellr92"
              >
                <i className="fab fa-github link-button" />
              </a>
              <a
                className="button"
                target="_blank"
                href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
              >
                <i className="fab fa-linkedin-in link-button" />
              </a>
              <div className="button" onClick={this.props.openModal}>
                <i className="fas fa-envelope link-button"></i>
              </div>
            </div>
            <div className="projects-container link-button">
              <div className="projects-button" onClick={this.props.openPortfolio}>
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
