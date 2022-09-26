"use strict";

function cargaInicial() {
  borrarCokie("apellido");
}

function crearCookie(nombre, valor, dias) {
  let fechaHoy = new Date();
  fechaHoy.setTime(fechaHoy.getTime() + dias * 24 * 60 * 60 * 1000);
  document.cookie = `${nombre}=${valor}; expires=${fechaHoy.toUTCString()}`;
  //console.log(document.cookie);
}

function recuperarCookie(nombre) {
  let cookiesRecuperadas = document.cookie;
  //console.log(cookiesRecuperadas);
  let cookiesPartidas = cookiesRecuperadas.split(";");
  cookiesPartidas.forEach((element) => {
    element = element.trim();
    //console.log(element.indexOf(`${nombre}`));
    //console.log(element);
    if (element.indexOf(`${nombre}=`) != -1) {
      console.log(element);
      //console.log(element);
      let recuperado = element.substring(nombre.length + 1, element.length);
      console.log(recuperado);
    }
  });
}

function existeCookie(nombre) {
  let existe = document.cookie.indexOf(`${nombre}=`);

  if (existe != -1) {
    return true;
  } else {
    return false;
  }
}

function modificarCookie(nombre, valorNuevo, vigencia) {
  if (existeCookie(nombre)) {
    //document.cookie = `${nombre}=${valorNuevo}`
    crearCookie(nombre, valorNuevo, vigencia);
  }
}

function borrarCokie(nombre) {
  if (existeCookie(nombre)) {
    document.cookie = `${nombre}= ; expires= Fri, 30 Oct 1970 00:00:00`;
  }
}

let objetoCookies = {
  funcionCrear: (nombre, valor, dias) => {
    let fechaHoy = new Date();
    fechaHoy.setTime(fechaHoy.getTime() + dias * 24 * 60 * 60 * 1000);
    document.cookie = `${nombre}=${valor}; expires=${fechaHoy.toUTCString()}`;
  },
  funcionRecuperar: (nombre) => {
    let cookiesRecuperadas = document.cookie;
    //console.log(cookiesRecuperadas);
    let cookiesPartidas = cookiesRecuperadas.split(";");
    cookiesPartidas.forEach((element) => {
      element = element.trim();
      //console.log(element.indexOf(`${nombre}`));
      //console.log(element);
      if (element.indexOf(`${nombre}=`) != -1) {
        console.log(element);
        //console.log(element);
        let recuperado = element.substring(nombre.length + 1, element.length);
        console.log(recuperado);
      }
    });
  },
  funcionExiste: (nombre) => {
    let existe = document.cookie.indexOf(`${nombre}=`);

    if (existe != -1) {
      return true;
    } else {
      return false;
    }
  },
  funcionModificar: (nombre, valorNuevo, vigencia) => {
    if (existeCookie(nombre)) {
      //document.cookie = `${nombre}=${valorNuevo}`
      crearCookie(nombre, valorNuevo, vigencia);
    }
  },
  funcionBorrar: (nombre) => {
    if (existeCookie(nombre)) {
      document.cookie = `${nombre}= ; expires= Fri, 30 Oct 1970 00:00:00`;
    }
  },
};

localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");

localStorage.removeItem("key");
sessionStorage.removeItem("key");

localStorage.key = "value";
sessionStorage.key = "value";

localStorage.clear();
sessionStorage.clear();

objetoCookies.funcionCrear("nombre", "valor", 234);
objetoCookies.funcionExiste("nomasd");
