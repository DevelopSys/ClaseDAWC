function unaFucion() {
  console.log("Función sencilla");
}

function unaFuncionConParametros(nombre, apellido) {
  console.log(`${nombre} ${apellido}`);
}

function unaFuncionParametrosDefectoOR(obligatorio, defecto) {
  defecto = defecto || "valor por defecto";
  console.log(`${obligatorio} ${defecto}`);
}

function unaFuncionParametrosDefectoIF(obligatorio, defecto) {
  if (typeof defecto == "undefined") {
    defecto = "valor defecto";
  }
  console.log(`${obligatorio} ${defecto}`);
}

function unaFuncionParametrosDefecto(obligatorio, defecto = "defecto") {
  console.log(`${obligatorio} ${defecto}`);
}

function invisibles() {
  console.log(arguments[0]);
}

function retorno() {
  if (arguments != "undefined") return arguments[0] + arguments[1];
  else return "no hay parametros";
}

function funcionUno() {
  console.log("Ejecutada función UNO");
  return funcionDos();
}

function funcionDos() {
  console.log("Ejecutada función DOS");
}

function funcionTres(funcion) {
  console.log("Ejecutada función TRES");
  funcion();
}
function funcionCuatro() {
  console.log("Ejecutada función CUATRO");
}

function funcionConArrow(params, param2) {
  param2();
  function ejecutar() {
    console.log(params);
  }
  ejecutar();
}

function funcionCallBack(paramentro, funcion) {
  funcion(paramentro);
}

unaFucion();
unaFuncionConParametros("Borja", "Martin");
unaFuncionParametrosDefectoOR("Borja", "tiene algo");
unaFuncionParametrosDefectoIF("Borja", "algo");
unaFuncionParametrosDefecto("Borja");
invisibles("una", 2, false);
console.log(retorno(1, 2));
console.log(retorno(1, "2"));
console.log(retorno());
funcionTres(funcionCuatro);
funcionConArrow(1, () => {
  console.log("ejecución con flecha");
});
(function () {
  console.log("autoejecutada");
})();

funcionCallBack("Borja", (param) => {
  console.log(`${param} es una ejecución de callback`);
});

let paramentros = (...parametros) => {
  console.log(parametros);
};

paramentros(1, 2, false);

function crearObjeto(nombre, apellidos) {
  return {
    nombre,
    apellidos,
  };
}

let persona = (nombre, apellido) => ({ nombre, apellido });
console.log(persona("Borja", "M"));

let elementos = (...args) => {
  return args;
};

let [nombre, apellido, edad] = elementos("Borja", "Martin", "Herrera");

console.log("Construccion");
console.log({ nombre, apellido, edad });

function asincrona() {
  setTimeout(() => {
    funcionCallBack("Borja", (param) => {
      console.log(`${param}: ejecución de callback con timeout`);
    });
  }, 2000);
}
console.log(crearObjeto("Borja", "Martin"));

asincrona();

let objeto = {
  nombre: "Borja",
  apellido: "Martin",
  edad: 18,
  mostraDatos: () => {
    console.log(objeto.nombre);
  },
};
objeto.mostraDatos();

console.log(Object.entries(objeto));
let parClaveValor = Object.entries(objeto);
parClaveValor.forEach((element) => {
  console.log(element[0]);
});
console.log(objeto);
delete objeto.edad;
console.log(objeto);
