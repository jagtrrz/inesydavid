import React from "react";
import backgroundImage from "../../static/images/ines-mesa/ines-mesa.jpg";

import ContactForm from './ContactForm';

const url = backgroundImage
const url_production = process.env.URL_MEDIA
const production = process.env.PRODUCTION

const final_url = production === 'true' ? url : url

const Portada = () => (
    <>
        <div className="background-image" style={{backgroundImage: `url(${final_url})`}}>
            <div className="content">
                <h2>¡NOS CASAMOS!</h2> 
                <h4>SAVE THE DATE 18/06/2022</h4>
            </div>
        </div>
        <div className="contentPortada">
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
        <div className="contentListaBodas" id="listaBoda">
            <h2>
                Para nosotros, el mejor regalo es que nos acompañéis en un día tan especial y si, aun así, 
                queréis ayudarnos a que comencemos esta gran aventura juntos, aquí tenéis nuestro número de cuenta:
            </h2>
            <h2>
                ES25 2100 4967 1413 0059 9758 
            </h2>
            <h2>
                ¡Muchísimas gracias! 
            </h2>
        </div>
        <div className="containerLugarCelebracion">
            <div className="text">
                <h1>¿Dónde lo vamos a celebrar?</h1>
                <h3>Sábado 18 de junio de 2022</h3>
                <h5>
                    La ceremonia religiosa tendrá lugar a las 18:30 en la Iglesia de Santa María de la Cuesta que se encuentra en la Plaza de la Cuesta, 6Z, 40200 Cuéllar, Segovia para continuar 
                    con la celebración en el Castillo de Íscar situado en la carretera del castilo en Íscar, 47420, Valladolid.
                </h5>
            </div>
        </div>
        <div className="containerAsistencia" id="listaBoda">
            <h2>
                ¿Nos confirmas tú asistencia?
            </h2>
            <h2>
                Nos encantará veros en nuestra boda. ¡Estamos deseando que llegue ya el día! En esta 
                sección os pedimos que confirméis vuestra asistencia a la boda, con quien venís y si tenéis alguna alergia o intolerancia, 
                así como si sois vegetarianos.
            </h2>
            <h2>
                <ContactForm action="https://www.flexyform.com/f/be220b10a06cd2cca274f599856b96b8e3a6cf04"/>
            </h2>
        </div>
    </>
);

export default Portada