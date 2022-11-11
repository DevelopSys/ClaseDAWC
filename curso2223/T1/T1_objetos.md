# Objetos

Los objetos en javascript son una entidad que permite guardar un conjunto de propiedades y funciones para que puedan ser utilizadas como una unidad. Al igual que pasa en cualquier lenguaje que tenga paradigma de orientación a objetos, javascript permite la creación de estos de muy diferentes formas, destacando entre ellas 4:

- Objetos literales
- Método create
- Clases
- Objetos de fábrica

## Objetos literales

Los objetos literales son aquellos que están definidos de forma directa (tal y como su nombre indica). Es lo que en programación se conoce como un objeto de tipo JSON (JavaScrip Object Notation). Estos objetos representan un conjunto de funciones y valores en formato par clave-valor, los cuales pueden ser accedidos y modificados en cualquier momento. Para crear un objeto literal se utiliza la siguiente sintaxis:

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

Como se acaba de ver, es posible crear un objeto a partir de otro mediante el prototipo. Sin embargo no es la forma más común de trabajar con objetos que dependen de otros. Para esto está el concepto de clase. PAra poder crear una clase la sintaxis es la siguiente:

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

- Herencia y polimorfismo: Al igual que pasa en cualquier lenguaje de programación orientado a objetos, existe la posibilidad de utilizar las clases como base de otras. Esto es el concepto de herencia. Partiendo del ejemplo del punto anterior puede ser interesante que la clase proyecto sea la base de otras dos clases que especializan a este, como pueden ser proyectos tecnológicos y proyectos legales. Para ello se utiliza la palabra reservada extends en el caso de querer partir de una clase

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

Como aún no sabemos modular, para poder hacer esto funcional, en el archivo que llama a los archivos.js (el index), es necesario cargar tanto el .js del proyecto legal como el del proyecto. Imaginemos que también tenemos carga una clase que es ProyectoTecnológico. En este punto podríamos hacer un array de los mismos tipos y en el recorrido llamar a una misma función

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

## Objetos con notacion JSON

A la hora de comunicar servicios web entre sí, una de las formas más comunes es mediante lo que se conoce con las siglas de JSON, las cuales hacen referencia a JavaScript Object Notation. Por definición un elemento de este tipo es un objeto creado en JavaScript que permite la asociación de elementos con un par clave - valor. Es muy utilizado como elemento de intercambio por su poco peso y su facilidad de uso. En este punto vamos a ver como trajabar con json desde el lenguaje. Antes que nada vamos a ver que es un objeto json. Siguiente el ejemplo que tenníamos de los proyectos, vamos a crear un JSON que represente un objeto de tipo proyecto, con las características de nombre, presupuesto y participantes. Para ello es necesario empezar la notacion con las llevas ({}), seguidas de la clave asociada y el valor asociado. Se podrán definir tantos pares como sean necesarios. 

```javascript
let proyecto = {
  nombre: "Desarrollo Web",
  presupuesto: 10000,
  participantes: ["Borja", "Juan", "Luis"],
};
```
Como se puede ver, tenemos una variable que está creada en formato json, donde cada uno de las claves tiene asignada un valor. Es importante ver que los tipos de los valores pueden ser cualquiera siempre y cuando el lenguaje lo admita, incluso otro objeto uo una función como veremos más adelante.

A la hora de acceder a los datos que tiene asociado un json se puede hacer directemante a la posicion con el nombre, o con el nombre tal cual. Hay que tneer en cuenta que dependiendo de cual sea el tipo de dato que está asociado a la clave, es posible que sea necesario un acceso diferente

```javascript
console.log(proyecto.nombre); // Desarrollo Web

console.log(proyecto.participantes[0]); // Borja
```

Además de poder asociad tipos a claves, también es posible agregar funciones dentro del objeto json, tal y como sería en una declaración de función anónima.

```javascript
let proyecto = {
  nombre: "Desarrollo Web",
  presupuesto: 10000,
  participantes: ["Borja", "Juan", "Luis"],
  agregarParticiante : function (particiapante) {
    this.participantes.push(particiapante)
  }
};

proyecto.agregarParticiante("Diego");
console.log(proyecto.participantes);
```

En el caso de querer acceder mediante el nombre de la clave como posición del objeto es necesario hacerlo mediante string

```javascript
console.log(proyecto['nombre']);
```

Esta es la estructura básica de los objetos json. Lo normal es que estos están ubicados en una estructura aún mayor, donde todos los elementos se guarden por posiciones. 

```javascript
const proyectosEmpresa = [
  {
    nombre: "Desarrollo Web",
    presupuesto: 10000,
    participantes: ["Borja", "Juan", "Luis"],
    agregarParticiante: function (particiapante) {
      this.participantes.push(particiapante);
    },
  },
  {
    nombre: "Desarrollo Java",
    presupuesto: 50000,
    participantes: ["Dani", "Igor", "Laura", "Tomas"],
    agregarParticiante: function (particiapante) {
      this.participantes.push(particiapante);
    },
  },
  {
    nombre: "Desarrollo BI",
    presupuesto: 100000,
    participantes: ["Aitor", "Dario", "Cristian", "Alejandro"],
    agregarParticiante: function (particiapante) {
      this.participantes.push(particiapante);
    },
  },
  ,
];
```

Así, cada uno de los objetos está dentro de una posición de un array común. Ahora se podrían acceder individualmente o directamente filtrar o recorrer como array que son:

```javascript

console.log(
  `El proyecto ${proyectosEmpresa[0].nombre} tiene ${proyectosEmpresa[0].participantes.length}`
);
proyectosEmpresa[1].agregarParticiante("Nuevo trabajador");
console.log(
  `El proyecto ${proyectosEmpresa[1].nombre} tiene ${proyectosEmpresa[1].participantes.length}`
);

console.log(
  `En la empresa hay ${
    proyectosEmpresa.filter((it) => it.presupuesto > 50000).length
  } proyectos que superan los 50000€ de presupuesto`
);
```

Normalmente este tipo de objetos se suele obtener mediante peticiones http con funciones fetch o ajax que se verán más adelante. 

## Destructuración de objetos, arrays y json

La sintaxis de desestructuración es una expresión que permite desempacar valores de arrays o propiedades de objetos en distintas variables de forma automática. Es muy útil cuando se quiere trabajar con elementos de un objeto y no se quiere realizar tareas de extracción de variables mediante getter/setter.

### En objetos

Para explicar la destructuración en objetos vamos a partir del objeto creado en el punto anterior

```javascript
let proyecto = {
  nombre: "Desarrollo Web",
  presupuesto: 10000,
  participantes: ["Borja", "Juan", "Luis"],
  agregarParticiante : function (particiapante) {
    this.participantes.push(particiapante)
  }
};
```
De forma normal si queremos obtener una variable por cada uno de los elementos del objeto haríamos lo siguiente: 

```javascript
let nombre = proyecto.nombre;
let presupuesto = proyecto.presupuesto;
let participantes = proyecto.participantes;

console.log(nombre);
console.log(presupuesto);
console.log(participantes);
```

Esta sería la forma "común" de hacerlo. Sin embargo con la destructuración la cosa se resumiría bastante, quedando lo siguiente

```javascript
let { nombre, presupuesto, participantes } = proyecto;
console.log(nombre);
console.log(presupuesto);
console.log(participantes);
```

Esto es bastante útil ya que obtenemos tres variables de golpe sin necesidad de tratarlas individualmente, siempre teniendo en cuenta que las propiedades de desempacas existan y se llamen de la misma forma en el objeto. 

En el caso de querer cambiarle el nombre a la nueva variable y que no se llame igual que la propiedad se identifica con los : despues de la propiedad a destructurar


```javascript
 let { nombre: nombreNuevo, presupuesto: presupuestoNuevo, participantes: participantesNuevos } = proyecto;
console.log(nombreNuevo);
console.log(presupuestoNuevo);
console.log(participantesNuevos);
```

Pero la cosa no acaba ahí. Imaginemos que tenemos una función que recibe por parámetros un objeto de tipo proyecto, pero en realidad lo que nos interesa de ese parámetro solo son dos características como son el nombre y el presupuesto. Entonces podemos hacer la destructuración en la propia declaración de la función

```javascript
function tratarProyecto({ nombre, presupuesto }) {
  console.log(
    `Del proyecto recibido, se ha destructurado el nombre: ${nombre} y el presupuesto ${presupuesto}`
  );
}

tratarProyecto(proyecto);

// Del proyecto recibido, se ha destructurado el nombre: Desarrollo Web y el presupuesto 10000
```

### En arrays

Al igual que se pueden destucturar objetos, con los arrays pasa algo idéntico, con la diferencia que al no tener variables con nombres asignados, a la hora de destucturar un array se asignan a variables según posiciones. Para este ejemplo vamos a tomar como punto de partida los participantes de uno de los proyectos del caso anterior


```javascript
let participantes = ["Borja", "Juan", "Luis", "Jose"];

let [participante1, participante2] = participantes;

console.log(participante1); // borja
console.log(participante2); // juan 
```

En el caso de querer guardar los elementos restantes en otro array, se indica mediante el operadore rest (...)

```javascript
let participantes = ["Borja", "Juan", "Luis", "Jose"];

let [participante1, participante2, ...resto] = participantes;

console.log(participante1); // borja
console.log(participante2); // juan
console.log(resto); // [luis, jose]
```

## Operador rest para agregar elementos

Como se ha visto en el punto anterior, la destructuración permite extraer información de objetos y arrays y asignarla en variables. Pero esta destructuración unida al tratamiento del resto de los elementos permite operaciones de modificacion de la estructura interna tanto de objetos como de arrays. Imaginemos el caso de querer agregar una nueva propiedad a un json con la destructuración. Sería con la siguiente sintaxis:

```javascript
let objetoBase = {
  nombre: "base",
  valor: 1000,
};
```

Esta definición base del objeto puede ser cambiada de la siguiente forma

```javascript
objetoBase = { ...objetoBase, propiedadNueva: "Ejemplo" };
console.log(objetoBase);
```

Lo mismo pasaría con los arrays

```javascript

let elementos = [1, 2, 3, 4, 5, 6, 7];
let elementosNuevos = [...elementos, 8, 9, 0];

console.log(elementosNuevos);
```

Incluso se podría combinar ambas modificaciones

```javascript
proyecto = {
  nombre: "Desarrollo Web",
  presupuesto: 10000,
  participantes: ["Borja", "Juan", "Luis"],
  agregarParticiante: function (particiapante) {
    this.participantes.push(particiapante);
  },
};

proyecto.participantes = [
  ...proyecto.participantes,
  { nombre: "BuevoIntegrante", apellido: "ApellidoNuevo" },
];
console.log(proyecto);

```