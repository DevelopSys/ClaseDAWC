import React, { useState } from "react";
import Swal from "sweetalert2";
import Listado from "./Listado";
import Buscador from "./Buscador";
import Formulario from "./Formulario";

const Concecesionario = () => {
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
    let cocheBuscado = coches.find((item) => {
      return item.matricula == coche.matricula;
    });

    if (cocheBuscado == null) {
      setCoche((e) => {
        return { ...e, accesorios: accesorios };
      });
      setCoches((e) => {
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
    <div className="container">
      <div className="row">
        <div className="col">
          <Formulario listado={coches} />
        </div>
        <div className="col">
          <Buscador listado={coches} />
        </div>
      </div>
      <div className="row mt-4">
        <Listado listado={coches} contador={coche.length} />
      </div>
    </div>
  );
};

export default Concecesionario;
