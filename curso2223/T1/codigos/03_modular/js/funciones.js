function filtrarPrioritarias(arrayTareas) {
  let prioritarias = arrayTareas.filter((element) => element.prioritario);
  prioritarias.forEach((element) => {
    console.log(`La tarea con título ${element.titulo} es prioritaria`);
  });
}

function tareaPesada(arrayTareas) {
  let tarea = arrayTareas[0];
  arrayTareas.forEach((element) => {
    element.listaTareas.length > element.listaTareas.length
      ? (tarea = element)
      : null;
  });
  console.log(`La tarea más pesada es ${tarea.titulo}`);
}

export { filtrarPrioritarias, tareaPesada };
