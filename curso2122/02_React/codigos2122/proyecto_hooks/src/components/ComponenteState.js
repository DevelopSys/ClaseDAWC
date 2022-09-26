import React, { useState } from "react";
import "./ComponenteState.css";

function ComponenteState() {
  //let elementos = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];

  const [elementos, setElementos] = useState([]);
  const [elementoInput, setElementoInput] = useState("");
  const [peticionesFiltradas, setPeticionesFiltradas] = useState([])
  //let peticionesFiltradas = [];
  /* const [elementoEmail, setElementoEmail] = useState("");
  const [elementoPass, setElementoPass] = useState("");
  const [elementoExperiencia, setElementoExperiencia] = useState(false); */
  const [peticion, setPeticion] = useState({
    name: "",
    pass: "",
    check: false,
  });

  const [formularios, setFormularios] = useState([]);
  const { mail, pass, check } = peticion;
  let filtro = "";

  // elementos = []
  // {nombre: "valor", pass: "valor", check: on}

  let datoInput = "";

  let handlerChange = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "mail":
        //setElementoEmail(e.target.value);
        break;
      case "pass":
        //setElementoPass(e.target.value);
        break;
      case "check":
        //setElementoExperiencia(e.target.value);
        break;
      default:
        break;
    }
  };

  let handlerChangeForm = (data) => {
    if (data.target.name == "check") {
      setPeticion((e) => {
        return { ...e, [data.target.name]: data.target.checked };
      });
    } else {
      setPeticion((e) => {
        return { ...e, [data.target.name]: data.target.value };
      });
    }
  };

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

      <h2 className="m-4">Filtrar datos</h2>
      <input
        onChange={(e) => {
          filtro = e.target.value;
        }}
        placeholder="Filtrar por correo"
      ></input>
      <button
        onClick={(e) => {
          //console.log(filtro);
          setPeticionesFiltradas(formularios.filter((e) => e.mail == filtro));
          //this.peticionesFiltradas = formularios.filter((e) => e.mail == filtro);
          
        }}
      >
        Filtrar
      </button>

      {peticionesFiltradas.length === 0 ? (
        
        <div class="alert alert-warning" role="alert">
          No hay coincidencias
        </div>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {peticionesFiltradas.map((e, index) => (
              <tr>
                <th>{index}</th>
                <th>{e.mail}</th>
                <th>{e.pass}</th>
                <th>{e.check}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ul>
        {/* {elementos.map((d) => (
          <li>{d}</li>
        ))} */}

        {/* formularios.map((e, index)=>{return <li key={index}> {e.mail}</li>}) */}
      </ul>

      {/* 
        AL DAR AL BOTON SUBMIT
        [{email: emailInput, password: passwordInput, experiencia: experienciaInput}]*/}

      <div className="mb-3">
        <label for="mail" className="form-label">
          Email address
        </label>
        <input
          onChange={
            handlerChangeForm
            //handlerChange
          }
          /* value={elementoEmail} */
          value={mail}
          type="email"
          className="form-control"
          name="mail"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="mb-3">
        <label for="pass" className="form-label">
          Password
        </label>
        <input
          onChange={
            handlerChangeForm
            //handlerChange
            /* (e) => {
            setElementoPass(e.target.value);
          } */
          }
          /* value={elementoPass} */
          value={pass}
          type="password"
          className="form-control"
          name="pass"
        ></input>
      </div>
      <div className="mb-3 form-check">
        <input
          onChange={
            handlerChangeForm
            //handlerChange
            /* (e) => {
            setElementoExperiencia(e.target.value);
          } */
          }
          type="checkbox"
          className="form-check-input"
          name="check"
          checked={check}
        ></input>
        <label className="form-check-label" for="check">
          Check me out
        </label>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (mail.length > 0 && pass.length > 0) {
            setFormularios((e) => {
              return [...e, peticion];
            });
            setPeticion({ mail: "", pass: "", check: false });
          }

          /* setFormularios((e) => [
            ...e,
            {
              email: elementoEmail,
              pass: elementoPass,
              expeciencia: elementoExperiencia,
            },
          ]); */
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ComponenteState;
