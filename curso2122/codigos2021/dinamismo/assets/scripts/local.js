let bGuardar, bRecuperar, bVaciar, inputOp1, inputOp2;
let clave = "loquesea";
let objetoGuardar = { nombre: "Borja", apellido: "Martin", edad: 123 };

window.addEventListener("load", cargaInicial);

function cargaInicial() {
  bRecuperar = document.querySelector("#boton_recuperar");
  bGuardar = document.querySelector("#boton_guardar");
  bVaciar = document.querySelector("#boton_vaciar");
  inputOp1 = document.querySelector("#operador_uno");
  inputOp2 = document.querySelector("#operador_dos");
  bGuardar.addEventListener("click", () => {
    localStorage.setItem(`${clave}`, inputOp1.value);
    localStorage.setItem("operador2", inputOp2.value);
    localStorage.setItem("objeto", JSON.stringify(objetoGuardar));
  });
  bRecuperar.addEventListener("click", () => {
    let op1 = parseInt(localStorage.getItem(`${clave}`));
    let op2 = parseInt(localStorage.getItem(`operador2`));
    let recuperado = JSON.parse(localStorage.getItem(`objeto`));
    console.log(recuperado.nombre);
    console.log(op1 + op2);
    //console.log(op2);
    //console.log(typeof localStorage.getItem(`${clave}`));
    //console.log(typeof localStorage.getItem(`operador2`));
  });
  bVaciar.addEventListener("click", () => {
    localStorage.clear();
  });
}

// HTML -- CSS -- DOM --  BOM -- BD (local // file // externa)
