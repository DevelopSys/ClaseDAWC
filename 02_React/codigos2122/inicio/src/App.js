import "./App.css";

function App() {
  let headerCol1 = "Contenido columna uno";
  let headerCol2 = "Contenido columna dos";

  function crearHeader(numero) {
    switch (numero) {
      case 1:
        return <p>Este parrafo aparecerá si me pasas 1</p>;

      case 2:
        return <p>Este parrafo aparecerá si me pasas 2</p>;

      case 3:
        return <p>Este parrafo aparecerá si me pasas 3</p>;

      default:
        return <p>Este parrafo aparecerá si me pasas algo diferente</p>;
    }
  }

  return (
    <div className="App container">
      <h1>Aplicacion React</h1>
      <p>Primera aplicación React</p>

      <div className="row">
        <div className="col columna-uno">
          <h2>Elementos de un componente</h2>
          {/* <p>{headerCol1}</p> */}
          {crearHeader(2)}
        </div>
        <div className="col columna-dos">
          <h2>Funcionalidad de un componente</h2>
          {/* <p>{headerCol2}</p> */}
          {crearHeader(67)}
        </div>
      </div>
    </div>
  );
}

export default App;
