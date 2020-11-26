import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";

export default class blogPost extends Component {
  render() {
    const data = this.props.data.contentfulBlogs;
    const disqusShortname = "zubayrali-in";
    const disqusConfig = {
      identifier: data.id,
      title: data.title,
    };

    const siteurl = this.props.data.contentfulSiteInformation.siteUrl + "/";
    const twiteerhandle = this.props.data.contentfulSiteInformation
      .twiteerHandle;
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl, twiteerhandle },
      },
      title: data.title,
      slug: data.slug,
    };

    return (
      <Layout>
        <SEO
          title={data.title}
          description={data.excerpt}
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
        <div className="site-container blog-post">
          <div className="container">
            {data.featureImage ? (
              <Img className="feature-img" fluid={data.featureImage.fluid} />
            ) : (
              <div className="no-image"></div>
            )}

            <div className="details">
              <h1 className=" display-4 font-weight-bold">{data.title}</h1>
              <span className="date">
                <i class="fas fa-calendar-alt"></i>{" "}
                {moment(data.createdAt).format("LL")}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html,
                }}
              />
            </div>
            <Share
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twiteerhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`,
                },
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
            <ul className="list-inline">
              <li className="list-inline-item">
                <div className="see-more">
                  <Link to="/#Blogs">
                    <span>Go back to Home</span>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="see-more">
                  <Link to="/blogs">
                    <span>Go back to Blogs</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
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
      excerpt
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
      twiteerHandle
    }
  }
`;
