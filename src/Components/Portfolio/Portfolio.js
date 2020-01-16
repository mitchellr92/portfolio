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
    return (
      <div
        className={
          this.props.display
            ? "portfolio-container"
            : "portfolio-container portfolio-collapse"
        }
        style={{ visibility: this.state.visibility }}
      >
        <a
          className={
            this.props.display ? "back-button" : "back-button hidden-button"
          }
          onClick={this.props.closePortfolio}
        >
          <i
            class={
              this.props.display
                ? "fas fa-arrow-circle-right right-arrow"
                : "fas fa-arrow-circle-right hidden-right-arrow"
            }
          ></i>
        </a>
        <div
          className={
            this.props.display
              ? "portfolio-projects"
              : "portfolio-projects hidden"
          }
        >
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
