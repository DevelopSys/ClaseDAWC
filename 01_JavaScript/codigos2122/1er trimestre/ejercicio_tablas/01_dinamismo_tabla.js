let botonConfirmar = document.querySelector("#boton-confirmar");
let botonAgregar = document.querySelector("#boton-agregar");
let botonBorrar = document.querySelector("#boton-borrar");
botonConfirmar.addEventListener("click", (event) => {
    if (
        document.querySelector("#nombre-usuario").value.toString().toLowerCase() == "borja" &&
        document.querySelector("#pass-usuario").value.toString().toLowerCase() == "martin"
    ) {
        let nodos = document.querySelectorAll(
            "#formulario-agregar input,#formulario-agregar button, #formulario-borrar input,#formulario-borrar button"
        );
        //console.log(nodos);
        nodos.forEach((element) => {
            element.disabled = false;
        });
    } else {
        alert("datos incorrectos");
    }
});
botonAgregar.addEventListener("click", (event) => {
    let nombre = document.querySelector("#nombre-agregar").value;
    let pass = document.querySelector("#apellido-agregar").value;
    let experiencia = document.querySelector("#experiencia-agregar").checked;
    let numero = document.querySelector(
        "#tabla-resultados tbody"
    ).childElementCount;
    let fila = document.createElement("tr");
    fila.innerHTML = `<th scope="row">${numero + 1}</th>
    <td>${nombre}</td>
    <td>${pass}</td>
    <td>${experiencia}</td>`;
    document.querySelector("#tabla-resultados tbody").appendChild(fila);
});

botonBorrar.addEventListener("click", (event) => {
    let nombres = document.querySelectorAll("#tabla-resultados tbody td ");
    nombres.forEach((element, index) => {
        if (index % 3 == 0) {
            console.log(element.textContent);
            if (
                element.textContent == document.querySelector("#nombre-borrar").value
            ) {
                document
                    .querySelector("#tabla-resultados tbody")
                    .removeChild(element.parentNode);
            }
        }
    });
});