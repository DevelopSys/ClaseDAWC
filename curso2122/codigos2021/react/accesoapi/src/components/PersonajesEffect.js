import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

//  "http://stranger-things-api.herokuapp.com/api/v1/characters?perPage=11"
export const PersonajesEffect = () => {
  const consulta = useFetch(
    "https://stranger-things-api.fly.dev/api/v1/characters?perPage=5?page=1"
  );

  // datos y carga
  const { datos, carga } = consulta;

  const mostrarDatos = () => {
    return datos.map((personaje, index) => {
      return (
        <div
          className="col animate__animated animate__fadeInUp fadeInDown"
          key={index}
        >
          <div className="card" style={{ width: "18rem;" }}>
            <img src={personaje.photo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{personaje.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <h2>Personajes ST</h2>

      <div className="row">
        {carga ? (
          mostrarDatos()
        ) : (
          <div class="alert alert-primary animate__animated" role="alert">
            Cargando datos
          </div>
        )}
      </div>
    </>
  );
};
