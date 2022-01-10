class jugador {

    nombre="";
    puntuacion=0

    constructor(nombre){
        this.nombre = nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    setPuntuacion(puntosAdd){
       this.puntuacion += puntosAdd 
    }

    set resetearPuntuacion(){
        this.puntuacion=0;
    }

    get getPuntuacion(){
        return this.puntuacion
    }

}