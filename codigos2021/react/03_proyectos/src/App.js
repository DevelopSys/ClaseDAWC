import "./App.css";
import AddProyect from "./components/AddProyect";
import ListProyects from "./components/ListProyects";

function App() {
  return (
    <div className="container mt-4">
      <h1>Aplicación de gestión de proyectos</h1>
      <div className="row mt-4">
        <div className="col-8">
          <AddProyect />
        </div>
        <div className="col-4">
          <ListProyects />
        </div>
      </div>
    </div>
  );
}

export default App;
