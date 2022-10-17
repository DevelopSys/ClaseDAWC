// []

// 1-10.....J-Q-K
// C R T P

// 1C 2C 3C 4C 5C 6C JC QC KC
// 1R 2R 3R 4R 5R 6R JR QR KR
// 1T 2T 3T 4T 5T 6T JT QT KT
// 1P 2P 3P 4P 5P 6P JP QP KP

const palos = ["C", "P", "R", "T"];
// Repetir 4 veces
for (let index = 0; index < palos.length; index++) {
  for (let index2 = 1; index2 < 14; index2++) {
    index2 == 11 && console.log(`J${palos[index]}`);
    index2 == 12 && console.log(`Q${palos[index]}`);
    index2 == 13 && console.log(`K${palos[index]}`);
    index2 < 11 && console.log(`${index2}${palos[index]}`);
  }
}
// Repetir n numeros

let baraja = ["10P", "2P", "1C", "2C", "1T", "2T", "1R", "2R"];
//baraja = _.shuffle(baraja);
console.log(baraja);

let cartaSacada = baraja.shift();
extaerInformacion(cartaSacada);
cartaSacada = baraja.shift();
extaerInformacion(cartaSacada);
cartaSacada = baraja.shift();
extaerInformacion(cartaSacada);

function extaerInformacion(cartaSacada) {
  console.log(`Carta ${cartaSacada} `);
  paloSacado = cartaSacada.substring(
    cartaSacada.length - 1,
    cartaSacada.length
  );
  console.log(`Palo; ${paloSacado} `);

  valorSacado = cartaSacada.substring(0, cartaSacada.length - 1);
  console.log(`Valor ${valorSacado}`);
}

setInterval(() => {
  console.log("Ejecucion");
}, 4000);
