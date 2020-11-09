# Clases

Al igual que pasa en otros lenguajes de programación existe la posibilidad de crear clases independientes que funcionen de forma individual, para poder así crear un molde que se común a todos los objetos que se quieran crear del mismo. 

````
function Usuario(nombre, edad) {
  console.log("Ejecucion de la persona");
  this.nombre = nombre;
  this.edad = edad;
}
````

En este caso con crear una fusión que asigna a una variable this.algo lo pasado como parámetros, ya devolvería el objeto creado. Para ello cuando se llame a esta funcion debe acompañarse de la palabra reservada new

````
let usuario = new Persona("borja", 18);
````

Así se crea un objeto sencillo sin necesidad de declararlo en una clase externa. Si adicionalmente se quiere tener métodos que puedan ser ejecutados por el objeto, se pueden definir dentro del mismo como si fuesen funciones de flecha asignadas a variables: 

````
let variableComun = "ejecución desde el archivo";

function Persona(nombre, edad) {
  console.log("Ejecucion de la persona");
  this.nombre = nombre;
  this.edad = edad;

  this.mostrarDatos = () => {
    console.log(`Los datos de la persona son ${this.nombre} y ${edad}`);
    console.log(`${variableComun}`);
  };
}
````

De esta forma se puede ver cómo es posible definir una función dentro de un método, para así poder tener una funcionalidad común para todos los objetos de tipo Persona. De igual modo se puede utilizar cualquier variable que sea del archivo, simplemente llamándola sin necesidad de utilizar la palabra reservada this (esta solo se queda para referirse a características del objeto)

Esta forma de trabajar es suficiente si no se quieren trabajar con extensiones, implementaciones es muy complicado de utilizar. Para poder eliminar trabajar de forma completa, es necesario crear clases independientes.

## Clases independientes

Para poder solventar el problema que nos hemos encontrado antes, la solución es la creación de clases externas donde cada una de ellas representa un molde para un objeto diferente. 

### Creación de clases: constructor, propiedades y métodos

Para poder crear una clase es JS se utiliza la palabra reservada class seguida del nombre (en mayúsculas)

````
class Usuario {
}

````

Al igual que en cualquier lenguaje de programación orientada a objetos, el elemento básico de toda clase es su constructor, con la diferencia que en JS tan solo se utiliza la palabra reservada constructor: con el objeto creado es posible llamar a un objeto de la clase utilizando la palabra reservada new.

````
class Usuario {
  // constructor de la clase
  constructor() {
    console.log("objeto construido");
  }
}

let usuario = new Usuario();

````

Desde este punto, las posibilidades de creación son múltiples, ya que se puede construir un objeto con tantos parámetros como se quiera, definiéndolos antes del constructor para que puedan ser accesibles desde cualquier parte de la clase:

````
class Usuario {
  
  nombre;
  apellido;

  constructor() {}
}

let usuario = new Usuario();
console.log(usuario)
````

Si hacemos un log del objeto creado, podríamos ver cómo por defecto inicializa todas las variables a vacío (no null), aunque estas no sean pedidas por el constructor. Si queremos inicializarlas con parámetros pedidos por constructor sería tan sencillo como pedirlas por parámetros y llamarlas desde el constructor.

````
class Usuario {


  nombre;
  apellido;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let usuario = new Usuario("borja", "martin");
console.log(usuario);

````

En este caso el uso del this es obligatorio, ya que si no lo uso estoy haciendo referencia a una variable que está dentro del ámbito del bloque. Incluso es posible obviar la creación de las variables de clase en la clase ya que al usar la palabra reservada this se da por echo que se si no están creadas esas variables, estas se crean por defecto

````
class Usuario {


  nombre;
  apellido;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let usuario = new Usuario("borja", "martin");
console.log(usuario);
````


Una vez está creado el objeto, el siguiente paso es crear toda la funcionalidad asociada al mismo, con las funciones. Es importante fijarse que no es necesario declarar la palabra reservada let a la hora de crear variables, de la misma forma que no es necesario utilizar la palabra reservada función a la hora de crear un método dentro de un objeto. 

````
class Usuario {

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  mostrarDatos() {
    if (!this.nombre || !this.apellido) {
      throw new Error("Tienes que decirme algún dato para poder mostrarlo");
    }
    console.log(
      `Los datos son\nNombre: ${this.nombre}\nApellido:${this.apellido}`
    );
  }
}

let usuario1 = new Usuario("Borja", "Martin");
let usuario2 = new Usuario("Pedro", "Herrera");
let usuario3 = new Usuario();

usuario1.mostrarDatos();
usuario2.mostrarDatos();
usuario3.mostrarDatos();
````

Otra cosa a tener en cuenta es que dentro de un método no solo se pueden llamar a variables de la clase, sino que también se pueden llamar a métodos que están definidos dentro de la clase

````
class Usuario {
  nombre;
  apellido;
  salario;

  constructor(nombre, apellido, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }

  mostrarDatos() {
    if (!this.nombre || !this.apellido) {
      throw new Error("Tienes que decirme algún dato para poder mostrarlo");
    }
    console.log(
      `Los datos son\nNombre: ${this.nombre}\nApellido:${this.apellido}`
    );
    this.calcularSalario();
  }

  calcularSalario() {
    if (this.salario == 0) {
      console.log(`La persona aún no está trabajando`);
    } else {
      console.log(`El salario de la persona es ${this.salario}`);
    }
  }
}

let usuario1 = new Usuario("Borja", "Martin", 100);
let usuario2 = new Usuario("Pedro", "Herrera", 1000);
let usuario3 = new Usuario();

usuario1.mostrarDatos();
usuario2.mostrarDatos();
usuario3.mostrarDatos();
````

Al igual que en cualquier otro lenguaje de programación orientada a objetos, se puede modificar el ámbito de las variables. En JS ya hemos visto que están las variables let y var para poder definir el ámbito, pero también existe la posibilidad de declarar una variable privada dentro de la definición de una clase. De esta forma la variable solo podrá ser accesible desde su clase o desde algún método (concepto de encapsulamiento)

````
class Trabajador extends Usuario {
  #numeroDni;

  constructor(nombre, apellido, sueldo, numeroDni) {
    super(nombre, apellido);
    this.sueldo = sueldo;
    this.#numeroDni = numeroDni;
  }

  static constructorEspecial() {}

  static metodoDirecto() {
    console.log("Método llamado de forma directa");
  }
  mostrarDatos() {
    console.log("Impresion desde los datos del trabajador");
    super.mostrarDatos();
  }

  get getNumeroDNI() {
    return this.#numeroDni;
  }
}

let trabajador = new Trabajador("Borja", "Martin", 1332, 123);
//console.log(trabajador.#numeroDni);
console.log(trabajador.getNumeroDNI);
````

En este caso, la variable numeroDNI se ha declarado privada ya que se le ha adjuntado el # por lo que no es accesible de forma directa desde fuera de la clase, si desde un método

### Métodos setter y setter

Uno de los métodos prácticamente obligatorios dentro de la definición de las clases son los geter y seter. Estos métodos permiten el acceso y modificación de aquellas variables que que están definidas dentro de una clase. Su uso es idéntico al de cualquiera de los métodos que se han podido definir dentro de la clase, con la diferencia que se utiliza la palabra reservada set y get

````
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setApellido(apellido) {
    this.apellido = apellido;
  }
  set setSalario(salario) {
    this.salario = salario;
  }

  get getNombre(){
      return this.nombre;
  }
  get getApellido(){
      return this.apellido;
  }
  get getSalario(){
      return this.salario;
  }
````

Además, la diferencia es que cuando se quiera llamar el método se debe realizar de la siguiente forma:

````
let usuario3 = new Usuario();
usuario3.setNombre = "Juan";
usuario3.setApellido = "Gonzalez";
console.log(usuario3.getApellido);
console.log(usuario3.getNombre);
````

Estos métodos no son llamados como métodos propiamente dichos, sino como acceso y modificación de una variable. Sin embargo si lo miro dentro del prototype aparece como método

````
Usuario {nombre: "Juan", apellido: "Gonzalez", salario: undefined}
apellido: "Gonzalez"
nombre: "Juan"
salario: undefined
getApellido: (...)
getNombre: (...)
getSalario: (...)
__proto__:
calcularSalario: ƒ calcularSalario()
constructor: class Usuario
getApellido: (...)
getNombre: (...)
getSalario: (...)
mostrarDatos: ƒ mostrarDatos()
get getApellido: ƒ getApellido()
get getNombre: ƒ getNombre()
get getSalario: ƒ getSalario()
set setApellido: ƒ setApellido(apellido)
set setNombre: ƒ setNombre(nombre)
set setSalario: ƒ setSalario(salario)
__proto__: Object
````

### Clases con herencia

Esta es la forma más corriente de crear objetos de una clase, pero también me puedo servir de una superclase para que esta me dé toda la funcionalidad y que tan solo escriba los elementos particulares del nuevo objeto. Para ello vamos hace un ejemplo donde se utiliza la clase persona desarrollada en el ejemplo anterior y tengo la necesidad de crear otra clase que especialice a la anterior , por ejemplo añadiéndole una propiedad de salario o estudios

````
class Usuario {
  nombre;
  apellido;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  mostrarDatos() {
    console.log(
      `Los datos son\nNombre: ${this.nombre}\nApellido:${this.apellido}`
    );
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setApellido(apellido) {
    this.apellido = apellido;
  }

  get getNombre() {
    return this.nombre;
  }
  get getApellido() {
    return this.apellido;
  }
}
````

Para poder crear la primera de las clases, se utiliza la palabra reservada extends ya que obtendrá todos los elementos de la clase padre

````
class Estudiante extends Usuario {
  matricula;
}
let estudiante = new Estudiante("Pedro", "Herrera", 23, "DAM");

````

Lo único que quedaría es la gestión de las nuevas propiedades en el constructor de la clase Estudiante. Para ello es necesario llamar de forma obligatorios al constructor de la superclase

````
class Estudiante extends Usuario {
  matricula;
  constructor(nombre, apellido, matricula) {
    super(nombre, apellido);
    this.matricula = matricula;
  }
}

let estudiante = new Estudiante("Pedro", "Herrera", 23, "DAM");
console.log(estudiante);

````

Así le indico al constructor de esta clase que el constructor del super se encarga de ejecutar la construcción con las propiedades nombre y edad, y la propiedad matrícula se realiza en el constructor propio. De la misma forma podría utilizar los métodos que me ha otorgado la super clase para poder modificar su comportamiento o bien para sobrescribirlos

````
class Estudiante extends Usuario {
  matricula;
  constructor(nombre, apellido, matricula) {
    super(nombre, apellido);
    this.matricula = matricula;
  }

  mostrarDatos() {
    console.log("Impresion desde los datos del estudiante");
    super.mostrarDatos();
  }
}
````

Para poder hacer esta sobreescritura el método se debe llamar idéntico al de la clase padre. Si es necesario llamar al comportamiento del método de la super clase simplemente se debe llamar a la palabra reservada super.mostrarDatos();

````

class Estudiante extends Usuario {
  matricula;
  constructor(nombre, apellido, matricula) {
    super(nombre, apellido);
    this.matricula = matricula;
  }

  mostrarDatos() {
    console.log("Impresion desde los datos del estudiante");
    super.mostrarDatos();
  }
}

class Trabajador extends Usuario {
  constructor(nombre, apellido, sueldo) {
    super(nombre, apellido);
    this.sueldo = sueldo;
  }

  mostrarDatos() {
    console.log("Impresion desde los datos del trabajador");
    super.mostrarDatos();
  }
}

let usuario = new Usuario("Borja", "Martin");
let estudiante = new Estudiante("Pedro", "Herrera", "DAM");
let trabajador = new Trabajador("Borja", "Martin", 1332);
//console.log(estudiante);
estudiante.mostrarDatos();
trabajador.mostrarDatos();

````

## Métodos - propiedades estáticas

Por definición un método estático es aquel que es accesible de forma directa sin necesidad de tener una instancia del objeto en cuestión. Para poder utilizar métodos y variables estáticas en JS basta con poner la palabra reservada static antes del uso del método / variable

````
class Trabajador extends Usuario {
  constructor(nombre, apellido, sueldo) {
    super(nombre, apellido);
    this.sueldo = sueldo;
  }

  static constructorEspecial() {}

  static metodoDirecto() {
    console.log("Método llamado de forma directa");
  }
  mostrarDatos() {
    console.log("Impresion desde los datos del trabajador");
    super.mostrarDatos();
  }
}
let trabajador = new Trabajador("Borja", "Martin", 1332);

Trabajador.metodoDirecto();

````

Es importante tener en cuenta que los métodos estáticos no podrán ser llamados por una instancia al uso de la clase.

