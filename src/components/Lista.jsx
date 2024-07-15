import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Lista.css';

function Lista(props) {
    return (
        <main className="container">
            <label htmlFor="txtBrowser form-label">{props.children}</label>
            <input type="text" className="datalista form-control" list="browserList" id=""txtBrowser defaultValue={props.valor}/>
            <datalist id="browserList">
                <option value="Chrome"/>
                <option value="Firefox"/>
                <option value="Internet Explorer"/>
                <option value="Opera"/>
                <option value="Safari"/>
            </datalist>
        </main>
    );
}

export default Lista;