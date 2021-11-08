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

    get getPuntuacion(){
        return this.puntuacion
    }

}