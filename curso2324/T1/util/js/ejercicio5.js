const palos = ["C", "D", "T", "P"];
let baraja = [];

for (let index = 0; index < 4; index++) {
  // for del palo palos[index]
  for (let index1 = 1; index1 < 14; index1++) {
    // for de la carta
    let carta = index1;
    switch (carta) {
      case 1:
        carta = "A";
        break;
      case 11:
        carta = "J";
        break;
      case 12:
        carta = "Q";
        break;
      case 13:
        carta = "K";
        break;
    }
    baraja.push(carta + palos[index]);
  }
}

let numero1 = parseInt(Math.random() * 53);
let numero2 = parseInt(Math.random() * 53);

baraja = _.shuffle(baraja);

/* // 30 : 4C
// 10 : 1T
let intermedio = baraja[numero1];
// 30: 1T
baraja[numero1] = baraja[numero2];
// 10: 1T
baraja[numero2] = intermedio; */

//console.log(baraja);
setInterval(() => {
  let carta = baraja.pop();
  let palo = carta.substring(carta.length - 1);
  let valor = carta.substring(0, carta.length - 1);
  //
  console.log(`Carta ${carta}`);
  console.log(`Valor ${valor}`);
  console.log(`Palo ${palo}`);
  /*
    Carta KC
    Valor: 13
    Palo: C
    */
  /* for (let index = 0; index < baraja.length; index++) {
    const element = baraja[index];
    console.log(element);
  } */
  //console.log(baraja.pop());
  //    console.log(baraja);
}, 1000);
