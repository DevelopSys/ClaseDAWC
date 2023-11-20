let botonPedir = document.querySelector("#boton_pedir");
let botonReset = document.querySelector("#boton_reset");
let botonIniciar = document.querySelector("#boton_iniciar");
let botonGuardar = document.querySelector("#boton_guardar");
let botonBorrar = document.querySelector("#boton_borrar");
let botonRecuperar = document.querySelector("#boton_recuperar");
let tapeteJugador = document.querySelector("#cartas_jugador");
let spanPuntosJ1 = document.querySelector("p#puntos_j1 span");

botonIniciar.addEventListener("click", () => {
  tapeteJugador.innerHTML = "";
  spanPuntosJ1.innerHTML = "";
  crearBaraja();
});

botonReset.addEventListener("click", () => {
  /* tapeteJugador.childNodes.forEach((element) => {
    element.remove();
  }); */
  tapeteJugador.innerHTML = "";
  spanPuntosJ1.innerHTML = "";
});

botonPedir.addEventListener("click", (e) => {
  if (baraja.length == 0) {
    alert("no se puede iniciar, por favor crea la baraja");
  } else {
    // 1. me das una carta de la baraja
    let carta = baraja.pop();
    // 2. Agregar la carta sacada a la lista de cartas del jugador -> <img src="./util/images/8C.png" />
    // nodo img con el atributo src al div cartas_jugador
    let nodoImagen = document.createElement("img");
    nodoImagen.src = `./util/images/${carta.imagen}`;
    nodoImagen.style = "width: 20%;";

    tapeteJugador.appendChild(nodoImagen);

    // 3. Agrego los puntos de la carta al span del jugador
    spanPuntosJ1.textContent =
      Number(spanPuntosJ1.textContent) + carta.calcularValor();
  }
});

botonGuardar.addEventListener("click", (e) => {
  // guardar datos
  localStorage.setItem(
    "jugador",
    JSON.stringify({ nombre: "jugador1", puntuacion: 2 })
  );
  // recuperar datos
  // modificar datos
  // borrar datos
});

window.addEventListener("load", (e) => {
  let puntos = localStorage.getItem("puntuacion");
  spanPuntosJ1.textContent = puntos;
});

botonRecuperar.addEventListener("click", (e) => {
  let objetoRecuperado = JSON.parse(localStorage.getItem("jugador"));
  let { nombre, puntuacion } = objetoRecuperado;
  console.log(nombre);
  console.log(puntuacion);
});

botonBorrar.addEventListener("click", (e) => {
  localStorage.clear();
});
