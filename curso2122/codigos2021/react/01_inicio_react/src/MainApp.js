import { useState } from "react";
import ComponenteEventos from "./components/ComponenteEventos";
import ComponenteFor from "./components/ComponenteFor";
import ComponenteIf from "./components/ComponenteIf";
import ComponenteSwitch from "./components/ComponenteSwitch";

// fc
const MainApp = () => {
  let nombre = "Borja";
  let numeroIf = 9;
  let numeroSwitch = 312;
  let numeroFor = 12;
  //let mostarUno = true;
  //let mostarDos = false;
  //let mostarTres = false;

  /*const [mostarUno, setMostrarUno] = useState(false);
  const [mostarDos, setMostrarDos] = useState(false);
  const [mostarTres, setMostarTres] = useState(false);*/

  const [visibilidad, setVisibilidad] = useState({
    visibleCompoUno: false,
    visibleCompoDos: false,
    visibleCompoTres: false,
  });

  console.log("Componente mostado PAdre");
  //console.log(mostarUno);

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
          <button
            onClick={() => {
              //mostarUno = !mostarUno;
              //console.log(mostarUno);
              //setMostrarUno(!mostarUno);
              setVisibilidad({
                ...visibilidad,
                visibleCompoUno: !visibilidad.visibleCompoUno,
              });
            }}
          >
            C1
          </button>
        </div>
        <div className="col">
          <button
            onClick={() => {
              //setMostrarDos(!mostarDos);
              setVisibilidad({
                ...visibilidad,
                visibleCompoDos: !visibilidad.visibleCompoDos,
              });
            }}
          >
            C2
          </button>
        </div>
        <div className="col">
          <button
            onClick={() => {
              //setMostarTres(!mostarTres);
              setVisibilidad({
                ...visibilidad,
                visibleCompoTres: !visibilidad.visibleCompoTres,
              });
            }}
          >
            C3
          </button>
        </div>

        <ComponenteEventos
          /*mostradoUno={mostarUno}
          mostradoDos={mostarDos}
          mostradoTres={mostarTres}*/
          visibilidad={visibilidad}
        />
      </div>
    </div>
  );
};

export default MainApp;
