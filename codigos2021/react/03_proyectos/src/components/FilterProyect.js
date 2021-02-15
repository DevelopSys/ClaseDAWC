import React, { useState } from "react";

const FilterProyect = (props) => {
  const [filtro, setFiltro] = useState({
    nombre: "",
    responsable: "",
    presupuesto: 0,
  });

  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
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

  const handleInputs = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Busqueda de componente</h2>
      <div class="row g-2 align-items-center">
        <div class="col">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="filtrar por nombre"
            name="nombre"
            onChange={handleInputs}
          ></input>
        </div>
        <div class="col">
          <input
            type="text"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="filtrar por responsable"
            name="responsable"
            onChange={handleInputs}
          ></input>
        </div>
        <div class="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
            name="presupuesto"
            onChange={handleInputs}
          ></input>
        </div>
        <select
          className="col form-control"
          placeholder="selecciona tecnologia"
          name="tecnologia"
          onChange={handleInputs}
        >
          {tecnologias.map((tec) => {
            return <option>{tec}</option>;
          })}
        </select>
      </div>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={() => {
            setProyectosFiltrados(
              props.proyects.filter((element) => {
                return (
                  element.nombre == filtro.nombre &&
                  element.responsable == filtro.responsable &&
                  parseInt(element.presupuesto) > parseInt(filtro.presupuesto)
                );
              })
            );

            console.log(proyectosFiltrados);
          }}
        >
          Realizar busqueda
        </button>
      </div>
      <div className="row">
        {proyectosFiltrados.map((data) => (
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

export default FilterProyect;
