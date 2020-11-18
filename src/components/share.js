import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Share = ({ socialConfig }) => {
  return (
    <div className="post-social">
      <h6 className="title is-6">Share:</h6>
      <FacebookShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded facebook"
      >
        <span>
          <FontAwesomeIcon icon={faFacebook} className="icon-font" size="lg" />{" "}
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.title}
        via="zubayrali7"
      >
        <span>
          <FontAwesomeIcon icon={faTwitter} className="icon-font" size="lg" />{" "}
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded whatsapp"
        title={socialConfig.config.title}
      >
        <span>
          <FontAwesomeIcon icon={faWhatsapp} className="icon-font" size="lg" />{" "}
        </span>
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </div>
  );
};

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;
