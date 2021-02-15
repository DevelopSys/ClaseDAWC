import { useState } from "react";
import "./App.css";
import AddProyect from "./components/AddProyect";
import FilterProyect from "./components/FilterProyect";
import Listado from "./components/Listado";
import ListProyects from "./components/ListProyects";
import NavBar from "./components/NavBar";

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [visualizacion, setVisualizacion] = useState({
    componenteAdd: true,
    componenteTodos: true,
    componenteFiltro: false,
  });

  //setProyectos([...proyectos,{nombre:"asdasd",responsable:"asd",presupuesto:123123}])

  return (
    <div className="container mt-4">
      <NavBar visualizacion={setVisualizacion} />
      <h1>Aplicación de gestión de proyectos</h1>
      <h2>El número de proyectos actuales es de: {proyectos.length}</h2>

      <div className="row mt-4">
        <div className="col-8">
          <AddProyect setProyect={setProyectos} />
        </div>

        <div className="col-4">
          <ListProyects proyects={proyectos} />
        </div>
      </div>

      {visualizacion.componenteTodos && (
        <div className="row">
          <Listado proyects={proyectos} />
        </div>
      )}

      {visualizacion.componenteFiltro && (
        <div className="row">
          <FilterProyect proyects={proyectos} />
        </div>
      )}
    </div>
  );
}

export default App;
