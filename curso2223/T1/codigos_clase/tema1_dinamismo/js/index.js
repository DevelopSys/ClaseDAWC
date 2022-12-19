class Carta {
  valor;
  imagen;
  texto;

  constructor(valor, texto) {
    this.valor = valor;
    this.texto = texto;
    this.imagen = `images/${texto}.png`;
  }
}

let arrayCartas = [
  new Carta(1, "1C"),
  new Carta(1, "1T"),
  new Carta(1, "1D"),
  new Carta(1, "1P"),
  new Carta(1, "4C"),
  new Carta(1, "4T"),
  new Carta(1, "5D"),
  new Carta(1, "4P"),
];

let botonBorrar = document.querySelector("#boton_borrar");
let botonBuscar = document.querySelector("#boton_buscar");
let botonAgregar = document.querySelector("#boton_agregar");
let cartas = document.querySelector("#cartas");
let todasCartas = document.querySelectorAll("#cartas img");
let inputLista = document.querySelector("#input_lista");
botonAgregar.addEventListener("click", (event) => {
  // se ejecutará cuando hay click
  //console.log(event);
  //console.log("Pulsación completa");
  let cartaSacada = arrayCartas.shift();
  let imagen = document.createElement("img");
  imagen.src = cartaSacada.imagen;
  imagen.classList.add("carta");
  console.log(cartaSacada.imagen);
  cartas.appendChild(imagen);
});
botonBuscar.addEventListener("click", (event) => {
  let cartasJugador = document.querySelectorAll("#cartas img");
  cartasJugador.forEach((element) => {
    console.log(element.src);
  });
});
botonBorrar.addEventListener("click", (event) => {
    
});
