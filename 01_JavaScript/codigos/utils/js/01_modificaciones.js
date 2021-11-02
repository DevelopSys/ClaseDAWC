let botonAnadir = document.querySelector("#boton-anadir");
let botonBorrar = document.querySelector("#boton-borrar");
let botonBorrarTodos = document.querySelector("#boton-borrar-todos");

botonAnadir.addEventListener('click',(e)=>{
    let nodoCreado = document.createElement('p')
    nodoCreado.textContent = "Esto es un parrafo con texto"
    //let nodoRecuperado = document.querySelector('#resultados')
    //document.querySelector("#resultados").append(nodoCreado)
    //document.querySelector("#resultados").after(nodoCreado)
    //document.querySelector("#resultados").appendChild(nodoCreado);
    //document.querySelector("#resultados").prepend(nodoCreado);
    //document.querySelector("#resultados").insertBefore(nodoCreado,document.querySelector("#lista-elementos") )
   //document.querySelector("#resultados").insertBefore(nodoCreado,document.querySelector("#lista-elementos").nextElementSibling )
    
})

botonBorrar.addEventListener('click',(e)=>{
    if (document.querySelector("#lista-elementos")){
    document.querySelector("#resultados").removeChild(document.querySelector("#lista-elementos"))}
})



botonBorrarTodos.addEventListener('click',(e)=>{
    //console.log(document.querySelector("#resultados").children);
    let hijos = document.querySelector("#resultados").children;
    for (let index = 0; index < hijos.length; index++) {
        //console.log(hijos[index]);
        
        hijos[index].remove()  
        
    }
    
})