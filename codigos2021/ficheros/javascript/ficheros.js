"use strict";

let input_lectura,
  input_multiple,
  input_imagen,
  boton_lectura,
  boton_multiple,
  boton_imagen,
  lista_dos,
  div_imagenes;
window.addEventListener("load", () => {
  input_lectura = document.querySelector("#input_uno");
  boton_lectura = document.querySelector("#boton_uno");
  input_multiple = document.querySelector("#input_dos");
  input_imagen = document.querySelector("#input_tres");
  boton_multiple = document.querySelector("#boton_dos");
  boton_imagen = document.querySelector("#boton_tres");
  lista_dos = document.querySelector("#lista_dos");
  div_imagenes = document.querySelector("#imagenes_tres");
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
    boton_imagen.addEventListener("click", () => {
      console.log("pulsado");
      let lector = new FileReader();
      lector.readAsDataURL(ficheros[0]);
      lector.addEventListener("load", (evento) => {
        console.log(evento.target.result);
        let nodoImagen = document.createElement("img");
        nodoImagen.src = evento.target.result;
        document.querySelector("#imagenes_tres").append(nodoImagen);
      });
    });
  });
});
