import React from "react";

import ContactForm from './ContactForm';

const Asistencia = () => (
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
);

export default Asistencia