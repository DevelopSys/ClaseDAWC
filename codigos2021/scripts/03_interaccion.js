/*alert("Cuidado es un cuadro de dialogo");
let numero = Number(prompt("Introduce un numero"));
console.log("El número introdicido es " + numero);*/
let numeroIntentos = 5;
let introducido;

/*do {
  introducido = prompt(
    "Introduce un número. El número de intentos es: " + numeroIntentos
  );
  numeroIntentos--;
} while (isNaN(introducido) || numeroIntentos === 0);*/

// 1 == "1"
// 1 === "1"

/*if (numeroIntentos === 0) {
  alert("lo siento has fallado");
} else {
  alert("has ganado");
}*/

let seguro = confirm("Estas seguro que quieres continuar");
console.log(seguro);
