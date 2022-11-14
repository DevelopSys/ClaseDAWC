class equipo {
  nombre;
  presupuesto;
  plantilla = [];

  constructor(nombre, presupuesto, plantilla) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.plantilla = plantilla;
  }

  getJugadorCaro() {
    let valorJugadorCaro = 0;
    let jugadorCaro = new jugador("", "", 0);
    this.plantilla.forEach((item) => {
      if (item.valor > valorJugadorCaro) {
        jugadorCaro = item;
      }
    });

    console.log(
      `El jugador más caro del ${this.nombre} es ${jugadorCaro.nombre}`
    );
  }

  mostrarDatos() {
    console.log(`Nombre ${this.nombre}`);
    console.log(`Jugadores en plantilla:  ${this.plantilla.length}`);
    console.log(`Presupuesto:  ${this.presupuesto}`);
  }

  ficharJugador(jugador) {
    if (jugador.valor > this.presupuesto) {
      console.log("No hay dinero suficiente");
    } else {
      this.plantilla.push(jugador);
      this.presupuesto = this.presupuesto - jugador.valor;
    }
  }

  listarPlantilla() {
    this.plantilla.forEach((item) => {
      item.mostrarDatos();
    });
  }
}
