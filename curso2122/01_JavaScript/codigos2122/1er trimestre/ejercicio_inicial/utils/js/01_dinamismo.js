//let nodoInicial = document.getElementsByTagName('h1')
/*let nodoInicial = document.querySelector('h1')
let listaNodos = document.querySelector('h1')
let nodosSeleccion = document.querySelector('input[type="checkbox"]')
let nodoBusqueda = document.querySelectorAll('div.form-check input, input')
console.log(nodoBusqueda);*/
/*let boton = document.querySelector("button");
let input = document.querySelector("input");
boton.className +=  "btn-primary"
boton.addEventListener('click',(event)=>{
    console.log(event);
});

input.addEventListener('keyup',(e)=>{
    //console.log(e.key);}
    //console.log(input.value)    
    console.log(e.target.value);
})*/




document.querySelector('#boton-pulsar').addEventListener('click',(e)=>{
    let inputs = document.querySelectorAll('input')
    let activados = inputs[0].disabled
    inputs.forEach(element => {
    
    element.disabled = !activados
});});
    









