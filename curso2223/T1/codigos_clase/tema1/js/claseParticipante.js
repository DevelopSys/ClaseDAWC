class participante {
  #privada = "valor privado";
  nombre;
  apellido;
  correo;

  constructor(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
  }

  mostrarDatos() {
    console.log(`Nombre; ${this.nombre}`);
    console.log(`Apellido; ${this.apellido}`);
    console.log(`Correo; ${this.correo}`);
    console.log(`Privada; ${this.#privada}`);
  }

  set setApellido(apellido) {
    this.apellido = apellido;
  }

  get getApellido() {
    return this.apellido;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  setPrivada(privada) {
    this.#privada = privada;
  }
}

let usuario = new participante("Borja", "Martin", "correo@correo.es");
usuario.setNombre("Modificado");
usuario.setPrivada("Modificado privado");
usuario.setApellido = "Apellido modificado";
usuario.mostrarDatos();
