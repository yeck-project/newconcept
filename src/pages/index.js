import React from "react";

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../components/header";
import Services from "../components/services";
import CallToAction from "../components/callToAction";
import BusinessCases from "../components/businessCases";
import Clients from "../components/clients";
import Contact from "../components/contact";

export default function Index() {


  return (
    <>
      <Header/>
      <Services/>
      <CallToAction/>
      <BusinessCases/>
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
  }
`;

/*
export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
*/