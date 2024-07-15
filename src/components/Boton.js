import React from "react";
import '../css/Boton.css';

function Boton({boton, texto, listener}) {
    return (
        <button className={boton} onClick={listener}>
            {texto}
        </button>
    );
}

export default Boton;