- [Asincronía](#asincronía)
  - [Callback](#callback)
  - [Promesas](#promesas)
    - [Crear promesas](#crear-promesas)
    - [Consumir promesas](#consumir-promesas)
  - [Away / Async](#away--async)
  - [Fetch](#fetch)
    - [Alterar el DOM con una función fetch](#alterar-el-dom-con-una-función-fetch)


# Asincronía

La asincronía es uno de los principales elementos cuando se trabaja con el mundo web. Para poder pone en contexto, imaginemos que queremos ejecutar una tarea pesada dentro de una página web. Esta ejecución irá en "fila", ya que no se pueden ejecutar muchas cosas al mismo tiempo porque saturaría el hilo de ejecución y en el caso de una web la conexión de red. Es aquí donde entra el concepto de asincronía. En el caso de querer hacer una ejecución pesada, lo que se necesita es que esta ejecute, pero que el resto de funcionalidad, conexiones, etc... sigan su curso. 

Para poder ejecutar esto, javascript utiliza el concepto de promesa. Como su nombre indica, una promesa es una tarea que se quiere ejecutar pero no se sabe muy bien ni cual es el final ni cuando termina. Javascript lanza la promesa con la intención de que esta termine pero lo haga de forma asíncrona, es decir sin tener que bloquear al resto. Cuando esta promesa termine devolverá los resultados que se hayan obtenido. Como ya se ha dicho el principal elemento que permite estas ejecuciones son las promesas, teniendo también posibilidad de utilizar las funciones de callback

## Callback

Las funciones de callback son una especie de asincronía que permite realizar código no bloqueante. No tienen mucha dificultad ya que tan solo se trata de funciones que tienen como parámetro otra función. A lo largo del curso ya hemos utilizado infinidad de funciones, como por ejemplo la función foreach, la cual recibe como parámetro otra función (la que se ejecutará en cada vuelta del for)

```javascript
const lenguajes = ["JavaScript", "Node", "Kotlin", "Dart", "Rust"];
lenguajes.forEach((item) => {
  console.log(item);
});

```
En este ejemplo, la función foreach tiene como parámetros una función de flecha, la cual representa la función de callback. En el caso de querer nosotros crear una función de callbak sería de la siguiente manera:

```javascript
const lenguajes = ["JavaScript", "Node", "Kotlin", "Dart", "Rust"];

function evaluarLenguaje(lenguaje, callback) {
  if (lenguaje == "JavaScript" || lenguaje == "Node") {
    callback("web");
  } else {
    callback("generico");
  }
}

evaluarLenguaje(lenguajes[1], (resultado) => {
  resultado == "web"
    ? console.log("desarrollador web")
    : console.log(`desarrollador ${resultado}}`);
});
```

En este ejemplo, la función evaluar lenguaje queda definida mediante un parámetro y una función como parámetros. Dentro de la definición de la función, se indica que es lo que se tienen que ejecutar en cada momento y como lo debe hacer. Lo interesante de aquí es ver como la función callback se pasa como parámetro y como se ejecuta de forma individual.

Cuando se ejecuta la función evaluarLenguaje, se pasa como parámetros uno de los elementos del array y una función que indica como se utiliza. 

Este es un tipo de ejecución "por partes" ya que aseguramos que una función es ejecutada tras otra en el momento que se cumplan las condiciones que nosotros indiquemos. Sin embargo, cuando se quiere hacer una asincronía más profunda, es necesario utilizar lo que se conoce como promesas

## Promesas

Como se ha dicho en el punto anterior, las promesas son partes de código que son ejecutadas sin saber exactamente cuando se obtendrá el resultado. Este mecanismo se utiliza para realizar tareas pesadas como comunicaciones con bases de datos, movimiento de ficheros, etc... las cuales tienen una salida no determinada ni en tiempo ni en forma. PAra poder crear una promesa se puede realizar manualmente o mediante códigos async. En este caso vamos a ver como se crean manualmente

![promesas](/images/promesas.png)

### Crear promesas

Para poder crear una promesa se utiliza el siguiente código

```javascript
let promesa = new Promise((resolve, reject) => {});
```

Este código representa una promesa típica, donde la función que tienen como parámetros, a su vez tiene dos parámetros internos. El parámetro resolve será el dato pasado cuando la promesa haya contestado con éxito y el parámetro reject es el dato pasado cuando la promesa haya sido no exitosa. Por ejemplo podríamos hacer lo siguiente

```javascript
let promesa = new Promise((resolve, reject) => {
  let numero = parseInt(Math.random() * 100);
  if (numero > 50) {
    resolve(numero);
  } else {
    reject(numero);
  }
});
```

Dentro de la lógica del negocio, se ejecutará la función resolve o reject dependiendo de lo que nosotros queramos. Es importante entender que ambas funciones tendrán tantos parámetros como sean necesarios.

### Consumir promesas

Una vez la promesa ha sido creada, tan solo queda el consumirla. Para ello se utiliza tres métodos siguientes:

- then: cuando la promesa se ha ejecutado con éxito
- catch: cuando la promesa ha obtenido algún error de ejecución
- finally: en el caso de que siempre queramos ejecutar una parte de código.

Para poder ejecutar estos métodos se realiza sobre la promesa creada

```javascript
promesa
  .then((ok) => {
    console.log(
      `La promesa se ha resuelto de forma correcta con el siguiente resultado ${ok}`
    );
  })
  .catch((err) => {
    console.log(`La promesa se ha resuelto de forma incorrecta ${err}`);
  })
  .finally(() => {
    console.log("La evaluación ha terminado");
  });
```

En este caso, la promesa será ejecutada y según la lógica que hemos marcado antes, en el caso de ejecutar el método resolve la salida por consola será la siguiente: 

```
`La promesa se ha resuelto de forma correcta con el siguiente resultado ${NUMERO_PASADO}`
```
En el caso de que la promesa haya ejecutado el método reject, la salida por consola será la siguiente

````
`La promesa se ha resuelto de forma incorrecta ${NUMERO_PASADO}`;
````
y en ambos casos la salida por consola irá acompañada del mensaje

````
`La evaluación ha terminado`;
````

## Away / Async

En el caso de tratar las promesas como se ha indicado anteriormente, la cosa funciona sin problema. Sin ambarglo se puede mejorar en algo. Para poder mejorarlo necesitamos el uso de dos palabras reservadas como son async y await. El uso de estas es el siguiente

- Async: este modificador indica que la función sobre la cual se aplique, retorna siempre una promesa la cual podrá ser tratada de la misma forma que acabamos de hacer.

```` javascript
async function promesaPropia() {
  let numero = parseInt(Math.random() * 100);
  if (numero > 50) {
    return Promise.resolve(numero);
  } else {
    return Promise.reject("Pocas posibilidades");
  }
}
````
Como se puede ver el en código, en ningún momento se está retornando una promesa ya que eso se hace directamente con la palabra async. Lo que si se está haciendo es el trabajar con un retorno Promise.resolve() o Promise.reject() ya que en el caso de utilizar un return y el dato que se quiera responder, se convierte ese dato en el resolve

En el caso de querer tratarla se realizaría de la siguiente forma

````javascript
promesaPropia()
  .then((ok) => {
    console.log(ok);
  })
  .catch((err) => console.log(`${err}`));
````

Al igual que antes, ha sido necesario el uso del then y el catch para obtener el resultado y ejecutar lo que se quiera sobre el mismo. 


- Await: este modificador se utiliza para obtener el resultado directo de una promesa. En el ejemplo anterior hemos tenido que poner el then y/o catch para tratar el resultado. en el caso de que solo se qiuera obtener el resultado se podría utilizar la palabra reservada await 

## Fetch
### Alterar el DOM con una función fetch
