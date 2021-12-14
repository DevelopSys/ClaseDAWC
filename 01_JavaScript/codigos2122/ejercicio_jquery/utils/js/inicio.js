/*window.addEventListener("load", (e) => {
  console.log("carga inicial");
});*/

$(document).ready(() => {
  let elementos = $("li");

  /*$.each(elementos, (index,element) => {
    element.classList.add('list-group-item')
  });*/
  $("#boton_acion").click(function (e) {
    $("li").addClass("list-group-item");
    //e.preventDefault();
  });

  $.ajax({
    type: "GET",
    url: "https://randomuser.me/api/?results=50&gender=female",
    dataType: "json",
    success: function (response) {
      console.log(response.results);
    }
  });

});

