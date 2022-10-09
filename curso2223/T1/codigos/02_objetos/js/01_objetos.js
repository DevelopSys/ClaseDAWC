// objetos literales

const proyecto = {
  nombre: "Proyecto Vodafone",
  tecnologia: "React",
  responsable: "",
  presupuesto: 100000,
  participantes: ["participante1", "participante2"],
  asignacion: (jefeProyecto) => {
    proyecto.responsable = jefeProyecto;
  },
};

/* console.log(`El presupuesto del proyecto es de ${proyecto.presupuesto}`);
console.log(
  `La tecnología con la que trabaja el proyecto es ${proyecto["tecnologia"]}`
);

proyecto.responsable.length > 0
  ? console.log(`El respinsable es ${proyecto.responsable}`)
  : console.log("Aún no hay asignado");

proyecto.asignacion("Juan Francisco");

console.log(proyecto);

proyecto.responsable.length > 0
  ? console.log(`El respinsable es ${proyecto.responsable}`)
  : console.log("Aún no hay asignado");

proyecto.presupuesto += 50000;
console.log(proyecto.presupuesto);

proyecto.participantes.push("Participante nuevo");
console.log(proyecto);
*/

proyecto.fechaVencimiento = new Date(2023, 5, 25);

const proyectoCopia = Object.assign({}, proyecto);

console.log(proyectoCopia);
