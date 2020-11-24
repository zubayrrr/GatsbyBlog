import React from "react";
import CopyMailTo from "react-copy-mailto";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faKeybase,
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div
        className="row justify-content-center"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="col-md-8 col-lg-8">
          <div className="">
            <h2 className="sub-position font-weight-bold">
              {data.aboutHeading} 👋
            </h2>
            <div
              className="about-text"
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html,
              }}
            />
            <ul className="list-inline">
              <li className="list-inline-item">
                <div className="see-more">
                  <Link to="/projects">
                    <span>Projects</span>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="see-more">
                  <Link to="/projects">
                    <span>Download Resume</span>
                  </Link>
                </div>
              </li>
            </ul>
            <hr className="contour" />{" "}
            <ul className="list-inline">
              <li className="list-inline-item">
                <p>
                  <strong className="pr-5">Email</strong>{" "}
                  <CopyMailTo email={data.email} />
                </p>
              </li>
            </ul>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon-font"
                      size="lg"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="icon-font"
                      size="lg"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="icon-font"
                      size="lg"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="icon-font"
                      size="lg"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href={data.keybase}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faKeybase}
                      className="icon-font"
                      size="lg"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={data.matrix} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faHashtag}
                      size="lg"
                      className="icon-font"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href={data.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faSpotify}
                      size="lg"
                      className="icon-font"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
