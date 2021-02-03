import React from "react";

const AddProyect = () => {
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
            <option>React</option>
            <option>JS</option>
            <option>Angular</option>
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
        <button className="btn btn-primary">Agregar proyecto</button>
      </form>
    </>
  );
};

export default AddProyect;
