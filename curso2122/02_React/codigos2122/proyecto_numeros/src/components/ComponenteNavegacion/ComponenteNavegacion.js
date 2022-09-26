import React from "react";

const ComponenteNavegacion = ({ modificacion }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Visualización</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(ev) => {
                  modificacion((anterior) => {
                    return {
                      ...anterior,
                      componente_uno: { visualizacion: true },
                    };
                    /* modificacion({
                      ...anterior,
                      componente_uno: { visualizacion: true },
                    }); */
                  });
                }}
              >
                Componente contador
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(ev) => {
                  modificacion((anterior) => {
                    return {
                      ...anterior,
                      componente_dos: { visualizacion: !anterior.componente_dos.visualizacion },
                    };

                    /* modificacion({
                      ...anterior,
                      componente_dos: { visualizacion: true },
                    }); */
                  });
                }}
              >
                Componente juego
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(ev) => {
                  modificacion((anterior) => {
                    return {
                      componente_uno: { visualizacion: false },
                      componente_dos: { visualizacion: false },
                    };
                    /*modificacion({
                      componente_uno: { visualizacion: false },
                      componente_dos: { visualizacion: false },
                    });*/
                  });
                }}
              >
                Ocultar todos
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default ComponenteNavegacion;
