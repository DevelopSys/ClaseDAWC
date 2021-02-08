import React from "react";

const ListProyects = (props) => {
  //console.log(props.proyects);
  return (
    <>
      <h2>Listado de proyectos</h2>
      <ul className="list-group">
        {props.proyects.map((pro, index) => {
          return (
            <li key={index} className="list-group-item">
              {pro.nombre}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListProyects;
