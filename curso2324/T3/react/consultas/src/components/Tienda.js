import React, { useEffect, useState } from "react";

const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [contador, setContador] = useState(1);
  useEffect(() => {
    consultaProducto(contador);
  }, [
    // lo que se va a modificar para que se ejecute la funcion definida
    contador,
  ]);

  async function consulta() {
    let resultado = await fetch("https://dummyjson.com/products");
    let productos = await resultado.json();
    setProductos(productos.products);
  }

  async function consultaProducto(contador) {
    let resultado = await fetch(`https://dummyjson.com/products/${contador}`);
    let producto = await resultado.json();
    setProducto(producto);
  }

  //consulta();

  return (
    <div>
      <h1>Productos completos</h1>
      <div className="row">
        <button
          className="btn btn-primary col"
          onClick={(e) => {
            //console.log(contador);
            if (contador == 1) {
              console.log("No hay menos productos");
            } else {
              setContador(contador - 1);
            }
          }}
        >
          Anterior
        </button>
        <button
          className="btn btn-secondary col"
          onClick={(e) => {
            setContador(contador + 1);
          }}
        >
          Siguiente
        </button>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <img src={producto.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text">{producto.description}</p>
              <a href="#" className="btn btn-primary">
                Ver detalle
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
