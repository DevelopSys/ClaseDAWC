let palos = ["C", "D", "P", "T"];
let baraja = [];

let botonIniciar = document.querySelector("#boton-iniciar");
let botonVer = document.querySelector("#boton-ver");
let botonSacar = document.querySelector("#boton-aleatorio");
let cartasJugador = document.querySelector("#cartas-jugador");

botonSacar.addEventListener("click", () => {
  // el string con el nombre de la carta 8C
  //sacarCarta();
  let carta = sacarCarta();
  let imagen = document.createElement("img");
  imagen.className = "carta";
  imagen.src = `utils/images/${carta}.png`;

  cartasJugador.appendChild(imagen);
  calcularValor(carta);

  if (baraja.length == 0) {
    botonSacar.disabled = true;
  }
});

botonIniciar.addEventListener("click", () => {
  iniciarBaraja();
  baraja = _.shuffle(baraja);
});

botonVer.addEventListener("click", () => {
  console.log(baraja);
});

function calcularValor(carta) {
  let valor = carta.toString().substring(0, carta.length - 1);
  if (isNaN(valor)) {
    if (valor == "J") {
      valor = 11;
    } else if (valor == "Q") {
      valor = 12;
    } else if (valor == "K") {
      valor = 13;
    }
  }
  console.log(valor);
}

function iniciarBaraja() {
  for (let index = 1; index < 14; index++) {
    for (let index2 = 0; index2 < palos.length; index2++) {
      if (index < 11) {
        baraja.push(`${index}${palos[index2]}`);
      } else if (index == 11) {
        baraja.push(`J${palos[index2]}`);
      } else if (index == 12) {
        baraja.push(`Q${palos[index2]}`);
      } else if (index == 13) {
        baraja.push(`K${palos[index2]}`);
      }
    }
  }
}

function sacarCarta() {
  //console.log(baraja.pop());
  let carta = baraja.pop();
  return carta;
}
