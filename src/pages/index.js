import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import Portada from "../components/Portada";
import ListaBoda from "../components/ListaBoda";
import LugarCelebracion from "../components/LugarCelebracion";
import Asistencia from "../components/Asistencia";

const Home = props => {

  return (
    <Layout bodyClass="page-home">
      <div className="divImage" id="portada">
        <Portada/>
      </div>
      <div  id="lista-bodas">
        <ListaBoda />
      </div>
      <div  id="lugar-celebracion">
        <LugarCelebracion />
      </div>
      <div  id="contact">
        <Asistencia />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services\/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    intro: markdownRemark(
      fileAbsolutePath: {regex: "/content/index.md/"}
    ) {
        html
        frontmatter {
          image
          intro_image
          intro_image_absolute
          intro_image_hide_on_mobile
          title
        }
    }
    features: allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
