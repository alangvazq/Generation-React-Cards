import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TablaPrecios.css';
import { BsCashCoin } from "react-icons/bs";

function TablaPrecios(props){
    return(
        <div className="columns col-4 w-25">
            <ul className="price">
                <li className="header">{props.header}</li>
                <li className="grey"> 
                {props.price} <BsCashCoin /></li>
                {props.items.map((item, index) => (
                    // Agregar key usando el índice del elemento
                    <li key={index}>{item}</li>
                ))}
                <li className="grey">
                    {/* Actualizar href con una URL o manejar el evento onClick */}
                    <a href="#" className="boton">Elegir Plan</a>
                </li>
            </ul>
        </div>
    );   
}

export default TablaPrecios;