import React, { Component } from "react";
import DarkMode from "./darkmode";

export default class footer extends Component {
  render() {
    const toggler = <DarkMode />;

    return (
      <div className="site-footer footer-copyright" id="footer">
        <div className="container">
          <div title="Toggle dark mode">{toggler}</div>
          <span>&copy; {this.props.siteName} </span>
          &#9826; {new Date().getFullYear()} <br />
          Made with <i className="fas fa-heart text-danger"></i> in India by{" "}
          <a
            href="http://github.com/zubayrrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zubayr Ali
          </a>{" "}
        </div>
      </div>
    );
  }
}
