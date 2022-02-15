import { useState } from "react";
import "./App.css";
import ComponenteIncremento from "./components/ComponenetIncremento/ComponenteIncremento";
import ComponenteDecremento from "./components/ComponenteDecremento/ComponenteDecremento";
import ComponenteNavegacion from "./components/ComponenteNavegacion/ComponenteNavegacion";

function App() {
  const [contador, setContador] = useState(7);
  let handler = (e) => {
    switch (e.target.id) {
      /* case "btn_incremento":
        setContador(contador+1);
        break;
      case "btn_decremento":
        setContador(contador-1)
      break; */
      case "btn_reinicio":
        setContador(0);
        break;
      default:
        break;
    }
    console.log(contador);
  };

  const [visualizar, setVisualizar] = useState({
    componente_uno: { visualizacion: true },
    componente_dos: { visualizacion: true },
  });

  return (
    <div>
      <ComponenteNavegacion modificacion = {setVisualizar} />

      {visualizar.componente_uno.visualizacion && (
        <div className="container m-4">
          <h1>Juego contador</h1>
          {/*  <button className="btn btn-primary" id="btn_incremento" onClick={handler}>
        +1
      </button>
      <button className="btn btn-primary" id="btn_decremento" onClick={handler}>
        -1
      </button> */}
          <button
            className="btn btn-primary"
            id="btn_reinicio"
            onClick={handler}
          >
            Reset
          </button>
          <h1>{contador}</h1>

          <div className="row m-4">
            <div className="col">
              <ComponenteIncremento counter={setContador} numero="1" />
            </div>
            <div className="col">
              <ComponenteDecremento counter={setContador} />
            </div>
          </div>
        </div>
      )}

      {visualizar.componente_dos.visualizacion && (
        <div className="container m-4">
          <h1>Juego </h1>
        </div>
      )}
    </div>
  );
}

export default App;
