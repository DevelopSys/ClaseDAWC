import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header titulo="Reservas de pistas" />
    </div>
  );
}

export default App;
