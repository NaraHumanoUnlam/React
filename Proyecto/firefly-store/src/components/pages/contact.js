import React  from "react";
import './style.css';
const contact = ()=> {
    return (
    <div>
    <h1>Contacto</h1>
        <form method="post">
            <label for="nombre">Nombre</label><br/>
            <input type="text" placeholder="Nombre"/><br/>
            <label for="mensaje">Mensaje</label><br/>
            <textarea/><br/>
            <button className="primary-button" type="submit">Enviar</button>
        </form>
    </div>
    
    )
}

export default contact;