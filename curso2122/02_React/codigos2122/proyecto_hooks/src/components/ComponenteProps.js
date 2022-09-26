import React from "react";
import Compo1 from "./componente1/Compo1";
import Compo2 from "./componente2/Compo2";

import "./ComponenteProps.css";

function ComponenteProps() {

  let elementos = ["uno","dos","tres","cuatro"]
  return (
    <div>
      <h1>Componente Props</h1>
      <div className="row">
        <div className="col">
          <Compo1 dato="comunicacion 1" elementos={elementos} />
        </div>
        <div className="col">
          <Compo2 dato="comunicacion 2" />
        </div>
      </div>
    </div>
  );
}

export default ComponenteProps;
