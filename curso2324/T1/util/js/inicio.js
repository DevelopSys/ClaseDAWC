// comentarios

let nombre;
if (true) {
  // ambito de bloque
  nombre = "Borja";
}
console.log(`Nombre desde fuera del if ${nombre}`);

if (true) {
  // ambito de clase
  var apellido = "Martin";
}

console.log(`Apellido desde fuera del if ${apellido}`);

let numero = 1; // Number
let numeroDecimal = 1.1; // Number
let booleano = true; // Boolean
let palabras = "Palabras"; // String
let letra = "P"; // String
let sinDefinir; // undefined
let nulo = null; // null
let fecha = new Date(); // Object --> Date

// si es numero o el resto
isNaN(booleano); // el (t o f) es nuermo
isNaN(numero); // el (t o f) es nuermo
if (numero instanceof Number) {
}

let arrayElementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10000];
console.log(arrayElementos[1]);
console.log(arrayElementos[arrayElementos.length - 1]);
//arrayElementos[0] = "hola";
arrayElementos[11] = 111111;
console.log(arrayElementos.length);
arrayElementos[11] = null;
console.log(arrayElementos.length);
console.log(arrayElementos);
console.log(arrayElementos[176]);

const arrayPalabras = ["uno", "dos", "tres"];
//Object.freeze(arrayPalabras);
arrayPalabras[3] = "cuat";
arrayPalabras.push("nueva", "otra", "cosa", "diferente");
console.log(arrayPalabras);
console.log(`El elemento eliminado es ${arrayPalabras.pop()}}`);
console.log(arrayPalabras);

console.log(`El elemento elininado de la lista es ${arrayPalabras.shift()}`);
arrayPalabras.unshift("inicio", "principio");
console.log(arrayPalabras);

//arrayPalabras = ["asd", "asd", "asd"];

/* for (let index = 0; index < arrayPalabras.length; index++) {
  const element = arrayPalabras[index];
  console.log(element);
} */

/* arrayPalabras.forEach((element) => {
  console.log(element);
}); */

let palabraEncontrada = arrayPalabras.find(
  (item, index, array) => item.length == 4
);

let coleccionFiltro = arrayPalabras.filter(
  (item, index, array) => item.length == 4
);

console.log(`El elemento dos existe? ${arrayPalabras.includes("dos")}`);
