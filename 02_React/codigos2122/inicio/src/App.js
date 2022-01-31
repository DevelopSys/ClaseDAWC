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

  function llamarSwitch(parametro) {
    switch (parametro) {
      case 1:
        return (
          <div class="alert alert-primary" role="alert">
            Caso 1
          </div>
        );
      case 2:
        return (
          <div class="alert alert-secondary" role="alert">
            Caso 2
          </div>
        );
      case 3:
        return (
          <div class="alert alert-success" role="alert">
            Caso 3
          </div>
        );
      default:
        return (
          <div class="alert alert-danger" role="alert">
            Caso 4
          </div>
        );
    }
  }

  function llamadaFor() {
    for (let index = 0; index < 10; index++) {
      return <li>Elemento</li>;
    }
  }

  let variableIf = true;
  let numeroIf = 15;
  let numeroSwitch = 4;
  let elementos = ["elemento1", "Elemento2", "Elemento 3", "Elemento 4"];

  return (
    <div className="App container-fluid">
      <h1>Aplicacion React</h1>
      <p>Primera aplicación React</p>

      <div className="row">
        <div className="col columna-uno">
          <h2>Elementos de un componente</h2>
          {/* <p>{headerCol1}</p> */}
          {crearHeader(2)}
          <h3>Sentencia if</h3>
          <div>
            {
              /*  CUANDO HAY DOS RESPUESTAS --> condicion ? cuando es verdad : cuando es metira  */
              /*  CUANDO HAY UNA RESPUESTAS --> condicion && cuando es verdad*/
              /* variableIf && numeroIf >= 10 ? (
                <div class="alert alert-primary" role="alert">
                  La condicion se ha cumplido
                </div>
              ) : (
                <div class="alert alert-danger" role="alert">
                  La condicion es falsa
                </div>
              ) */

              /* 
                if else if else
                numero --> numero <3
                      -->  numero >=3
                      -->  numero >=5
                      --> numero <8

              */

              /* numeroIf<3 ? <p>primer caso</p> : (numeroIf>=3 && numeroIf<5 ? <p>segundo caso</p>: <p>tercer caso</p>) */

              variableIf && numeroIf >= 10 && (
                <div class="alert alert-primary" role="alert">
                  La condicion se ha cumplido
                </div>
              )
            }
          </div>
          <h3>Sentencia switch</h3>
          <div>
            {llamarSwitch(5)}
            {/* numeroSwitch --> dependiendo del valor de la variable quiero que 
            pongáis un div alert u otro. Hacer 4-5 opciones */}
          </div>
          <h3>Sentencia for</h3>
          <div>
            <ul>{
              elementos.map(element=> { return (<li>{element}</li>)})
              }</ul>
          </div>
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
