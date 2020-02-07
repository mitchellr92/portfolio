import React, { Component } from "react";
import LambdaNotes from "./projects/LambdaNotes";
import DevConnector from "./projects/DevConnector";
import HauntedHouse from "./projects/HauntedHouse";
import RvNav from "./projects/RvNav";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    let projects;
    let backButton;

    if (this.props.display === "portfolio-initial") {
      projects = "projects-initial";
      backButton = "back-button-initial";
    } else if (this.props.display === "portfolio-hidden") {
      projects = "projects-hidden";
      backButton = "back-button-hidden";
    } else if (this.props.display === "portfolio-visible") {
      projects = "projects-visible";
      backButton = "back-button-visible";
    }

    return (
      <div className="portfolio-container">
        <div className={backButton} onClick={this.props.closePortfolio}>
          Home
        </div>
        <div className={projects}>
          <DevConnector />
          <HauntedHouse />
          <RvNav />
          <LambdaNotes />
        </div>
      </div>
    );
  }
}

export default Portfolio;
