import React, { useState } from "react";
import ContadorProyectos from "./ContadorProyectos";

const Tablero = () => {
  const [nombre, setNombre] = useState("");
  const [proyectoInd, setProyectoInd] = useState({
    nombre_proyecto: "",
    presupuesto: 0,
    responsable: "",
  });
  const [proyectos, setProyectos] = useState([
    {
      nombre_proyecto: "ejemplo primero",
      presupuesto: 0,
      responsable: "",
    },
  ]);

  let eventClickHandler = () => {
    setProyectos((e) => {
      return [...e, proyectoInd];
    }); // al array que esta (proyectos) añadele el proyecto
    setProyectoInd({});
    //document.querySelector("nombre") = nombre;
  };

  return (
    <div className="container">
      Proyectos
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            placeholder="introduce nombre"
            className="form-control"
            id="nombre_proyecto"
            onKeyUp={(e) => {
              setProyectoInd((e1) => {
                return { ...e1, [e.target.id]: e.target.value };
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Presupuesto
          </label>
          <input
            placeholder="introduce presupuesto"
            type="number"
            className="form-control"
            id="presupuesto"
            onChange={(e) => {
              setProyectoInd((e1) => {
                return { ...e1, [e.target.id]: e.target.value };
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Particiapante
          </label>
          <input
            onKeyUp={(e) => {
              //setParticipante(e.target.value);
              setProyectoInd((e1) => {
                return { ...e1, [e.target.id]: e.target.value };
              });
            }}
            placeholder="introduce nombre"
            className="form-control"
            id="responsable"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={eventClickHandler}
        >
          Agregar
        </button>

        <ContadorProyectos
          numero={proyectos.length}
          nombre={proyectos[0].nombre_proyecto}
        />

        <ul>
          {proyectos.map((e, i) => {
            return <li key={i}>{e.nombre_proyecto}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tablero;
