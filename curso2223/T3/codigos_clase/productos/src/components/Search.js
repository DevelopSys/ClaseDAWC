import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsByCat } from "../service/Productos";

const Search = () => {
  let { cat } = useParams();

  const [productos, setProductos] = useState([]);
  const [contenedorInput, setContenedorInput] = useState("");

  useEffect(() => {
    getProductsByCat(cat).then((e) => {
      setProductos(e);
    });
  }, []);

  return (
    <div className="container">
      <input
        //value={contenedorInput}
        placeholder="capturar datos"
        onKeyUp={(e) => {
          //setContenedorInput(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          console.log(contenedorInput);
          setContenedorInput("");
        }}
      >
        Buscar
      </button>
      <div className="row">
        {productos.map((e) => {
          return (
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src={e.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{e.title}</h5>

                  <Link class="btn btn-primary" to={"/detail/" + e.id}>
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
