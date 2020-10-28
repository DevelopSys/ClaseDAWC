"use strict";

let nombreUsuario, botonPedir;
let baraja = [];
let palos = ["C", "D", "T", "P"];
let puntuacionJugador = 0;

window.addEventListener("load", () => {
  inicializar();
  iniciarBaraja();
  let usuario = prompt("Como te llamas");
  nombreUsuario.innerHTML = usuario + nombreUsuario.innerHTML;

  botonPedir.addEventListener("click", () => {
    //console.log(pedirCarta());
    //console.log({ baraja });
    let cartaPedida = pedirCarta();
    ponerCarta(cartaPedida);
    ponerPuntuacion(calcularValor(cartaPedida));
  });
});

function inicializar() {
  nombreUsuario = document.querySelector("#nombre_jugador");
  botonPedir = document.querySelector("#boton_pedir");
}

function iniciarBaraja() {
  let carta;
  for (let index = 0; index < palos.length; index++) {
    for (let indexN = 1; indexN < 14; indexN++) {
      //const element = array[index];

      if (indexN === 11) {
        carta = `J${palos[index]}`;
      } else if (indexN === 12) {
        carta = `Q${palos[index]}`;
      } else if (indexN === 13) {
        carta = `K${palos[index]}`;
      } else {
        carta = `${indexN}${palos[index]}`;
      }
      baraja.push(carta);
    }
  }
  baraja = _.shuffle(baraja);
  console.log(baraja);
}

function pedirCarta() {
  let carta = baraja.shift();
  return carta;
}

function ponerCarta(carta) {
  let nodoImagen = document.createElement("img");
  nodoImagen.src = `./assert/images/${carta}.png`;
  nodoImagen.className = "carta";
  document.querySelector("#cartas_jugador").append(nodoImagen);
}

function calcularValor(carta) {
  let valor = Number(carta.toString().substring(0, carta.length - 1));
  if (isNaN(valor)) {
    valor = 10;
  }
  return valor;
}

function ponerPuntuacion(puntuacion) {
  puntuacionJugador += puntuacion;
  document.querySelector("#puntuacion_jugador").innerHTML = puntuacionJugador;
  // puedo continuar cuando tengo < 21
  // cuando tengo 21 juega la banca
}
