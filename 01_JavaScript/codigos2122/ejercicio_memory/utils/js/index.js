let cartas = [];

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

  cargarCargas();
  pintarCartas('izquierda');
  setTimeout(() => {
    pintarCartas('derecha');
  }, 5000);


  // muestra la imagen de la carta
  /* $("img").click(function (e) {
    $(e.target).fadeOut();
    $(e.target).attr("src", "./utils/images/11.png");
    $(e.target).fadeIn();
    setTimeout(() => {
      $(e.target).fadeOut();
      $(e.target).attr("src", "./utils/images/reverso.png");
      $(e.target).fadeIn();
    }, 2000);
  }); */

  /*$("img").toggle(
    () => {// ejecutada con la primera pulsacion
        console.log('pulsado una vez');
    },
    () => {
        // ejecutada con la segunda pulsacion
        console.log('pulsado dos veces');
    });*/
});

function cargarCargas() {
  for (let index = 2; index < 10; index++) {
    cartas.push(new carta(`utils/images/${index}.png`, index));
  }
  this.cartas = _.shuffle(cartas)

  console.log(cartas);
}

function pintarCartas(lado) {
  $.each(cartas, function (index, element) { 
    $(`#cartas_${lado}`).append(`<img src='${element.imagenUp}' style="width: 20%;">`)   
  });

  
  
}
