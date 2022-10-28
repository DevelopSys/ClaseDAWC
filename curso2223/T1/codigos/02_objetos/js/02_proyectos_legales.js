class ProyectoLegal extends Proyecto {
  ley;

  constructor(nombre, presupuesto, ley) {
    super(nombre, presupuesto);
    this.ley = ley;
  }

  mostrarDatos() {
    super.mostrarDatos();
    console.log(`La ley que aplica es la de ${this.ley}`);
  }
}

let proyectoLegal = new ProyectoLegal(
  "Subvención ministerio",
  10000,
  "2000/10"
);

proyectoLegal.mostrarDatos();
