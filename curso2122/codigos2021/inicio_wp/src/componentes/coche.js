export class Coche {
  constructor(modelo, marca, cv) {
    this.modelo = modelo;
    this.marca = marca;
    this.cv = cv;
  }

  mostrarDatos() {
    console.log(`${this.marca} ${this.modelo} ${this.cv}`);
  }
}
