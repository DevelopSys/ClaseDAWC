class carta{

    imagenUp;
    imagenReverso;
    value;

    constructor(imagenUp, value){
        this.imagenUp =imagenUp;
        this.value = value;
        this.imagenReverso = "utils/images/reverso.png"
    }

    get getImagenUp() {
        return this.imagenUp;
    }

    set setImagenUp(imagenUp){
        this.imagenUp = imagenUp;
    }
    
    get getImagenReverso() {
        return this.imagenUp;
    }

    get getValue() {
        return this.value;
    }
    


}