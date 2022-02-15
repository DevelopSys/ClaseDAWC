import React from "react";

const ComponenteIncremento = ({ counter }) => {
  /* 
  {counter = setContador, numero = 1}
  */



  return (
    <div>
      {/* <h1>{counter}</h1> */}


      <button
        className="btn btn-primary"
        id="btn_incremento"
        onClick={() => {
          counter((e) => {
            counter(e + 1);
          });
        }}
      >
        +1
      </button>
    </div>
  );
};

export default ComponenteIncremento;
