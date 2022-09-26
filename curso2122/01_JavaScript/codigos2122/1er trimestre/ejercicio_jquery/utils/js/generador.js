let url = "https://randomuser.me/api/?";
let genero;
let numero;
let boton;

$(document).ready(function () {
  $("#boton_generar").click(function (e) {
    numUser = $("#input_resultados").val();
    genero = $("#select_genero").val();
    //url = `https://randomuser.me/api/?gender=${genero}&results=${numUser}`;
    url = `https://randomuser.me/api/`;

    $.ajax({
      type: "GET",
      url: url,
      data:`{gender='${genero}',results='${numUser}'}`,
      dataType: "json",
      success: function (response) {
        response.results.forEach((element) => {
          let codigoCarta = `<div class="col">
        <div class="card">
          <img src="${element.picture.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name.first}</h5>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">${element.phone}</li>
                    <li class="list-group-item">${element.email}</li>
                    <li class="list-group-item">${element.id.value}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>`;
          $(".card").fadeIn();
          $("#contenedor_cartas").append(codigoCarta);
        });

        //console.log(response);
        //let filtro = response.results.filter((e) => e.gender == "female");
        //console.log(filtro);
      },
    });
  });
  $("#boton_borrar").click(function (e) {
      $("#contenedor_cartas .card").remove();
  })
});
