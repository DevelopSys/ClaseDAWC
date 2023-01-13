/* const lenguajes = ["JavaScript", "Node", "Kotlin", "Dart", "Rust"];
lenguajes.forEach((item) => {
  console.log(item);
});

function evaluarLenguaje(lenguaje, callback) {
  if (lenguaje == "JavaScript" || lenguaje == "Node") {
    callback("web");
  } else {
    callback("generico");
  }
}

evaluarLenguaje(lenguajes[1], (resultado) => {
  resultado == "web"
    ? console.log("desarrollador web")
    : console.log(`desarrollador ${resultado}}`);
});
 */

/* let promesa = new Promise((resolve, reject) => {
  let numero = parseInt(Math.random() * 100);
  if (numero > 50) {
    resolve(numero);
  } else {
    reject(numero);
  }
}); */

async function promesaPropia() {
  let numero = parseInt(Math.random() * 100);
  if (numero > 50) {
    return Promise.resolve(numero);
  } else {
    return Promise.reject("Pocas posibilidades");
  }
}

console.log(promesaPropia());

/* promesaPropia()
  .then((ok) => {
    console.log(ok);
  })
  .catch((err) => console.log(`${err}`)); */

/* promesa
  .then((ok) => {
    console.log(
      `La promesa se ha resuelto de forma correcta con el siguiente resultado ${ok}`
    );
  })
  .catch((err) => {
    console.log(`La promesa se ha resuelto de forma incorrecta ${err}`);
  })
  .finally(() => {
    console.log("La evaluación ha terminado");
  }); */
