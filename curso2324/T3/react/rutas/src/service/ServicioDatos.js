let datos = [
  { nombre: "Borja1", id: 1 },
  { nombre: "Borja2", id: 2 },
  { nombre: "Borja3", id: 3 },
  { nombre: "Borja4", id: 4 },
  { nombre: "Borja5", id: 5 },
  { nombre: "Borja6", id: 6 },
];

export function getUserbyId(id) {
  return datos.find((dato) => {
    return (dato.id = id);
  });
}
