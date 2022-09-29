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

const asignaturas = [
  "Desarrollo cliente",
  "Desarrollo Servidor",
  "Despliegue",
  "Diseño",
];

console.log(asignaturas[0]); // Desarrollo cliente
console.log(asignaturas[4]); // Diseño

console.log(asignaturas[asignaturas.length - 1]);

console.log("Construcción for normal");
for (let index = 0; index < asignaturas.length; index++) {
  const elemento = asignaturas[index];
  console.log(elemento);
}

console.log("Construcción for of");
for (const iterator of asignaturas) {
  // donde iterator es el elemento directamente
  console.log(iterator);
}

console.log("Construccion for in");
for (const key in asignaturas) {
  // donde key es la posición
  console.log(asignaturas[key]);
}

console.log("Construcción foreach");
asignaturas.forEach((item) => console.log(item));

asignaturas.forEach((item, index, array) =>
  console.log(`Elemento en la posición ${index} con un valor de ${item}`)
);

asignaturas[4] = "Diseño interfaces web";

const numeros = Array(10);
for (let index = 0; index < numeros.length; index++) {
  numeros[index] = parseInt(Math.random() * 10 + 1);
}

numeros.forEach((value) => console.log(value));

const equipos = ["Barcelona", "R. Madrid", "Atletico", "R. Betis"];

let elemento = equipos.find((element, index) => element.includes("R.")); // R. Madrid
console.log(elemento);

let elementosFiltrados = equipos.filter((value) => value.length > 8);
console.log(elementosFiltrados);
