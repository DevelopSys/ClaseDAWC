import React, { Component } from "react";
import Proyecto from "./proyecto";

class Contenido extends Component {
  state = {
    productos: [
      { id: 1, name: "Proyecto REACT", presupesto: 3000 },
      { id: 2, name: "Proyecto ANGULAR", presupesto: 4000 },
      { id: 3, name: "Proyecto JAVA", presupesto: 5000 },
      { id: 4, name: "Proyecto PHP", presupesto: 6000 },
    ],
  };
  render() {
    const proyectos = this.state.productos;
    console.log(proyectos);
    return (
      <div>
        <h2>
          Los proyectos que se han manejado durante el curso son los siguientes:
          {proyectos.map((elemento) => {
            return (
              <Proyecto
                nombre={elemento.name}
                key={elemento.key}
                presupuesto={elemento.presupesto}
              />
            );
          })}
        </h2>
        <Proyecto />
      </div>
    );
  }
}

export default Contenido;
