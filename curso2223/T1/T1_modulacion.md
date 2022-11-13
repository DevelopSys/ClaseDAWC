# Objetivos

Los módulos en javascript son pequeñas partes de código que pueden ser utilizadas desde cualquier fichero siempre y cuando estas sean tanto exportadas en origen como importadas en destino. Esto es bastante útil cuando los programas son grandes y requieren de mucho código. Juntarlo todo en el mismo fichero es bastante contraproducente ya que un fallo en parte de ese fichero dejaría sin funcionalidad al resto. No solo eso, sino que si se quiere mantener el código, hacerlo sobre pequeños fragmentos de código es mucho más sencillo que hacerlo sobre un bloque monolítico

Los objetivos de esta parte del tema son:

- Crear módulos y utilizarlos
- Importar y exportar partes de código

# Contenidos

# Modulación

En la actualidad existen multitud de elementos que permiten la modulación de un código js mediante bibliotecas no nativas como puede ser Angular, React, Vue o paquetes dedicados como puede ser Babel o Webpack. Sin embargo es que cada vez más los navegadores admiten estas funcionalidades sin necesidad de requerir bibliotecas adicionales. Para poder ver esto vamos hacer un ejemplo de una web que permite la creación de notas y su manejo mediante métodos. Para ello lo primero que vamos a crear es la estructura de la página

```javascript
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Una vez creado esto crearemos la siguiente estructura de ficheros

- index.html
- js
  - index.js
  - nota.js
  - funciones.js

El primer fichero será la página que cargará el navegador y sobre esta se ejecutará un único archivo llamado index.js. Hasta este momento toda la lógica la dejamos creada dentro del mismo archivo, pero con la inclusión de módulos la funcionalidad la vamos a poder crear en el fichero funciones.js y la estructura del objeto la vamos a poder definir dentro del fichero nota.js. Ambos ficheros serán cargados directamente desde el index, sin necesidad de cargar los scripts individualmente. 

Para empezar con esto vamos a crear el objeto nota, el cual está creado en el fichero nota.js y cuanta con un título, una descripción, una serie de items, una marca de si es prioritario o no y una marca de si está finalizada. Adicionalmente se incluirán una serie de funciones que son propias de la tarea

```javascript
// nota.js
class nota {
  titulo;
  descripcion;
  prioritario;
  listaTareas;
  completa;
  constructor(titulo, descripcion, prioritario) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioritario = prioritario;
    this.listaTareas = [];
    this.completa = false;
  }

  agregarTarea(tarea) {
    this.listaTareas.push();
  }

  listarTareas() {
    listaTareas.forEach((element) => {
      console.log(`${element}`);
    });
  }

  finalizarTarea() {
    this.completa = true;
  }
}

```

Adicionalmente a este fichero vamos a crear otro que será el que se cargue desde el desde el html

```javascript
let nota = new nota("titulo", "descripcion", true);
```

De momento este fichero tan solo tendrá la creación de un objeto de tipo nota. Si ahora cargamos el index.js dentro de la página web mediante la etiqueta script:

```javascript
<script src="./js/index.js"></script>
```

Saltaría un fallo indicando que no se puede ejecutar el constructor al no tener conocimiento del objeto. Si se quiere utilizar el objeto nota, sería obligatorio declararlo antes que el index.js dentro de la página web

```javascript
    <script src="./js/nota.js"></script>
    <script src="./js/index.js"></script>
```

Sin embargo esto puede provocar infinidad de llamadas dentro de la página, lo que hace que las peticiones de red aumenten considerablemente. Para poder eliminar esta segunda llamada, es donde entran los módulos. Para ello hay que indicar que el script index.js es de tipo module

```javascript
<script src="./js/index.js" type="module"></script>
```

y además empezar a importar y exportar aquellas cosas que se quieren utilizar. Para el ejemplo, lo primero necesario es exportar desde el fichero nota.js el objeto entero para que este pueda ser utilizado desde cualquier parte del módulo, para lo que se utiliza la palabra exporta antes de la definición de la clase

```javascript
export class nota {
  titulo;
  descripcion;
  prioritario;
  listaTareas;
  completa;
  constructor(titulo, descripcion, prioritario) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioritario = prioritario;
    this.listaTareas = [];
    this.completa = false;
  }

  agregarTarea(tarea) {
    this.listaTareas.push();
  }

  listarTareas() {
    listaTareas.forEach((element) => {
      console.log(`${element}`);
    });
  }

  finalizarTarea() {
    this.completa = true;
  }

  mostrarResumen() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Descripcion: ${this.descripcion}`);
    console.log(`Prioritaria: ${this.prioritario}`);
  }
}

```

Una vez la clase que se quiere "dejar" utilizar desde alguna parte se tienen que importar desde aquel fichero que la quiera utilizar. En nuestro caso en el fichero index.js tendremos que importar la clase procedente del objeto utilizando la siguiente sintaxis

```javascript
import { nota } from "./nota.js";
```

De esta forma se indica en el fichero index.js que para poder ejecutar el código incluido en el fichero es necesario traer el objeto de nota desde el fichero indicado, quedando de la siguiente forma

```javascript
import { nota } from "./nota.js";

let notaPrueba = new nota("titulo", "descipcion", false);
notaPrueba.mostrarResumen();
```

En el caso de querer importar más de una cosa se podría hacer separando por , cada uno de los elementos a importar. Al mismo tiempo si un fichero cuenta con un conjunto de funciones, estas pueden ser exportadas de forma individual. Para ver esto vamos a crear en el fichero funciones un conjunto de funciones que serán exportadas y llamadas desde el fichero index.js

```javascript
// funciones.js
export function filtrarPrioritarias(arrayTareas) {
  let prioritarias = arrayTareas.filter((element) => element.prioritario);
  prioritarias.forEach((element) => {
    console.log(`La tarea con título ${element.titulo} es prioritaria`);
  });
}

export function tareaPesada(arrayTareas) {
  let tarea = arrayTareas[0];
  arrayTareas.forEach((element) => {
    element.listaTareas.length > element.listaTareas.length ? tarea = element : null
  });
  console.log(`La tarea más pesada es ${tarea.titulo}`);
}
```

En este fichero se han ubicado funciones que no son propias de las notas, sino que son del modelo. Ambas están exportadas, para que el fichero que quiera utilizarlas las pueda importar. En nuestro caso las importaremos desde el fichero index.js

```javascript
// index.js
import { nota } from "./nota.js";
import { tareaPesada, filtrarPrioritarias } from "./funciones.js";

let trabajoTarde = new nota(
  "Pendientes tarde",
  "Tareas que se deben hacer por la tarde",
  false
);
trabajoTarde.agregarTarea("Ir al gimnasio");
trabajoTarde.agregarTarea("Hacer la cena");
trabajoTarde.agregarTarea("Terminar prácticas");

let trabajoDia = new nota(
  "Pendientes mañana",
  "Tareas que se deben hacer por la mañana",
  true
);
trabajoDia.agregarTarea("Asistir a clase");
trabajoDia.agregarTarea("Hacer la comida");

let agenda = [trabajoTarde, trabajoDia];

tareaPesada(agenda);
filtrarPrioritarias(agenda);
```

Estas son las funciones que tiene la importación y exportación dentro de js nativo. Ahora vamos a ver alguna de las modificaciones que se pueden hacer sobre esta norma:

- En el caso de querer exportar varias cosas de un mismo fichero, puedes exportarlas todas al final del mismo indicándolas entre {}

```javascript
function filtrarPrioritarias(arrayTareas) {
  let prioritarias = arrayTareas.filter((element) => element.prioritario);
  prioritarias.forEach((element) => {
    console.log(`La tarea con título ${element.titulo} es prioritaria`);
  });
}

function tareaPesada(arrayTareas) {
  let tarea = arrayTareas[0];
  arrayTareas.forEach((element) => {
    element.listaTareas.length > element.listaTareas.length
      ? (tarea = element)
      : null;
  });
  console.log(`La tarea más pesada es ${tarea.titulo}`);
}

export { filtrarPrioritarias, tareaPesada };
```

- EN el caso de querer importar todos los elementos de un fichero que tienen varias exportaciones se puede utilizar el carácter * as NombreImportacion para hacerlo todo de un mismo golpe

```javascript
import { nota } from "./nota.js";
import * as funcionNota from "./funciones.js";

let trabajoTarde = new nota(
  "Pendientes tarde",
  "Tareas que se deben hacer por la tarde",
  false
);
trabajoTarde.agregarTarea("Ir al gimnasio");
trabajoTarde.agregarTarea("Hacer la cena");
trabajoTarde.agregarTarea("Terminar prácticas");

let trabajoDia = new nota(
  "Pendientes mañana",
  "Tareas que se deben hacer por la mañana",
  true
);
trabajoDia.agregarTarea("Asistir a clase");
trabajoDia.agregarTarea("Hacer la comida");

let agenda = [trabajoTarde, trabajoDia];

funcionNota.tareaPesada(agenda);
funcionNota.filtrarPrioritarias(agenda);
```

- En el caso de querer renombrar la función u objetos traídos se puede hacer mediante la palabra as, indicando el nuevo nombre que se utilizará solo durante la ejecución del fichero en cuestión

```javascript
import { nota } from "./nota.js";
import {
  tareaPesada as numerosa,
  filtrarPrioritarias as prioritarias,
} from "./funciones.js";

let trabajoTarde = new nota(
  "Pendientes tarde",
  "Tareas que se deben hacer por la tarde",
  false
);
trabajoTarde.agregarTarea("Ir al gimnasio");
trabajoTarde.agregarTarea("Hacer la cena");
trabajoTarde.agregarTarea("Terminar prácticas");

let trabajoDia = new nota(
  "Pendientes mañana",
  "Tareas que se deben hacer por la mañana",
  true
);
trabajoDia.agregarTarea("Asistir a clase");
trabajoDia.agregarTarea("Hacer la comida");

let agenda = [trabajoTarde, trabajoDia];

numerosa(agenda);
prioritarias(agenda);

```

- En el caso de estar exportando una clase y no un conjunto de funciones (conocido como librería), es recomendable utilizar la palabra reservada default para indicar que en su contenido tan solo hay la definición de una cosa, el objeto

```javascript
export default class nota {
  titulo;
  descripcion;
  prioritario;
  listaTareas;
  completa;
  constructor(titulo, descripcion, prioritario) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioritario = prioritario;
    this.listaTareas = [];
    this.completa = false;
  }

  agregarTarea(tarea) {
    this.listaTareas.push();
  }

  listarTareas() {
    listaTareas.forEach((element) => {
      console.log(`${element}`);
    });
  }

  finalizarTarea() {
    this.completa = true;
  }

  mostrarResumen() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Descripcion: ${this.descripcion}`);
    console.log(`Prioritaria: ${this.prioritario}`);
  }
}

```

Este tipo de exportación, evidentemente conlleva un tipo de importación diferente ya que no es necesario utilizar las {} para indicar el elemento que se captura del fichero

```javascript
import nota from "./nota.js";
```

Cuando se utilizan importaciones predeterminadas, el nombre que se puede poner en dicha importación puede ser cualquiera ya que no hay duda de lo que se quiere importar. Sin embargo, en el resto de los casos es obligatorio utilizar el mismo nombrado ya que de no hacerlo no se podría detectar cual es el elemento exacto que se quiere utilizar