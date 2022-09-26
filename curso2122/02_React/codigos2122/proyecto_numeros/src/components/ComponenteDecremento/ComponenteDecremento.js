import React from "react";

const ComponenteDecremento = ({ counter }) => {



  return (
    <div>
      <button
        className="btn btn-primary"
        id="btn_decremento"
        onClick={(ev) => {
          counter((e) => {
            counter(e - 1);
          });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default ComponenteDecremento;
