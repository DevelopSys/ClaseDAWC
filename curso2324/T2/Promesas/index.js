// PROMESA
// EJECUCION EN TIEMPO-> ?
// contenstar
// OK
// ERR

// HILO PRINCIPAL
// renderizados + eventos + TAREA

// Promise -> a mano = funcion en segundo plano, las posibles contestaciones
/* let promesa = new Promise((res, rej) => {
  // lo que se ejecuta en segundo plano
  let numero = Number(Math.random() * 20);
  console.log("Promesa lanzada");
  if (numero > 10) {
    // la tarea se ha generado de forma correxta -> exito
    res(numero);
  } else {
    // la tarea se ha generado de forma incorrexta -> no exito
    if (numero >= 5) {
      rej("Numero pequeño");
    } else {
      rej("Numero muy pequeño");
    }
  }
});

promesa
  .then((param) => {
    console.log(`El parametro es ${param}`);
  })
  .catch((err) => {
    console.log(`El motivo del error es ${err}`);
  })
  .finally(console.log("Ejejcion forazada")); */
// fetch - ajax -> consultas a HTTP
fetch("https://randomuser.me/api/?results=50")
  .then((res) => res.json())
  .then((res1) => {
    res1.results.forEach((element) => {
      console.log(
        `${element.name.first} ${element.name.last} ${element.phone} ${element.picture.large}`
      );
    });
  })
  .catch((err) => {
    console.log("Error en la conexion");
  });
