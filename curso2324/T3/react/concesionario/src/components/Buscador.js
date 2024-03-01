import React from "react";

const Buscador = ({ listado }) => {
  return (
    <div>
      {/* pintar todos los coches que estan agregados */}
      {listado.map((item, index) => {
        let imagen = "";

        switch (item.marca) {
          case "Ford":
            imagen =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/2560px-Ford_Motor_Company_Logo.svg.png";
            break;
          case "Audi":
            imagen =
              "https://graffica.info/wp-content/uploads/audi_logo_detail.gif";
            break;
          case "Fiat":
            imagen =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwNW1eZh7_WB21DhsK8jIhjrngHQb-3mzWz3uIRlu1bg7A1fzedPE91CQFFaIJsG34hY&usqp=CAU";
            break;
        }
        return (
          <div className="col" id={index}>
            <div className="card">
              <img src={imagen} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.marca}</h5>
                <h6 className="card-title">{item.modelo}</h6>
                <h6 className="card-title">{item.precio}</h6>
                <h6 className="card-title">{item.matricula}</h6>
                <a href="#" className="btn btn-primary">
                  Ver detalles
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Buscador;
