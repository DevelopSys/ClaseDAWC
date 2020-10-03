function unaFucion() {
  console.log("Función sencilla");
}

function unaFuncionConParametros(nombre, apellido) {
  console.log(`${nombre} ${apellido}`);
}

function unaFuncionParametrosDefectoOR(obligatorio, defecto) {
  defecto = defecto || "valor por defecto";
  console.log(`${obligatorio} ${defecto}`);
}

function unaFuncionParametrosDefectoIF(obligatorio, defecto) {
  if (typeof defecto == "undefined") {
    defecto = "valor defecto";
  }
  console.log(`${obligatorio} ${defecto}`);
}

function unaFuncionParametrosDefecto(obligatorio, defecto = "defecto") {
  console.log(`${obligatorio} ${defecto}`);
}

function invisibles() {
  console.log(arguments[0]);
}

function retorno() {
  if (arguments != "undefined") return arguments[0] + arguments[1];
  else return "no hay parametros";
}

unaFucion();
unaFuncionConParametros("Borja", "Martin");
unaFuncionParametrosDefectoOR("Borja", "tiene algo");
unaFuncionParametrosDefectoIF("Borja", "algo");
unaFuncionParametrosDefecto("Borja");
invisibles("una", 2, false);
console.log(retorno(1, 2));
console.log(retorno(1, "2"));
console.log(retorno());
