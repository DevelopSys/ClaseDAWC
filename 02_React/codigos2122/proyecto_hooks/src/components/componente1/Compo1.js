import React from "react";

const Compo1 = ({dato, elementos}) => {
  return <div>Componente hijo 1
      <p>El dato comunicado es {dato}</p>
      <ul>
          {elementos.map((e)=>{return <li>{e}</li>})} 
      </ul>
  </div>;
};

export default Compo1;
