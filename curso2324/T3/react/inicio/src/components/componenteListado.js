//rfce --snippet --

import React, { useState, useEffect } from 'react';

function ComponenteListado() {

  const [producto, setProductos] = useState([]); // Inicializado como un array vacío para meter los objetos producto
  const [contador, setContador] = useState(1);

  async function lectura() {
    let resultadoJson = await fetch(`https://dummyjson.com/products/${contador}`);
    let resultadoReal = await resultadoJson.json();

    setProductos(resultadoReal);
  }

  useEffect(() => {
    lectura();
  }, [contador]);

  return (
    <div className="App">
      <div className="container">
        <div className='row mb-5'>
          <div className='col-3 mx-auto'>
            <button type="button" className="btn btn-primary me-2" onClick={() => setContador(contador - 1)}>Anterior</button>
            <button type="button" className="btn btn-success" onClick={() => setContador(contador + 1)}>Siguiente</button>
          </div>
        </div>

        <div className='row'>
          <h2 className='text-center bg-light border-bottom'>ELECCION DE PRODUCTO  {contador}</h2>

          {contador > 0 ? (
            <div className='col-3 mx-auto m-5' key={producto.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={producto.thumbnail} className="card-img-top" alt="Producto" />
                <div className="card-body">
                  <h5 className="card-title">{producto.title}</h5>
                  <p className="card-text">{producto.description}</p>
                  <p className="card-text">{producto.price}</p>
                  <a href="#" className="btn btn-primary">Detalle</a>
                </div>
              </div>
            </div>
          ) :(
            
                  <h5 className="card-title">Sin titulo</h5>
                  
          )}
        </div>
      </div>
    </div>
  );
}

export default ComponenteListado;

