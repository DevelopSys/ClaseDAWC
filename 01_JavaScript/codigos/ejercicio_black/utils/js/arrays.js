let botonAgregar = document.querySelector("#boton-agregar");
let botonBorrar = document.querySelector("#boton-borrar");
let botonBorrarConcreto = document.querySelector("#boton-borrar-concreto");
let botonVer = document.querySelector("#boton-ver");
let botonAleatorio = document.querySelector("#boton-aleatorio");
let arrayElementos = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let arrayPalabras = ["uno", "dos", "tres", "cuatro"];

// ver elementos de un array

botonVer.addEventListener("click", (event) => {
  console.log(arrayElementos);
});

// agregar elemento a un array

botonAgregar.addEventListener("click", (event) => {
  // retorna la nueva longitud del array
  //arrayElementos.push(11, 22, 33, 44, 55, 66, 77, 88, 99, 00);
  arrayElementos.unshift(11, 22, 33, 44, 55, 66, 77, 88, 99, 00);
});

botonBorrar.addEventListener("click", (event) => {
  //arrayElementos.shift();
  arrayElementos.pop();
});

botonBorrarConcreto.addEventListener("click", (event) => {
  //arrayElementos.shift();

    arrayElementos = arrayElementos.filter((element) => {

        return element!=4 && element != 7

    });
});

botonAleatorio.addEventListener("click", (event) => {
    //arrayElementos.shift();
    //let aleatorio = Number.parseInt(Math.random() * arrayElementos.length);
    //console.log(arrayElementos[aleatorio]);
    arrayElementos = _.shuffle(arrayElementos);
      
  });
  
