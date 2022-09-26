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

  const [proyecto, setProyecto] = useState({
    nombre: "",
    responsable: "",
    correo: "",
    presupuesto: 0,
    tecnologia: "",
    equipo: [],
    core: false,
  });

  const [integrante, setIntegrante] = useState("");

  const [equipo, setEquipo] = useState([]);

  const handleIntegrante = () => {
    //setEquipo([...equipo, integrante]);
    setProyecto({ ...proyecto, equipo: [...proyecto.equipo, integrante] });
    setIntegrante("");
  };

  const handleInputs = ({ target }) => {
    if (target.name === "core") {
      setProyecto({ ...proyecto, [target.name]: target.checked });
    } else {
      setProyecto({ ...proyecto, [target.name]: target.value });
    }
  };

  // {nombre: "",responsable:"",correo:"",presupuesto:123,tecnologia:"",equipo=["Borja","Luis","Pedro","Juan"],core:true}

  return (
    <>
      <h2>Agregar proyecto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre proyecto</label>
          <input
            type="text"
            className="form-control"
            onChange={handleInputs}
            name="nombre"
            value={proyecto.nombre}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre responsable</label>
          <input
            type="texto"
            className="form-control"
            onChange={handleInputs}
            name="responsable"
            value={proyecto.responsable}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Correo responsable</label>
          <input
            type="email"
            className="form-control"
            onChange={handleInputs}
            name="correo"
            value={proyecto.correo}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Presupuesto</label>
          <input
            type="number"
            className="form-control"
            onChange={handleInputs}
            name="presupuesto"
            value={proyecto.presupuesto}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Tecnologíaa</label>
          <select
            className="form-control"
            name="tecnologia"
            onChange={handleInputs}
            value={proyecto.tecnologia}
          >
            {tecnologias.map((tecnologia, index) => (
              <option key={index}>{tecnologia}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Componente</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setIntegrante(e.target.value);
            }}
            name="equipo"
            value={integrante}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              integrante.length > 0
                ? handleIntegrante()
                : alert("Por favor mete algo en el integrante");
            }}
          >
            Agregar componente
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProyecto({ ...proyecto, equipo: equipo });
            }}
          >
            Validar equipo
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();

              setProyecto({
                ...proyecto,
                equipo: proyecto.equipo.filter((data) => {
                  return data === "Borja";
                }),
              });
            }}
          >
            Quitar componentes
          </button>
        </div>

        <ul>
          {proyecto.equipo.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleInputs}
            name="core"
            checked={proyecto.core}
          ></input>
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
              return [...valor_anterior, proyecto];
            });

            setProyecto({
              nombre: "",
              responsable: "",
              correo: "",
              presupuesto: 0,
              tecnologia: "",
              equipo: [],
              core: false,
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
