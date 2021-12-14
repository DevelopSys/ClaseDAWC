let idioma = "es_ES";
let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4ef66e12cddbb8fe9d4fd03ac9632f6e&language=${idioma}&page=1`;
let botonCarga;
let listaPeliculas;

window.addEventListener("load", () => {
  document.querySelector("#select_idioma").addEventListener("change", (e) => {
    this.url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4ef66e12cddbb8fe9d4fd03ac9632f6e&language=${e.target.value}&page=1`;
    console.log(this.url);
  });

  this.listaPeliculas = document.querySelector("ul");

  botonCarga = document
    .querySelector("#boton_cargar")
    .addEventListener("click", (e) => {
      // promesa
      fetch(this.url)
        .then((d) => d.json())
        .then((d) => {
          if (document.querySelectorAll("#columna_peliculas a") != null) {
            document
              .querySelectorAll("#columna_peliculas a")
              .forEach((e) => e.remove());
          } else {
            d.results.forEach((element) => {
              //console.log(element.original_title);
              let nodoPelicula = document.createElement("a");
              nodoPelicula.classList.add("list-group-item");
              nodoPelicula.classList.add("list-group-item-action");
              nodoPelicula.innerHTML = element.original_title;
              this.listaPeliculas.append(nodoPelicula);

              nodoPelicula.addEventListener("click", (e) => {
                document.querySelectorAll("ul a").forEach((elemento) => {
                  elemento.classList.remove("active");
                });

                nodoPelicula.classList.add("active");

                if (document.querySelector("#columna_descripcion p") == null) {
                  let nodoDescripcion = document.createElement("p");
                  nodoDescripcion.innerHTML = element.overview;
                  document
                    .querySelector("#columna_descripcion")
                    .append(nodoDescripcion);
                } else {
                  document.querySelector("#columna_descripcion p").remove();
                  let nodoDescripcion = document.createElement("p");
                  nodoDescripcion.innerHTML = element.overview;
                  document
                    .querySelector("#columna_descripcion")
                    .append(nodoDescripcion);
                }

                let nodoImagen = document.createElement("img");
                nodoImagen.classList.add("img-fluid");
                nodoImagen.src =
                  "https://image.tmdb.org/t/p/w500/" + element.poster_path;

                document.querySelector("#columna_imagen").append(nodoImagen);
              });
            });
          }
        }).reject(e=>{console.log("error en la consulta de los datos");});
    });
});
