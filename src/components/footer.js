import React, { Component } from "react";
import DarkMode from "./darkmode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default class footer extends Component {
  render() {
    const toggler = <DarkMode />;

    return (
      <div className="site-footer footer-copyright" id="footer">
        <div className="container">
          <div title="Toggle dark mode">{toggler}</div>
          <span>
            <del>&copy;</del> No copyright,{" "}
            <FontAwesomeIcon icon={faCodeBranch} className="icon-font" />
            <a
              href="http://github.com/zubayrrr/GatsbyBlog"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"  "}
              fork
            </a>{" "}
            this open source site.
          </span>
          <br />
          Made with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="icon-font text-danger"
          />{" "}
          in India by{" "}
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
