// function
// ()=>{} --> callback --> asincronia

function funcionIncio() {
  console.log("Función sin parametros");
}

function funcionParametos(param1, param2, param3) {
  if (param2 == null) {
    console.log("Parametro 2 null");
  }
  console.log(`Los parametros son ${param1} ${param2} ${param3}`);
}

function funcionFantasma() {
  console.log(`La cantidad de argumentos son: ` + arguments.length);
  console.log("Y los argumentos son: ");
  // sacar todos los argumentos????
  /* arguments.forEach((element) => {
    console.log(element);
  }); */
  for (let index = 0; index < arguments.length; index++) {
    console.log(arguments[index]);
  }
}

function funcionMezcla(param1) {
  console.log(`La cantidad de argumentos son: ` + arguments.length);
  console.log("Y los argumentos son: ");
  for (let index = 0; index < arguments.length; index++) {
    console.log(arguments[index]);
  }
}

function funcionRetorno(param1, param2) {
  return param1 + param2;
}

function funcionesOptativos(param1, param2 = 0) {
  // param2==null ? salida cuando es true : salida cuando es false
  // param2==null && salida cuando es true
  /* if (param2 == null) {
    param2 = 0;
  } else {
    param2 = 10;
  } */
  // param2 == null ? (param2 = 0) : (param2 = 10);
  // param2 == null && (param2 = 0);
  console.log(param1);
  console.log(param2); // --> 0
}
function funcionesOptativosDos(
  param1,
  param2 = 0,
  param3,
  param4 = "hola",
  param5 = true
) {
  console.log(`Parametro 1: ${param1}`);
  console.log(`Parametro 2: ${param2}`);
  console.log(`Parametro 3: ${param3}`);
  console.log(`Parametro 4: ${param4}`);
  console.log(`Parametro 5: ${param5}`);
}
function funcionCallback(param1, param2, param3) {
  param1(param2, param3);
}

funcionCallback(
  (param1, param2) => {
    console.log(param1, param2);
  },
  10,
  19
);

// (parametros) => {cuerpo}
// definida
let funcion = (param1) => console.log("Ejecucion funcion de flecha " + param1);
let funcionSuma = (param1, param2) => param1 + param2;
let funcionMultiplicar = function () {
  let cosa = 3;
  this.cosa;
};
// funcion("parametro");
// console.log(funcionSuma(4, 5));

// funcionIncio();
// funcionParametos(1, "Hola", false);
// funcionParametos(1); // Los parametros son 1 undefined undefined
// funcionParametos(1, null, null); // Los parametros son 1 null null
// funcionParametos(); // Los parametros son undefined undefined undefined
// funcionFantasma(1, 2, 3, 4, "Hola");
// funcionFantasma(1, 2);
// funcionMezcla("Primero", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // La cantidad de argumentos 11
// funcionMezcla("Primero", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // La cantidad de argumentos 2
// funcionMezcla("Segundo");
// 7,16
// console.log(funcionRetorno(funcionRetorno(1, 6), funcionRetorno(10, 6))); // 23
// funcionesOptativos(9, 7);
// funcionesOptativos(9, 90); // 9 undefined
// funcionesOptativosDos("Primero parametro", 2, "Tercero", 5);
