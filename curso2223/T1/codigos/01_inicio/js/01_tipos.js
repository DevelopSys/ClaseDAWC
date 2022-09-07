let numeroEntero = 30;
let numeroDecimales = 3.14;
console.log(`El valor de numeroEntero es ${numeroEntero}`);
console.log(`El valor de numeroDecimales es ${numeroDecimales}`);

let nombre = "Borja";
let profesion = "Profesor";

console.log(`Mi nombre es ${nombre}`);
console.log("Mi prpofesion es la de " + profesion);

console.log(`La suma de 6 y 7 es ${6 + 7}`);

console.log("Ejemplo de impresión\nCon salto de línea");

let decision = false;
console.log(`El resultado de la decisión es ${false}`);
decision && console.log("Es una decision correcta ");

decision
  ? console.log("La decisión ha sido correcta")
  : console.log("La decisión ha sido falsa");

let sinValor = null;
let sinDefinir;
console.log(`El valor de la primera variable es ${sinValor}`);
console.log(`El valor de la segunda variable es ${sinDefinir}`);

// ejemplo de declaradión de comentario de una sola línea

/*
Ejemplo de comentario de una línea multiple
donde podemos escribir más de una cosa
*/

let arrayDatos = [1, 2, 3, 4, 5, 6];
let arrayIgualdad = [1, 2, 3, 4, 5, 6];

let numeroUno = 2;
let numeroDos = 2;

console.log(numeroUno == numeroDos); // true
console.log(arrayDatos == arrayIgualdad); // false

let fecha = new Date();
console.log(fecha);

let numeroDecimal = Math.PI; // declarado number
numeroEntero = parseInt(numeroDecimal);

console.log(typeof numeroDecimal);
console.log(typeof numeroEntero);
