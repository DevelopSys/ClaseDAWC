function nommbreFuncion(param1, param2) {
  // arguments
  console.log(`La funcion tiene ${arguments.length}`);
  console.log(param1);
  console.log(param2);
  console.log("Sacando paramentros");
  for (let index = 0; index < arguments.length; index++) {
    console.log(arguments[index]);
  }
}

// funcion anonima
var funcionVariable = function (param1, param2) {
  // arguments
  console.log(param1 + param2);
};

// funcion flecha
var funcionFlecha = (...parametros) => {
  // no hay parametro invisible
  console.log(parametros[0]);
  console.log("El número de parametros es: " + parametros.length);
};

function funcionDefecto(param1, param2) {
  param1 = param1 || 0;
  //param2 = param2 || 10;
  if (typeof para2 === "undefined") {
    param2 = 10;
  }
  console.log("El primer paramente es " + param1);
  console.log("El segundo paramente es " + param2);
}

function funcionDefectoDirecta(param1 = 6, param2 = 9, param3 = 0) {
  console.log("El primer paramente es " + param1);
  console.log("El segundo paramente es " + param2);
  console.log("El tercer paramente es " + param3);
}

//funcionDefectoDirecta(1, 4);

function sumaObligatorios(operando1, operando2 = requerido()) {
  if (arguments.length > 2) {
    requerido();
  } else {
    console.log(`La suma de los dos paramentros es ${operando1 + operando2}`);
  }
}

function requerido() {
  throw new SyntaxError("parámetro requerido");
}

//nommbreFuncion(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//funcionVariable(1, 4, 3, 4, 5, 6, 7, 8, 9);
// funcionFlecha(5, 4, 5, 6, 7, 8, 9, 0);
//funcionDefecto(4, 5);
//funcionDefecto(4);
//funcionDefecto();

//funcionDefectoDirecta(4, 7);
//funcionDefectoDirecta(4);
//funcionDefectoDirecta();

//sumaObligatorios(7, 9);
//sumaObligatorios(7, 7, 78, 6, 5, 4);

function funcionRetorno(param1, param2) {
  return param2(param1);
}

for (let index = 0; index < 11; index++) {
  console.log(
    funcionRetorno(
      index,
      (param1) => param1 * 4 // return implicito
    )
  );
}

var elementos = ["1", "2", "3", "4", "44", "444", "55"];
//elementos.forEach(element => console.log(element));

console.log(
  elementos.filter((valor, index, array) => 
     valor.length == 2).length
);
