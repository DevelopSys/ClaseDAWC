import "./style.css";
import { promesa, getCoche, getData } from "./services/servicios";

promesa
  .then((data) => {
    console.log(`El numero generado es: ${data}`);
  })
  .catch((err) => {
    console.log(err);
  });

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

/*Promise.all([getCoche("asdasdasd"), getCoche("asdasdasd")])
  .then(([resultado1, resultado2]) => {
    console.log(resultado1.code);
    console.log(resultado2.code);
  })
  .catch((err) => {
    console.log(err);
  });*/

Promise.race([getCoche("1234HDZ"), getCoche("4567GFD")])
  .then((resultado) => {
    console.log(resultado);
    //console.log(resultado2.code);
  })
  .catch((err) => {
    console.log(err);
  });
$.post("url", data, function (data, textStatus, jqXHR) {}, "dataType");
