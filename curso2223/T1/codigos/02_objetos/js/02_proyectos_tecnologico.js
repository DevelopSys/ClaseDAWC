class ProyectoTecnologico extends Proyecto {
  tecnologia;

  constructor(nombre, presupuesto, tecnologia) {
    super(nombre, presupuesto);
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    super.mostrarDatos();
    console.log(`La ley tecnología es ${this.tecnologia}`);
  }
}

let proyectoLegalSub = new ProyectoLegal(
  "Subvención ministerio",
  10000,
  "2000/10"
);

let proyectoTecnológicoWeb = new ProyectoTecnologico(
  "Desarrollo web",
  1000000,
  "React"
);

var proyectos = [proyectoTecnológicoWeb, proyectoLegalSub];

proyectos.forEach((element) => {
  element.mostrarDatos();
});
