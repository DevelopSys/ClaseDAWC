import React from "react";

const Listado = (props) => {
  return (
    <>
      <h2>Detalles proyectos</h2>
      <div className="row">
        {props.proyects.map((data) => (
          <div class="card" style={{ width: "18rem;" }}>
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{data.nombre}</h5>
              <p class="card-text">
                {data.responsable} {data.presupuesto}
              </p>
              <ul>
                {data.equipo.map((integrante) => (
                  <li>{integrante}</li>
                ))}
              </ul>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listado;
