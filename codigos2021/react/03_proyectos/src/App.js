import { useState } from "react";
import "./App.css";
import AddProyect from "./components/AddProyect";
import Listado from "./components/Listado";
import ListProyects from "./components/ListProyects";

function App() {
  const [proyectos, setProyectos] = useState([]);

  //setProyectos([...proyectos,{nombre:"asdasd",responsable:"asd",presupuesto:123123}])

  return (
    <div className="container mt-4">
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
      <div className="row">
        <Listado proyects={proyectos} />
      </div>
    </div>
  );
}

export default App;
