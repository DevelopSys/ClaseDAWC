class carta{

    texto = "";
    valor = 0;
    imagen = "";    
    
    constructor(texto, valor, imagen){
        this.texto = texto;
        this.valor = valor;
        this.imagen = imagen;
    }

    set setTexto(texto){
        this.texto = texto;
    }

    get getTexto(){
        return this.texto;
    }

    set setValor(texto){

        let valor = this.getTexto.toString().substring(0, this.getTexto.length-1);
        if (isNaN(valor)) {
          if (valor == "J") {
            valor = 11;
          } else if (valor == "Q") {
            valor = 12;
          } else if (valor == "K") {
            valor = 13;
          }
        }
        console.log(valor);

    }

}

