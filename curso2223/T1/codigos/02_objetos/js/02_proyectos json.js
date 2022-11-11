let proyecto = {
  nombre: "Desarrollo Web",
  presupuesto: 10000,
  participantes: ["Borja", "Juan", "Luis"],
  agregarParticiante: function (particiapante) {
    this.participantes.push(particiapante);
  },
};

/* let nombre = proyecto.nombre;
let presupuesto = proyecto.presupuesto;
let participantes = proyecto.participantes;
*/

let {
  nombre: nombreNuevo,
  presupuesto: presupuestoNuevo,
  participantes: participantesNuevos,
} = proyecto;
console.log(nombreNuevo);
console.log(presupuestoNuevo);
console.log(participantesNuevos);

/* console.log(proyecto["nombre"]);

proyecto.agregarParticiante("Diego");
console.log(proyecto.participantes);

console.log(proyecto.nombre);
console.log(proyecto.participantes[0]); */

function tratarProyecto({ nombre, presupuesto }) {
  console.log(
    `Del proyecto recibido, se ha destructurado el nombre: ${nombre} y el presupuesto ${presupuesto}`
  );
}

tratarProyecto(proyecto);

let participantes = ["Borja", "Juan", "Luis", "Jose"];

let [participante1, participante2, ...resto] = participantes;

console.log(participante1);
console.log(participante2);
console.log(resto);

const proyectosEmpresa = [
  {
    nombre: "Desarrollo Web",
    presupuesto: 10000,
    participantes: ["Borja", "Juan", "Luis"],
    agregarParticiante: function (particiapante) {
      this.participantes.push(particiapante);
    },
  },
  {
    nombre: "Desarrollo Java",
    presupuesto: 50000,
    participantes: ["Dani", "Igor", "Laura", "Tomas"],
    agregarParticiante: function (particiapante) {
      this.participantes.push(particiapante);
    },
  },
  {
    nombre: "Desarrollo BI",
    presupuesto: 100000,
    participantes: ["Aitor", "Dario", "Cristian", "Alejandro"],
    agregarParticiante: function (particiapante) {
      this.participantes.push(particiapante);
    },
  },
  ,
];

console.log(
  `El proyecto ${proyectosEmpresa[0].nombre} tiene ${proyectosEmpresa[0].participantes.length}`
);
proyectosEmpresa[1].agregarParticiante("Nuevo trabajador");
console.log(
  `El proyecto ${proyectosEmpresa[1].nombre} tiene ${proyectosEmpresa[1].participantes.length}`
);

console.log(
  `En la empresa hay ${
    proyectosEmpresa.filter((it) => it.presupuesto > 50000).length
  } proyectos que superan los 50000€ de presupuesto`
);

let objetoBase = {
  nombre: "base",
  valor: 1000,
};

objetoBase = { ...objetoBase, propiedadNueva: "Ejemplo" };
console.log(objetoBase);

let elementos = [1, 2, 3, 4, 5, 6, 7];
let elementosNuevos = [...elementos, 8, 9, 0];

console.log(elementosNuevos);

proyecto = {
  nombre: "Desarrollo Web",
  presupuesto: 10000,
  participantes: ["Borja", "Juan", "Luis"],
  agregarParticiante: function (particiapante) {
    this.participantes.push(particiapante);
  },
};

proyecto.participantes = [
  ...proyecto.participantes,
  { nombre: "BuevoIntegrante", apellido: "ApellidoNuevo" },
];
console.log(proyecto);
