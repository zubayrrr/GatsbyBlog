import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulSiteInformation {
          siteName
          siteDescription
          menus
          logo {
            file {
              url
            }
            fluid {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header
          data={data.contentfulSiteInformation}
          siteTitle={data.contentfulSiteInformation.siteName}
          header={header}
        />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer siteName={data.contentfulSiteInformation.siteName} />
        <ScrollUpButton />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
