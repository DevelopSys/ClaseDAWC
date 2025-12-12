let bAgregar = document.querySelector("#btnAgregar");
let bBorrar = document.querySelector("#btnBorrar");
let bRecuperar = document.querySelector("#btnRecuperar");
let bEstilo = document.querySelector("#btnEstilo");
let inputNombre = document.querySelector("#inputNombre");
let inputPass = document.querySelector("#inputPass");
let parrafo = document.querySelector("p");
let usuarios = [];
let estilo = localStorage.getItem("clase");

console.log("El valor de todas las claves asociadas es de: ");

for (let index = 0; index < localStorage.length; index++) {
  let valor = localStorage.getItem(localStorage.key(index));
  console.log(valor);
}

if (estilo != null) {
  bEstilo.classList.remove("btn-primary");
  bEstilo.classList.add(estilo);
}

bEstilo.addEventListener("click", () => {
  localStorage.setItem("clase", "btn-danger");
});

bAgregar.addEventListener("click", () => {
  // guardar
  // localStorage.setItem("pass", "pass");
  // recuperar
  // vaciar
  let usuario = {
    nombre: `${inputNombre.value}`,
    pass: `${inputPass.value}`,
  };
  usuarios.push(usuario);

  sessionStorage.setItem("usuarios", JSON.stringify(usuarios));

  inputNombre.value = "";
  inputPass.value = "";
});
bBorrar.addEventListener("click", () => {
  // borrar
  sessionStorage.removeItem("pass");
});
bRecuperar.addEventListener("click", () => {
  let dato = JSON.parse(sessionStorage.getItem("usuarios"));
  parrafo.textContent = "El tamaño de los usuarios es de " + dato.length;
  /* if (dato == null) {
    parrafo.textContent = "El dato recuperado es nulo";
  } else {
    parrafo.textContent = "El nombre del usuario es " + dato.nombre;
  } */
});
