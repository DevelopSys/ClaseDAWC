import React from "react";

const ContadorProyectos = (props) => {
  return (
    <div>
      <h1>El numero de proyectos es de: {props.numero}</h1>
      <h1>El nombre del primer proyecto es: {props.nombre}</h1>
    </div>
  );
};

export default ContadorProyectos;
