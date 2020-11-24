import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import About from "../components/about";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
import MailchimpForm from "../components/MailchimpForm";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title="Home"
      keywords={[
        "zubayr ali",
        "Zubair Ali",
        "Zubayrali",
        "zubayrali.in",
        "Zubayr Ali",
        "zoobhalu",
        "zubayrali",
        "Indian Front-end Developer",
        "Front-end",
        "Blogger",
        "Zubayr Ali Blog",
        "Zubayr's Blogger",
        "zoobhalu spotify",
        "zubayr ali spotify",
        "Web Developer Zubayr Ali",
        "Web Development Zubayr Ali",
      ]}
    />

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "About")
      .map((t) => {
        return <About data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Blogs")
      .map((t) => {
        return <Blogs data={data.allContentfulBlogs}></Blogs>;
      })}

    {/* {data.contentfulSiteInformation.menus
      .filter((item) => item === "Projects")
      .map((t) => {
        return <Blogs data={data.allContentfulBlogs}></Blogs>;
      })} */}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Newsletter")
      .map((t) => {
        return <MailchimpForm />;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Contact")
      .map((t) => {
        return <Contact data={data.contentfulAboutMe.email}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      aboutHeading
      instagram
      id
      twitter
      keybase
      linkedin
      github
      matrix
      spotify
      description {
        childMarkdownRemark {
          html
        }
      }
      email
    }

    allContentfulBlogs(limit: 5, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          excerpt
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          createdAt
        }
      }
    }
    contentfulSiteInformation {
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
      menus
    }
  }
`;
