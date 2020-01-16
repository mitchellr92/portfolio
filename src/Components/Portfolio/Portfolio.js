import React, { Component } from "react";
import LambdaNotes from "./Projects/lambdaNotes";
import RvNav from "./Projects/rvNav";
import HauntedHouse from "./Projects/hauntedHouse";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <a className="drop-down" onClick={this.props.closePortfolio}>
          <i class="fas fa-arrow-circle-down down-button"></i>
        </a>
        <div className="portfolio-projects">
          <div className="top-row">
            <LambdaNotes className="project project-1" />
            <RvNav className="project project-2" />
            <HauntedHouse className="project project-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
