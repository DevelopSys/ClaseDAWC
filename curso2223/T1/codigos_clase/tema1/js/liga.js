let madrid = new equipo("Real Madrid", 1000000, []);
let barsa = new equipo("Barcelona", 1000000, []);
let atleti = new equipo("Atletico de Madrid", 1000000, []);

liga = [madrid, barsa, atleti];

/* madrid.mostrarDatos();
barsa.mostrarDatos();
atleti.mostrarDatos(); */

barsa.ficharJugador(new jugador("Pedri", "Medio", 100000));
barsa.ficharJugador(new jugador("Gavi", "Medio", 100000));
barsa.ficharJugador(new jugador("Lewandowsky", "Delantero", 200000));

madrid.ficharJugador(new jugador("Vinicius", "Delantero", 100000));
madrid.ficharJugador(new jugador("Rodrigo", "Delantero", 100000));
madrid.ficharJugador(new jugador("Fede Valverde", "Medio", 500000));

atleti.ficharJugador(new jugador("Griezman", "Delantero", 100000));
atleti.ficharJugador(new jugador("Correa", "Delantero", 100000));
atleti.ficharJugador(new jugador("Carrasco", "Delantero", 500000));

/*madrid.listarPlantilla();
barsa.listarPlantilla();
atleti.listarPlantilla();*/
/* _.max(liga, function (equipo) {
  return equipo.plantilla[0].valor;
}); */

liga.forEach((element) => {
  element.getJugadorCaro();
});

let barcelona = {
  nombre: "barcelona",
  plantilla: [],
  presupuesto: 1000000,
  ficharJugador: function (params) {},
  listarPlantilla: function (params) {},
};
