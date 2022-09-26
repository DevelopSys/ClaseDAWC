import React, { useState } from "react";

const HookJuegoState = () => {
  // state --> modificar el estado
  const [jugadores, setJugadores] = useState({});
  // acceso directo a un elemento
  const { jugador1, jugador2 } = jugadores;
  const [ganador, setGanador] = useState("");
  const [estadoBoton, setEstadoBoton] = useState(false);

  /*
  jugadores = {jugadorUno:{nombre:"asd", puntuacion:123123123}}
  */
  // al pulsar
  // alea1
  // alea2
  // si el ale1 > ale2 --> se suma un punto al j1
  // si el ale1 < ale2 --> se suma un punto al j2
  // si el ale1 == ale2 --> se suma un punto al j1 j2
  // si alguno de ellos llega a 10 que saliese un div --> alert

  const handleInputs = (e) => {
    switch (e.target.id) {
      case "inputUno":
        setJugadores({
          ...jugadores,
          jugador1: { nombre: e.target.value, puntuacion: 0 },
        });
        break;
      case "inputDos":
        setJugadores({
          ...jugadores,
          jugador2: { nombre: e.target.value, puntuacion: 0 },
        });
        break;
    }
  };

  return (
    <>
      <h2>Juego pulsaciones</h2>

      <div>
        <input
          className="form-control"
          placeholder="introduce nombre jugador uno"
          name="nombre"
          id="inputUno"
          onChange={handleInputs}
        ></input>
        <input
          className="form-control"
          placeholder="introduce nombre jugador dos"
          name="nombre"
          id="inputDos"
          onChange={handleInputs}
        ></input>
        <div>
          <button className="btn btn-success">Empezar</button>
          <button
            className="btn btn-success"
            disabled={estadoBoton}
            onClick={() => {
              let aleatorioUno = Math.random() * 20;
              let aleatorioDos = Math.random() * 20;
              if (aleatorioUno > aleatorioDos) {
                setJugadores({
                  ...jugadores,
                  jugador1: {
                    nombre: jugador1.nombre,
                    puntuacion: jugador1.puntuacion + 1,
                  },
                });
              } else if (aleatorioDos > aleatorioUno) {
                setJugadores({
                  ...jugadores,
                  jugador2: {
                    nombre: jugador2.nombre,
                    puntuacion: jugador2.puntuacion + 1,
                  },
                });
              }

              if (jugador2.puntuacion > 6) {
                setEstadoBoton(true);
              }
            }}
          >
            Jugar
          </button>
          <button className="btn btn-success" onClick={() => {}}>
            Resetear
          </button>
        </div>
      </div>

      {jugadores.jugador1 && jugadores.jugador2 ? (
        <p>
          {jugador1.nombre} : {jugador1.puntuacion} <br />
          {jugador2.nombre} : {jugador2.puntuacion} <br />
        </p>
      ) : (
        <p>No se ha empezado</p>
      )}

      {jugador1 &&
        jugador2 &&
        (jugador1.puntuacion > 9 || jugador2.puntuacion > 9) && (
          <div class="alert alert-success" role="alert">
            El ganador es: {ganador}
          </div>
        )}
    </>
  );
};

export default HookJuegoState;
