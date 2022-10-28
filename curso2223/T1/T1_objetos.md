# Objetos

Los objetos en javascript son una entidad que permite guardar un conjunto de propiedades y funciones para que puedan ser utilizadas como una unidad. Al igual que pasa en cualquier lenguaje que tenga paradigma de orientación a objetos, javascript permite la creación de estos de muy diferentes formas, destacando entre ellas 4:

- Objetos literales
- Método create
- Clases
- Objetos de fábrica

## Objetos literales

Los objetos literales son aquellos que estan definidos de forma direacta (tal y como su nombre indica). Es lo que en programación se conoce como un objeto de tipo JSON (JavaScrip Object Notation). Estos objetos representan un conjunto de funciones y valores en formato par clave-valor, los cuales pueden ser accedidos y modificados en cualquier momento. Para crear un objeto literal se utiliza la siguiente sintaxis:

```javascript
const nombreObjeto = {propiedad = valor,propiedad2: valor2, propiedad3: valor3 }
```

De esta forma podríamos definir un objeto de tipo proyecto con las siguientes características:

```javascript
const proyecto = {
  nombre: "Proyecto Vodafone",
  tecnologia: "React",
  responsable: "",
  presupuesto: 100000,
  participantes: ["participante1", "participante2"],
  asignacion: (jefeProyecto) => {
    proyecto.responsable = jefeProyecto;
  },
};
```

Como podemos comprobar un objeto literal esta compuesto por una serie de propiedades donde cada una de ellas tiene un valor determinado. Si nos fijamos en cada uno de los valores de sus propiedades, podemos comprobar que cada una de ellas tiene un tipo concreto los cuales van desde un String hasta un number, pasando por tipos más complejos como pueden ser un Array de datos o una función que modifica una de las propiedades del objeto. Para poder acceder a cada una de las propiedades del mismo tan solo tendríamos que utilizar el . para indicar el nombre de la propiedad cuyo valor queremos obtener o bien acceder mediante [] indicando el nombre de la propiedad que se quiere acceder

```javascript
console.log(`El presupuesto del proyecto es de ${proyecto.presupuesto}`); // obteniendo 100000
console.log(
  `La tecnología con la que trabaja el proyecto es ${proyecto["tecnologia"]}` // obteniendo React
);
```

Al igual que se puede acceder para ver el valor de la propiedad, esta se puede utilizar para cualquier cosa:

```javascript
proyecto.responsable.length > 0
  ? console.log(`El respinsable es ${proyecto.responsable}`)
  : console.log("Aún no hay asignado");
// obteniendo Aún no hay asignado
```

En el caso de que la propiedad guarde una función, si se quiere ejecutar se llamaría de forma normal, indicando el número de parámetros que tenga declarado en el valor

```javascript
proyecto.asignacion("Juan Francisco");
proyecto.responsable.length > 0
  ? console.log(`El respinsable es ${proyecto.responsable}`)
  : console.log("Aún no hay asignado");
// obteniendo El respinsable es Juan Francisco
```

En el caso de querer cambiar el valor de una variable ya lo hemos visto, bastaría con hacer una llamada a la propiedad e igualar el nuevo valor que queremos que tenga. Por ejemplo imaginemos que se le quieren sumar 50000€ al valor del prosupuesto actual. Para ello bastaría con ejecutar lo siguiente:

```javascript
proyecto.presupuesto += 50000;
```

De la misma forma, si el elemento es de un tipo complejo como por ejemplo un array, tan solo tendríamos que utilizar sus funciones añadidas como por ejemplo push

```javascript
proyecto.participantes.push("Participante nuevo");
```

Para poder crear una nueva propiedad y valor asignado dentro del objeto, tendremos que hacer como si la propiedad ya existiese, llamandola mediante el . y asignandole el valor que queramos

```javascript
proyecto.fechaVencimiento = new Date(2023, 5, 25);
```

De esta forma se creará una nueva propiedad llamada fechaVencimiento la cual tendrá un valor de tipo Date donde estará asignada la fecha 25/5/2023

Además de todas estas funcionalidades propias de cada uno de los objetos que declaremos, también podremos utilizar métodos propios de la clase Object donde podemos destacar los siguientes:

- assign: realiza una copia exacta del objeto indicado en otro

```javascript
const proyectoCopia = Object.assign({}, proyecto);
console.log(proyectoCopia);
```

- keys: el cual obtiene una lista de cuales son todas las claves asociadas al objeto

```javascript
const proyecto = {
  nombre: "Proyecto Vodafone",
  tecnologia: "React",
  responsable: "",
  presupuesto: 100000,
  participantes: ["participante1", "participante2"],
  asignacion: (jefeProyecto) => {
    proyecto.responsable = jefeProyecto;
  },
};

const claves = Object.keys(proyecto);
console.log(claves); // (6) ['nombre', 'tecnologia', 'responsable', 'presupuesto', 'participantes', 'asignacion']
```

- values: si bien el método anterior obtenia cuales son las claves asociadas al objeto, en este caso se obtienen todos los valores asociados al objeto

```javascript
const valores = Object.values(proyecto);
console.log(valores);
```

- has Ownproperty: evalúa si tiene o no una propiedad indicada como clave

```javascript
console.log(proyecto.hasOwnProperty("responsable"));
```

## Objetos create

Javascrip tiene la posibilidad de crear objetos "base" que sirvan como ejemplo a otros que los especialicen. Se trata de una aproximación muy cercana al concepto de orientación a objetos de cualquier lenguaje de programación, pero sin la necesidad de crear clases de las cuales extiende el resto (característica que también tiene js y que veremos en los siguientes puntos)

Para ello vamos a utilizar como ejemplo el objeto proyecto anterior, metiendole un par de características adicionales como son el calcularPrespuesto y el anadirPersonal

```javascript
const proyectoBase = {
  nombre: "Proyecto Vodafone",
  tecnologia: "React",
  responsable: "",
  presupuesto: 100000,
  participantes: ["participante1", "participante2"],
  asignacion: function (jefeProyecto) {
    this.responsable = jefeProyecto;
  },
  calcularPresupuesto: function () {
    this.participantes.length > 2 &&
      (this.presupuesto += this.presupuesto * 0.25);
  },
  asignarPArticipante: function (participante) {
    this.participantes.push(participante);
  },
};
```

Con este proyecto base, podemos crear tantos proyectos como cueramos y de ahí hacer tantas modificaciones como sean necesarias. Para ello tendremos que crear un objeto secundario y utilizamos el método create de Object, quedando creado el segundo objeto con todas las características del base

```javascript
const proyectoBase = {
  nombre: "Proyecto Vodafone",
  tecnologia: "React",
  responsable: "",
  presupuesto: 100000,
  participantes: ["participante1", "participante2"],
  asignacion: function (jefeProyecto) {
    this.responsable = jefeProyecto;
  },
  calcularPresupuesto: function () {
    this.participantes.length > 2 &&
      (this.presupuesto += this.presupuesto * 0.25);
  },
  asignarPArticipante: function (participante) {
    this.participantes.push(participante);
  },
};

const proyectoReal = Object.create(objetoFuncional);
console.log(proyectoReal);
```

Una vez hecho esto tendríamos un objeto exáctamente igual, del que podemos hacer cambios y configuraciones nuevas.

Antes de ver el siguiente tipo de objeto, es interesante ver como todos los objetos que se marcan como const (no mutables), tienen la capacidad de modificar su estructura interna, aunque se hayan declarado como constantes. Esto ya se explicó en el tema de los arrays y es porque la variable no cambia (por lo que se respeta la no mutabilidad), lo que cambia es el contenido. En el caso de querer que el contenido tampoco se pueda cambiar, lo que se hace es congelarlos

```javascript
Object.freeze(proyectoBase);
proyectoBase.nueva = "Nueva propiedad";
console.log(proyectoBase);
```

Una cosa importante a tener en cuenta es que, una vez freezeados los objetos, no hay manera de volverlos a poner en su condición normal

## Crear objetos por clases

Como se acaba de ver, es posible crear un objeto a partir de otro mediante el prototipo. Sin embargo no es la aforma más común de trabajar con objetos que dependen de otros. Para esto está el concepto de clase. PAra poder crear una clase la sitaxis es la siguiente:

```javascript
class Proyecto {
  #participantes = Array();

  constructor(nombre, presupuesto, tecnologia) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    console.log("los datos del proyecto actual son:");
    console.log(`Participantes: ${this.participantes}`);
    console.log(`Presupuesto: ${this.presupuesto}`);
    console.log(`Tecnología: ${this.tecnologia}`);
  }
}
```

Cosas importantes a tener en cuenta en el uso de los objetos:

- Pueden existir tantos constructores como quiers, pero para poder utilizarlos se usa la palabra reservada constructor
- Las variables que se pidan en constructor, por defecto se declararán como variables de clase privadas
- En el caso de que se quiere declarar una variable como provada, es necesario poner el símbolo '#' antes del nombre de la variable

Si se quiere crear un objeto de la clase se realiza mediante el operador new. Para estos primeros ejemplo vamos a realizarlo todo desde el mismo archivo donde se ha definido la clase

```javascript
class Proyecto {
  participantes = Array();

  constructor(nombre, presupuesto, tecnologia) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    console.log("los datos del proyecto actual son:");
    console.log(`Participantes: ${this.participantes}`);
    console.log(`Presupuesto: ${this.presupuesto}`);
    console.log(`Tecnología: ${this.tecnologia}`);
  }
}

let proyecto = new Proyecto("Desarrollo Web", 10000, "React");
```

Algunas de las consideraciones adicionales a la hora de trabajar con clases en js son las siguientes 

- Declaración de variables privadas: Son aquellas que no son visibles desde fuera de la clase. Para poder declarar una variable com privada es necesario el uso del caracter # antes del nombre de la variable:

```javascript
class Proyecto {
  #participantes = Array();

  constructor(nombre, presupuesto, tecnologia) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    console.log("los datos del proyecto actual son:");
    console.log(`Participantes: ${this.participantes}`);
    console.log(`Presupuesto: ${this.presupuesto}`);
    console.log(`Tecnología: ${this.tecnologia}`);
  }
}

let proyecto = new Proyecto("Desarrollo Web", 10000, "React");
proyecto.mostrarDatos();
console.log(
  `Los participantes del proyecto tienen son ${proyecto.participantes.size} personas`
); // error

```

En este caso la variable participantes se declara como privada, por lo que no podría ser accesible desde fuera de la clase

- Métodos setter / getter: Los métodos setter y getter permiten el acceso a las variables de forma directa tanto para ver el contenido como para cambiarlo. Para poder declarar métodos getter y setter, es necesario acompañar de la palabra get o set a cada uno de los métodos: 

```javascript
class Proyecto {
  participantes = Array();

  constructor(nombre, presupuesto, tecnologia) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.tecnologia = tecnologia;
  }

  get getParticipantes() {
    return this.participantes;
  }

  set setParticipantes(participantes) {
    this.participantes = participantes;
  }
}

let proyecto = new Proyecto("Desarrollo Web", 10000, "React");
proyecto.setParticipantes = ["Borja", "Juan"];
console.log(proyecto.getParticipantes);
```

Si nos damos cuenta, en el proyecto, cuando se accede a la propiedad participantes, se realiza mediante los métodos geter y seter creados. Sin embargo en código se realiza como si fuese una variable. Esto se debe a que los métodos tratan a la variable como tal.

- Herencia y polimorfimso: Al igual que pasa en cualquier lenguaje de programación orientado a objetos, existe la posibilidad de utilizar las clases como base de otras. Esto es el conceto de herencia. Partiendo del ejemplo del punto anterior puede ser interesante que la clase proyecto sea la base de otras dos clases que especializan a este, como pueden ser proyectos tecnológicos y proyectos legales. Para ello se utiliza la palabra reservada extends en el caso de querer partir de una clase

```javascript
// clase del proyecto

class Proyecto {
  participantes = Array();

  constructor(nombre, presupuesto) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
  }

  mostrarDatos() {
    console.log("los datos del proyecto actual son:");
    console.log(`Participantes: ${this.participantes}`);
    console.log(`Presupuesto: ${this.presupuesto}`);
  }

  get getParticipantes() {
    return this.participantes;
  }

  set setParticipantes(participantes) {
    this.participantes = participantes;
  }
}

// clase del proyecto_legal
class ProyectoLegal extends Proyecto {
  ley;

  constructor(nombre, presupuesto, ley) {
    super(nombre, presupuesto);
    this.ley = ley;
  }

  mostrarDatos() {
    super.mostrarDatos();
    console.log(`La ley que aplica es la de ${this.ley}`);
  }
}

let proyectoLegal = new ProyectoLegal(
  "Subvención ministerio",
  10000,
  "2000/10"
);

proyectoLegal.mostrarDatos();
```

Como aún no sabemos modularizar, para poder hacer esto funcional, en el archivo que llama a los archivos.js (el index), es necesario cargar tanto el .js del proyecto legal como el del proyecto. Imaginemos que también tenemos carga una clase que es ProyectoTecnológico. En este punto podriamos hacer un array de los mismos tipos y en el recorrido llamar a una misma funcion

```javascript
class ProyectoTecnologico extends Proyecto {
  tecnologia;

  constructor(nombre, presupuesto, tecnologia) {
    super(nombre, presupuesto);
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    super.mostrarDatos();
    console.log(`La ley tecnología es ${this.tecnologia}`);
  }
}

let proyectoLegalSub = new ProyectoLegal(
  "Subvención ministerio",
  10000,
  "2000/10"
);

let proyectoTecnológicoWeb = new ProyectoTecnologico(
  "Desarrollo web",
  1000000,
  "React"
);

var proyectos = [proyectoTecnológicoWeb, proyectoLegalSub];

proyectos.forEach((element) => {
  element.mostrarDatos();
});
```