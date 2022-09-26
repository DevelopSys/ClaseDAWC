// ejeciciones van a tardar
// se ejecute en segundo plano
// aceptado -- se ha resuleto bien
// fallido -- la promesa no se ha resuleto

//fetch();
/*let promesa = new Promise((resolve)=>{
    // ejecuto cuando la promesa es resuelta con existo
}, (reject)=>{
    // ejecuto si la promesa no es resuelta con éxito˘
});
//promesa.then()*/

/*let promesa = new Promise((resolve, reject) => {
    setTimeout(function() {
        numero = Math.random() * 20;
        if (numero <= 10) {
            //console.log("Numero inferio");
            return resolve(numero);
        } else {
            //console.log("Numero superior");
            return reject("superior");
        }
    }, 5000);
});*/

/*promesa.then(
    (data)=>console.log(`El numero es ${data}`)
    ,(data)=>console.log(data)).catch((err)=>{console.log("error detectado");})*/

let url = "https://jsonplaceholder.typicode.com/posts";
let contenedor = document.querySelector("#contenedor-cartas");



await fetch(url)
  .then(
    (res) => {
      json = res.json();
      return json;
    },
    (rej) => {
      console.log("Error " + rej);
    }
  )
  .then(
    (res) => {
      //console.log(res[0].body);
      res.forEach((element) => {
        let nodoNuevo = document.createElement("div");
        nodoNuevo.classList.add("card");
        nodoNuevo.classList.add("animate__fadein");
        nodoNuevo.style.width = "18rem";
        nodoNuevo.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">
            ${element.body}
          </p>
          <p>User id: ${element.userId}</p>
      </div>`;
        contenedor.append(nodoNuevo);
      });
    },
    (rej) => {}
  );

async function name(params) {
  
  new Promise();

}

