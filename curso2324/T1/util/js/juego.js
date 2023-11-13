console.log(baraja);
let botonPedir = document.querySelector("#boton_pedir");
let botonIniciar = document.querySelector("#boton_iniciar");
let tapeteJugador = document.querySelector("#cartas_jugador");
let spanPuntosJ1 = document.querySelector("p#puntos_j1 span");

botonIniciar.addEventListener("click", () => {
  tapeteJugador.innerHTML = "";
  spanPuntosJ1.innerHTML = "";
});

botonPedir.addEventListener("click", (e) => {
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
});
