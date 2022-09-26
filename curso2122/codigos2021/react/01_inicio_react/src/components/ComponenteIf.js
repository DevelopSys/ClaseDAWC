const ComponenteIf = ({ numeroIf }) => {
  //console.log(props.numeroIf);
  let numero = numeroIf;
  console.log("El componente ha sido cargado");
  console.log(numero);
  return (
    <>
      <h2>Componente IF</h2>
      <p>La funcionalidad del IF es</p>
      <div>
        {true && (
          <div className="alert alert-primary" role="alert">
            Simpre lo ejecuto
          </div>
        )}
      </div>
      <div>
        {
          // sentencia if
          /*if (cond){asd} else {else}*/
          // condicion ? cuando se true : cuando sea false
          // condicion && cuando se true
          numero > 0 && (
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
          )
        }
      </div>
    </>
  );
};

export default ComponenteIf;
