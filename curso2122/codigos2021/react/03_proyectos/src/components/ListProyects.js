import React from "react";

const ListProyects = (props) => {
  //console.log(props.proyects);
  return (
    <>
      <h2>Listado de proyectos</h2>
      <ul className="list-group">
        {props.proyects.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">REPSONABLE</th>
              </tr>
            </thead>

            <tbody>
              {props.proyects.map((pro, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{pro.nombre}</td>
                    <td>{pro.responsable}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="alert">No hay proyectos añadidos</div>
        )}
      </ul>
    </>
  );
};

export default ListProyects;
