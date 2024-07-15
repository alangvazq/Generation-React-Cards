import React from "react";
import '../css/BotonContador.css';

function BotonContador({texto, cont}) {
    return (
        <a href="#" className="notification">
            <span>{texto}</span>
            <span className="badge">{cont}</span>
        </a>
    );
}

export default BotonContador;