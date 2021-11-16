/*document.querySelector("#contenido").textContent = "Contenido de la página para explicar los diferentes tipos de almaceniento web"
alert('Bienvenido a la web sobre almacenamiento')*/

let botonAgregar;
let botonRecuperar;
let botonBorrar;
let botonIndex;
let botonCrearCookie;
let botonRecurperarCookie;
let botonBorrarCookie;
let botonModificarCookie;

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
    console.log(JSON.parse(localStorage.getItem("objeto")));
  });

  botonIndex.addEventListener("click", (e) => {
    for (let index = 0; index < localStorage.length; index++) {
      if (localStorage.key(index) == "objeto") {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
      } else {
        console.log(localStorage.getItem(localStorage.key(index)));
      }
    }

    // [nombre1=valor//nombre2=valor//nombre3=valor//nombre45=valor//
    // nombre5=
    // valor

    /*localStorage.key(0);
    localStorage.length;
    loxcalStorage.getItem()*/
  });

  botonCrearCookie.addEventListener("click", (e) => {
    document.cookie = "nombre=Borja Maria; secure";
    document.cookie = "apellido=Martin; secure";
  });

  botonRecurperarCookie.addEventListener("click", (e) => {
    let cookieCompleta = document.cookie;
    let cookiesPartidas = cookieCompleta.split(";");

    cookiesPartidas.forEach((element) => {
      let cookieIndividial = element.split("=");
      console.log(cookieIndividial);
      console.log(
        `El valor de la cookie ${cookieIndividial[0].trim()} es ${cookieIndividial[1].trim()}`
      );
    });
  });

  botonBorrarCookie.addEventListener("click", (e) => {

    document.cookie = "experiencia=; expires=Thu, 01 Jan 2020 00:00:00 UTC"

  });

  botonModificarCookie.addEventListener('click',(e)=>{document.cookie = "telefono=1234567"})

  //alert('Bienvenido a la web sobre almacenamiento')
  /*document.querySelector("#contenido").textContent = "Contenido de la página para explicar los diferentes tipos de almaceniento web"
    localStorage.setItem("nombre","Borja")

    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("apellido"));*/
});

function partirCookie(cookie) {
  let cookiePartida = cookie.split("; ");

  return cookiePartida;
}

function setearCookie(nombre, valor, expiracion) {

  let fecha = new Date('2021-2-11')
  fecha.toUTCString()
  
document.cookie = `${nombre}=${valor}; expires=${expiracion}`
}

function deleteCookie(nombre, expiracion) {
  document.cookie = `${nombre}=; expires=${expiracion}`
}

function recuperarCookieConcreta(nombre){
  document.cookie.substring(document.cookie.indexOf(nombre),)
}

function instancias() {
  botonAgregar = document.querySelector("#boton-agregar");
  botonRecuperar = document.querySelector("#boton-consultar");
  botonBorrar = document.querySelector("#boton-borrar");
  botonIndex = document.querySelector("#boton-index");
  botonCrearCookie = document.querySelector("#boton-cookie-crear");
  botonRecurperarCookie = document.querySelector("#boton-cookie-mostrar");
  botonBorrarCookie = document.querySelector("#boton-cookie-borrar");
  botonModificarCookie = document.querySelector("#boton-cookie-modificar");
}

// CREAR UN FORMULARIO PARA GUARDAR EN LOCALSTORAGE NOMBRE, APELLIDO, TELEFONO Y FECHA DE NACIMIENTO
// PONER UN BOTON QUE AL PULSARLO RECUPERE TODOS LOS DATOS, EN EL CASO DE FALTAR ALGUNO MOSTRARÁ UN MENSAJE DE
// FALTAN DATOS
