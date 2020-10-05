"use strict";

function funcionNormal(p1, p2) {
  console.log(`Ejeución; ${p1} ${p2}`);
}

function funcionDefecto(nombre, apellido = "por defecto") {
  console.log(`Nombre : ${nombre} ${apellido}`);
}

function funcionDefectoIF(nombre, apellido) {
  if (typeof apellido == "undefined") {
    apellido = "valor por defecto";
  }
  console.log(`Nombre : ${nombre} ${apellido}`);
}

function funcionDefectoOR(nombre, apellido) {
  apellido = apellido || "valor por defecto";
  console.log(`Nombre : ${nombre} ${apellido}`);
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

function funcionObjeto() {
  return { nombre: "Borja", apellido: "Martin" };
}

// crear una funcion que tenga como paramts datos de una persona
//y cree el objeto

function crearObjeto(n1, a1, t1) {
  return {
    nombre: n1,
    apellido: a1,
    telefono: t1,
  };
}

function crearObjetoEspecial(nombre, apellido, telefono) {
  return {
    nombre,
    apellido,
    telefono,
  };
}

function obtenerDatosObjeto({ nombre, estadio, acb }) {
  console.log(nombre);
  console.log(estadio);
  console.log(acb);
}

let funcionFlecha = () => console.log("Ejecución desde flecha");
let funcionFlechaParam = (p1, p2) => console.log(`${p1} ${p2}`);
let funcionFlechaMulti = (p1, p2) => {
  console.log(`${p1} ${p2}`);
  console.log("Segunda linea de la función");
};
let funcionFlechaInvisible = (...elementos) => {
  console.log("Invisibles");
  elementos.forEach((element) => {
    console.log(element);
  });
};

let funcionFlechaRetorno = (p1, p2) => {
  return p1 + p2;
};

//funcionFlecha();
//funcionFlechaParam(1, 2);
//funcionFlechaParam("asdasd", "asdasdasd");
//funcionFlechaMulti(1, "asdfg");
//funcionFlechaInvisible("dfghjkjhgf", "asd", false);
console.log(funcionFlechaRetorno(1, 2));
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

let equipo = {
  nombre: "Barcelona",
  fundacion: 1890,
  estadio: "CampNou",
  liga: "Española",
  historico: true,
};

let baloncesto = { nombre: "Marnresa", acb: "loquesea" };

//obtenerDatosObjeto(equipo);
//obtenerDatosObjeto(baloncesto);
