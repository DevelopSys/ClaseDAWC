import React, { useState } from "react";
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

      <div className="row">
        <div className="col">
          <HookUseState numero={contador} />
        </div>
      </div>
    </>
  );
};

export default HooksApp;
