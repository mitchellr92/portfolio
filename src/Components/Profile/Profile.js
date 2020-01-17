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
            <p className="name">Mitchell Robles</p>
            <p className="divider">|</p>
            <p className="title">Web Developer</p>
            <div
              className={this.state.active ? "null" : "button down-arrow"}
              onClick={this.toggleActive}
            >
              <i class="fas fa-arrow-circle-down"></i>
            </div>
            <div
              className={this.state.active ? "button down-arrow" : "null"}
              onClick={this.toggleActive}
            >
              <i class="fas fa-arrow-circle-up"></i>
            </div>
          </div>
          <div className={this.state.active ? "profile-summary" : "collapsed-profile-summary"}>
            {/* {this.state.active ? "profile-summary" : "collapsed-profile-summary"} */}
            <div className={this.state.active ? "summary" : "collapsed-summary"}>
              {/* {this.state.active ? "summary" : "collapsed-summary"}> */}
              <img src={profilePic} className="profile-pic" />
              <p>
                Collaborative Full Stack Web Developer with experience working
                on multiple distributed cross-functional agile development
                teams. Built multiple projects using JavaScript, HTML, CSS, and
                Node.js. 7 years’ experience as an Electrician developing
                attention to detail, critical thinking, and project management
                skill set.
              </p>
            </div>
            <div className={this.state.active ? "skills" : "null"}>
              {/* {this.state.active ? "skills" : "null"}> */}
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
                <i className="fab fa-github" />
              </a>
              <a
                className="button"
                target="_blank"
                href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <div className="button" onClick={this.props.openModal}>
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="projects" onClick={this.props.openPortfolio}>
              Projects
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
