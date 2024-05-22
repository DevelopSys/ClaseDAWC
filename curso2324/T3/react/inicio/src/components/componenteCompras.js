import React, { useEffect, useState } from 'react'
import ComponenteCarro from './componenteCarro';


const ComponenteCompras = () => {

    const [productos, setProductos] = useState([]); // Inicializado como un array vacío

    const [compras, setCompras] = useState([]);

    async function lectura() {
        let resultadoJson = await fetch(`https://dummyjson.com/products`);
        let resultadoReal = await resultadoJson.json();

        setProductos(resultadoReal.products);
    }

    useEffect(() => {
        lectura();
    }, [compras]);

    return (
        <div className="App">
            <div className="container">

                <div className='row'>
                    <h2 className='text-center bg-success-subtle border-bottom'>LISTADO DE PRODUCTOS</h2>

                    {productos.map((producto) => {
                        return (
                            <div className='col' key={producto.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={producto.thumbnail} className="card-img-top" alt="Producto" />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.title}</h5>
                                        <p className="card-text">{producto.description}</p>
                                        <p className="card-text fs-3">{producto.price}€</p>
                                        <a href="#" className="btn btn-primary"
                                            onClick={() => {
                                                setCompras((element) => { return [...element, producto] });
                                            }}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {<ComponenteCarro compras={compras} />}

        </div>
    );
}

export default ComponenteCompras
