"use strict";

let coches = [
  { marca: "Ford", modelo: "Focus", matricula: "1234HDZ" },
  { marca: "Seat", modelo: "Ibiza", matricula: "2345RFT" },
  { marca: "Audi", modelo: "a3", matricula: "4567GFD" },
  { marca: "Mercedes", modelo: "c220", matricula: "5678IUY" },
];

// new Coche("asd","asd","asd")

export function getCocheMatricula(matricula) {
  let cocheEncontrado;
  coches.forEach((element) => {
    if (element.matricula === matricula) {
      cocheEncontrado = element;
    }
  });

  return new Promise((resolve, reject) => {
    if (cocheEncontrado) {
      resolve(cocheEncontrado);
    } else {
      reject(`No entrado coche con matrícula ${matricula}`);
    }
  });
}

export async function getCocheMatriculaAsync(matricula) {
  let cocheEncontrado;
  coches.forEach((element) => {
    if (element.matricula === matricula) {
      cocheEncontrado = element;
    }
  });

  if (cocheEncontrado) {
    return cocheEncontrado;
  } else {
    throw `No entrado coche con matrícula ${matricula}`;
  }
}

export async function getAllCoches() {
  let cochesPromesas = [];

  coches.forEach((element) => {
    let coche;
    getCocheMatriculaAsync(element.matricula).then((dato) => {
      coche = dato;
      cochesPromesas.push(coche);
    });
  });

  return cochesPromesas;
}

export async function getAllCochesAwait() {
  let cochesPromesas = [];

  coches.forEach((element) => {
    let coche = getCocheMatriculaAsync(element.matricula);
    cochesPromesas.push(coche);
  });

  return await Promise.all(cochesPromesas);
}

export async function getCocheMatriculaAsyncAwait(matricula) {
  let cocheEncontrado;
  coches.forEach((element) => {
    if (element.matricula === matricula) {
      cocheEncontrado = element;
    }
  });

  if (cocheEncontrado) {
    return await cocheEncontrado;
  } else {
    throw `No entrado coche con matrícula ${matricula}`;
  }
}
