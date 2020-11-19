import "./style.css";
import {
  getAllCoches,
  getCocheMatricula,
  getCocheMatriculaAsync,
  getAllCochesAwait,
  getCocheMatriculaAsyncAwait,
} from "./services/repaso_promesas";
import { getArticulos } from "./services/conexiones_http";

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
//pintarCoche();

function pintarCoche(coche) {
  $(".row").append(`<div class="card" style="width: 18rem">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${coche.modelo}</h5>
    <p class="card-text">
    ${coche.modelo}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`);
}
*/
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
