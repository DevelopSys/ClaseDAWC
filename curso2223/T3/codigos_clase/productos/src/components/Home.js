import React, { useEffect, useState } from "react";
import { getAllProducts } from "../service/Productos";
import { Link } from "react-router-dom";

const Home = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    //console.log(getAllProducts());
    getAllProducts().then((e) => {
      setProductos(e);
    });

    //setProductos(getAllProducts());
  }, []);

  console.log(productos);

  //setProductos(getAllProducts());
  //console.log(productos);
  //getAllProducts();

  return (
    <div className="container">
      <div className="row">
        {productos.map((p, i) => {
          return (
            <div className="col" key={i}>
              <div className="card mb-3">
                <img src={p.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <Link
                      className="text-body-secondary"
                      to={"/filter/" + p.category}
                    >
                      {p.category}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
