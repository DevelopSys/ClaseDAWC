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
