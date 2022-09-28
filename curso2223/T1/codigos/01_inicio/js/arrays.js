const arrayConstructor = Array();
const arraySimbolos = [];

console.log(`El tamaño del array de constructor es ${arrayConstructor.length}`);
console.log(`El tamaño del array de constructor es ${arraySimbolos.length}`);

const arrayCompleto = [1, 2, 3, 4, 5, 6];
console.log(`El tamaño del array con elementos es ${arrayCompleto.length}`);

const arrayMultiple = [1, "prueba", new Date(), true, "A"];

const palabra =
  "Esto es un ejemplo de crear un array con contenido partiendo de una palabra";
const arrayPalabras = palabra.split(" ");
console.log(arrayPalabras);
