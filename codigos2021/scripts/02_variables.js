// funcionalidad sobre HTML (DOM)
// capas presentacion HTML // CSS
// capa contenido --
// capa DOM (estructura HTML)
// capa BOM (navegador)

// ambito
var variableConVar = "es una variable var";
let variableConLet = "es una variable let";
const variableConstante = "es una constante";

//console.log("Segundo archivo .js");
console.log(variableConVar);
console.log(variableConLet);

console.log("Entro en el bloque");
if (true) {
  var otraConVar = "esto es otra variable con var";
  let otraConLet = "esto es una variable con let";
  console.log(otraConVar);
  console.log(otraConLet);
}

console.log("salgo del bloque");

console.log(this.otraConVar);
console.log(this.otraConLet);
//variableConstante = "nuevo valor";

if (true) {
  this.otraConVar;
}

// tipos de variable

let palabra = "palabra";
let numeroDecimal = 23;
let numeroFloat = 23.3;
let acierto = false;
let letra = "A";
let palabraObjeto = new String("palabra objeto");
let numeroObjeto = new Number(1);
let variable;
let varibleObjeto = { nombre: [{}, {}, {}], apellido: "asasd", edad: 23 };

console.log(palabra);
console.log(typeof palabra);

console.log(numeroFloat);
console.log(typeof numeroFloat);

console.log(letra);
console.log(typeof letra);

console.log(numeroObjeto);
console.log(typeof numeroObjeto);

console.log(palabraObjeto);
console.log(typeof palabraObjeto);

console.log(variable);

palabraObjeto = new String("palabra objeto");
console.log(palabraObjeto);
console.log(typeof palabraObjeto);
console.log(palabraObjeto.valueOf());
console.log(typeof palabraObjeto.valueOf());

let objetoCompleto = {
  nombre: "Borja",
  apellido: "Martin",
  mostrarDatos: () => {
    console.log(this.nombre);
  },
};

function ejemplo() {
  console.log("ejemplo");
}

let funcion = () => {
  console.log("ejemplo");
};

let unNumero = 43;
console.log(isNaN(unNumero));

let outerHeight = 1234567;
