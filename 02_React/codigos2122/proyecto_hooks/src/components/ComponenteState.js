import React, { useState } from "react";
import "./ComponenteState.css";

function ComponenteState() {
  //let elementos = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];

  const [elementos, setElementos] = useState([]);
  // elementos = []

  return (
    <div>
      <h1>Componente State</h1>
      <div className="m-4">
        <input
          className="form-control"
          placeholder="Introduce elemento agregar"
        ></input>
        <button
          className="btn btn-primary"
          onClick={() => {
            setElementos((e) => {
              return [...e, "Nuevo"];
            });
          }}
        >
          Agregar
        </button>
        <button
          onClick={() => {
            console.log(elementos);
          }}
        >
          Comprobar
        </button>
      </div>
      <ul>
        {elementos.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComponenteState;
