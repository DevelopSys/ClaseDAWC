"use strict";

let nodo = document.getElementsByTagName("h1");
let nodosQuery = document.querySelectorAll("#id_h1");
console.log(nodo);
console.log(nodosQuery);

let nodoLista = document.querySelector("#lista_prueba");
// crear un nodo
// 1 creo el nodo
for (let index = 0; index < 10; index++) {
  let nodoLi = document.createElement("li");

  nodoLista.innerHTML = "<li>Ejemplo</li>";

  /*let nodoTexto = document.createTextNode("Nodo dinamico");
  // asocio el li al nodo
  nodoLi.append(nodoTexto);
  nodoLi.setAttribute("class", "clase_h1");*/
  nodoLista.appendChild(nodoLi);
}

//nodoLista[0].app

/*for (let index = 1; index < 4; index++) {
  nodo[index - 1].innerText = "titulo " + index;
}*/
