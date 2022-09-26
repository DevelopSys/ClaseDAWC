let coches = [
  { marca: "Ford", modelo: "Focus", matricula: "1234HDZ" },
  { marca: "Seat", modelo: "Ibiza", matricula: "2345RFT" },
  { marca: "Audi", modelo: "a3", matricula: "4567GFD" },
  { marca: "Mercedes", modelo: "c220", matricula: "5678IUY" },
];

export async function buscarCocheAsync(matricula) {
  let cocheEncontrado;
  coches.forEach((element) => {
    if (element.matricula == matricula) {
      cocheEncontrado = element;
    }
  });

  if (cocheEncontrado) {
    return cocheEncontrado;
  } else {
    return "Error";
  }
}

export async function getAllCoches() {
  let cochesEncontrados = [];
  for (let index = 0; index < coches.length; index++) {
    let element = coches[index].matricula;
    let cocheItem = buscarCocheAsync(element);
    cochesEncontrados.push(cocheItem);
  }

  return await Promise.all(cochesEncontrados);
}
