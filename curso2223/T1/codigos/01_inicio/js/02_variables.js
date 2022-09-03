if (true) {
  let numero = 20;
  var numeroScope = 30;
  console.log(`Impresión de la variable let dentro del bloque ${numero}`);
}

//console.log(`Impresión de la variable let fuera del bloque ${numero}`);
console.log(`Impresión de la variable var fuera del bloque ${numeroScope}`);

const elementoInmutable = 20;
//elementoInmutable = 30;

const arrayInmutable = Object.freeze([1, 2, 3, 4, 5]);
// agregar un elemento al array en la parte final
//arrayInmutable.push(1);
console.log(arrayInmutable);
// [1,2,3,4,5,1]

// arrayInmutable = [1, 4, 7];
// Uncaught TypeError: Assignment to constant variable.

const persona = Object.freeze({
  nombre: "Borja",
  apellido: "Martin",
  edad: 38,
});
console.log(persona);
// {nombre: 'Borja', apellido: 'Martin', edad: 38}
//persona["expeciancia"] = true;
console.log(persona);
// {nombre: 'Borja', apellido: 'Martin', edad: 38, experiencia: true}

let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra.indexOf("R")); // 0
console.log(palabra.lastIndexOf("r")); // 0

console.log(palabra.replaceAll("o", "a"));

console.log(palabra.includes("programacion")); // false
console.log(palabra.includes("Java")); // true

console.log(palabra.length);

console.log(palabra[1]); // e
console.log(palabra.charAt(1)); // e
console.log(palabra.codePointAt(1)); // 101

console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());

let palabraSub = palabra.substring(0, 11);
console.log(palabraSub);

let palabrasSplit = palabra.split(" ");
console.log(palabrasSplit);

let palabraEspacios = "   Repositorio dedicado a JavaScript    ";
console.log(palabraEspacios.trim()); // Repositorio dedicado a JavaScript
