let palos = ["C", "D", "P", "T"];
let baraja = [];
let jugadores = [];
let turno = false;

let botonIniciar = document.querySelector("#boton-iniciar");
let botonVer = document.querySelector("#boton-ver");
let botonSacar = document.querySelector("#boton-aleatorio");
let botonPlantarse = document.querySelector("#boton-plantarse");
let cartasJugador = document.querySelector("#cartas-jugador");
let cartasMaquina = document.querySelector("#cartas-maquina");
let puntuacionJugador = document.querySelector("#puntuacion_jugador");
let puntuacionMaquina = document.querySelector("#puntuacion_maquina");

let nombreJugador = prompt("Introduce tu nombre");
document.querySelector("#nombre_jugador").textContent = nombreJugador;
jugadores.push(new jugador(nombreJugador));
jugadores.push(new jugador("maquina"));

console.log(jugadores);
botonSacar.addEventListener("click", () => {
  ponerCarta(sacarCarta());

  if (baraja.length == 0) {
    botonSacar.disabled = true;
  }
});

botonIniciar.addEventListener("click", () => {
  botonIniciar.disabled = true;
  iniciarBaraja();
  baraja = _.shuffle(baraja);
});

botonVer.addEventListener("click", () => {
  console.log(baraja);
});

botonPlantarse.addEventListener("click", () => {
  botonSacar.disabled = true;
  botonPlantarse.disabled = true;
  turno = true;
  // la maquina empieza a jugar
  setInterval(() => {
    // saca una carta la maquina y la pone en su sitio
    // la carta que acaba de sacar la maquina
    ponerCarta(sacarCarta());
  }, 2000);
});

function iniciarBaraja() {
  for (let index = 1; index < 14; index++) {
    for (let index2 = 0; index2 < palos.length; index2++) {
      if (index < 11) {
        baraja.push(new carta(`${index}${palos[index2]}`));
      } else if (index == 11) {
        baraja.push(new carta(`J${palos[index2]}`));
      } else if (index == 12) {
        baraja.push(new carta(`Q${palos[index2]}`));
      } else if (index == 13) {
        baraja.push(new carta(`K${palos[index2]}`));
      }
    }
  }
}

function sacarCarta() {
  //console.log(baraja.pop());
  let carta = baraja.pop();
  return carta;
}

function ponerCarta(carta) {
  let imagen = document.createElement("img");
  imagen.className = "carta";
  imagen.src = carta.getImagen;

  if (turno) {
    cartasMaquina.appendChild(imagen);
    jugadores[1].setPuntuacion(carta.getValor);
    puntuacionMaquina.textContent = jugadores[1].getPuntuacion;
  } else {
    cartasJugador.appendChild(imagen);
    jugadores[0].setPuntuacion(carta.getValor);
    puntuacionJugador.textContent = jugadores[0].getPuntuacion;
  }
}


// Si juego yo
  // obligado a continuar jugando si tengo menos que 15
  // si me planto con menos de 21, la mñaquina empieza a jugar
  // si saco 21, automaticamente me planto y juega la máquina
  // si saco más de 21 pierdo y juega la máquina automáticamente

// la máquina juega
  // obligado a continuar jugando si tiene menos de 15
  // si tiene mas de 15 se planta (obligatorio)
  // si la maquina saca mas de 21 ha perdido

// puntuaciones 
  // gana quien se quede mas cerca de 21
  // empate a igualdad de cartas
  // empate a igualdad de 21

// una vez decidido las puntuaciones. ¿Quieres jugar otra partida?
  // Si se vacían las cartas, se genera otra baraja, se reinician las puntuaciones 
  // y se habilitan los botones
  // Si le digo que no, la pagina se queda como está