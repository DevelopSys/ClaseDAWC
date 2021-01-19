import React from "react";

const ComponenteEventos = ({ mostradoUno, mostradoDos, mostradoTres }) => {
  //console.log(props);
  //console.log("Lo pasado es " + mostradoUno);
  //console.log("Lo pasado es " + mostradoDos);
  //console.log("Lo pasado es " + mostradoTres);
  console.log("Montado componente");
  let valorInput = "";
  //console.log("Ejecutado");
  const handlerClick = (id) => {
    console.log("Ejecutado método");
    console.log(`El contenido del input es: ${valorInput}`);
  };

  const handlerInputChange = (e) => {
    console.log("Input cambiado");
    valorInput = e.target.value;
  };

  const funcionParam = (p1, p2) => {
    console.log(`${p1} ${p2}`);
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
      <button className="btn btn-primary" onClick={handlerClick}>
        Pulsar
      </button>
      <div className="row">
        <div className="col">
          {
            // condicion ? cuando es true : cuando es false
            // condicion && cuando es true
            mostradoUno && <h3>Mostrar elemento uno</h3>
          }
        </div>
        <div className="col">
          {
            // condicion ? cuando es true : cuando es false
            // condicion && cuando es true
            mostradoDos && <h3>Mostrar elemento dos</h3>
          }
        </div>
        <div className="col">
          {
            // condicion ? cuando es true : cuando es false
            // condicion && cuando es true
            mostradoTres && <h3>Mostrar elemento tres</h3>
          }
        </div>
      </div>
    </>
  );
};

export default ComponenteEventos;
