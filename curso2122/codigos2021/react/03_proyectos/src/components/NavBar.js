import React from "react";

const NavBar = ({ visualizacion }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Proyectos</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                onClick={() => {
                  //console.log("Pulsado");
                  //console.log(visualizacion);
                  visualizacion((elemento) => {
                    return {
                      ...elemento,
                      componenteTodos: !elemento.componenteTodos,
                    };
                  });
                }}
              >
                Ver todos
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                onClick={() => {
                  //console.log("Pulsado");
                  //console.log(visualizacion);
                  visualizacion((elemento) => {
                    return {
                      ...elemento,
                      componenteFiltro: !elemento.componenteFiltro,
                    };
                  });
                }}
              >
                Filtrar proyectos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
