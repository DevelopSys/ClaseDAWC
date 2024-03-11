import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ listado, modificacion }) => {
  const [precioBusqueda, setPrecioBusqueda] = useState(0);
  const [coche, setCoche] = useState({});
  const [coches, setCoches] = useState([]);
  const [cochesFiltrados, setCochesFiltrados] = useState([]);
  const [accesorios, setAccesorios] = useState([]);
  const [accesorio, setAccesorio] = useState("");

  let eventHandle = (e) => {
    setCoche((e1) => {
      return { ...e1, [e.target.id]: e.target.value };
    });
  };

  function agregarCoche() {
    /* cuando no se puede agregar? -> cuando hay uno con la misma matricula */
    let cocheBuscado = listado.find((item) => {
      return item.matricula == coche.matricula;
    });

    if (cocheBuscado == null) {
      setCoche((e) => {
        return { ...e, accesorios: accesorios };
      });
      modificacion((e) => {
        return [...e, coche];
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Coche agregado corretamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Coche con matricula duplicada",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <div>
      <h2>Formulario</h2>
      <input
        onKeyUp={(e) => {
          eventHandle(e);
        }}
        id="marca"
        className="form-control"
        type="text"
        placeholder="Por fvor introduce la marca"
      ></input>
      <input
        onKeyUp={(e) => {
          eventHandle(e);
        }}
        id="modelo"
        className="form-control"
        type="text"
        placeholder="Por fvor introduce el modelo"
      ></input>
      <input
        onKeyUp={(e) => {
          eventHandle(e);
        }}
        id="precio"
        className="form-control"
        type="text"
        placeholder="Por fvor introduce el precio"
      ></input>
      <input
        onKeyUp={(e) => {
          eventHandle(e);
        }}
        id="matricula"
        className="form-control"
        type="text"
        placeholder="Por fvor introduce la matricula"
      ></input>

      <p>Selecciona accesorios</p>

      <select
        className="form-select"
        onChange={(e) => {
          setAccesorio(e.target.value);
        }}
      >
        <option>Camaras</option>
        <option>Techo</option>
        <option>Paquete sport</option>
      </select>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          /* comprobar la lista si el accesorio esta*/

          // el elemento que iteras es igual al elemento que esta en el select
          let elemento = accesorios.find((item) => {
            return item == accesorio;
          });

          elemento == null
            ? /* meter en el array el elemento seleccionado dentro del select */
              setAccesorios((item) => {
                return [...item, accesorio];
              })
            : /* saltar un aviso de que el elemento ya lo tienes en la lista */
              Swal.fire({
                position: "center",
                icon: "error",
                title: `El elemento ya está en la lista`,
                showConfirmButton: false,
                timer: 1500,
              });
        }}
      >
        Agrgar accesorio
      </button>

      <p>El numero de accesorios del coche es: {accesorios.length}</p>

      <button
        className="btn btn-primary"
        onClick={(e) => {
          agregarCoche();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default Formulario;
