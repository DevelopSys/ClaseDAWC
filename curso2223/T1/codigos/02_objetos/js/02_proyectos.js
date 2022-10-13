class Proyecto {
  participantes = Array();

  constructor(nombre, presupuesto, tecnologia) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    console.log("los datos del proyecto actual son:");
    console.log(`Participantes: ${this.participantes}`);
    console.log(`Presupuesto: ${this.presupuesto}`);
    console.log(`Tecnología: ${this.tecnologia}`);
  }
}

let proyecto = new Proyecto("Desarrollo Web", 10000, "React");
proyecto.mostrarDatos();
