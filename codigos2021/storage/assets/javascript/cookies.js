"use strict";

cargaInicial();

function cargaInicial() {
  // crear "name=nombre; value=valor; expires= fecha UTC; path= /; domain=dominio; max-age=234567;SamSite = secure
  //document.cookie = "name=";
  //console.log("inicial");
  crearCookie("usuario", "Borja", 100);
}

let funcionesCookies = function crearCookie(nombre, valor, dias) {
  let fechaHoy = new Date();
  fechaHoy.setTime(fechaHoy.getDate() + dias * 24 * 60 * 60 * 1000);
  document.cookie = `${nombre}=${valor}; expires=${fechaHoy.toUTCString()}`;
  console.log(document.cookie);
};

function recuperarCookie(nombre) {
  let elementos = document.cookie;
  let todosValores = elementos.split(";");
  todosValores.forEach((element) => {
    element = element.trim();
    if (element.indexOf(`${nombre}=`) != -1) {
      //console.log("encontrado");
      let encontrado = element.substring(nombre.length + 1, element.length);
      console.log(encontrado);
    }
  });
}

function borrarCookie(nombre) {}
