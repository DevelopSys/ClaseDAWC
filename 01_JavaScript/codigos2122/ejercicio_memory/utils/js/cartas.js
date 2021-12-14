$(document).ready(function () {
  $("#boton_aparecer").click(function (e) {
    $("img").fadeIn();
    //$('img').css('opacity',1);
  });
  $("#boton_desaparecer").click(function (e) {
    $("img").fadeOut();
    //$('img').css('opacity',0);
  });
  $("#boton_comprobar").click(function (e) {
    if ($("img").css("display") == "none") {
      $("img").fadeIn();
    } else {
      $("img").fadeOut();
    }
  });

  /*$("img").click(function (e) {
    $(e.target).fadeOut();
    $(e.target).attr("src", "./utils/images/darkpit.png");
    $(e.target).fadeIn();
  });*/

  $("img").toggle(
    () => {// ejecutada con la primera pulsacion
        console.log('pulsado una vez');
    },
    () => {
        // ejecutada con la segunda pulsacion
        console.log('pulsado dos veces');
    });
  
});

