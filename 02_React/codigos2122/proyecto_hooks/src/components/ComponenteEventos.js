import React from "react";
import "./ComponenteEventos.css";

function ComponenteEventos() {
  /* function gestionBoton() {
    console.log('boton pulsado desde funcion');
  } */

  //const [first, setfirst] = useState(9);
  let objeto = {nombre: "Borja", edad : 20};
  let array = [1,2,3,4,5,5,6,7,8,9];
  let arrayNuevo = [{nomnbre:"asd",edad:2},...array]

  let {edad, nombre} = objeto;

  console.log(edad);
  console.log(nombre);

  let contenido = "esto es el contenido"

  let gestionBoton = () => {
    alert(contenido)
    //console.log("boton pulsado desde funcion");
  };

  let gestionTeclas = (event) => {
    //console.log(event.target.value);
    contenido = event.target.value;
    console.log(contenido);
  };

  return (
    <div>
      <h1>Componente Eventos</h1>
      <div className="m-4">
        <input
          onKeyUp={gestionTeclas}
          className="form-control"
          type="text"
          placeholder="introduce nombre"
        ></input>
        <input
          className="form-control mb-4"
          type="number"
          placeholder="introduce edad"
        ></input>
        <button className="btn btn-primary" onClick={gestionBoton}>
          Pulsar añadir
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("Boton pulsado");
          }}
        >
          Pulsar borrar
        </button>
      </div>
    </div>
  );
}

export default ComponenteEventos;
