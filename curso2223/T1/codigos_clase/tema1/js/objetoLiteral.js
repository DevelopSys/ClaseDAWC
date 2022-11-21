let barcelona = {
  nombre: "Barcelona",
  plantilla: [],
  presupuesto: 100000,
  ficharJugador: function (jugador) {
    this.plantilla.push(jugador);
  },
  listarPlantilla: function () {
    this.plantilla.forEach((element) => {
      element.datos();
    });
  },
};

let jugadorVinicius = {
  nombre: "Vinicius",
  valor: 100000,
  funcionEjemplo: (valor) => {
    jugadorVinicius.valor *= valor;
  },
  posicion: "Delantero",
  datos: function (params) {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Posicion: ${this.posicion}`);
    console.log(`Valor: ${this.valor}`);
  },
};

let jugadorAraujo = {
  nombre: "Araujo",
  valor: 100000,
  posicion: "Defensa",
  datos: function (params) {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Posicion: ${this.posicion}`);
    console.log(`Valor: ${this.valor}`);
  },
};

//jugadorVinicius.funcionEjemplo(8);
//jugadorVinicius.datos();
//jugadorVinicius.datos();
//barcelona.ficharJugador(jugadorVinicius);
//barcelona.ficharJugador(jugadorAraujo);
//barcelona.listarPlantilla();

let peliculas = {
  dates: { maximum: "2022-11-19", minimum: "2022-10-02" },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genre_ids: [28, 14, 878],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses -y encarcelado con la misma rapidez-, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.",
      popularity: 17020.709,
      poster_path: "/3eQMzMd2qsZkAJbk4wekp3Crg54.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 6.8,
      vote_count: 1227,
    },
    {
      adult: false,
      backdrop_path: "/olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
      genre_ids: [27, 9648, 53],
      id: 882598,
      original_language: "en",
      original_title: "Smile",
      overview:
        "Tras presenciar un extraño y traumático incidente con un paciente, la doctora Rose Cotter (Sosie Bacon) comienza a experimentar sucesos aterradores que no puede explicar. A medida que un miedo sobrecogedor comienza a afectar a todos los aspectos de su vida, Rose se verá obligada a afrontar a su problemático pasado para sobrevivir y escapar de su terrorífica nueva realidad.",
      popularity: 4674.437,
      poster_path: "/qJO54b6LsBmEkMxdW8ZziL9Mnam.jpg",
      release_date: "2022-09-23",
      title: "Smile",
      video: false,
      vote_average: 6.8,
      vote_count: 734,
    },
    {
      adult: false,
      backdrop_path: "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
      genre_ids: [28, 12, 878],
      id: 505642,
      original_language: "en",
      original_title: "Black Panther: Wakanda Forever",
      overview:
        "La reina Ramonda, Shuri, M’Baku, Okoye y las Dora Milaje, luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia y Everett Ross, y forzar un nuevo destino para el reino de Wakanda.",
      popularity: 4248.617,
      poster_path: "/mYpT2R7639KvKZ668uoQGS2QNFp.jpg",
      release_date: "2022-11-09",
      title: "Black Panther: Wakanda Forever",
      video: false,
      vote_average: 7.5,
      vote_count: 855,
    },
    {
      adult: false,
      backdrop_path: "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
      genre_ids: [27, 53],
      id: 663712,
      original_language: "en",
      original_title: "Terrifier 2",
      overview:
        "Después de ser resucitado por una entidad siniestra, Art the Clown regresa al condado de Miles, donde debe cazar y destruir a una adolescente y a su hermano menor en la noche de Halloween.",
      popularity: 2735.525,
      poster_path: "/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg",
      release_date: "2022-10-06",
      title: "Terrifier 2",
      video: false,
      vote_average: 7,
      vote_count: 631,
    },
    {
      adult: false,
      backdrop_path: "/aQOWnw3HydsCQZ10O0wvxFOaWc3.jpg",
      genre_ids: [36, 28, 18],
      id: 551271,
      original_language: "en",
      original_title: "Medieval",
      overview:
        "La historia del icono y señor de la guerra checo del siglo XIV, Jan Zizka, que derrotó a los ejércitos de la Orden Teutónica y el Sacro Imperio Romano Germánico.",
      popularity: 2568.084,
      poster_path: "/4njdAkiBdC5LnFApeXSkFQ78GdT.jpg",
      release_date: "2022-09-08",
      title: "Medieval",
      video: false,
      vote_average: 7.2,
      vote_count: 149,
    },
    {
      adult: false,
      backdrop_path: "/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg",
      genre_ids: [12, 16, 35, 10751, 14],
      id: 676701,
      original_language: "es",
      original_title: "Tadeo Jones 3: La Tabla Esmeralda",
      overview:
        "A Tadeo le encantaría que sus colegas arqueólogos le aceptasen como a uno más, pero siempre acaba liándola: destroza un sarcófago y desata un conjuro que pone en peligro la vida de sus amigos, Momia, Jeff y Belzoni. Con todos en contra y solo ayudado por Sara, Tadeo emprenderá una huida llena de aventuras, que le llevará de México a Chicago y de París a Egipto, para encontrar la manera de acabar con la maldición de la momia.",
      popularity: 2189.242,
      poster_path: "/8ZJjRunZbkMSXcRHiqAdQiecXYz.jpg",
      release_date: "2022-08-24",
      title: "Tadeo Jones 3: La Tabla Esmeralda",
      video: false,
      vote_average: 7.9,
      vote_count: 91,
    },
    {
      adult: false,
      backdrop_path: "/u9Io1hVnxb2b3T0z99aOK8sq0SN.jpg",
      genre_ids: [9648, 12, 80],
      id: 829280,
      original_language: "en",
      original_title: "Enola Holmes 2",
      overview:
        "Después del éxito de su primer caso, Enola Holmes (Millie Bobby Brown) sigue los pasos de su popular hermano, Sherlock (Henry Cavill), abriendo su propia agencia, descubriendo que la vida como mujer detective a sueldo no es tan fácil como parece. Resignada a aceptar la realidad como adulta. A punto de cerrar el negocio cuando una joven cerillera sin dinero le ofrece a Enola su primer trabajo oficial: encontrar a su hermana desaparecida.",
      popularity: 2096.361,
      poster_path: "/hulB3uxIRzerZfjwXdKSKVn2orV.jpg",
      release_date: "2022-11-04",
      title: "Enola Holmes 2",
      video: false,
      vote_average: 7.7,
      vote_count: 1005,
    },
    {
      adult: false,
      backdrop_path: "/gVecEIEZLZg3pV5CACXAB48I6au.jpg",
      genre_ids: [80, 18, 9648, 53],
      id: 862965,
      original_language: "en",
      original_title: "Emily the Criminal",
      overview:
        "Emily, que tiene una deuda estudiantil y está excluida del mercado laboral debido a antecedentes penales menores, se ve involucrada en una estafa con tarjeta de crédito que la lleva al inframundo criminal de Los Ángeles, lo que finalmente la lleva a consecuencias mortales.",
      popularity: 2009.936,
      poster_path: "/omgF37fXTGoWl4Jg4gQNqOgBCrU.jpg",
      release_date: "2022-08-12",
      title: "Emily la estafadora",
      video: false,
      vote_average: 6.9,
      vote_count: 189,
    },
    {
      adult: false,
      backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
      genre_ids: [14, 28, 35, 80],
      id: 1013860,
      original_language: "en",
      original_title: "R.I.P.D. 2: Rise of the Damned",
      overview:
        "Ambientada en el oeste americano de 1876, 'R.I.P.D.2: Rise of the Damed' es una secuela espiritual de 'R.I.P.D.' de 2013. El sheriff Roy Pulsipher no está muy emocionado de encontrarse muerto después de un tiroteo con una notoria pandilla de forajidos, pero tiene una segunda oportunidad de regresar a la tierra después de ser reclutado por el R.I.P.D. (Rest In Peace Department.). Pero vengar su propio asesinato puede tener que pasar a un segundo plano para salvar el mundo cuando se abre una puerta al infierno en el antiguo pueblo minero de Red Creek que amenaza no solo a los lugareños... sino a toda la humanidad.",
      popularity: 1695.449,
      poster_path: "/oJJWjiMKExSi241NpKUqVIxWfH6.jpg",
      release_date: "2022-11-15",
      title: "R.I.P.D 2: La rebelión de los condenados",
      video: false,
      vote_average: 6.8,
      vote_count: 114,
    },
    {
      adult: false,
      backdrop_path: "/f9g3R9gq0bASip9RnK2H56dbb5j.jpg",
      genre_ids: [53],
      id: 979924,
      original_language: "en",
      original_title: "On the Line",
      overview:
        "Elvis lleva 25 años aconsejando a sus oyentes en directo en su emblemático programa nocturno de entrevistas. Es uno de los últimos míticos locutores de radio que quedan y su sobrada experiencia le hace ignorar las advertencias de su jefa sobre su comportamiento en el programa. Cada noche llega a sus oyentes con su inconfundible voz y sus agudas réplicas. Tiene una opinión sobre prácticamente todo y se embarra en toda clase de polémicas. Hasta que una noche recibe la llamada de un hombre que está a punto de hacer algo terrible. Esta llamada podría destruir la carrera de Elvis, a su familia y toda su vida por completo.",
      popularity: 1850.244,
      poster_path: "/17KUBVVPyjXYqn1P6vouLBe8laB.jpg",
      release_date: "2022-10-31",
      title: "Secuestro en directo",
      video: false,
      vote_average: 6.5,
      vote_count: 122,
    },
    {
      adult: false,
      backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
      genre_ids: [27, 53, 9648],
      id: 717728,
      original_language: "en",
      original_title: "Jeepers Creepers: Reborn",
      overview:
        "El Horror Hound festival celebra su primer evento en Luisiana, donde atrae a cientos de fanes del terror; entre ellos se encuentra Laine que, obligada a asistir por Chase, su novio, comienza a experimentar premoniciones inexplicables y visiones inquietantes relacionadas con el pasado de la ciudad y con El Creeper. A medida que avanza el festival y el entretenimiento empapado de sangre se convierte en un frenesí, Laine cree que algo sobrenatural ha sido convocado y que ella está en el centro de todo",
      popularity: 2047.345,
      poster_path: "/qVVegwPsW6n9unBtLWq1rzOutka.jpg",
      release_date: "2022-09-15",
      title: "Jeepers Creepers: Reborn",
      video: false,
      vote_average: 5.8,
      vote_count: 473,
    },
    {
      adult: false,
      backdrop_path: "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "Para las mejores amigas Becky y Hunter, la vida trata de superar tus miedos y empujar tus límites. Sin embargo, después de subir hasta la cima de una torre de comunicaciones abandonada, se encuentran atrapadas y sin forma de bajar. A 600 metros del suelo y totalmente alejadas de la civilización, las chicas pondrán a prueba sus habilidades de escaladoras expertas y lucharán desesperadamente por sobrevivir aunque lo tengan todo en contra. ¿Lo conseguirán?",
      popularity: 1646.236,
      poster_path: "/tsjVxiuGyvMC4IbI2gjmDYpcYjU.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.3,
      vote_count: 1757,
    },
    {
      adult: false,
      backdrop_path: "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
      genre_ids: [10752, 18, 28],
      id: 49046,
      original_language: "de",
      original_title: "Im Westen nichts Neues",
      overview:
        "Las aterradoras experiencias y la angustia de un joven soldado alemán en el frente occidental durante la Primera Guerra Mundial.",
      popularity: 1469.082,
      poster_path: "/jPYPRS7LVmLDXGJ7VfBjXaV9eZr.jpg",
      release_date: "2022-10-07",
      title: "Sin novedad en el frente",
      video: false,
      vote_average: 7.8,
      vote_count: 853,
    },
    {
      adult: false,
      backdrop_path: "/sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
      genre_ids: [16, 35, 10751],
      id: 1037858,
      original_language: "en",
      original_title: "The Soccer Football Movie",
      overview:
        "Cuatro jóvenes fanáticos del fútbol hacen piña para ayudar a sus ídolos a recuperar sus habilidades después de que un científico malvado les robara el talento.",
      popularity: 1261.373,
      poster_path: "/vrBH2x7qnESorPvsDgsUKAeH6iQ.jpg",
      release_date: "2022-11-09",
      title: "La peli del fútbol",
      video: false,
      vote_average: 7,
      vote_count: 33,
    },
    {
      adult: false,
      backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      genre_ids: [27, 53],
      id: 760161,
      original_language: "en",
      original_title: "Orphan: First Kill",
      overview:
        'Tras escapar de un centro psiquiátrico estonio, Leena Klammer viaja a América haciéndose pasar por Esther, la hija desaparecida de una familia adinerada. Pero cuando su máscara empieza a caer, se enfrenta a una madre que protegerá a su familia de la "niña" asesina a cualquier precio.',
      popularity: 1272.528,
      poster_path: "/eed4qNf174pcT65it1PBbaTTL3x.jpg",
      release_date: "2022-07-27",
      title: "La huérfana: Primer asesinato",
      video: false,
      vote_average: 6.8,
      vote_count: 1310,
    },
    {
      adult: false,
      backdrop_path: "/2cQMVHBaP1wK0UBX5SGDahB3lp3.jpg",
      genre_ids: [9648, 53, 27],
      id: 807356,
      original_language: "en",
      original_title: "Watcher",
      overview:
        "Una joven se muda a un nuevo apartamento con su prometido y se ve atormentada por la sensación de ser acosada por un vigilante invisible en un edificio adyacente.",
      popularity: 1121.828,
      poster_path: "/dQrQO6XshNdDPRKCUDG7AeYdgAX.jpg",
      release_date: "2022-06-03",
      title: "El extraño",
      video: false,
      vote_average: 6.3,
      vote_count: 295,
    },
    {
      adult: false,
      backdrop_path: "/au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
      genre_ids: [80, 28, 53],
      id: 829799,
      original_language: "en",
      original_title: "Paradise City",
      overview: "",
      popularity: 1268.469,
      poster_path: "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
      release_date: "2022-11-11",
      title: "Paradise City",
      video: false,
      vote_average: 5.8,
      vote_count: 11,
    },
    {
      adult: false,
      backdrop_path: "/iVtpnbPE91vmi3LmcOXycEblwPA.jpg",
      genre_ids: [10749, 35],
      id: 833097,
      original_language: "en",
      original_title: "Falling for Christmas",
      overview:
        "Tras perder la memoria en un accidente de esquí, una heredera mimada acaba al cuidado de un viudo sin suerte y su hija durante las Navidades.",
      popularity: 1003.108,
      poster_path: "/sXCR9cmG82NnKpKtO4LpqXqZAFR.jpg",
      release_date: "2022-11-10",
      title: "Navidad de golpe",
      video: false,
      vote_average: 6.6,
      vote_count: 239,
    },
    {
      adult: false,
      backdrop_path: "/yo0qfH2dQGGMxkfivdkz5zxVatD.jpg",
      genre_ids: [27, 53],
      id: 830788,
      original_language: "en",
      original_title: "The Invitation",
      overview:
        "Una joven es cortejada y deslumbrada solo para descubrir que una conspiración gótica está en marcha.",
      popularity: 1001.355,
      poster_path: "/pTCVouK7eNjG7JYACwwMMapjD1N.jpg",
      release_date: "2022-08-24",
      title: "La invitación",
      video: false,
      vote_average: 6.4,
      vote_count: 327,
    },
    {
      adult: false,
      backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
      genre_ids: [28, 18],
      id: 361743,
      original_language: "en",
      original_title: "Top Gun: Maverick",
      overview:
        'Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete "Maverick" Mitchell se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba y esquivando el alcance en su rango, que no le dejaría volar emplazándolo en tierra. Cuando se encuentra entrenando a un destacamento de graduados de Top Gun para una misión especializada, Maverick se encuentra allí con el teniente Bradley Bradshaw, el hijo de su difunto amigo "Goose".',
      popularity: 998.397,
      poster_path: "/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg",
      release_date: "2022-05-24",
      title: "Top Gun: Maverick",
      video: false,
      vote_average: 8.3,
      vote_count: 4787,
    },
  ],
  total_pages: 100,
  total_results: 1992,
};

peliculas.results
  .filter((pelicula) => {
    pelicula.vote_average < 8;
  })
  .forEach((filtradas) => {
    console.log(filtradas.title);
  });
