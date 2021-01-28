import React, { useState } from "react";

const HookJuegoState = () => {
  const [jugadores, setJugadores] = useState({});

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
            onClick={() => {
              let aleatorioUno = Math.random() * 20;
              let aleatorioDos = Math.random() * 20;
              if (aleatorioUno > aleatorioDos) {
                setJugadores({
                  ...jugadores,
                  jugador1: {
                    nombre: jugadores.jugador1.nombre,
                    puntuacion: jugadores.jugador1.puntuacion + 1,
                  },
                });
              } else if (aleatorioDos > aleatorioUno) {
                setJugadores({
                  ...jugadores,
                  jugador2: {
                    nombre: jugadores.jugador2.nombre,
                    puntuacion: jugadores.jugador2.puntuacion + 1,
                  },
                });
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
          {jugadores.jugador1.nombre} : {jugadores.jugador1.puntuacion} <br />
          {jugadores.jugador2.nombre} : {jugadores.jugador2.puntuacion} <br />
        </p>
      ) : (
        <p>No se ha empezado</p>
      )}
    </>
  );
};

export default HookJuegoState;
