class Carta {
  valor;
  nombre;
  imagen;

  // 2C: nombre
  // 2: valor
  // 2C.png : imagen
  constructor(nombre) {
    this.nombre = nombre;
    this.imagen = nombre + ".png";
    this.valor = this.calcularValor();
  }

  //2C
  //10C
  calcularValor() {
    let valor = this.nombre.substring(0, this.nombre.length - 1);

    switch (valor) {
      case "K":
      case "J":
      case "Q":
        valor = 10;
        break;
      default:
        valor = Number(this.nombre.substring(0, this.nombre.length - 1));
        break;
    }

    return valor;
  }

  mostrarDatos() {
    print(`Nombre: ${this.nombre}`);
    print(`Valor: ${this.valor}`);
    print(`Imagen: ${this.imagen}`);
  }
}
