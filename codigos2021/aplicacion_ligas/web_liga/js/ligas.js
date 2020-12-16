let bodyTable = document.querySelector("tbody");
let botonAgregar = document.querySelector("#botonEquipo");

window.addEventListener("load", () => {
  cargarClasificacion();
  botonAgregar.addEventListener("click", () => {
    let nombre = document.querySelector("#nombreEquipo").value;
    agregarEquipo(nombre);
  });
});

function cargarClasificacion() {
  bodyTable.innerHTML = "";

  fetch("http://localhost:3000/equipo/get", {
    method: "GET",
    headers: { "Content-Type": "application-json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((dataJson) => {
      dataJson.data.forEach((element, index) => {
        $("tbody").append(`<tr>
        <th scope="row">${index + 1}</th>
        <td>${element.nombre}</td>
        <td>${element.goles_favor}</td>
        <td>${element.goles_contra}</td>
        <td>${element.puntos}</td>
        </tr>`);
      });
    });

  /*<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>@mdo</td>
</tr>*/
}

function agregarEquipo(equipo) {
  fetch(`http://localhost:3000/equipo/add?nombre=${equipo}`, {
    method: "POST",
    ContentType: "application/json",
  })
    .then((data) => {
      return data.json();
    })
    .then((dataJson) => {
      console.log(dataJson);
      if (dataJson.code == 2) {
        alert("Equipo agregado correctamente");
      }
    });

  $("tbody").append(`<tr>
        <th scope="row">0</th>
        <td>${equipo}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>`);
}
