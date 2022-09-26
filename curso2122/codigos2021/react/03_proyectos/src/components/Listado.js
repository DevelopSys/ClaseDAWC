import React, { useEffect, useState } from "react";

const Listado = (props) => {
  useEffect(() => {
    // cuando algo del componente es recargado

    fetch("")
      .then((d) => {
        return d.json();
      })
      .then((d) => {
        setConsulta(d.results);
      });
    // cuando el componente es despilado
    return () => {};
  }, []);

  const [consulta, setConsulta] = useState([]);

  return (
    <>
      <h2>Detalles proyectos</h2>

      {consulta.map(e=>{})}
      <div className="row">
        {props.proyects.map((data) => (
          <div class="card" style={{ width: "18rem;" }}>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listado;
