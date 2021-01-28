import React, { useState } from "react";
import HookFormState from "./components/HookFormState";
import HookJuegoState from "./components/HookJuegoState";
import HookTraductorState from "./components/HookTraductorState";
import HookUseState from "./components/HookUseState";

const HooksApp = () => {
  const [contador, setContador] = useState(0);

  console.log("Componente padre actualizado " + contador);

  return (
    <>
      <h1>Aplicación para explicar funcionamiento hooks</h1>
      <input
        className="form-control"
        placeholder="Introduce valor inicial"
        type="number"
        onChange={(e) => {
          //console.log(e.target.value);
          setContador(parseInt(e.target.value));
        }}
      ></input>
      <button className="btn btn-primary" onClick={() => {}}>
        Pasar valor
      </button>

      <div className="row mt-4">
        <div className="col">
          <HookUseState numero={contador} />
        </div>
        <div className="col">
          <HookFormState />
        </div>
        <div className="col">
          <HookJuegoState />
        </div>
      </div>
      <div className="row mt-4">
        <HookTraductorState />
      </div>
    </>
  );
};

export default HooksApp;
