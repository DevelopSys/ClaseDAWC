const proyecto = {
  nombre: "Desarrollo telefónica",
  tecnologia: "React",
  participantes: ["Aitor", "Borja"],
  jefeProyecto: "",
  modificarIntegrantes: function (participante) {
    //console.log(`Ejemplo de funcion integrada ${participante}`);
    this.participantes.push(participante);
  },
};

//console.log(proyecto.nombre);
//console.log(proyecto["nombre"]);
//proyecto.nombre = "Nuevo proyecto telefonica";
//console.log(proyecto);
//proyecto.modificarIntegrantes("Juan");
//console.log(proyecto);
//console.log(proyecto.nombre);
//Object.freeze(proyecto);
//proyecto.nombre = "ejemplo modificado";
//proyecto = { nombre: "Cosa", presupuesto: 20000 };
proyecto.nuevaCaracteristica = "Cosa nueva";
console.log(proyecto);
