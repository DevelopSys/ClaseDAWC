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

// event -> evento provocado en la pulsacion
botonAgregar.addEventListener("click", (event) => {
  switch (selectLista.value) {
    case "1":
      // alert("Has seleccionado el 1");
      lista1.innerHTML += "<li class='list-group-item'>Elemento nuevo</li>";
      break;
    case "2":
      // alert("Has seleccionado el 2");
      lista2.innerHTML += "<li class='list-group-item'>Elemento nuevo</li>";
      break;
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
