console.log("Ejecución desde archivo llamado");
// /**/
// variables
// variable ámbito reducido --> existe donde este difinida

if (true) {
  let miNombre = "Borja";
  var miEdad = 30;
  console.log(miNombre);
}

console.log(miEdad);

let variable;
var variableVar;
const VARIABLE_COSNT = "CONSTANTE";

const ARRAYELEMENTOS = ["uno"];
//ARRAYELEMENTOS = [1, 2, 3, 4];
ARRAYELEMENTOS.push("Elemento nuevo");

const objetoUsuario = {};
objetoUsuario["elemento1"] = "loquesea";
objetoUsuario["elemento2"] = "loquesea";
objetoUsuario["elemento3"] = "loquesea";
console.log(objetoUsuario);
//console.log(ARRAYELEMENTOS);

let variableNumero = 2; // number
let variablePalabra = "Palabra"; // string
let variableLetra = "A"; // string
let variableNumeroDecimal = Math.PI; // number
let variableBoolean = true; // boolean
let variableFecha = new Date(); // object
let variableSinDefinir = undefined; // undefined
let variableNula = null; // null

console.log(typeof variableNumero);
console.log(typeof variablePalabra);
console.log(typeof variableLetra);
console.log(typeof variableNumeroDecimal);
console.log(typeof variableBoolean);
console.log(typeof variableFecha);
console.log(typeof variableSinDefinir);
console.log(typeof variableNula);

// primitivos y complejo
// memoria
// métodos

let miNombre = "Ejemplo";
console.log(typeof miNombre);
let miNombreComplejo = new String("Nombre complejo");
console.log(miNombreComplejo.charAt(0));
console.log(typeof miNombreComplejo);

// cambio de datos
let operandoUno = "8"; // string
//console.log(Number(operandoUno) + 9);
//console.log(+operandoUno + 9);
console.log(parseFloat(operandoUno) + 9);
//console.log(operandoUno + 9);

// métodos string

let fraseEjemplo =
  "Esto es una tutoría de la clase de Desarrollo de Aplicaciones Cliente del curso de DAW";
//console.log(fraseEjemplo.length);
//console.log(fraseEjemplo.charAt(fraseEjemplo.length - 1));
/*for (let index = 0; index < fraseEjemplo.length; index++) {
  console.log(fraseEjemplo.charAt(index));
}*/

/* for (const letra of fraseEjemplo) {
  console.log(letra);
} */

/* for (const key in fraseEjemplo) {
  console.log(fraseEjemplo.charAt(key));
} */

// foreach solo es aplicable para una variable de tipo coleccion -->Array

fraseEjemplo.split(" ").forEach((element, index) => {
  // la iteración de la colección --> cada letra
  console.log(`La palabra ${element} está en la posición ${index}`);
});

let fecha = new Date(); // fecha actual
let fechaNumero = new Date(9876545678909876546789);
let fechaMia = new Date(2020, 10, 1);

console.log(
  `${fecha.getDate()} \ ${fecha.getMonth()} \ ${fecha.getFullYear()} `
);
console.log(
  `${fechaNumero.getDate()} \ ${fechaNumero.getMonth()} \ ${fechaNumero.getFullYear()}`
);
console.log(
  `${fechaMia.getDate()} \ ${fechaMia.getMonth()} \ ${fechaMia.getFullYear()}`
);

console.log(`Fecha numero = ${fecha.getTime()}`);
console.log(`Fecha numero = ${fechaMia.getTime()}`);
console.log(`Fecha numero = ${fechaNumero.getTime()}`);
