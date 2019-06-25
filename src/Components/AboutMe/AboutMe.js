import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-content">
          Full-Stack Web Developer who is passionate about problem solving and
          creating quality products. I enjoy working on teams and communicating
          with others to reach a common goal. When I am not busy with work or
          study spend most of my time with my family, in the outdoors or
          watching movies.
        </p>
      </div>
    );
  }
}

export default AboutMe;
