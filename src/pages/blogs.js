import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Blogs extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="Blogs"
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
        <div className="site-container blogs-page" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h2 className="">Blogs</h2>
            </div>
            <ul
              className={`blogs-list ${
                data.allContentfulBlogs.edges.length < 5 ? "few-blogs" : ""
              }`}
            >
              {data.allContentfulBlogs.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner rounded ">
                      <Link className="link" to={`/` + item.node.slug} />
                      {item.node.featureImage ? (
                        <Img
                          alt={item.node.title}
                          fluid={item.node.featureImage.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.createdAt).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="see-more">
              <Link to="/#Blogs">
                <span>Go back Home</span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogsQuery {
    allContentfulBlogs(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 1500, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
  }
`;
