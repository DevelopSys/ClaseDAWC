// https://dummyjson.com/products/categories --> categorias
// https://dummyjson.com/products --> productos todos
// https://dummyjson.com/products/category/smartphones --> por categoria
let desplegable = document.querySelector("#select_categorias");
let productos = document.querySelector(".row");
let boton = document.querySelector("button");

async function getCategorias() {
  let respuesta = await fetch("https://dummyjson.com/products/categories");
  let respuestaJSON = await respuesta.json();
  return respuestaJSON;
}

async function getProductos() {
  let respuesta = await fetch("https://dummyjson.com/products");
  let respuestaJSON = await respuesta.json();
  return respuestaJSON;
}

boton.addEventListener("click", (e) => {
  productos.innerHTML = "";
  let categoria = desplegable.value;
  getProductosCategoria(categoria).then((res) => {
    res.products.forEach((element) => {
      representarProducto(element);
    });
  });
  console.log(categoria);
  // https://dummyjson.com/products/category/smartphones
});

async function getProductosCategoria(categoria) {
  let url = `https://dummyjson.com/products/category/${categoria}`;
  let resultado = await fetch(url);
  let resultadoJSON = await resultado.json();
  return resultadoJSON;
}

/* fetch("https://dummyjson.com/products/categories")
  .then((res) => {
    return res.json();
  })
  .then((res1) => {
    console.log(res1);
  }); */

getCategorias().then((res) => {
  console.log(res);
  res.forEach((element) => {
    desplegable.innerHTML += `<option value="${element}">${element}</option>`;
  });
});

getProductos().then((res) => {
  res.products.forEach((element) => {
    representarProducto(element);
  });
});

function representarProducto(producto) {
  productos.innerHTML += `<div class="col">
          <div class="card" style="width: 18rem">
            <img src="${producto.images[0]}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${producto.title}</h5>
              <p class="card-text">
                ${producto.description}
              </p>
              <span>${producto.price}</span>
            </div>
          </div>
        </div>`;
}
