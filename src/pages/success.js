import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SuccessPage = () => (
  <Layout>
    <SEO
      title="Success: Email sent."
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
      <p className="h1 text-success">
        <i class="fas fa-check-square "></i> <br />
        Success!
      </p>
      <p className="sub-heading">
        Thank you for taking the time to write to me. <br />
        Will get back to you very soon.
        <br />
        Lets take you back <Link to="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default SuccessPage;
