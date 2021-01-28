import React from "react";

const HookTraductorState = () => {
  // tabla general
  // necesito guardar un modelo de la tabla (esp:"",ing:"",ale:"") traducciones -> [{esp:"",ing:"",ale:""},{esp:"",ing:"",ale:""}]
  // cada vez que agrego cambio las traducciones
  // yo tengo que renderizar la tabla cada vez que hay una nueva traducción
  // cada vez que modifico un estado, el la página se renderiza (algo que necesite)
  // traducciones --> ESTADO
  // modifico traducción --> modificando un estado (añadiendo al array un nuevo objeto)
  // como cojo lo que hay en lo input para que al dar agregar se construya el objeto?
  // objeto - modelo (ESTADO) {esp:"asdads",ing:"asdads",ale:"asdasdasd"}

  // para el buscador?
  // al escribir en el buscador o al pulsar en el boton --> (ESTADO) palabraTr con el valor del input
  // busco en el ESTADO traducciones --> array.filter("coc") --> traducciones.map (e=>{ if (e.esp === palabraTr){ return <tr> {e.esp} {e.eng} {e.ale}</tr>} })

  return (
    <>
      <h2>Traductor de palabras</h2>
    </>
  );
};

export default HookTraductorState;
