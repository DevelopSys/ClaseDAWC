import logo from "./logo.svg";
import "./App.css";
import Presentacion from "./components/Presentacion";
import Cuerpo from "./components/Cuerpo";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              REACT App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/elegir-producto"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Elegir producto
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/listado-productos"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Listado de productos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/carro-compras"
                    className="nav-link"
                    activeClassName="active"
                  >
                    carrito
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/home" element={<ComponenteHome />} />
          <Route path="/elegir-producto" element={<ComponenteListado />} />
          <Route path="/listado-productos" element={<ComponenteCompras />} />
          <Route path="/carro-compras" element={<ComponenteCarro />} />
          <Route path="*" element={<ComponenteHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
