import React from "react";

// necesito usuario
const Usuario = ({ comunicacion, posicion }) => {
  return (
    <div className="col-3">
      <div className="card mb-4">
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">
            {comunicacion.nombre} {comunicacion.apellido}
          </h5>
          <p className="card-text">{comunicacion.descripcion}</p>

          {/* Mostrar una lsita con los conocimientos de cada usuario */}
          {/* props.comunicacion.conocimientos */}
          <ul className="list-group">
            {comunicacion.conocimientos.map((item, index) => {
              return (
                <li key={index} className="list-group-item">
                  {posicion} - {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
