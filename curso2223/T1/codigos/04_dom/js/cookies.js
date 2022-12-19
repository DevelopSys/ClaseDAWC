let botonAgregar = document.querySelector("#agregar_cookie");
let botonPartir = document.querySelector("#partir_cookie");
let botonPartir2 = document.querySelector("#partir2_cookie");
let botonAgregar2 = document.querySelector("#agregar2_cookie");

botonAgregar.addEventListener("click", (event) => {
  document.cookie = "usuario1=Borja";
});
botonAgregar2.addEventListener("click", (event) => {
  document.cookie = "usuario2=Juan";
});

botonPartir.addEventListener("click", (event) => {
  leerCookie("usuario");
});

function leerCookie(key) {
  document.cookie.split(";").forEach((element) => {
    let partido = element.trim().split("=");
    if (partido[0] == key) {
      console.log(partido[1]);
    }
  });
}
