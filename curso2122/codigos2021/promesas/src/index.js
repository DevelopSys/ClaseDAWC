import "./style.css";
import {
  getAllCoches,
  getCocheMatricula,
  getCocheMatriculaAsync,
  getAllCochesAwait,
  getCocheMatriculaAsyncAwait,
} from "./services/repaso_promesas";
import {
  createUser,
  getArticulos,
  getArticulosAjax,
  getUsers,
  getUsersRandom,
} from "./services/conexiones_http";

window.metodoEjecutar = metodoEjecutar;

/*$("#busqueda_boton").click(function (e) {
  //e.preventDefault();
  let usuarios = document.querySelector("#busqueda_texto").value;
  //console.log(usuarios);
  getUsersRandom(usuarios).then((data) => {
    console.log(data.results);
  });
});*/

function metodoEjecutar() {
  console.log("boton pulsado");
}

/*getUsersRandom().then((data) => {
  console.log(data.results);
});*/

// tener los usuarios;
/*getUsers().then((data) => {
  console.log(data);
});

createUser({ name: "morpheus", job: "leader" }).then((data) => {
  console.log(data);
});

/*fetch(
  "http://newsapi.org/v2/top-headlines?country=us&apiKey=3b9f157a5b75463189508b079bdbb25f"
)
  .then((data) => {
    return (data = data.json());
  })
  .then(({ articles }) => {
    console.log(articles);
    articles.forEach((element) => {
      pintarArticulo(element);
    });
  });*/

/*getArticulos()
  .then(({ articles }) => {
    console.log(articles);
  })
  .catch((err) => {
    console.log(err);
  });*/

/*$.ajax({
  type: "GET",
  url:
    "http://newsapi.org/v2/top-headlines?country=us&apiKey=3b9f157a5b75463189508b079bdbb25fasdads",
  data: "",
  dataType: "json",
  success: function (response) {
    //console.log(response.articles);
    response.articles.forEach((element) => {
      pintarArticulo(element);
    });
  },
  error: (status) => {
    console.log("Error");
  },
  complete: (status) => {
    console.log("Completado");
  },
});

$.ajax({
  type: "POST",
  url: "https://reqres.in/api/users",
  dataType: "json",
  success: function (response) {
    response;
  },
});*/

//getArticulos();
/*console.time("normal");
getCocheMatricula("ASDASD")
  .then((datos) => {
    console.log(`El coche encontrado es ${datos}`);
  })
  .catch((err) => {
    console.log(err);
  });
console.timeEnd("normal");

console.time("async");
getCocheMatriculaAsync("4567GFD")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.timeEnd("async");

console.time("todos");
getAllCoches().then((datos) => {
  console.log(datos);
});
console.timeEnd("todos");*/

/*console.time("todosAwait");
getAllCochesAwait().then((datos) => {
  datos.forEach((element) => {
    //pintarCoche(element);
  });
});
console.timeEnd("todosAwait");

$("#busqueda_boton").click(function (e) {
  let coche = document.querySelector("#busqueda_texto").value;
  getCocheMatriculaAsync(coche)
    .then((data) => {
      pintarCoche(data);
    })
    .catch((err) => {
      $("#principal").append(`<p>${err}</p>`);
    });
});

getCocheMatriculaAsyncAwait("asd")
  .then((data) => console.log(data))
  .catch(console.log);
//pintarCoche();*/

function pintarArticulo(articulo) {
  $(".row").append(`<div class="card" style="width: 18rem">
  <img src=${articulo.urlToImage} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${articulo.title}</h5>
    <p class="card-text">
    ${articulo.description}
    </p>
    <button class="btn btn-primary" onclick="mostrarElemento(id)">Go somewhere</button>
  </div>
</div>`);
}

/*import {
  realizarPromesa,
  realizarPromesaAsync,
  realizarPromesasTodasMejorado,
  realizarPromesasTodasMejoradoSimplificado,
  realizarPromesaTodas,
} from "./services/promesas_todas";

console.time("normal");
realizarPromesa("5678IUY")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.timeEnd("normal");

console.time("asyn");
realizarPromesaAsync("5678IUY").then(console.log).catch(console.log);
console.timeEnd("asyn");

console.time("todas");
realizarPromesaTodas().then(console.log);
console.timeEnd("todas");

console.time("todasJuntas");
realizarPromesasTodasMejorado().then(console.log);
console.timeEnd("todasJuntas");

console.time("todasSimple");
realizarPromesasTodasMejoradoSimplificado().then(console.log);
console.timeEnd("todasSimple");
//realizarPromesa();

/*import {
  promesa,
  getCoche,
  getData,
  getCocheAsync,
} from "./services/servicios";

import { buscarCocheAsync, getAllCoches } from "./services/servicio_async";*/
/*
promesa
  .then((data) => {
    console.log(`El numero generado es: ${data}`);
  })
  .catch((err) => {
    console.log(err);
  });*/

//getCoche("1234HDZ");

/*getCoche("5678IUY")
  .then((result) => {
    console.log(`El coche encontrado es ${result.data.marca}`);
    console.log({ result });
  })
  .catch((err) => {
    console.log(err);
  });

getCoche("2345RFT")
  .then((result) => {
    console.log(`El coche encontrado es ${result.data.marca}`);
    console.log({ result });
  })
  .catch((err) => {
    console.log(err);
  });*/

/*
  .catch((err) => {
    console.log(err);
  });*/

/*Promise.race([getCoche("1234HDZ"), getCoche("4567GFD")])
  .then((resultado) => {
    console.log(resultado);
    //console.log(resultado2.code);
  })
  .catch((err) => {
    console.log(err);
  });
$.post("url", data, function (data, textStatus, jqXHR) {}, "dataType");*/

/*getCoche("ford")
  .then((data) => {})
  .catch((err) => {});*/

/*getCocheAsync("1234HDZ")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });*/
