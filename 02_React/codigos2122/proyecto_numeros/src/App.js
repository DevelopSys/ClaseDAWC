
import { useState } from "react";
import "./App.css";
import ComponenteIncremento from "./components/ComponenetIncremento/ComponenteIncremento";
import ComponenteDecremento from "./components/ComponenteDecremento/ComponenteDecremento";



function App() {

  const [contador, setContador] = useState(9)  
  let handler = (e) => {
    switch (e.target.id) {
      /* case "btn_incremento":
        setContador(contador+1);
        break;
      case "btn_decremento":
        setContador(contador-1)
      break; */
      case "btn_reinicio":
        setContador(0)
        break;
      default:
        break;
    }
    console.log(contador);
  };

  return (
    <div className="container m-4">
     {/*  <button className="btn btn-primary" id="btn_incremento" onClick={handler}>
        +1
      </button>
      <button className="btn btn-primary" id="btn_decremento" onClick={handler}>
        -1
      </button> */}
      <button className="btn btn-primary" id="btn_reinicio" onClick={handler}>
        Reset
      </button>
      <h1>{contador}</h1>

      <div className="row m-4">
        <div className="col">
          <ComponenteIncremento counter={setContador} />
        </div>
        <div className="col">
          <ComponenteDecremento counter={setContador} />
        </div>
      </div>
    </div>
  );
}

export default App;
