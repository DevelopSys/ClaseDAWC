"use strict";

/*let nombre = document.querySelector("#inputNombre");
let apellido = document.querySelector("#inputApellido");
//let lista = document.querySelector("#listaNombres");
let lista = document.querySelector("ul#listaNombres3");

function funcionPulsar() {
  let textoNodo = `${nombre.value} ${apellido.value}`;
  let nodoLI = document.createElement("li");
  let nodoTexto = document.createTextNode(textoNodo);
  nodoLI.append(nodoTexto);
  lista.appendChild(nodoLI);
  //nodoLI.innerHTML = `${textoNodo}`;
}*/

function realizarOperacion() {
  let valorOperacion = document.querySelector("form input[type=radio]:checked")
    .value;

    let resultado =0;
    switch (valorOperacion) {
        case value:
            resultado = 1;
            break;
    
        default:
            break;
    }
  //console.log(valorOperacion);
  
}
