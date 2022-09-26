let salida = "Valor de la salida";
let mayor;
let edad = 1;
console.log("Ejemplo de salida por consola");
console.log(salida);
console.log(`Esto es un ejemplo de salida: ${mayor ? edad > 10 : edad < 10}`);

// operadores;

let operador1 = 2,
  operador2 = 2;
// resultado es 4
let suma = operador1 + operador2;
let mult = operador1 * operador2;
let resta = operador1 - operador2;
let div = operador1 / operador2;
let mod = operador1 % operador2;

let op1 = 4,
  op2 = 2;
console.log(op1 + op2);
//asd2;
// +=  -= *= /= %=
op1 += op2;
// op1 = op1 + op2;
op1++;
op1--;

// realacionales
/*
op1 = 2;
op2 = "2";
if (op1 === op2) {
  console.log("son iguales");
}

if (op1 != op2) {
}

// comparaciones

if (op1 > 0 || op2 > 1) {
}

// bucles

if (condition) {
} else {
}

// 0 a n
while (condition) {}

// 1 a n
do {} while (condition);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

//array.forEach((element, index, array) => {});*/

// int[] numeros = new int[10]
// int[] numeros = {1,2,3,4,5,6,7,8,9}

let arrayNumeros = new Array(10);
let arrayPalabras = [
  "elemento5",
  "elemento4",
  "elemento3",
  "elemento1",
  "elemento2",
];

console.log(arrayNumeros);
console.log({ arrayPalabras });
console.log(arrayPalabras.length);
// añado elemento a un array al final
let nuevaLong = arrayPalabras.push("elementoNuevo");
console.log(nuevaLong);
console.log("Todo el array sin los primeros");
console.log({ arrayPalabras });

// añado al principio
arrayPalabras.unshift("1", "3", "3", "5");

console.log("Todo el array con los primeros");
console.log({ arrayPalabras });

// elimino elemento de la ultima posición
let elemento = arrayPalabras.pop();
console.log(elemento);

console.log("Eliminando el último");
console.log({ arrayPalabras });

// elimino primer elemento

arrayPalabras.shift();
console.log("Eliminando el primero");
console.log({ arrayPalabras });

// elimino cualquier posición

//let borrado = arrayElementos.splice(1, 2);
//console.log({ borrado });
//console.log({ arrayElementos });

//console.log(arrayElementos.indexOf("tres"));
//arrayElementos.splice(arrayElementos.indexOf("tres"), 1);

let frase = "esto es un ejemplo";
//
arrayElementos = ["uno", "dos", "tres", "cuatro"];

arrayElementos.forEach((element, index, array) => {
  console.log(`${index} ${element}`);
});

// array Object[] cosas = {false, "asd",123}
let arrayCosas = [
  1,
  false,
  "palabra",
  12.3,
  () => {
    console.log("ejecucion de funcion array");
  },
  { nombre: "Borja", apellido: "Martin", edad: 18 },
];

arrayCosas.forEach((element) => {
  console.log(element);
});

//arrayCosas[4]();
let liga = [
  {
    nombre: "Barsa",
    anio: 1890,
    plantilla: [
      { nombre: "Messi", posicion: "Delantero" },
      { nombre: "Pique", posicion: "Defensa" },
    ],
  },
  {
    nombre: "Madrid",
    anio: 1900,
    plantilla: [
      {
        nombre: "Ramos",
        posicion: "Defensa",
        mostrar: (parametro) => {
          //console.log(`${nombre} `);
          parametro();
        },
      },
      {
        nombre: "Hazard",
        posicion: "Delantero",
        mostrar: () => {
          console.log(nombre);
        },
      },
    ],
  },
];
//console.log(liga[0].plantilla.length);
//console.log(arrayCosas[5].nombre);

liga[0].plantilla.forEach((element) => {
  console.log(element.mostrar());
});

//let arraydeArrays= [ [],[] ]
let cosas = { nombres: [], apellidos: [] };

//Math.random()*10;
