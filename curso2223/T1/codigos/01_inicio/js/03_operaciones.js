let numeroUno = 30;
let numeroDos = 5;

let suma = numeroUno + numeroDos; // 35
let resta = numeroUno - numeroDos; // 25
let multiplicacion = numeroUno * numeroDos; // 150
let division = numeroUno / numeroDos; // 6
let modulo = numeroUno % numeroDos; // 0
let incremento = numeroUno--; // 29
let decremento = numeroUno++; // 31

suma = 10;
resta = 10;
multiplicacion = 10;
division = 10;
modulo = 2;

suma += 5; // suma = suma + 5 --> suma = 10 + 50
resta += 5; // resta = resta - 5 --> suma = 10 - 50
multiplicacion += 5; // multiplicacion = multiplicacion * 5 --> multiplicacion = 10 * 2
division += 5; // division = division / 5 --> division = 10 / 50
modulo += 5; // modulo = modulo % 50 --> modulo = 2 + 50

let mayorQue = 100 > 10; // true
let menorQue = 10 < 100; // true
let mayorIgual = 100 >= 10; // true
let menorIgual = 10 <= 100; // true
let igual = 10 == 10; // true
let noIgual = 100 != 10; // true

let operandoUno = 4;
let operandoDos = "4";

console.log(operandoUno == operandoDos); // true
console.log(operandoUno === operandoDos); // false
