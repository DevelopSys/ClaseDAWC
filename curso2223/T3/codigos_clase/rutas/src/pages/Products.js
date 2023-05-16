import React from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../service/products_service";

const Products = () => {
  const products = getAllProducts();

  return (
    <div className="container">
      <div className="row">
        {products.map((e) => (
          <div className="col">
            <div
              id={e.id}
              className="card"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <img
                src={e.image}
                className="card-img-top"
                alt="..."
                style={{ width: "200px", alignSelf: "center", margin: "20px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <Link to={"/detail/" + e.id} className="btn btn-primary">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
