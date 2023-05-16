import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../service/products_service";

const Detail = () => {
  // usePArams --> JSON con todos los parametros pasados --> id
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.description}</p>
              <p class="card-text">
                <small class="text-body-secondary">{product.price}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          navigate("/products");
        }}
        className="btn btn-primary"
      >
        Volver atras
      </button>
    </div>
  );
};

export default Detail;
