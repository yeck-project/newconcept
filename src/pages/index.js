import React from "react";

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../components/header";
import Services from "../components/services";
import CallToAction from "../components/callToAction";
import BusinessCases from "../components/businessCases";
import Clients from "../components/clients";
import Contact from "../components/contact";

export default function Index({ data: { allCases } }) {
  console.log(allCases);

  return (
    <>
      <Header/>
      <Services/>
      <CallToAction/>
      <BusinessCases
      allCases={allCases}
      />
      <Clients/>
      <Contact/>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allCases: allDatoCmsCase {
      nodes {
        title
      }
    }
  }
`;