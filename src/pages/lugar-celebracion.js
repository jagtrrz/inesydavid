import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import Map from "../components/GoogleMap";

const Home = (props) => {
  return (
    <Layout bodyClass="page-home">
      <div className="containerLugarCelebracion" id="celebracion">
        <h2>¿Dónde lo vamos a celebrar?</h2>
        <div className="containerMap">
          <div className="map">
            <Map />
          </div>
          <div className="pAndImage">
            <div className="imageChurch">
              <div className="background-image-church"></div>
              <div className="background-image-castle"></div>
            </div>

            <p>
              La ceremonia religiosa tendrá lugar a las 18:30 en la{" "}
              <strong>Iglesia de Santa María de la Cuesta</strong> que se
              encuentra en la Plaza de la Cuesta, 6Z, 40200 Cuéllar, Segovia
              para continuar con la celebración en el{" "}
              <strong>Castillo de Íscar</strong> situado en la carretera del
              castilo en Íscar, 47420, Valladolid. En el mapa tenéis la
              dirección de ambos lugares por si necesitais usar el GPS.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
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
