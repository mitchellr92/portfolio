import React, { Component } from "react";
import LambdaNotes from "./Projects/lambdaNotes";
import RvNav from "./Projects/rvNav";
import HauntedHouse from "./Projects/hauntedHouse";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: "hidden"
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ visibility: "visible" });
      }.bind(this),
      3000
    );
  }

  render() {
    console.log(this.props);
    let projects;
    let backButton;
    let backArrow;

    if (this.props.display === "portfolio-initial") {
      projects = "projects-initial";
      backArrow = "back-arrow-initial";
      backButton = "back-button-initial";
    } else if (this.props.display === "portfolio-hidden") {
      projects = "projects-visible projects-hidden";
      backArrow = "back-arrow-visible arrow-hidden";
      backButton = "back-button-visible button-hidden";
    } else if (this.props.display === "portfolio-visible") {
      projects = "projects-visible";
      backArrow = "back-arrow-visible";
      backButton = "back-button-visible";
    }

    console.log(projects, backArrow);

    return (
      <div className="portfolio-container">
        <a className={backButton} onClick={this.props.closePortfolio}>
          <i className={`fas fa-arrow-circle-right ${backArrow}`}></i>
        </a>
        <div className={projects}>
          <div className="top-row">
            <LambdaNotes className="project-card project-1" />
            <RvNav className="project-card project-2" />
            <HauntedHouse className="project-card project-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
