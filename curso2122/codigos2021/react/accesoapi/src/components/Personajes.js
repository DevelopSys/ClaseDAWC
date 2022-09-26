import React, { useEffect, useState } from "react";
import { PersonajesMensaje } from "./PersonajesMensaje";

export const Personajes = () => {
  const [visible, setVisible] = useState(true);
  const [otro, setOtro] = useState(1);
  const [personajes, setPersonajes] = useState([]);
  let url =
    "http://stranger-things-api.herokuapp.com/api/v1/characters?perPage=" +
    otro;

  const consumoAPI = async () => {
    let datos = await fetch(url);
    let datosJSON = await datos.json();
    /*let datosJSON;
    fetch(url)
      .then((data) => data.json())
      .then((data) => (datosJSON = data));*/

    //console.log(datosJSON);
    setPersonajes(datosJSON);
    setOtro((e)=>e+1);
  };

  //consumoAPI();

  useEffect(() => {
    console.log("Ejecución inicial");
    //consumoAPI();
  }, []);

  useEffect(() => {
    console.log("Ejecución lanzada desde contador");
  }, [visible]);

  useEffect(() => {
    console.log("Ejecución lanzada desde otro");
    consumoAPI();
  }, [otro]);

  return (
    <>
      <h2>Personajes Stranger Things</h2>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            //console.log("Mostrando personajes");
            setVisible(!visible);
          }}
        >
          Ver personajes
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOtro(otro + 1);
          }}
        >
          Ver Episodios
        </button>
      </div>
      {/*       {visible && <PersonajesMensaje />}
       */}{" "}
      <div className="row">
        {personajes.map((personaje) => {
          return (
            <div className="col">
              <div className="card" style={{ width: "18rem;" }}>
                <img
                  src={personaje.photo}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{personaje.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
