import { useState } from "react";
import ComponenteEventos from "./components/ComponenteEventos";
import ComponenteFor from "./components/ComponenteFor";
import ComponenteIf from "./components/ComponenteIf";
import ComponenteSwitch from "./components/ComponenteSwitch";

// fc
const MainApp = () => {
  let nombre = "Borja";
  let numeroIf = 9;
  let numeroSwitch;
  let numeroFor = 12;
  let mostarUno = false;
  let mostarDos = false;
  let mostarTres = false;

  return (
    <div className="container mt-4">
      <h1>Primer componente funcional</h1>
      <p>Proyecto realizado por {nombre} las estructuras de control son:</p>
      <div className="row">
        <div className="col">
          <ComponenteIf numeroIf={numeroIf} titulo="" />
        </div>
        <div className="col">
          <ComponenteSwitch numeroSwitch={numeroSwitch} titulo="" />
        </div>

        <div className="col">
          <ComponenteFor titulo="Componente For" numeroFor={numeroFor} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button>C1</button>
        </div>
        <div className="col">
          <button>C2</button>
        </div>
        <div className="col">
          <button>C3</button>
        </div>

        <ComponenteEventos />
      </div>
    </div>
  );
};

export default MainApp;
