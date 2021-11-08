class carta {
  texto = "";
  valor = 0;
  imagen = "";

  constructor(texto) {
    this.texto = texto;
    this.setValor();
    this.setImagen();
  }

  setValor() {
    let valorNumero = this.getTexto.substring(0, this.getTexto.length - 1);
    if (isNaN(valorNumero)) {
      if (valorNumero == "J") {
        this.valor = 11;
      } else if (valorNumero == "Q") {
        this.valor = 12;
      } else if (valorNumero == "K") {
        this.valor = 13;
      }
    } else {
      this.valor = parseInt(valorNumero);
    }
  }

  setImagen() {
    this.imagen = `utils/images/${this.texto}.png`;
  }

  set setTexto(texto) {
    this.texto = texto;
  }

  get getTexto() {
    return this.texto;
  }

  get getValor(){
    return this.valor
  }

  get getImagen(){
    return this.imagen
  }
}
