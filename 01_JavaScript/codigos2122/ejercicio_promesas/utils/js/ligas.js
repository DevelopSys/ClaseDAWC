let selectLigas;

window.addEventListener("load", () => {
  selectLigas = document.querySelector("#select-ligas");
  cargarLigas();
  selectLigas.addEventListener("change", (e) => {
    let id = e.target.value;
    cargarEquipos(id)
    // fetch cargar los equipos
    // quiero llegar al select
  });
});

function cargarLigas() {
  let url = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
  fetch(url)
    .then(
      (res) => res.json(),
      (rej) => {}
    )
    .then(
      (res) => {
          console.log(res.leagues);
        res.leagues.forEach((element) => {
          let nodoOption = document.createElement("option");
          nodoOption.value = element.idLeague;
          nodoOption.innerHTML = `${element.strLeague}`;
          selectLigas.append(nodoOption);
        });
      },
      (rej) => {}
    );
}

function cargarEquipos(id) {
    let url = `https://www.thesportsdb.com/api/v1/json/2/lookup_all_teams.php?id=${id}`
    console.log(url);
}

// fetch(url) --> data.json --> json
