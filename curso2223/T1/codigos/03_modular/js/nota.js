export default class nota {
  titulo;
  descripcion;
  prioritario;
  listaTareas;
  completa;
  constructor(titulo, descripcion, prioritario) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioritario = prioritario;
    this.listaTareas = [];
    this.completa = false;
  }

  agregarTarea(tarea) {
    this.listaTareas.push();
  }

  listarTareas() {
    listaTareas.forEach((element) => {
      console.log(`${element}`);
    });
  }

  finalizarTarea() {
    this.completa = true;
  }

  mostrarResumen() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Descripcion: ${this.descripcion}`);
    console.log(`Prioritaria: ${this.prioritario}`);
  }
}
