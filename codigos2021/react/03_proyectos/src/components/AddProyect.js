import React, { useState } from "react";

const AddProyect = (props) => {
  const [tecnologias, setTecnologias] = useState([
    "React",
    "Angular",
    "Vue",
    "JS",
    "PHP",
    "HTML",
    "Java",
    "Python",
    "C#",
    ".NET",
  ]);

  return (
    <>
      <h2>Agregar proyecto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre proyecto</label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre responsable</label>
          <input type="texto" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Correo responsable</label>
          <input type="email" className="form-control"></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Presupuesto</label>
          <input type="number" className="form-control"></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Tecnologíaa</label>
          <select className="form-control">
            {tecnologias.map((tecnologia, index) => (
              <option key={index}>{tecnologia}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Componente</label>
          <input type="text" className="form-control"></input>
          <button>Agregar componente</button>
          <button>Validar equipo</button>
        </div>

        <ul>
          <li>asdasdasd</li>
        </ul>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"></input>
          <label className="form-check-label">Proyecto core</label>
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            //console.log("pulsado");
            // quiero modificar la lista de proyectos agregarle uno nuevo
            // necesito ?? nombre:"EJEMPLO"
            // necesito ??  no puedo -->(necesito el sitio donde agregarlo) o la forma de agregarlo
            // valor_nuevo = valor_anterior + nuevo [...valor_anterior, nuevo_elemento]
            props.setProyect((valor_anterior) => {
              return [...valor_anterior, { nombre: "Proyecto añadido" }];
            });
          }}
        >
          Agregar proyecto
        </button>
      </form>
    </>
  );
};

export default AddProyect;
