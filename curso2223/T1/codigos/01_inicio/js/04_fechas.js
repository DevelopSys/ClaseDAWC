/* let fecha = new Date();
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getTime());
 */

let fecha1 = new Date(2020, 2, 21);
let fecha2 = new Date(2020, 3, 21);



let comparacion = fecha1 < fecha2;
console.log(`El resultado de la comparación es ${comparacion}`);

let diferencia = fecha1 - fecha2;

