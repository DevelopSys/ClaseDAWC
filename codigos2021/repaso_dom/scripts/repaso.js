"use strict";

window.addEventListener("load", () => {
  let contenedor = document.querySelectorAll("div");
  let contenedorUno = document.querySelector("div");
  contenedorUno = document.querySelector(".container");
  contenedorUno = document.querySelector("#elemento_root");
  //console.log(contenedor);

  let nodoTrabajo = document.querySelector("#nodo_trabajar");

  let nodoAnadir = document.createElement("div");

  //nodoAnadir.setAttribute("backgroundColor", "rgb(233,233,56)");
  //nodoAnadir.style.backgroundColor = "rgb(233,233,56)";
  nodoAnadir.classList.toggle("claseUno");
  nodoAnadir.classList.toggle("claseUno");
  nodoAnadir.innerHTML = "<p>Ejemplo de parrafo en div añadido</p>";

  nodoTrabajo.append(nodoAnadir);

  let boton = document.querySelector("#botonPulsar");
  boton.addEventListener("click", (e) => {
    console.log("boton pulsado");
    console.log(e);
  });

  let tamanio = document.querySelector("#tamanio_tweet");
  let input = document.querySelector("#input_text");
  input.addEventListener("keyup", (e) => {
    console.log("tecla pulsada");
    console.log(e.key);
    tamanio.innerHTML = `${input.value.length}/255`;
  });

  function botonPulsado() {
    nodoTrabajo.removeChild(nodoAnadir);
  }
});
