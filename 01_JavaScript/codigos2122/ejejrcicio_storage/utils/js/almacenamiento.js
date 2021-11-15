/*document.querySelector("#contenido").textContent = "Contenido de la página para explicar los diferentes tipos de almaceniento web"
alert('Bienvenido a la web sobre almacenamiento')*/

let botonAgregar;
let botonRecuperar;
let botonBorrar;
let botonIndex;

window.addEventListener("load", (e) => {
  instancias();
  botonAgregar.addEventListener("click", (e) => {
    let nombre = document.querySelector("#input-nombre").value;
    let apellido = document.querySelector("#input-apellido").value;
    let telefono = document.querySelector("#input-telefono").value;
    let fecha = document.querySelector("#input-fecha").value;

    if (nombre != "" && apellido != "" && telefono != "" && fecha != "") {
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("apellido", apellido);
      localStorage.setItem("telefono", telefono);
      localStorage.setItem("fecha", fecha);
      localStorage.setItem(
        "objeto",
        JSON.stringify(new persona(nombre, apellido))
      );
    }
  });

  botonBorrar.addEventListener("click", (e) => {
    localStorage.clear("nombre");
    localStorage.clear("apellido");
    localStorage.clear("telefono");
    localStorage.clear("fecha");
    localStorage.clear("objeto");
  });

  botonRecuperar.addEventListener("click", (e) => {
    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("fecha"));
    console.log(localStorage.getItem("telefono"));
    console.log(localStorage.getItem("apellido"));
    console.log(localStorage.getItem("objeto"));
  });

  botonIndex.addEventListener("click", (e) => {

    localStorage.key(0);
    localStorage.length;
    localStorage.getItem()

  });

  //alert('Bienvenido a la web sobre almacenamiento')
  /*document.querySelector("#contenido").textContent = "Contenido de la página para explicar los diferentes tipos de almaceniento web"
    localStorage.setItem("nombre","Borja")

    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("apellido"));*/
});

function instancias() {
  botonAgregar = document.querySelector("#boton-agregar");
  botonRecuperar = document.querySelector("#boton-consultar");
  botonBorrar = document.querySelector("#boton-borrar");
  botonIndex = document.querySelector("#boton-index");
}

// CREAR UN FORMULARIO PARA GUARDAR EN LOCALSTORAGE NOMBRE, APELLIDO, TELEFONO Y FECHA DE NACIMIENTO
// PONER UN BOTON QUE AL PULSARLO RECUPERE TODOS LOS DATOS, EN EL CASO DE FALTAR ALGUNO MOSTRARÁ UN MENSAJE DE
// FALTAN DATOS
