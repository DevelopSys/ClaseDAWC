"use strict";

function funcionNormal(p1, p2) {
  console.log(`Ejeución; ${p1} ${p2}`);
}

function funcionDefecto(
  nombre = "por defecto nombre",
  apellido = "por defecto apellido"
) {
  console.log(`Nombre : ${nombre} Apeliido: ${apellido}`);
}

function funcionDefectoIF(nombre, apellido) {
  if (typeof apellido == "undefined" && typeof nombre == "undefined") {
    apellido = "valor por defecto para apellido";
    nombre = "valor por defecto nombre";
  }
  console.log(`Nombre : ${nombre} ${apellido}`);
}

function funcionDefectoOR(nombre, apellido) {
  apellido = apellido || "valor por defecto apellido";
  nombre = nombre || "valor por defecto nombre";
  console.log(`Nombre : ${nombre} Apellido: ${apellido}`);
}

// solo funciona con funciones completas
function invisibles() {
  console.log("Ejecución de invisibles");
  console.log(arguments);
}

function funcionConRetorno(param1, param2) {
  let suma = param1 + param2;
  return suma;
}

//console.log(funcionConRetorno(1, "asdasdasd"));

function funcionObjeto() {
  return { nombre: "Borja", apellido: "Martin" };
}

// crear una funcion que tenga como paramts datos de una persona
//y cree el objeto

function crearObjeto(n1, a1, t1) {
  return {
    nombre1: n1,
    apellido2: a1,
    telefono3: t1,
  };
}

function crearObjetoEspecial(nombre, apellido, telefono) {
  return {
    nombre,
    apellido,
    telefono,
  };
}

function obtenerDatosObjeto({ nombre, estadio, liga }) {
  console.log(nombre);
  console.log(estadio);
  console.log(liga);
}

//console.log(obtenerDatosObjeto(equipo));

let baloncesto = { nombre: "Marnresa", acb: "loquesea" };

let funcionFlecha = (param1, param2) => console.log(`${param1} ${param2}`);

//funcionFlecha("asd", 123);

let funcionFlechaParam = (p1, p2) => console.log(`${p1} ${p2}`);
let funcionFlechaMulti = (p1, p2) => {
  console.log(`${p1} ${p2}`);
  console.log("Segunda linea de la función");
};
let funcionFlechaInvisible = (...elementos) => {
  let sumatorio = 0;
  console.log("Invisibles");
  console.log(elementos);
  elementos.forEach((element) => {
    //console.log(element);
    if (!isNaN(element) && typeof element == "number") {
      //console.log(element);
      sumatorio += element;
    }

    console.log(sumatorio);
  });
};

//funcionFlechaInvisible(4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 48, false, "asdda");

let funcionFlechaRetorno = (p1, p2) => {
  return p1 + p2;
};

function funcionUno(param) {
  console.log("ejecución función uno");
  return funcionDos(param);
}

function funcionDos(param) {
  console.log("ejecución función dos");
  return param * 2;
}

//let suma = 123 + funcionUno(123);
//console.log(suma);

function funcionCallback(paramsCallback, funcion) {
  funcion(paramsCallback);
}

/*funcionCallback(1, function name(param) {
  console.log(param * 2);
});*/

// 123 --> paramsCallback
/*
(param) => {
  console.log(param * 2);
} --> funcion
*/

setTimeout(() => {
  console.log("ejecucion postergada");
}, 5000);

let cuenta = 10;

/*let intervalo = setInterval(() => {
  console.log(`${cuenta--}`);
  if (cuenta == 0) {
    clearInterval(intervalo);
  }
}, 2000);*/

funcionCallback(123, (param) => {
  console.log(param * 2);
});

//funcionFlecha();
//funcionFlechaParam(1, 2);
//funcionFlechaParam("asdasd", "asdasdasd");
//funcionFlechaMulti(1, "asdfg");
//funcionFlechaInvisible("dfghjkjhgf", "asd", false);
//console.log(funcionFlechaRetorno(1, 2));
//funcionNormal("Borja", 1, "asdasd", 12);
//funcionDefecto("Borja", "Martin");
//funcionDefectoIF("Borja");
//funcionDefectoOR("Borja", "Martin");
//invisibles("invisble", "segundo", "tercero", 1);
//console.log(funcionConRetorno(2, "asdfghj"));
//let objeto = funcionObjeto();
//console.log({ objeto });
//let objeto = crearObjeto("Borja", "Martin", 123);
//let objeto = crearObjetoEspecial("Borja", "Martin", 123);
//console.log(objeto);

//obtenerDatosObjeto(equipo);
//obtenerDatosObjeto(baloncesto);

const equipo = {
  nombre: "Barcelona",
  fundacion: 1890,
  estadio: "CampNou",
  liga: "Española",
  historico: true,
};

//console.log(equipo['fundacion']);

//Object.freeze(equipo);
equipo.jugadores = 1;

console.log(Object.getOwnPropertyNames(equipo));
console.log(Object.values(equipo));

console.log(equipo);
