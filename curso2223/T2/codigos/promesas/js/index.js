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

  return new Promise((res, rej) => {
    if (numero >= 50) {
      res(numero);
    } else {
      rej("Pocas posibilidades");
    }
  });
}

async function obtenerResultado() {
  let resultado = await promesaPropia();
  console.log(resultado);
}

//"https://cors-anywhere.herokuapp.com/https://github.com/annexare/Countries/blob/master/data/countries.json"
/* 

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(`Ha habido algún tipo de fallo: ${rej}`);
  }); */

async function obtenerProductos() {
  let resultado = await fetch("https://dummyjson.com/products");
  let resultadosJSON = resultado.json();
  return resultadosJSON;
}

/* console.time("promesa normal");
fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(`Ha habido algún tipo de fallo: ${rej}`);
  });
console.timeEnd("promesa normal"); */

console.time("promesa await");
let fila = document.querySelector("#productos");
obtenerProductos().then((res) => {
  res.products.forEach((element) => {
    fila.innerHTML += `<div class="col">
    <div class="card m-4" style="width: 18rem;">
    <img src="${element.images[0]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description}</p>
    </div>
  </div>
  </div>`;
  });
});
console.timeEnd("promesa await");

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
