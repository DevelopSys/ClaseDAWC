# Funciones

Las funciones son todos aquellos métodos que se quieren ejecutar en determinadas partes de una aplicación web, pudiendo ser llamadas en cualquier momento lo que favorece la reutilización.

La estructura básica de una función es la siguiente:

```javascript
function name(params) {}
```

Del mismo modo una función también se puede asociar a una variable de la siguiente forma.

```javascript
var miFuncion = function name(params) {};
```

Así cuando la variable sea llamada se ejecutaría en contenido de la función. Para poder ejecutar una función de cualquiera de las maneras basta con llamarla, bien a la función directamente o a la variable

```javascript
function funcionInicial() {
  console.log("Llamada la funcion inicial");
}

var variableFuncion = function () {
  console.log("Llamada la variable que ejecuta la función");
};

funcionInicial();
variableFuncion();
```

Como en todo lenguaje de programación, las funciones van acompañadas tanto de argumentos como de retornos. Es importante tener en cuenta que los argumentos pueden ser datos simples, objetos o incluso funciones En ambos casos, cuando estamos hablando de JS no es necesario tiparlos por el dinamismo que se vio al principio del curso. Los usos que se dan de los argumentos y las formas de retorno son las siguientes:

- Uso normal

```javascript
function suma(operando1, operando2) {
  var suma = operando1 + operando2;
  console.log(
    `La suma de los dos parámetos pasados a la función es de: ${suma}`
  );
}

suma(2, 5);
```

Se pueden pasar tantos parámetros como sean necesarios. En el caso de pasar más valores por argumento que los declarados en la función no da error

```javascript
function suma(operando1, operando2) {
  var suma = operando1 + operando2;
  console.log(
    `La suma de los dos parámetos pasados a la función es de: ${suma}`
  );
}

suma(2, 5, 5);
```

En el caso de pasar menos de los indicados pasa exactamente lo mismo, dando valores undefined a aquellos parámetros que no sean pasados, obteniendo como valor NaN (Not - a - Number)

```javascript
function suma(operando1, operando2) {
  var suma = operando1 + operando2;
  console.log(
    `La suma de los dos parámetos pasados a la función es de: ${suma}`
  );
  console.log(`La suma de ${operando1} y ${operando2} es de: ${suma}`);
}
suma(2);
suma(2, 6);
suma(2, 3, 7);
```

- Parámetros opcionales

Se puede indicar a las funciones que algunos parámetros de la función (en concreto los últimos) sea opcionales. Para ellos se pueden utilizar dos formas:

A) Utilizando el operador OR ||

```javascript
function parametorsOpcionales(parametroUno, parametroDos) {
  parametroDos = parametroDos || "valor por defecto";
  console.log(
    `Los parámetos pasados por funcion son ${parametroUno} y ${parametroDos}`
  );
}

parametorsOpcionales(1);
parametorsOpcionales(1, "ejemplo");
```

B) Utilizando un if

```javascript
function sumaOptativa(a, b) {
  if (typeof b === "undefined") {
    b = 0;
  }
  var suma = a + b;
  console.log(`La suma de ${a} y ${b} es de: ${suma}`);
}
sumaOptativa(1, 5);
sumaOptativa(5);
```

C) De forma directa

```javascript
function funcionDefecto(obligatorio, defecto = "defecto") {
  console.log(`${obligatorio} ${defecto}`);
}
```

- Uso de arguments o argumentos invisibles

En muchas ocasiones no es necesario pasar argumentos por una función, o no saber cuantos son necesarios. Para ello JS ofrece la posibilidad de utilizar el array arguments, ya incluido en todas las funciones. Con este array se puede acceder a los argumentos "adicionales" pasados en la llamada a la función.

```javascript
function argumentosInvisibles() {
  console.log(
    "La función ha sido llamada con " +
      arguments.length +
      "y son los siguientes"
  );
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    console.log(element);
  }
}

argumentosInvisibles(1, "llamada", false, 3.14);
```

Este uso solo funciona para funciones con construcción normal. En el caso de querer utilizar lo mismo con una función de flecha se trendrían que utilizar el parámetro de array

- Valores de retorno

Cuando el llamamiento de una función requiere ademas de ejecutar todo su contenido, la devolución de algún valor se utiliza la palabra reservada return:

```javascript
function argumentosInvisibles() {
  console.log(
    "La función ha sido llamada con " +
      arguments.length +
      "y son los siguientes"
  );
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    console.log(element);
  }
}

argumentosInvisibles(1, "llamada", false, 3.14);
```

Cuidado porque los valores de retorno no solo tienen por que ser números, letras o boleados, sino que también pueden ser funciones, como se verá en el siguiente punto. Una cosa importante es que sobre una función no pueden existir tipos de retorno diferentes

- Funciones anónimas

En JS no es necesario declarar nombre a la funcione, ya que se pueden declarar directamente, o bien retornarlas en otra función.

```javascript
var funcionAnonima = function (parametro) {
  console.log(`El parámetro de la función anónima es ${parametro}`);
};

funcionAnonima("Hola");
```

Ó

```javascript
function retornaFuncion() {
  return function () {
    console.log("Rotoranada una función anónima");
  };
}
retornaFuncion();
```

## Callbacks

Un callback no es un elemento propio del lenguaje, sino que se trata de una técnica de programación que permite la animación de funciones una vez estas han terminado de realizar una tarea. Imaginad el elemento de un proceso que tiene dos subprocesos, donde el segundo solo se puede ejecutar una vez haya terminado el primero. En programación esto se consigue utilizando la palabra return junto con la llamada a una función

```javascript
function primeraFuncion() {
  console.log("Este es el primer subproceso");
  return segundaFuncion();
}

function segundaFuncion() {
  console.log("Este es el segundo subproceso");
  console.log("Tarea terminada");
}
primeraFuncion();
```

Incluso es posible pasar funciones como parámetros, favoreciendo el flujo interno de la ejecución.

## Ejecuciones asíncronas

Hasta ahora todo el código qué se ejecutaba de una manera secuencial. Cada línea de código se ejecuta después de la anterior. Este estilo de programación en muchos casos puede ser poco productiva, y más hablando de un desarrollo web.

La asincronía es una caracteristica propia de ciertos métodos que permiten su ejecución en un segundo plano, de forma que resulta imposible saber cuándo terminará. Además antes de terminar su ejecución se ejecutan la siguiente línea de código, por lo que se pueden ejecutar más de una tarea al mismo tiempo Para poder controlar estas ejecuciones asíncronas, existen muchas técnicas, entre las cuales se encuentra la ejecución de Callbacks o la ejecución por eventos (como introdujimos en el desarrollo de la librería swing de java). Para los primeros ejemplos voy a utilizar la función de JS setTimeout() la cual recibe por parámetros la función a ejecutar y el tiempo que transcurre hasta que empieza. Por defecto esta función setTimeout ya es asíncrona()

```javascript
function primeraAsincrona() {
  setTimeout(function () {
    console.log("ejecucion realizada");
  }, 1000);
}
console.log("Llamada a la función asíncrona");
primeraAsincrona();
console.log("Llamada de cualquier cosa");
```

La salida sería

```javascript
Llamada a la función asíncrona
Llamada de cualquier cosa
ejecucion realizada
```

Como se puede ver en la salida, el orden es inverso a la llamada de las funciones ya que primero aparece en la consola en mensaje "Llamada de cualquier cosa" pese a ser llamado después que la función primeraAsincrona(). Esto se debe al trabajo asíncrono, ya que dicha función trabaja en segundo plano, realizando todas las tareas necesarias y esperando el número indicado en la función setTimeout().

Imaginad el supuesto que se quieren representar datos traídos de una base de datos. Para ello lo primero que se necesita es conectar con la base de datos, traerlos, y representarlos. Siempre en ese orden. Pero además se necesite que el sistema continue trabajando por detrás. Para ello todos los pasos que conlleva el pintado de los datos tendrá que ser asíncrono, es decir trabajado en segundo plano

```javascript
function traerDatos(callback) {
  setTimeout(function () {
    console.log("Durante esta ejecución se han traido una serie de datos");
    var dato = "datos traidos";
    callback(dato);
  }, 2000);
}

function pintarDatos(param) {
  console.log(
    "Durante la ejecución de esta función los datos son puntados: " + param
  );
}

traerDatos(pintarDatos);
```

En este ejemplo se puede ver que la función traerDatos tiene como parámetro una función de callback, que es utilizada una vez se haya terminado una determinada ejecución. Es importante ver que cuando se llama como parámetro a una función no es necesario poner los paréntesis.

En el siguiente tema, veremos como utilizar esta asincronía para poder tratar peticiones que se ejecutan en segundo plano y como plantear su tratamiento
