import React from "react";

const ComponenteIncremento = ({ counter }) => {
  counter(7)
  
    return (
    <div>
      {/* <h1>{counter}</h1> */}
      <button
        className="btn btn-primary"
        id="btn_incremento"
        onClick={counter((e) => {
          console.log(e);
            return e + 1;
        })}
      >
        +1
      </button>
    </div>
  );
};

export default ComponenteIncremento;
