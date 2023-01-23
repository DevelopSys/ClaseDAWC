let boton = document.querySelector("#boton_promesa");
let botonFetch = document.querySelector("#boton_fetch");
let input = document.querySelector("#input_busqueda");
let lenguajes = [
  "Java",
  "Js",
  "kotlin",
  "Dart",
  "Python",
  "Node",
  "Typescript",
];

botonFetch.addEventListener("click", () => {
  fetch("https://dummyjson.com/products")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res1) => {
      console.log(res1);
    })
    .catch((rej) => {
      console.log("Conexion fail");
    });
});

async function busqueda(lenguaje) {
  let resultado = await new Promise((res, rej) => {
    // logica del negocio: existe el lenguaje kotlin dentro del array
    let busqueda = lenguajes.find((value) => {
      return value == lenguaje;
    });
    busqueda == lenguaje ? res(busqueda) : rej("lenguaje no encontrado");
    //busqueda == "kotlin" && res(busqueda);
  });

  return resultado;
}

boton.addEventListener("click", (e) => {
  busqueda(input.value)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  /* busqueda(input.value)
    .then((res) => {
      console.log(`La busqueda ha sido existosa, lenguaje encontrado ${res}`);
    })
    .catch((err) => {
      console.log(`La busqueda no ha sido existosa, ${err}`);
    }); */
  /* let promesa = new Promise((res, rej) => {
    // logica del negocio: existe el lenguaje kotlin dentro del array
    let busqueda = lenguajes.find((value) => {
      return value == "C#";
    });
    busqueda == "kotlin" ? res(busqueda) : rej("lenguaje no encontrado");
    //busqueda == "kotlin" && res(busqueda);
  }); */
  /* promesa
    .then((res) => {
      console.log(`La busqueda ha sido existosa, lenguaje encontrado ${res}`);
    })
    .catch((err) => {
      console.log(`La busqueda no ha sido existosa, ${err}`);
    })
    .finally(() => {
      console.log("La busqueda ha terminado");
    }); */
});
