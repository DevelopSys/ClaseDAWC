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
    baraja.push(new Carta(carta + palos[index]));
  }
}

baraja = _.shuffle(baraja);
console.log(baraja);
