let numero;

do {
  numero = Number(prompt("Por favor introduce un numero positivo"));
  // 3
} while (numero == 0 || isNaN(numero));

let continuar = confirm("Estas seguro que quieres continuar");

continuar && dibujarFigura(numero);

function dibujarFigura(numero) {
  /*for (let index = 0; index < array.length; index++) {
    // dibujo
  }*/
}

setInterval(() => {
  console.log("Ejecucion");
}, 2000);

let elementos = new Array(); // --> []
elementos = []; // size = 0
elementos.push("asdad"); //--> [asdad]
elementos.push("1"); //--> ["asdad","1"]
elementos.push("2", "3", "4", "5"); //--> ["asdad","1","2","3","4","5"]
elementos.unshift(1, 2, 3); // --> [1,2,3,"asdad","1","2","3","4","5"]

elementos.pop(); // elimina el último
elementos.shift(); // elimina el último

elementos.forEach((item, index) => {
  console.log("Ejecucion");
});
elementos.filter((elemento, item) => elemento == "hola");
elementos.find((element) => element == "hola");
