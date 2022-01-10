let selectLigas;
let selectEquipos;
let ligaSeleccionada

window.addEventListener("load", () => {
  selectLigas = document.querySelector("#select-ligas");
  selectEquipos = document.querySelector("#select-equipos");
  cargarLigas();
  selectLigas.addEventListener("change", (e) => {
    ligaSeleccionada = e.target.value;
    cargarEquipos(ligaSeleccionada);
    // fetch cargar los equipos
    // quiero llegar al select
  });

  selectEquipos.addEventListener("change", (e) => {cargarDetalle(e.target.value, ligaSeleccionada)});
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
  let url = `https://www.thesportsdb.com/api/v1/json/2/lookup_all_teams.php?id=${id}`;
  let nodosBorrar = document.querySelectorAll("#select-equipos option");
  nodosBorrar.forEach((e) => e.remove());
  //document.querySelector("#select-equipos").childNodes.forEach((e) => {
  //console.log(e);
  //selectEquipos.removeChild(e);
  //});

  fetch(url)
    .then(
      (res) => res.json(),
      (rej) => {}
    )
    .then(
      (res) => {
        res.teams.forEach((element) => {
          let nodoOption = document.createElement("option");
          nodoOption.value = element.idTeam;
          nodoOption.innerHTML = `${element.strTeam}`;
          selectEquipos.append(nodoOption);
        });
      },
      (rej) => {}
    );
}

function cargarDetalle(id, idLiga) {
    let url = `https://www.thesportsdb.com/api/v1/json/2/lookup_all_teams.php?id=${idLiga}`;


  fetch(url)
    .then(
      (res) => res.json(),
      (rej) => {}
    )
    .then(
      (res) => {
        res.teams.forEach((element) => {
          if (element.idTeam == id){
              
          }
        });
      },
      (rej) => {}
    );
}

// fetch(url) --> data.json --> json
