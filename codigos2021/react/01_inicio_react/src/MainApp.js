import ComponenteFor from "./components/ComponenteFor";
import ComponenteIf from "./components/ComponenteIf";
import ComponenteSwitch from "./components/ComponenteSwitch";

// fc
const MainApp = () => {
  let nombre = "Borja";
  let numeroIf = 9;
  let numeroSwitch;
  let numeroFor = 12;

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
    </div>
  );
};

export default MainApp;
