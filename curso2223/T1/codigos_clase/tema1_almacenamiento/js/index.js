document.querySelector("#boton_add").addEventListener("click", (e) => {
  //localStorage.setItem("clave_guardar", "dato_guardar");
  let objeto = {
    alumnos: [
      { nombre: "Borja", apellido: "Martín", edad: 20 },
      { nombre: "Aitor", apellido: "Apellido1", edad: 21 },
      { nombre: "Juan", apellido: "Apellido2", edad: 22 },
      { nombre: "Jose", apellido: "Apellido3", edad: 22 },
      { nombre: "Luis", apellido: "Apellido4", edad: 22 },
      { nombre: "Mario", apellido: "Apellido5", edad: 22 },
    ],
  };
  localStorage.setItem("objeto", JSON.stringify(objeto));

  //localStorage.setItem("boolean", false);
  //localStorage.setItem("numero", 90);
});

document.querySelector("#boton_alumno").addEventListener("click", (e) => {
  let alumno = { nombre: "Nuevo", apellido: "Diferente", edad: 20 };
  let objetoAlumnos = JSON.parse(localStorage.getItem("objeto"));
  objetoAlumnos.alumnos.push(alumno);
  localStorage.setItem("objeto", JSON.stringify(objetoAlumnos));
});

document.querySelector("#boton_find").addEventListener("click", (e) => {
  //localStorage.setItem("clave_guardar", "dato_guardar");
  let objeto = JSON.parse(localStorage.getItem("objeto")); // --> string
  console.log(objeto.edad);
  //console.log(parseInt(objeto) + 10);
  // 20?
});

document.querySelector("#boton_remove").addEventListener("click", (e) => {
  localStorage.removeItem("objeto");
});

window.addEventListener("load", () => {
  let lista = document.querySelector("#lista");
  let objetoLocal = JSON.parse(localStorage.getItem("objeto")).alumnos;
  objetoLocal.forEach((element) => {
    console.log(element);
    let nodo = document.createElement("li");
    nodo.classList.add("list-group-item");
    nodo.innerText = `${element.nombre} ${element.apellido}`;

    lista.append(nodo);

    // vas al almacenamiento interno, sacas todos los datos que están guradados
    // y los pones dentro de la lista
  });
});
