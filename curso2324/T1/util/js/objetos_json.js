let proyecto = {
  nombre: "Proyecto react",
  duracion: 120,
  presupuesto: 10000,
  responsable: "",
  integrantes: [
    { nombre: "Borja", puesto: "Responsable", correo: "bmartinh@correo.com" },
    { nombre: "Juan", puesto: "Desarrollador", correo: "juan@correo.com" },
    { nombre: "Pedro", puesto: "Desarrollador", correo: "juan@correo.com" },
    { nombre: "Jose", puesto: "Desarrollador", correo: "juan@correo.com" },
  ],
  mostrarDatos: function () {
    console.log(`Nombre ${this.nombre}`);
    console.log(`Duracion ${this.duracion}`);
    console.log(`Responsable ${this.responsable}`);
    console.log(`Presupuesto ${this.presupuesto}`);
    console.log(`Integrantes ${this.integrantes.length}`);
  },
  asignarResponsable: function (responsable) {
    this.responsable = responsable;
  },
};

/* proyecto.integrantes.push({
  nombre: "asdasdasd",
  puesto: "asdadsasd",
  correo: "asdasdasd",
}); */

proyecto.integrantes = [
  ...proyecto.integrantes,
  { nombre: "asdasdasdasd", correo: "asdasdasd" },
];

proyecto = { ...proyecto, ejemplo: "caracteristica nueva" };
console.log(proyecto);

let [participanteUno, participanteDos, ...restante] = proyecto.integrantes;

console.log(participanteUno);
console.log(participanteDos);
console.log(restante);

let {
  nombre: nombreDiferente,
  duracion: duracionDiferente,
  presupuesto: presupuestoDiferente,
} = proyecto;
console.log(nombreDiferente);
console.log(duracionDiferente);
console.log(presupuestoDiferente);

let proyectoBase = {
  nombre: "",
  duracion: 0,
  presupuesto: 0,
  responsable: "",
  integrantes: [{ nombre: "base" }],
  mostrarDatos: function () {
    console.log(`Nombre ${this.nombre}`);
    console.log(`Duracion ${this.duracion}`);
    console.log(`Responsable ${this.responsable}`);
    console.log(`Presupuesto ${this.presupuesto}`);
    console.log(`Integrantes ${this.integrantes.length}`);
  },
  asignarResponsable: function (responsable) {
    this.responsable = responsable;
  },
};

let proyectoAngular = Object.create(proyectoBase);
proyectoAngular.nombre = "Proyecto Angular";
proyectoAngular.presupuesto = 100000;
proyectoAngular.integrantes.push({
  nombre: "Borja",
  puesto: "Responsble",
  correo: "correo@gmail.com",
});
let proyectoReact = Object.create(proyectoBase);
proyectoReact.nombre = "Proyecto React";
proyectoReact.presupuesto = 500000;
proyectoReact.integrantes.push({
  nombre: "Juan",
  puesto: "Responsble",
  correo: "correo@gmail.com",
});
let proyectoVue = Object.create(proyectoBase);
proyectoVue.nombre = "Proyecto VUE";
proyectoVue.presupuesto = 600000;
proyectoVue.integrantes.push({
  nombre: "Pedro",
  puesto: "Responsble",
  correo: "correo@gmail.com",
});

let proyectos = [];
proyectos.push(proyectoAngular);
proyectos.push(proyectoVue);
proyectos.push(proyectoReact);

/*proyectos.forEach((item) => {
  console.log(item);
  /* item.integrantes.foreach((integrante) => {
    console.log(integrante.nombre);
  }); 
});
*/

//proyecto.asignarResponsable("Luis");
//console.log(proyecto.mostrarDatos());

/*
class Proyecto{
    nombre = "React"
    duracion = 120
    presupuesto = 10000
    integrantes = [new Persona(),new Persona()]
    
    constructor(){

    }



}
*/
