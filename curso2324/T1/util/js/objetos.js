class Usuario {
  // variables
  nombre;
  apellido;
  edad;

  // constructores
  constructor(nombre1, apellido1, edad1) {
    this.nombre = nombre1;
    this.edad = edad1;
    this.apellido = apellido1;
  }
  // metodos

  // getter - setter
  get getNombre() {
    return this.nombre;
  }

  set setNombre(param) {
    this.nombre = param;
  }
}
