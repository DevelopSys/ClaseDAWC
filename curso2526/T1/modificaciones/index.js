/* let lista1 = document.getElementById("lista1");
lista1 = document.getElementsByTagName("ul");
lista1 = document.getElementsByClassName("list-group");
 */

/* let lista1 = document.querySelector("#lista1");
lista1 = document.querySelector(".list-group");
lista1 = document.querySelector("ul"); */

// let lista2 = document.querySelector("div#divLista2 ul.list-group");
// console.log(lista2);
/* let elementos = document.querySelectorAll("li");
elementos.forEach((element) => {
  if (element.textContent == "Item 4") {
    element.textContent = "Seleccionado";
    element.classList.add("active");
  }
}); */
let botonAgregar = document.querySelector("#btnAgregar");
let botonVaciar = document.querySelector("#btnVaciar");
let selectLista = document.querySelector("#selectLista");
let lista1 = document.querySelector("#lista1");
let lista2 = document.querySelector("#lista2");
let texto = document.querySelector("#inputTexto");

// event -> evento provocado en la pulsacion
botonAgregar.addEventListener("click", (event) => {
  if (texto.value.length == 0) {
    Swal.fire({
      title: "Error",
      text: "Por favor introduce datos",
      icon: "warning",
    });
  } else {
    anadirNodo(texto.value);
  }
});

botonVaciar.addEventListener("click", (event) => {
  switch (selectLista.value) {
    case "1":
      // alert("Has seleccionado el 1");
      lista1.innerHTML = "";
      break;
    case "2":
      // alert("Has seleccionado el 2");
      lista2.innerHTML = "";
      break;
  }
});

selectLista.addEventListener("change", (event) => {
  // alert(`Has seleccionado la opcion ${event.target.value}`);
});

function limpiarCampos() {
  for (let index = 0; index < arguments.length; index++) {
    arguments[index].value = "";
  }
  /* 
  for( int item : lista ){}
  */
  /* arguments.forEach((element) => {
    element.value = "";
  }); */
}

function anadirNodo(param = "defecto") {
  let nodo = crearNodo(
    "li",
    ["list-group-item", "animate__animated", "animate__bounceInRight"],
    param
  );
  let botonNodo = crearNodo("button", ["btn", "btn-danger"], "Eliminar", () => {
    nodo.classList.remove("animate__bounceInRight");
    nodo.classList.add("animate__bounceOutLeft");
    setTimeout(() => {
      nodo.remove();
    }, 500);
  });

  /* document.createElement("button");
  botonNodo.textContent = "Eliminar";
  botonNodo.classList.add("btn", "btn-danger");
  botonNodo.addEventListener("click", () => {
    /* if(selectLista.value==1){
      
      lista1.removeChild(nodo);
    } else {
      lista2.removeChild(nodo);
    } 
    nodo.classList.remove("animate__bounceInRight");
    nodo.classList.add("animate__bounceOutLeft");
    setTimeout(() => {
      nodo.remove();
    }, 500);
  }); */
  nodo.append(botonNodo);
  switch (selectLista.value) {
    case "1":
      lista1.appendChild(nodo);
      // alert("Has seleccionado el 1");
      /* lista1.innerHTML +=
        "<li class='list-group-item animate__animated animate__bounceInRight'>Elemento nuevo</li>"; */
      break;
    case "2":
      // alert("Has seleccionado el 2");
      /* lista2.innerHTML +=
        "<li class='list-group-item animate__animated animate__bounceInRight'>Elemento nuevo</li>"; */
      lista2.appendChild(nodo);
      break;
  }
  limpiarCampos(texto);
}

function crearNodo(tipo, clases, texto, funcion) {
  let nodo = document.createElement(tipo);
  nodo.textContent = texto;
  // nodo.className = "list-group-item animate__animated animate__bounceInRight";
  clases.forEach((element) => {
    nodo.classList.add(element);
  });
  if (tipo == "button") {
    nodo.addEventListener("click", funcion);
  }
  return nodo;
}
