import React from "react";
import HookUseState from "./components/HookUseState";

const HooksApp = () => {
  let numeroPasar = 8;
  return (
    <>
      <h1>Aplicación para explicar funcionamiento hooks</h1>
      <input
        className="form-control"
        placeholder="Introduce valor inicial"
        type="number"
      ></input>
      <button className="btn btn-primary" onClick={}>
        Pasar valor
      </button>
      <HookUseState numero={numero} />
    </>
  );
};

export default HooksApp;
