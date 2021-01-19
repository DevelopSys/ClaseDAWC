import React from "react";

const ComponenteSwitch = (props) => {
  const funcionSwitch = (numero) => {
    switch (numero) {
      case 1:
        return (
          <div class="alert alert-primary" role="alert">
            Entrado por el caso 1
          </div>
        );
        console.log("ejecutado 1");

      case 2:
        return (
          <div class="alert alert-secondary" role="alert">
            Entrado por el caso 2
          </div>
        );

      case 3:
        return (
          <div class="alert alert-success" role="alert">
            Entrado por el caso 3
          </div>
        );

      default:
        return (
          <div class="alert alert-info" role="alert">
            Entrado por caso no contemplado
          </div>
        );
    }
  };

  return (
    <>
      <h2>Componente Switch</h2>
      <p>La funcionalidad del SWITCH es</p>
      <div>{funcionSwitch(props.numeroSwitch)}</div>
    </>
  );
};

export default ComponenteSwitch;
