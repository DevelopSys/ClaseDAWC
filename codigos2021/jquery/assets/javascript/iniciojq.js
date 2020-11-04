"use strict";

let boton;

/*window.addEventListener("load", () => {
  //boton = document.querySelector('#boton_inicial');
  //boton.addEventListener('click',()=>{})
});*/

$(document).ready(function () {
  console.log("Pagina preparada");
  $("#boton_inicial").click(function (e) {
    //e.preventDefault();
    //console.log("boton pulsado");
    //console.log($("#lista_equipos li"));
    let nodosLI = $("#lista_equipos li");
    /*$("#lista_equipos li").each(function (index, element) {
      // element == this
      element.innerText = "Ejemplo de modificación";
    });*/
    //$("#lista_equipos li").html("<a href=https://asdasdasd>Link</a>");
    //console.log(document.querySelectorAll("#lista_equipos li"));
    //console.log(document.querySelectorAll("li")[0].innerText);
    //console.log($("li").last().text());
    //$("#lista_equipos li").attr("value", "dato");
    /*$("#lista_equipos li").each(function (index, element) {
      element.value = index;
    });*/

    //document.querySelector('#lista_equipos').style.
    /*$("#lista_equipos li")
      .css("backgroundColor", "rgb(123,112,52)")
      .css("color", "rgb(31,23,67)");*/

    //let lista = document.querySelector("#lista_equipos");
    //lista.classList.add('group')

    //$("#lista_equipos").addClass("list-group");
    //$("#lista_equipos li").addClass("list-group-item");

    let nodo = document.createElement("li");
    nodo.innerText = "Getafe";
    console.log({ nombre: "asdasd", apellido: 23232 });

    //lista.append(nodo);
    //$("#lista_equipos li").first().before(nodo);
    /*let tamanio = $("#lista_equipos li").length;
    console.log(tamanio);
    $("#lista_equipos li")
      .eq(tamanio - 1)
      .after(nodo);*/

    $("#lista_equipos").hide();
  });
});
