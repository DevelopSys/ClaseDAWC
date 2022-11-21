export class carta {
  representacion;
  valor;
  imagen;
  constructor(representacion, valor, imagen) {
    this.representacion = representacion;
    this.valor = valor;
    this.imagen = imagen;
  }

  mostrarDatos() {
    console.log(`Representacion ${this.representacion}`);
    console.log(`Valor ${this.valor}`);
  }
}
