import React, { useState } from "react";

const HookUseState = () => {
  const [state, setState] = useState(1);

  // const state
  // const setState

  return (
    <>
      <h2>Use State</h2>
      <div className="row">
        <div className="col">
          <h3>Ejemplo inicial</h3>
          <p>El valor del contador es {state}</p>
          <button
            onClick={() => {
              //setState(state + 1);
              setState((w) => {
                return w + 1;
              });
            }}
          >
            Pulsar
          </button>
        </div>
      </div>
    </>
  );
};

export default HookUseState;
