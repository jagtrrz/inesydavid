import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

// import backgroundImage from "../../static/images/ines-mesa/ines-mesa.jpg";
// import listWeddingImage from "../../static/images/ines-mesa/ines-mesa-2.jpg";
// import church from "../../static/images/ines-mesa/iglesia.jpg";
// import castle from "../../static/images/ines-mesa/castillo.jpg";

// import ContactForm from '../components/ContactForm';
// import Map from '../components/GoogleMap';

// const url = backgroundImage
// const listWedding = listWeddingImage
// const churchPath = church
// const castlePath = castle

// const url_production = process.env.URL_MEDIA
// const production = process.env.PRODUCTION

// const final_url = production === 'true' ? `${url_production}${url}` : url
// const listWeddingUrl = production === 'true' ? `${url_production}${listWedding}` : listWedding
// const churchUrl = production === 'true' ? `${url_production}${churchPath}` : churchPath
// const castleUrl = production === 'true' ? `${url_production}${castlePath}` : castlePath

// const formKey = `https://www.flexyform.com/f/${process.env.FORM_KEY}`

const Home = props => {

  return (
    <Layout bodyClass="page-home">
        <div  className="divImage">
          <div className="background-image">
              <div className="content">
                  <h2>¡NOS CASAMOS!</h2> 
                  <h4>SAVE THE DATE 18/06/2022</h4>
              </div>
          </div>
        </div>
        <div className="contentPortada" id="portada">
            <h2>¡Bienvenidos a la web de nuestra boda!</h2>
            <p>
              Estamos ilusionados de poder compartir un día tan especial con vosotros. <br></br>
              En esta página iremos incorporando información útil sobre la boda como el lugar de celebración, horarios y recomendaciones para ayudaros a disfrutar al máximo del gran evento.<br></br>
              Para cualquier duda que os surja, estaremos encantados de que os pongáis en contacto con nosotros:
            </p>
            <ul>
                <li>
                  <strong>David Mesa - davidmesa@icam.es - 696 472 540</strong>
                </li>
                <li>
                  <strong>Inés Muñoz - inesammartin@gmail.com - 686 281 697</strong>
                </li>
            </ul>
        </div>
        {/* <div className="containerLugarCelebracion" id="celebracion">
            <h2>¿Dónde lo vamos a celebrar?</h2>
            <div className="containerMap">
              <div className="map">
                <Map />
              </div>
              <div className="pAndImage">
                
                <div className="imageChurch">
                  <div className="background-image-church" style={{backgroundImage: `url(${churchUrl})`}}></div>
                  <div className="background-image-castle" style={{backgroundImage: `url(${castleUrl})`}}></div>
                </div> 

                <p>
                  La ceremonia religiosa tendrá lugar a las 18:30 en la <strong>Iglesia de Santa María de la Cuesta</strong> que se encuentra en la Plaza de la Cuesta, 6Z, 40200 Cuéllar, Segovia para continuar 
                  con la celebración en el <strong>Castillo de Íscar</strong> situado en la carretera del castilo en Íscar, 47420, Valladolid. En el mapa tenéis la dirección de ambos lugares por si necesitais usar el GPS. 
                </p>               
              </div>
            </div>           
        </div>
        <div className="contentListaBodas" id="lista">
            <div className="listaText">
              <p className="h3Listas">
                  Para nosotros, el mejor regalo es que nos acompañéis en un día tan especial y si, aun así, 
                  queréis ayudarnos a que comencemos esta gran aventura juntos, aquí tenéis nuestro número de cuenta:
              </p>
              <h2>
                  ES25 2100 4967 1413 0059 9758 
              </h2>
              <h2>
                  ¡Muchísimas gracias! 
              </h2>
            </div>
            <div className="listaImage">
              <div className="background-image-lista" style={{backgroundImage: `url(${listWeddingUrl})`}}></div>
            </div>
        </div>
        
        <div className="containerAsistencia" id="contact">
            <h2>
                ¿Nos confirmas tú asistencia?
            </h2>
            <p>
                Nos encantará veros en nuestra boda. ¡Estamos deseando que llegue ya el día! <br></br>
                En esta sección os pedimos que confirméis vuestra asistencia a la boda, con quien venís y si tenéis alguna alergia o intolerancia, 
                así como si sois vegetarianos.
            </p>
            <div className="contactForm">
                <ContactForm action={formKey} />
            </div>
        </div> */}
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
