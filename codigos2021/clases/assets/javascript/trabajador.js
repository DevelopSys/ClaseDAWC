class Trabajador extends Persona {
  constructor(nombre, apellido, salario = 0, horas = 0) {
    // los param nombre apellido del const de Persona
    super(nombre, apellido);
    this.salario = salario;
    this.horas = horas;
  }

  mostrarDatos() {
    return (
      super.mostrarDatos() + ` horas: ${this.horas} salario: ${this.salario}`
    );
  }
}
