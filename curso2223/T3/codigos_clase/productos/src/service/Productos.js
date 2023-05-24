// https://fakestoreapi.com/products

export async function getAllProducts() {
  let productos = [];

  productos = await fetch("https://fakestoreapi.com/products")
    .then((e) => e.json())
    .then((e1) => e1);
  return productos;
}
