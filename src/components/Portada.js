import React from "react";
import backgroundImage from "../../static/images/ines-mesa/ines-mesa.jpg";

const Portada = () => (
    <>
        <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="content">
                <h2>¡NOS CASAMOS!</h2>
                <h4>SAVE THE DATE 18/06/2022</h4>
            </div>
        </div>
        <div className="text">
            <h3>¡Bienvenidos a la web de nuestra boda!</h3>
            <h5>Estamos ilusionados de poder compartir un día tan especial con vosotros.</h5>
            <h5>En esta página iremos incorporando información útil sobre la boda como el lugar de celebración, horarios y recomendaciones para ayudaros a disfrutar al máximo del gran evento.</h5>
            <p>Para cualquier duda que os surja, estaremos encantados de que os pongáis en contacto con nosotros:</p>
            <ul>
                <li>
                    David Mesa - davidmesa@icam.es - 696 472 540
                </li>
                <li>
                    Inés Muñoz - inesammartin@gmail.com - 686 281 697
                </li>
            </ul>
        </div>
    </>
);

export default Portada