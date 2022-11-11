let dineroCasa = Number(prompt("Cuando dinero cuesta la casa"));
let dineroPedido = Number(prompt("Cuando dinero vas a pedir"));
let anioPagar = Number(prompt("en cuantos años lo vas a pagar"));
let interesBanco = Number(prompt("que interes se te aplicar"));
let totalCasa;
let mensualidad;
function calculoHipoteca() {
  let intereses = dineroCasa * (interesBanco / 100);
  totalCasa = dineroCasa + intereses - dineroPedido;
  let totalMeses = anioPagar * 12;
  mensualidad = totalCasa / totalMeses;
  console.log(
    `La casa te cuesta con intereses ${totalCasa} a pagar en ${totalMeses} con un importe mensual de ${Math.round(
      mensualidad
    )}`
  );
}

function cuadroAmortización(totalCasa) {
  let cantidadPendiente = totalCasa - mensualidad;
  console.log(
    `Correspondiente al mes con una cantidad de ${cantidadPendiente}`
  );
  while (cantidadPendiente > 0) {
    cuadroAmortización(cantidadPendiente);
  }
}

calculoHipoteca();
cuadroAmortización(totalCasa);
