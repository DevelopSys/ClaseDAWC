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
      <div className="row">
        <div className="col-8">
          <div className="row gap">
            <div className="col">
              <h4>Español</h4>
              <input
                type="text"
                placeholder="palabra español"
                className="form-control"
              ></input>
            </div>
            <div className="col">
              <h4>Frances</h4>
              <input
                type="text"
                placeholder="palabra francés"
                className="form-control"
              ></input>
            </div>
            <div className="col">
              <h4>Inglés</h4>
              <input
                type="text"
                placeholder="palabra inglés"
                className="form-control"
              ></input>
            </div>
          </div>
          <button className="btn btn-primary btn-block mt-4">
            Agregar palabra
          </button>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h3>Buscar de palabras</h3>
          <input placeholder="buscar" className="form-control"></input>
          <button className="btn btn-primary mt-4">Buscar</button>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HookTraductorState;
