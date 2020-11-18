import React, { Component } from "react";

import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default class DarkMode extends Component {
  render() {
    const toggler = (
      <div className="toggler">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="tog">
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
                className="tog-checkbox"
              />
              {theme === "dark" ? (
                <div className="tog-text">
                  <FontAwesomeIcon
                    icon={faSun}
                    className="icon-font text-warning"
                  />{" "}
                  <span>Mode</span>
                </div>
              ) : (
                <div className="tog-text">
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="icon-font text-muted"
                  />{" "}
                  {"  "}
                  <span>Mode</span>
                </div>
              )}
            </label>
          )}
        </ThemeToggler>
      </div>
    );

    return <div>{toggler}</div>;
  }
}
