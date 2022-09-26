"use strict";

let input_lectura,
  input_multiple,
  input_imagen,
  boton_lectura,
  boton_multiple,
  boton_imagen,
  boton_crear,
  lista_dos,
  div_imagenes,
  boton_fichero,
  input_nombre,
  input_mail,
  input_dispo;

window.addEventListener("load", () => {
  input_lectura = document.querySelector("#input_uno");
  boton_lectura = document.querySelector("#boton_uno");
  input_multiple = document.querySelector("#input_dos");
  input_imagen = document.querySelector("#input_tres");
  boton_multiple = document.querySelector("#boton_dos");
  boton_imagen = document.querySelector("#boton_tres");
  lista_dos = document.querySelector("#lista_dos");
  div_imagenes = document.querySelector("#imagenes_tres");
  boton_crear = document.querySelector("#boton_crear");
  boton_fichero = document.querySelector("#boton_cuatro");
  input_dispo = document.querySelector("#check_dispo");
  input_nombre = document.querySelector("#input_nombre");
  input_mail = document.querySelector("#input_mail");
  //console.log(input_lectura);
  //console.log(boton_lectura);

  input_lectura.addEventListener("change", (event) => {
    let fichero = event.target.files[0];
    boton_lectura.addEventListener("click", () => {
      let lector = new FileReader();
      lector.readAsText(fichero);
      lector.addEventListener("load", (evento) => {
        document.querySelector("#parrafo_uno").innerHTML = evento.target.result;
        //console.log(evento);
      });
    });
  });
  /**/

  input_multiple.addEventListener("change", (event) => {
    let ficheros = event.target.files;
    console.log(ficheros);
    boton_multiple.addEventListener("click", () => {
      for (let index = 0; index < ficheros.length; index++) {
        let element = ficheros[index];
        console.log(element);
        let nodo = document.createElement("li");
        nodo.innerHTML = element.name;
        lista_dos.append(nodo);
        /*let lector = new FileReader();
        lector.readAsText(element)*/
      }
    });
  });

  input_imagen.addEventListener("change", (event) => {
    console.log("log input");
    let ficheros = event.target.files;
    console.log(ficheros);
    console.log("pulsado");
    let lector = new FileReader();
    lector.readAsDataURL(ficheros[0]);
    lector.addEventListener("load", (evento) => {
      console.log(evento.target.result);
      let nodoImagen = document.createElement("img");
      nodoImagen.src = evento.target.result;
      nodoImagen.style.height = "10%";
      document.querySelector("#imagenes_tres").append(nodoImagen);
    });
  });

  boton_fichero.addEventListener("click", () => {
    console.log(capturaDatos());

    let lector = new FileReader();
    lector.readAsDataURL(capturaDatos());
    lector.addEventListener("load", (e) => {
      let fichero = e.target.result;
      let enlace = document.createElement("a");
      enlace.href = fichero;
      enlace.download = "ejemplo_fichero";
      let evento = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      enlace.dispatchEvent(evento);
    });
  });
});

function capturaDatos() {
  let nombre = input_nombre.value;
  let mail = input_mail.value;
  let disponibilidad = input_dispo.value;
  let texto = [];
  texto.push(nombre);
  texto.push("\n");
  texto.push(mail);
  texto.push("\n");
  texto.push(disponibilidad);

  return new Blob(texto, { type: "text/plain" });
}

function crearyDescargar(contenidoEnBlob, nombreArchivo) {
  var lector = new FileReader();
  lector.onload = function (event) {
    var save = document.createElement("a");
    save.href = event.target.result;
    save.target = "_blank";
    save.download = nombreArchivo;
    var clicEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    save.dispatchEvent(clicEvent);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  };
  reader.readAsDataURL(contenidoEnBlob);
  //console.log($("#boton_crear")[0].nodeName);
}
