import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      keywords={["zubayr ali", "Zubayrali", "zubayrali.in"]}
    />
    <div
      className="text-center section"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p className="text-danger h2 ">
        <i class="fas fa-exclamation-triangle"></i> <br /> 404 Error{" "}
      </p>
      <p className="sub-heading">
        {" "}
        This route doesn't exist.
        <br />
        Unless you were looking for a 404 page, which you totally found. kudos!
        <br />
        Lets take you back <Link to="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
