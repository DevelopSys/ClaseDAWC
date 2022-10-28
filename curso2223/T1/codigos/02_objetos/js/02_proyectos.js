class Proyecto {
  participantes = Array();

  constructor(nombre, presupuesto) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
  }

  mostrarDatos() {
    console.log("los datos del proyecto actual son:");
    console.log(`Participantes: ${this.participantes}`);
    console.log(`Presupuesto: ${this.presupuesto}`);
  }

  get getParticipantes() {
    return this.participantes;
  }

  set setParticipantes(participantes) {
    this.participantes = participantes;
  }
}

//let proyecto = new Proyecto("Desarrollo Web", 10000, "React");
//proyecto.mostrarDatos();
//proyecto.setParticipantes = ["Borja", "Juan"];
//console.log(proyecto.getParticipantes);
