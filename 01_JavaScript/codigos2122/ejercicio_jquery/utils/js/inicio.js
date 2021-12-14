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
      type: "method",
      url: "url",
      data: "data",
      dataType: "dataType",
      success: function (response) {
          
      }
  });
});
