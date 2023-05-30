// https://fakestoreapi.com/products

export async function getAllProducts() {
  let productos = [];

  productos = await fetch("https://fakestoreapi.com/products")
    .then((e) => e.json())
    .then((e1) => e1);
  return productos;
}

export async function getProductById(id) {
  let productos;

  productos = await fetch("https://fakestoreapi.com/products/" + id)
    .then((e) => e.json())
    .then((e1) => {
      //console.log(e1);
      return e1;
    });

  return productos;
}

export async function getProductsByCat(category) {
  let productos;

  productos = await fetch(
    "https://fakestoreapi.com/products/category/" + category
  )
    .then((e) => e.json())
    .then((e1) => {
      //console.log(e1);
      return e1;
    });

  return productos;
}
