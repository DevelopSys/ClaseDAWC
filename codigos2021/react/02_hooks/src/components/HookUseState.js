import React, { useState } from "react";

const HookUseState = (props) => {
  const [counter, setCounter] = useState(props.numero);

  // const state
  // const setState

  let operacion;

  const handleOnClick = ({ target }) => {
    //console.log(e);
    switch (target.name) {
      case "incremento":
        setCounter(counter + 1);
        break;
      case "decremento":
        setCounter(counter - 1);
        break;
      case "reset":
        setCounter(0);
        break;
    }
    //setCounter(counter + 1);
  };

  return (
    <>
      <h2>Use State</h2>
      <div className="row">
        <div className="col">
          <h3>Ejemplo inicial</h3>
          <p>El valor del contador es {counter}</p>
          <button
            name="incremento"
            className="btn btn-primary"
            onClick={
              handleOnClick

              /*() => {
              //counter++;
              //setCounter(counter + 1);

            }*/
            }
          >
            +1
          </button>
          <button
            name="decremento"
            className="btn btn-primary"
            onClick={
              handleOnClick /*() => {
              //setCounter(counter - 1);
              setCounter((estadoActual) => estadoActual - 1);
            }*/
            }
          >
            -1
          </button>
          <button
            name="reset"
            className="btn btn-primary"
            onClick={
              handleOnClick /*() => {
              setCounter(5);
            }*/
            }
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default HookUseState;
