console.log("Ejemplo de documento DOM");

let titulo = document.getElementsByTagName("h1");
//titulo[titulo.length - 1].innerText = "Cambio del ultimo";
console.log(titulo);

for (let index = 0; index < titulo.length; index++) {
  console.log(titulo[index].innerText);
}
/* titulo.forEach((element) => {
  console.log(element.innerText);
}); */

titulo[0].innerText = "Cambiando el titulo en JS";

// HTML Collection --> mas antigua
// getElementsById
// getElementsByClass
// getElementsByTag

// NodeList
let nodos = document.querySelectorAll("h1");

nodos[nodos.length - 1].innerText = "Cambio del ultimo";
nodos.forEach((element) => {
  console.log(element.innerText);
});

// sacar de uno en uno el texto de todos los nodos

//document.querySelectorAll(".id");
//document.querySelectorAll("#class");

// Node
let tituloH1 = document.querySelector("h1");
tituloH1.innerText = "Cambio de titulo";

// DOM - Document object model
// Nodos
// elementos: etiquetas
// enlaces - <a> <div>
// scripts - <script>
// imagenes - <img>
// atributos - <div style="" class="" id="">
// texto - valor (HTML): <ul>
//<li></li>
//</ul>

// BOM - Broeser object model - Navegador
// navegar
// <a href>
// bom.navigate("")
// info historial
// modificar el navegador
