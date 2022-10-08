function funcionVacia() {}
console.log(
  "Esto es un ejemplo de función que no recibe por parámetros absolutamente nada"
);

funcionVacia();

function funcionPrimaria(elementoUno) {
  console.log(
    `Función que recibe por parámetros un elemento cuyo valor es ${elementoUno}`
  );
}
funcionPrimaria("valor");

function funcionAdicionales(argumentoUno) {
  console.log(`El parámetros pasado es ${argumentoUno}`);
}

funcionAdicionales("Uno", "Dos");

function sumaValores(operadorUno, operadosDos) {
  return operadorUno + operadosDos;
}

console.log(`El resultado de la suma es ` + sumaValores(4, 9));

function requerido() {
  throw new SyntaxError("parámetro requerido");
}

function sumaObligatorios(operandoUno, operandoDos = requerido()) {
  console.log(
    `La suma de los valores ${operandoUno} y ${operandoDos} es: ${
      operandoUno + operandoDos
    }`
  );
}

sumaObligatorios(10, 8); // funciona y el resultado es 18
//sumaObligatorios(2); // falla y salta una excepción

function funcionArguments(param1, param2, param3 = 2) {
  console.log(`Los valores pasados son ${param1}\n${param2}\n${param3}`);
  console.log(`El número de parámetros pasados es ${arguments.length}`); // me devuelve 2
}

funcionArguments(1, 4);

const funcionFlecha = (...args) => {
  console.log(args.length);
};

const sumaRetorno = (op1, op2) => op1 + op2;

const sumaRetornoDos = (op1, op2) => {
  sumaValor = op1 + op2;
  return sumaValor;
};

console.log(sumaRetorno(1, 2)); // 3
console.log("Con return");
console.log(sumaRetornoDos(1, 2)); // 3
