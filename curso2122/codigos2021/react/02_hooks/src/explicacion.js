let funcionEstado = (variable) => {
  return [
    variable,
    (entrada) => {
      // modifica el valor de la primera posicion
      variable = entrada;
    },
  ];
};

const [estado, setEstado] = funcionEstado(2);

estado; // 2
setEstado(1); // modifico el valor a 1
estado; // 1

variable;
setVariable(3);
