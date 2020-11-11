function funcionCallback(nombre, callback) {
  console.log(nombre);
  callback();
}

funcionCallback("Borja", () => {
  console.log("Ejecucion secundaria");
});

export let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random() * 20;
    console.log(numero);
    if (numero < 10) {
      reject("Error en la promesa");
    } else {
      resolve(numero);
    }
  }, 3000);
});

let coches = [
  { marca: "Ford", modelo: "Focus", matricula: "1234HDZ" },
  { marca: "Seat", modelo: "Ibiza", matricula: "2345RFT" },
  { marca: "Audi", modelo: "a3", matricula: "4567GFD" },
  { marca: "Mercedes", modelo: "c220", matricula: "5678IUY" },
];

export function getCoche(matricula) {
  let cocheEncontrado;
  coches.forEach((element) => {
    if (element.matricula == matricula) {
      cocheEncontrado = element;
      //break;
    }
  });

  return new Promise((resolve, reject) => {
    if (cocheEncontrado) {
      setTimeout(() => {
        resolve({ code: 1, message: "correct", data: cocheEncontrado });
      }, 2000);
    } else {
      reject({ code: 0, message: "error" });
    }
  });

  //console.log(cocheEncontrado);
}
