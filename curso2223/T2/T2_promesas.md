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
  } 
}
````

o lo que sería lo mismo 

````javascript
async function promesaPropia() {
  let numero = parseInt(Math.random() * 100);

  return new Promise((res, rej) => {
    if (numero >= 50) {
      res(numero);
    } else {
      rej("Pocas posibilidades");
    }
  });
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

Al igual que antes, ha sido necesario el uso del then y el catch para obtener el resultado y ejecutar lo que se quiera sobre el mismo. No hay mucha diferencia hasta lo que hemos visto en anteriormente, solo que cambia un poco la sintaxis de las promesas. Sin embargo si cambia en el caso de querer utilizar la palabra reservada await


- Await: este modificador se utiliza para obtener el resultado directo de una promesa. En el ejemplo anterior hemos tenido que poner el then y/o catch para tratar el resultado. En el caso de que solo se quiera obtener el resultado se podría utilizar la palabra reservada await es necesario que esta esté declarada dentro de una función async ya que para poder esperar un resultado no se sabe cuando se va a obtener. Teniendo el siguiente código:


````javascript
async function promesaPropia() {
  let numero = parseInt(Math.random() * 100);
  return new Promise((res, rej) => {
    if (numero >= 50) {
      res(numero);
    } 
  });
}
````

Podemos ver como la función retorna una promesa que puede ser tratada como hasta este momento, o directamente con un await. Para ello necesitamos el siguiente código

````javascript
async function obtenerResultado() {
  let resultado = await promesaPropia();
  
  
}

obtenerResultado();
````
La función obtenerResultado es asíncrona porque va a esperar al resultado de una promesa, tal y como indica la palabra await antes de llamar a la función promesaPropia. De esta forma se seguirán realizando ejecuciones completas hasta que el elemento de la promesa sea resuelto. El resultado por consola sera un número ya que solo tratamos el resolve de la promesa

## Fetch

Un ejemplo típico de consumición de promesas son las funciones fetch, que no son más que promesas que ya están creadas en js y consumen un servicio web obteniendo un resultado o un error dependiendo de la respuesta que se obtenga del servidor. Una función fetch tiene la siguiente estructura:

````javascript
fetch("URL A CONSULTAR")
  .then((res) => {})
  .catch((rej) => {});
````
Como se puede ver es una promesa normal, con su tratamiento then y catch. La única diferencia es que se incorpora una url que es sobre la que se hace la consulta. En este ejemplo se utiliza la siguiente URL https://dummyjson.com/products , la cual contesta con una lista de productos en formato JSON. Para poder realizar la promesa y obtener el resultado utilizaríamos el siguiente código

```javascript
fetch("https://dummyjson.com/products")
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(`Ha habido algún tipo de fallo: ${rej}`);
  });
```

En este caso entraría la promesa por el then ya que se resuelve correctamente y la salida por consola sería la siguiente

````
Response {type: 'cors', url: 'https://dummyjson.com/products', redirected: false, status: 200, ok: true, …}
````

Es algo raro, ya que esperabamos en json. La respuesta es otra promesa, ya que por defecto toda promesa contesta con otra promesa, y es esta la que hay que tratar para poder obtener el json con el que se quiere trabajar. Para ello haríamos lo siguiente:

```javascript
fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(`Ha habido algún tipo de fallo: ${rej}`);
  });
```

Como se puede ver, el segundo then es el que muestra el json de la url y para ello ha tenido que esperar a que el primer tratamiento de la promesa convirtiese la respuesta en json y lo pasase como resultado. Es importante ver el uso del return en el primer then. En el caso en el que cualquiera de los dos then hubiesen fallado el catch se hubiese ejecutado

En algunos casos nos podemos encontrar con que aunque sepamos que una url nos da un json ya que es un API que nosotros hemos programado o simplemente porque lo vemos en su documentación, la promesa me dá un fallo de CORS. Esto lo veremos más adelante pero básicamente es un fallo de seguridad que indica que la petición no puede ser realizada desde determinados dominios. Podéis ver un ejemplo con la url https://github.com/annexare/Countries/blob/master/data/countries.json, la cual si la consumimos con una función fetch nos dará un error de CORS. Para poder saltarnos ese error tenemos que ejecutar la url desde un servicio que incorpore una librería CORS como por ejemplo cors-anywhere. De esta forma la URL de la petición quedaría de la siguiente forma

````
https://cors-anywhere.herokuapp.com/https://github.com/annexare/Countries/blob/master/data/countries.json
````

Hasta aquí el tratamiento de una función fetch, pero como hemos visto podemos mejorar esta sintaxis utilizando las palabras async y await, obteniendo el resultado directamente. Para ello utilizaríamos el siguiente código

```javascript
async function obtenerProductos() {
  let resultado = await fetch("https://dummyjson.com/products");
  let resultadosJSON = resultado.json();
  return resultadosJSON;
}

obtenerProductos().then((res) => {
  console.log(res);
});
```

### Alterar el DOM con una función fetch

Una vez se tiene la forma en la que se realiza una consulta sobre una URL, el siguiente paso sería utlizarlo dentro del dom de la página por ejemplo respresentando todos los elementos que están dentro de la misma. Para poder hacer esto simplemente sería evaluar el json obtenido y recorrer todo el conjunto de resultados sacando los datos que nos interesen para sacar el nodo correspondiente. Vamos a utilizar un dom con bootstrap cargado para poder trabajar con elementos de tipo carta y una estructura de filas columnas

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="row" id="productos"></div>
    </div>
  </body>
  <script src="./js/index.js"></script>
</html>
```

En el caso de querer consultar el mismo url que hemos visto antes el método sería el siguiente

```javascript
async function obtenerProductos() {
  let resultado = await fetch("https://dummyjson.com/products");
  let resultadosJSON = resultado.json();
  return resultadosJSON;
}
```

Una vez obtenidos los resultados tan solo quedará evaluar el json resultante y recorrer el array de resultados, sacando y creando nodos para poder incluir cada uno de los elementos dentro del html que se quiere crear. El json resultante tiene la siguiente estructura, donde products tienen infinidad de objetos (tan solo se ha puesto uno por temas de espacio)

```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}
```

En este caso lo que nos interesa es recorrer el array con la key products, por lo que aplicaremos un foreach

```javascript
obtenerProductos().then((res) => {
  res.products.forEach((element) => {
    console.log(element);
  });
});
```

Lo último que quedaría sería alterar el innerHTML del nodo donde queramos agregar un elemento y ponerlo. En este caso el elemento que vamos a agregar es una carta con el siguiente formato

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

El código quedaría de la siguiente forma

````javascript
let fila = document.querySelector("#productos");
obtenerProductos().then((res) => {
  res.products.forEach((element) => {
    fila.innerHTML += `<div class="col">
    <div class="card m-4" style="width: 18rem;">
    <img src="${element.images[0]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description}</p>
    </div>
  </div>
  </div>`;
  });
});
````

