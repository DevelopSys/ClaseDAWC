let cartasIzquierda = [];
let cartasDerecha = [];
let cartaLectura;

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
  pintarCartas("izquierda");
  pintarCartas("derecha");

  $("#cartas_izquierda img").click(function (e) {
    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr(
      "src",
      cartasIzquierda[e.currentTarget.alt].imagenUp
    );
    $(e.currentTarget).fadeIn();
    /*setTimeout(() => {
      $(e.currentTarget).fadeOut();
      $(e.currentTarget).attr("src", "./utils/images/reverso.png");
      $(e.currentTarget).fadeIn();
    }, 2000);*/
  });

  $("#cartas_derecha img").click(function (e) {
    console.log(e.currentTarget.alt);
    

    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr("src", cartasDerecha[e.currentTarget.alt].imagenUp);
    $(e.currentTarget).fadeIn();
    /*setTimeout(() => {
      $(e.currentTarget).fadeOut();
      $(e.currentTarget).attr("src", "./utils/images/reverso.png");
      $(e.currentTarget).fadeIn();
    }, 2000);*/
  });

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

function darVuelta(params) {
  $(e.currentTarget).fadeOut();
  $(e.currentTarget).attr("src", "./utils/images/reverso.png");
  $(e.currentTarget).fadeIn();
}

function cargarCargas() {
  for (let index = 0; index < 10; index++) {
    cartasDerecha.push(new carta(`utils/images/${index}.png`, index));
    cartasIzquierda.push(new carta(`utils/images/${index}.png`, index));
  }


  this.cartasDerecha = _.shuffle(cartasDerecha);
  this.cartasIzquierda = _.shuffle(cartasIzquierda);

  console.log(cartasIzquierda);
  console.log(cartasDerecha);
}

function pintarCartas(lado) {
  let array;
  if (lado == "izquierda") {
    array = cartasIzquierda;
  } else {
    array = cartasDerecha;
  }

  $.each(array, function (index, element) {
    $(`#cartas_${lado}`).append(
      `<img src='${element.imagenReverso}' style="width: 20%;" alt='${element.value}'">`
    );
  });
}
