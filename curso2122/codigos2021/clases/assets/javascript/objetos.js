"use strict";

let objeto = {
  nombre: "Borja",
  apellido: "Martin",
  mostrarDatos: () => {
    console.log("esto es una funcion");
  },
};
//console.log(objeto);
//console.log(crearObjeto("Borja", "Martin"));
function crearObjeto(nombre, apellido) {
  return { nombre, apellido };
}

// constructor
function crearPersona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.mostrarDatos = () => {
    console.log(`Los datos de la persona son ${nombre} ${apellido}`);
  };
}

class Persona {
  // variables let var const
  // this.nombre del constructor las crea
  // constructores
  nombre;

  constructor(nombre = "por defecto", apellido = "por defecto") {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = 0;
  }

  static constructorStatic(nombre, apellido) {
    return new Persona(nombre, apellido);
  }

  // super()

  // metodos

  mostrarDatos() {
    return `Los datos de la persona son ${this.nombre} ${this.apellido}`;
  }

  set setNombre(nombreNuevo) {
    this.nombre = nombreNuevo;
  }

  get getNombre() {
    return this.nombre;
  }
}

//let persona = new crearPersona("Borja", "Martin");
//console.log(persona);
//persona.mostrarDatos();

class Trabajador extends Persona {
  constructor(nombre, apellido, salario = 0, horas = 0) {
    // los param nombre apellido del const de Persona
    super(nombre, apellido);
    this.salario = salario;
    this.horas = horas;
  }

  mostrarDatos() {
    return (
      super.mostrarDatos() + ` horas: ${this.horas} salario: ${this.salario}`
    );
  }
}

let persona = new Persona("Borja", "Martin");
let personaStatic = Persona.constructorStatic("Luis", "Herrera");
let personaTrabajador = new Trabajador();
let personaTrabajadorDos = new Trabajador("Pepe", "Herrera");

console.log(personaTrabajadorDos.mostrarDatos());
//console.log(personaTrabajador.mostrarDatos());
//persona.setNombre = "Luis";
//console.log(persona.getNombre);
//persona.setNombre("luis");
//console.log(persona.getNombre());
//console.log(persona.nombre);
//console.log(persona);
//persona.mostrarDatos();
