import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes, Link } from "react-router-dom";
import ComponenteUno from "./components/ComponenteUno";
import ComponenteDos from "./components/ComponenteDos";
import ComponenteHome from "./components/ComponenteHome";
import ComponenteComunicar from "./components/ComponenteComunicar";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Componente home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/compouno"
                >
                  Componente uno
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" Link to="/compodos">
                  Componente dos
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" Link to={"/comunicar/" + contador}>
                  Comunicar datos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Decrementar
      </button>
      <Routes>
        <Route element={<ComponenteUno />} path="/compouno"></Route>
        <Route path="/compodos" element={<ComponenteDos />}></Route>
        <Route path="/comunicar/:id?" element={<ComponenteComunicar />}></Route>
        <Route path="*" element={<ComponenteHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
