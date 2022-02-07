import React, { useState } from "react";
import "./ComponenteState.css";

function ComponenteState() {
  //let elementos = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];

  const [elementos, setElementos] = useState([]);
  const [elementoInput, setElementoInput] = useState("");
  const [elementoEmail, setElementoEmail] = useState("");
  const [elementoPass, setElementoPass] = useState("");
  const [elementoExperiencia, setElementoExperiencia] = useState(false);
  const [formularios, setFormularios] = useState([]);

  // elementos = []

  let datoInput = "";

  return (
    <div>
      <h1>Componente State</h1>
      <div classNameName="m-4">
        <input
          classNameName="form-control"
          placeholder="Introduce elemento agregar"
          onChange={(e) => {
            setElementoInput(e.target.value);
          }}
          value={elementoInput}
        ></input>
        <button
          classNameName="btn btn-primary"
          onClick={() => {
            setElementos((e) => {
              return [...e, elementoInput];
            });
            setElementoInput("");
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

      {/* 
        AL DAR AL BOTON SUBMIT
        [{email: emailInput, password: passwordInput, experiencia: experienciaInput}]
*/}
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => {
            setElementoEmail(e.target.value);
          }}
          value={elementoEmail}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => {
            setElementoPass(e.target.value);
          }}
          value={elementoPass}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        ></input>
      </div>
      <div className="mb-3 form-check">
        <input
          onChange={(e) => {
            setElementoExperiencia(e.target.value);
          }}
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        ></input>
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setFormularios((e) => [
            ...e,
            {
              email: { elementoEmail },
              pass: { elementoPass },
              expeciencia: { elementoExperiencia },
            },
          ]);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ComponenteState;
