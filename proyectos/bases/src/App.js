import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MiComponenteNombre from "./components/MiComponente";
import MiComponenteFuncional from "./components/MiComponenteFuncional";
import Header from "./components/header";
import Footer from "./components/footer";
import Contenido from "./components/contenido";
import Comunicacion from "./components/componenteComunicar";

function App() {
  return (
    <div>
      <Header titulo="Proyecto"></Header>
      <Comunicacion elemento="ejemplo"></Comunicacion>
      <Contenido></Contenido>
      <Footer fecha="2020"></Footer>
    </div>
  );
}

export default App;
