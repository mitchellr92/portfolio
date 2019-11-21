import React, { Component } from "react";
import { Link } from "react-router-dom";
import LambdaNotes from "./Projects/lambdaNotes";
import RvNav from "./Projects/rvNav";
import HauntedHouse from "./Projects/hauntedHouse";
import "./Portfolio.css";

class Portfolio extends Component {

  render() {
    return (
      <div>
        <div className="top-bar">
          <Link className="back-button" to="/">
            Back
          </Link>
        </div>
        <div className="portfolio-container">
          <LambdaNotes />
          <RvNav />
          <HauntedHouse />
        </div>
      </div>
    );
  }
}

export default Portfolio;
