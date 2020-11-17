import "./style.css";
import {
  promesa,
  getCoche,
  getData,
  getCocheAsync,
} from "./services/servicios";

import { buscarCocheAsync, getAllCoches } from "./services/servicio_async";
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

console.time();
getAllCoches()
  .then((data) => {
    console.log("Resolución");
    console.log(data);
  })
  .catch((err) => {
    console.log("asdasd");
  });
console.timeEnd();
console.log("Otra");
