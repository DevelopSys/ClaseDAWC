let numero = 3; // number
let numeroDecimal = 3.15; // number
let experiencia = true; // boolean
let nombre = "Borja"; // string
let asignaturas = ["PMDM", "DI", "DAWC"]; // object
let profesor = { nombre: "Borja", edad: 38, experiencia: true }; // object
let carnet = null; // null
let alumno; // undefined

console.log(typeof numero);
console.log(typeof numeroDecimal);
console.log(typeof experiencia);
console.log(typeof asignaturas);
console.log(typeof profesor);
console.log(typeof carnet);
console.log(typeof alumno);

let caracter = "5";
let numeroConvert = Number(caracter);
//parseInt(caracter)
console.log(numeroConvert); // 5
console.log(typeof numeroConvert); // number

caracter = "Borja";
numeroConvert = Number(caracter);
console.log(numeroConvert);

caracter = "5";
console.log(typeof caracter); // string
numeroConvert = +caracter;
console.log(typeof numeroConvert); // number

let caracterDecimal = "3.14";
let decimalConvert = parseFloat(caracterDecimal);
console.log(typeof caracterDecimal); // number

numeroDecimal = 3.14;
numeroEntero = parseInt(numeroDecimal);
console.log(numeroEntero); // 3
