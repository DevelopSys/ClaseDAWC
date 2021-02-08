import { useState } from "react";
import "./App.css";
import AddProyect from "./components/AddProyect";
import ListProyects from "./components/ListProyects";

function App() {
  const [proyectos, setProyectos] = useState([
    {
      nombre: "React Telefonica",
      responsable: "asd",
      correo: "asd",
      presupuesto: 123,
      tecnologia: "",
      equipo: "asd",
      core: false,
    },
    {
      nombre: "Angular Vodafone",
      responsable: "asd",
      correo: "asd",
      presupuesto: 123,
      tecnologia: "",
      equipo: "asd",
      core: false,
    },
    {
      nombre: "JS Europa",
      responsable: "asd",
      correo: "asd",
      presupuesto: 123,
      tecnologia: "",
      equipo: "asd",
      core: false,
    },
    {
      nombre: "HTML Everis",
      responsable: "asd",
      correo: "asd",
      presupuesto: 123,
      tecnologia: "",
      equipo: "asd",
      core: false,
    },
  ]);

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
    </div>
  );
}

export default App;
