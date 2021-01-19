import React from "react";

const ComponenteEventos = (props) => {
  let valorInput = "";
  console.log("Ejecutado");
  const handlerClick = (id) => {
    console.log("Ejecutado método");
    console.log(`El contenido del input es: ${valorInput}`);
  };

  const handlerInputChange = (e) => {
    console.log("Input cambiado");
    valorInput = e.target.value;
  };

  return (
    <>
      <h2>Componente eventos</h2>
      <input
        type="text"
        className="form-control"
        onChange={handlerInputChange}
        id="inputEjemplo"
      ></input>
      {props.mostrarUno && <div>Mostrar si</div>}
      <button className="btn btn-primary" onClick={handlerClick}>
        Pulsar
      </button>
    </>
  );
};

export default ComponenteEventos;
