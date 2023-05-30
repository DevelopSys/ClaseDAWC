import React, { useEffect, useState } from "react";
import { getProductById } from "../service/Productos";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getProductById(id).then((e) => {
      setProducto(e);
    });
  }, []);

  return (
    <div>
      <h1>Detalle del producto {producto.title}</h1>

      <div class="card mb-3">
        <img src={producto.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{producto.title}</h5>
          <p class="card-text">{producto.description}</p>
          <p class="card-text">
            <small class="text-muted">{producto.price}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
