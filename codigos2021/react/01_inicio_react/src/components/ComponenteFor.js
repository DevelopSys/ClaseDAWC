import React from "react";
import PropTypes from "prop-types";

const ComponenteFor = (props) => {
  console.log(props.numeroFor);
  console.log(props.titulo);
  let estiloCard = {
    width: "18rem",
    background: "",
    color: "",
    fontSize: "20px",
  };

  let elemento = document.querySelector(".card");
  console.log(elemento);

  let equipos = ["Barcelona", "Madrid", "Atleti", "Sevilla", "Valencia"];
  let equiposLigas = [
    { nombre: "Barcelona", liga: "Española", posicion: 1 },
    { nombre: "Milan", liga: "Italiana", posicion: 1 },
    { nombre: "Manchester", liga: "Inglesa", posicion: 1 },
    { nombre: "PSG", liga: "Francesa", posicion: 1 },
  ];

  return (
    <>
      <h2>
        {props.titulo} {props.numeroFor}
      </h2>
      <p>La funcionalidad del For ess</p>
      <div>
        {
          /*equipos.map((data, index) => (
            <li key={index}>{data}</li>
          ))*/

          equiposLigas.map(({ nombre, liga }) => {
            return (
              <div className="card" style={estiloCard}>
                <div className="card-body">
                  <h5 className="card-title">{nombre}</h5>
                  <p className="card-text">{liga}</p>
                </div>
              </div>
            );
          })
        }
        <ul>
          {equipos.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

ComponenteFor.propTypes = {
  numeroFor: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
};

ComponenteFor.defaultProps = {
  numeroFor: 0,
  titulo: "Componente For",
};

export default ComponenteFor;
