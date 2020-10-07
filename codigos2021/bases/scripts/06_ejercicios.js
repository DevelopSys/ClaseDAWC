"use strict";
let fecha = new Date();
console.log(fecha.getDate());
console.log(fecha.getHours());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha);

let fechaConcreta = new Date();
fechaConcreta.setMonth(fecha.getMonth() - 1);

//let numero1 = Number(prompt("Introduce numero1"));
//let numero2 = Number(prompt("Introduce numero1"));

//if (isNaN(numero1) && isNaN(numero2));

/*
Dado el array = [1,2,3,4,5,6,7,8,9,10]
Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
Calcular la media de todos los elementos del array
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
Crea un objeto JSON llamado equipo que tenga los atributos de nombre (string), 
fundacion (number), estadio (string), posicion (number), plantilla (array string). 
Dale valor a cada uno de ellos.y muestra por consola todos los datos accediendo individualmente 
a cada uno de ellos
*/

let equipo = {
  nombre: "Barcelona",
  fundacion: 1890,
  estadio: "Camp Nou",
  posicion: 1,
  plantilla: [
    { nom: "ad", ape: "asd", dire: "asdasd" },
    { nom: "sdfsdf", ape: "asd", dire: "asdasd" },
    { nom: "xcvxcvxcv", ape: "asd", dire: "asdasd" },
    { nom: "uiy", ape: "asd", dire: "asdasd" },
  ],
  mostrarDatos: (nombre, anio) => {
    console.log(`${nombre} ${anio}`);
  },
};
console.log(equipo.nombre);
console.log(equipo["estadio"]);
//console.log(equipo.plantilla[1].nom);
equipo.plantilla.forEach((jugador, i, a) => {
  console.log(i + jugador.nom);
});
equipo.mostrarDatos(equipo.nombre, equipo.fundacion);

function misElementos(nombre, apellido) {
  console.log(typeof nombre);
}

misElementos(new String("asd"));
