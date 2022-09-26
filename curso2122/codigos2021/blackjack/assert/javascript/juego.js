"use strict";

let nombreUsuario, botonPedir, botonNuevo, botonPlantarse;
let baraja = [];
let palos = ["C", "D", "T", "P"];
let puntuacionJugador = 0;
let puntuacionBanca = 0;

window.addEventListener("load", () => {
  inicializar();
  iniciarBaraja();
  let usuario = prompt("Como te llamas");
  nombreUsuario.innerHTML = usuario + nombreUsuario.innerHTML;

  botonPlantarse.addEventListener("click", () => {
    turnoBanca();
  });
  botonNuevo.addEventListener("click", () => {
    document.querySelector("#cartas_jugador").innerHTML = "";
    document.querySelector("#cartas_banca").innerHTML = "";
    document.querySelector("#puntuacion_jugador").innerHTML = 0;
    document.querySelector("#puntuacion_banca").innerHTML = 0;
    puntuacionJugador = 0;
  });
  botonPedir.addEventListener("click", () => {
    //console.log(pedirCarta());
    //console.log({ baraja });
    let cartaPedida = pedirCarta();
    ponerCarta(cartaPedida, "jugador");
    ponerPuntuacion(calcularValor(cartaPedida), "jugador");
  });
});

function inicializar() {
  nombreUsuario = document.querySelector("#nombre_jugador");
  botonPedir = document.querySelector("#boton_pedir");
  botonNuevo = document.querySelector("#boton_nuevo");
  botonPlantarse = document.querySelector("#boton_plantarse");
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

function ponerCarta(carta, turno) {
  let nodoImagen = document.createElement("img");
  nodoImagen.src = `./assert/images/${carta}.png`;
  nodoImagen.className = "carta";

  if (turno === "jugador") {
    document.querySelector("#cartas_jugador").append(nodoImagen);
  } else if (turno == "banca") {
    document.querySelector("#cartas_banca").append(nodoImagen);
  }
}

function calcularValor(carta) {
  let valor = Number(carta.toString().substring(0, carta.length - 1));
  if (isNaN(valor)) {
    valor = 10;
  }
  return valor;
}

function ponerPuntuacion(puntuacion, turno) {
  console.log(`${turno}`);

  if (turno === "jugador") {
    console.log("jugador");
    puntuacionJugador += puntuacion;
    document.querySelector("#puntuacion_jugador").innerHTML = puntuacionJugador;
    // puedo continuar cuando tengo < 21
    // cuando tengo 21 juega la banca
    setTimeout(() => {
      if (puntuacionJugador > 21) {
        alert("Has perdido");
        botonPedir.disabled = true;
      } else if (puntuacionJugador == 21) {
        //alert("Has ganado");
        //botonPedir.disabled = true;
      }
    }, 100);
  } else if (turno === "banca") {
    puntuacionBanca += puntuacion;
    document.querySelector("#puntuacion_banca").innerHTML = puntuacionBanca;
    // puedo continuar cuando tengo < 21
    // cuando tengo 21 juega la banca
    setTimeout(() => {
      if (puntuacionBanca > 21) {
        alert("Ha ganado");
        //botonPedir.disabled = true;
      } else if (puntuacionBanca == 21 && puntuacionJugador == 21) {
        alert("Has empatado");
        //botonPedir.disabled = true;
      } else if (puntuacionBanca >= 16 && puntuacionBanca < 21) {
        if (puntuacionBanca > puntuacionJugador) {
          alert("he perdido");
        } else if (puntuacionJugador > puntuacionBanca) {
          alert("he ganado");
        } else {
          alert("has empatado");
        }
      }
    }, 100);
  }
}

function turnoBanca() {
  // puntuacion <= 16
  while (puntuacionBanca <= 16) {
    let cartaPedida = pedirCarta();
    ponerCarta(cartaPedida, "banca");
    ponerPuntuacion(calcularValor(cartaPedida), "banca");
  }
}
