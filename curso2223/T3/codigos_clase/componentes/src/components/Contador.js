import React, { useState } from "react";

const Contador = () => {
  // elementos de la funcion - "clase"

  const [contador, setContador] = useState(0);
  const [reset, setReset] = useState(0);
  const [numeroInput, setNumeroInput] = useState(0);
  const [usuariosJSON, setUsuariosJSON] = useState([
    { nombre: "Borja", apellido: "Martin" },
    { nombre: "Dario", apellido: "Iturralde" },
    { nombre: "Tomas", apellido: "Salcedo" },
    { nombre: "Aitor", apellido: "Tercero" },
    { nombre: "Cristian", apellido: "Gallego" },
  ]);

  let onClickHandler = (e) => {
    // si es el boton 1
    // si es el boton 2
    switch (e.target.id) {
      case "btn1":
        //contador++;
        setContador(contador + 1);
        break;

      case "btn2":
        //contador--;
        setContador(contador - 1);
        break;
      case "btn3":
        //contador--;
        setContador(Number(reset));
        break;
      case "btn4":
        setReset(Number(numeroInput));
        break;
    }

    console.log(contador);
  };

  return (
    <div className="container">
      Contador
      <div>
        <input
          type="number"
          onChange={(e) => {
            setNumeroInput(e.target.value);
          }}
        />
        <button className="btn btn-danger" id="btn4" onClick={onClickHandler}>
          Configurar
        </button>
      </div>
      <div>
        <button className="btn btn-primary" id="btn1" onClick={onClickHandler}>
          Pulsar incremento
        </button>
        <button className="btn btn-success" id="btn2" onClick={onClickHandler}>
          Pulsar decremento
        </button>
        <button className="btn btn-warning" id="btn3" onClick={onClickHandler}>
          Reset
        </button>
      </div>
      <span>{contador}</span>
      <div>
        <h1>Usuarios</h1>
        <ul>
          {
            // recorrer el array
            usuariosJSON.map((element, index) => (
              <li key={index}>
                {element.nombre} {element.apellido}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Contador;
