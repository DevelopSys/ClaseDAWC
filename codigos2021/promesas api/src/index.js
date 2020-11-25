import "./style.css";

import { getAllUsers, getUserByUUID } from "./services/conexiones_http";

window.mostrarDetalle = mostrarDetalle;

$("#busqueda_boton").click(function (e) {
  let numeroUsuarios = document.querySelector("#busqueda_texto").value;

  if (numeroUsuarios) {
    getAllUsers(numeroUsuarios).then((data) => {
      data.results.forEach((element) => {
        console.log(element);
        representarUsuario(element, "#general");
      });
    });
  } else {
    alert("Por favor introduce un número");
  }
});

function representarUsuario(usuario, sitio) {
  //console.log(usuario);
  $(`${sitio}`).append(
    `<div class="card" style="width: 18rem;">
  <img src="${usuario.picture.medium}" class="card-img-top" alt="${usuario.name.first} ${usuario.name.last}">
  <div class="card-body">
    <h5 class="card-title">${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h5>
    <button value="${usuario.uuid}" class="btn btn-primary btn-block" onclick="mostrarDetalle(${usuario.uuid})">Ver detalles</button>
  </div>
  </div>`
  );
}

function mostrarDetalle(uuid) {
  getUserByUUID(uuid).then((data) => {
    console.log(data);
    representarUsuario(data.results[0], "#detalle");
  });
}
