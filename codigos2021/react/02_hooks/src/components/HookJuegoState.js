import React from "react";

const HookJuegoState = () => {
  // al pulsar
  // alea1
  // alea2
  // si el ale1 > ale2 --> se suma un punto al j1
  // si el ale1 < ale2 --> se suma un punto al j2
  // si el ale1 == ale2 --> se suma un punto al j1 j2
  // si alguno de ellos llega a 10 que saliese un div --> alert
  return (
    <>
      <h2>Juego pulsaciones</h2>

      <div class="alert alert-success" role="alert">
        El jugador XXX ha ganado
      </div>
    </>
  );
};

export default HookJuegoState;
