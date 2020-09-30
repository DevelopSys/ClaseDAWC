let palabraEvaluar = "Esto es un ejemplo de trabajo con strings";
let letraEvaluar = "a";
let contador = 0;

console.log(palabraEvaluar.includes(letraEvaluar));

//palabraEvaluar.split("");
for (let index = 0; index < palabraEvaluar.length; index++) {
  //const element = array[index];
  if (palabraEvaluar.charAt(index) === letraEvaluar) {
      contador++
  }
}

//console.log(palabraObjeto.includes(letraEvaluar));
//console.log(palabraObjeto.includes());
