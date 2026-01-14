let divPersonajes = document.querySelector("#divPersonajes");
function getAllCharacters() {
  let url = "https://stranger-things-api.fly.dev/api/v1/characters";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res1) => {
      console.log(res1);
      res1.forEach((element) => {
        if (element.name != undefined) {
          console.log(element.name);
          console.log("Aparece en el episocio");
          element.appearsInEpisodes.forEach((data) => {
            console.log(`\t ${data}`);
          });
        }
      });
    })
    .catch((err) => {});
}

getAllCharactersAsyc();
async function getAllCharactersAsyc() {
  let url = "https://stranger-things-api.fly.dev/api/v1/characters";
  let data = await fetch(url);
  let dataJSON = await data.json();
  dataJSON.forEach((data) => {
    if (data.name != undefined) {
      divPersonajes.innerHTML += `<div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">${data.name}</h3>
              
            </div>
          </div>
        </div>`;
    }
  });
}

Promise.all();
