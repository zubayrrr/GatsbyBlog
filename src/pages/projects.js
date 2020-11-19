import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Repository from "../components/repository";
import Layout from "../components/layout";

import SEO from "../components/seo";

const Projects = ({ data }) => {
  const { repositories } = data.githubData.viewer;

  return (
    <Layout title="Zubayr Ali">
      <SEO title="Projects" />
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="section1 ">
        <div className="projects container">
          <div
            className="avatar"
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              margin: "1.45rem 0px",
              padding: "25px 0",
            }}
          >
            <h2 style={{ marginTop: "0" }}>
              Fetched from my{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/zubayrrr?tab=repositories"
                className="link-white"
              >
                Github
              </Link>
              <span role="img" aria-label="fire, flame">
                🔥
              </span>
            </h2>
            <p className="mb-0">
              I work on everything Front-end, I am a ReactJs fanboi like Ben
              Awad.
            </p>
          </div>
          <hr className="contour" />
          <p className="sub-heading text-center">
            Latest Projects{" "}
            <span role="img" aria-label="backhand index pointing down">
              👇🏽
            </span>
          </p>
          {repositories.nodes
            .map((repo) => <Repository key={repo.name} repo={repo} />)
            .reverse()}
        </div>

        <div className="see-more">
          <Link
            to="https://github.com/zubayrrr?tab=repositories"
            className="link"
          >
            <span>More on Github</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const gitHubQuery = graphql`
  {
    githubData {
      viewer {
        resourcePath
        repositories(
          last: 12
          privacy: PUBLIC
          orderBy: { field: STARGAZERS, direction: ASC }
        ) {
          nodes {
            name
            description
            homepageUrl
            forkCount
            createdAt
            updatedAt
            resourcePath
            languages(last: 1, orderBy: { field: SIZE, direction: ASC }) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            licenseInfo {
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
