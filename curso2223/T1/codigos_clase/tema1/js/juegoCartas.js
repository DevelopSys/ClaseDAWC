import carta from "./carta.js";
import {
  mostrarDatosCarta as mostar,
  cambiarDatosCarta as cambiar,
} from "./funcionesCarta.js";
// utilizar un objeto de tipo carta
let baraja = [];
baraja.push(new carta("1C", 1, "1C.png"));
baraja[0].mostrarDatos();
//mostrarDatosCarta(baraja[0]);
mostar(baraja[0]);
//cambiarDatosCarta(baraja[0]);
cambiar(baraja[0]);
