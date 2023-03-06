let selectCryptos = document.querySelector("#select_criptos");

async function consultaMonedas() {
  const ok = await fetch(
    "https://run.mocky.io/v3/16f71bfa-7bee-476f-ab6b-71348547a9d3"
  );
  const ok1 = await ok.json();
  console.log(ok);
  ok1.forEach((element) => {
    selectCryptos.innerHTML += `<option value=${element.id}>${element.name}</option>`;
  });
}

selectCryptos.addEventListener("change", (e) => {
  // cada vez que hago un cambio

  console.log("https://api.coingecko.com/api/v3/coins/" + e.target.value);
  // pinto una carta dentro de un div con innerHTML y una promesa a la url anterio
});

consultaMonedas();
