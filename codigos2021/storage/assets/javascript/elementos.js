"use strict";

let inputClaveCookie,
  inputValueCookie,
  inputDateCookie,
  botonAddCookie,
  inputColorCookie,
  colCookies;

window.addEventListener("load", () => {
  inicializacion();
  cargaCookies();
  eventos();
});

function inicializacion() {
  inputClaveCookie = document.querySelector(".cookies input[type=text]");
  //console.log(inputClaveCookie);
  inputDateCookie = document.querySelector(".cookies input[type=date]");
  //console.log(inputDateCookie);
  inputValueCookie = document.querySelector(".cookies input[type=text]")
    .nextElementSibling.nextElementSibling;
  //console.log(inputValueCookie);
  botonAddCookie = document.querySelector(".cookies button");
  //console.log(botonAddCookie);
  inputColorCookie = document.querySelector(".cookies input");
  //console.log(inputColorCookie);
  colCookies = document.querySelector(".cookies");
}

function cargaCookies() {
  recuperarCookie("color");
}

function eventos() {
  botonAddCookie.addEventListener("click", () => {
    let clave = inputClaveCookie.value;
    let valor = inputValueCookie.value;
    let expiracion = inputDateCookie.value;
    if (clave.length == 0 || valor.length == 0 || expiracion.length == 0) {
      alert("faltan datos");
    } else {
      let fechaExp = new Date(expiracion);
      //console.log(`${clave}=${valor}; expires=${fechaExp}`);
      document.cookie = `${clave}=${valor}; expires=${fechaExp}`;
    }

    //console.log(`${clave}=${valor}; expires=${expiracion}`);
  });
  inputColorCookie.addEventListener("change", () => {
    //console.log("color cambiado");
    let color = inputColorCookie.value;
    //console.log(color);
    //colCookies.setAttribute('style',`backgroudColor=${color}`)
    colCookies.style.backgroundColor = color;
    document.cookie = `color=${color}; expires= Thu, 30 Nov 2021 00:00:00`;
  });
}

function recuperarCookie(name) {
  let todas = document.cookie.split(";");
  todas.forEach((element) => {
    console.log(element);
    element = element.trim();
    console.log(element);
    if (element.indexOf(name) != -1) {
      // color=#123123f
      let valor = element.substring(name.length + 1, element.length);
      console.log(valor);
      colCookies.style.backgroundColor = valor;
    }
  });
}

//inicializacion();
//cargaCookies();
//eventos();
//recuperarCookie();
