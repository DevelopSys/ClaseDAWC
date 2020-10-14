"use strict";

let contenedor, numeroNodos, botonAgregar, botonBorrar;
let inputColorDiv, inputColorLetra;
let inputTextoDiv, inputTamanioLetra;
let selectBorrar, selectInformacion;

window.addEventListener("load", () => {
  // cuando termina la carga de navegador
  contenedor = document.querySelector(".container");
  numeroNodos = document.querySelector("#hijos_contenedor");
  botonAgregar = document.querySelector("#boton_agregar");
  botonBorrar = document.querySelector("#boton_borrar");
  inputColorDiv = document.querySelector("#color_div");
  inputColorLetra = document.querySelector("#color_fuente_div");
  inputTextoDiv = document.querySelector("#texto_div");
  inputTamanioLetra = document.querySelector("#range_tamanio");
  selectBorrar = document.querySelector("#select_borrar_div");
  selectInformacion = document.querySelector("#select_info_div");
  //selectColorDiv = document.querySelector("input[name='fondo']");
  //botonAgregar = document.querySelector('div#anadir_divs button.btn-success')
  //contenedor = document.querySelector("div");
  // nomero de elementos que penden de contenedor
  //console.log(contenedor.childElementCount);
  numeroNodos.innerHTML = contenedor.childElementCount;
  botonAgregar.addEventListener("click", () => {
    /*console.log("pulsado");
    console.log(inputColorDiv.value);
    console.log(inputColorLetra.value);
    console.log(inputTextoDiv.value);
    console.log(inputTamanioLetra.value);*/

    let nodoNuevo = document.createElement("div");
    nodoNuevo.style.backgroundColor = inputColorDiv.value;
    nodoNuevo.style.color = inputColorLetra.value;
    nodoNuevo.style.fontSize = `${inputTamanioLetra.value}px`;
    nodoNuevo.innerText = inputTextoDiv.value;
    contenedor.append(nodoNuevo);
    numeroNodos.innerHTML = contenedor.childElementCount;
    actualizarSelectBorrar(contenedor.childElementCount);
    //console.log(selectBorrar.childElementCount);
    if (selectBorrar.childElementCount == 1) {
      botonBorrar.disabled = false;
    }
  });
  inputTextoDiv.addEventListener("keyup", () => {
    if (inputTextoDiv.value.length > 0) {
      botonAgregar.disabled = false;
      //botonAgregar.setAttribute('disabled','false');
    } else {
      botonAgregar.disabled = true;
    }
  });
  selectBorrar.addEventListener("change", () => {
    //botonBorrar.disabled = false;
    //contenedor.remove();
  });

  //selectBorrar.selectedOptions[0]

  //contenedor.children;
  botonBorrar.addEventListener("click", () => {
    contenedor.removeChild(
      contenedor.childNodes[selectBorrar.selectedOptions[0].value]
    );
    console.log(selectBorrar.selectedOptions[0].value);
    console.log(contenedor.children);
  });
});

function actualizarSelectBorrar(numeroNodo) {
  let nodoSelect = document.createElement("option");
  nodoSelect.value = numeroNodo;
  nodoSelect.innerText = numeroNodo;
  selectBorrar.append(nodoSelect);

  //selectBorrar.innerHTML = "<option value=1>1</option>";
}
