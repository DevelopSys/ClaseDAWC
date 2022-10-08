# Funciones

Las funciones son uno de los elementos principales de JS. Se puede definir función como todo aquel método que se quiere ejecutar en determinadas partes de una aplicación, pudiendo ser llamada en cualquier momento favoreciendo la reutilización.

La estructura básica de una función es la siguiente:

```javascript
function name(params) {}

// para ser llamada simplemente es necesario llamar al nombre y pasar los parámetros que se quieran
name()
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
    `La suma de los dos parámetros pasados a la función es de: ${suma}`
  );
}

suma(2, 5);
// ejecutando la suma de ámbos parámetros e imprimiendo por consola el resultado (pero realizado desde la propia función)
```

Se pueden pasar tantos parámetros como sean necesarios. En el caso de pasar más valores por argumento que los declarados en la función no da error, ya que los gestiona como veremos más adelante con un array de elementos.

```javascript
function suma(operando1, operando2) {
  var suma = operando1 + operando2;
  console.log(
    `La suma de los dos parámetos pasados a la función es de: ${suma}`
  );
}

suma(2, 5, 5);
```

En el caso de las funciones de flecha, esto no es posible. Hay que indicar de forma explícita que la función puede admitir un numero grande de parámetos

```javascript
const funcionFlecha = (...args) => {
  console.log(args.length);
};
```

En el caso de pasar menos de los indicados pasa exactamente lo mismo, si se capturan dentro de la función dará valores undefined a aquellos parámetros que no sean pasados, obteniendo como valor NaN (Not - a - Number) en el caso del ejemplo de la suma

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

Hay que tener cuidado, porque los parámetros optativos siempre deben ir en las últimas posiciones.

Este tipo de cosas permite el uso de requerir parámetros de forma obligatoria. Para ello nos podemos crear una funcion que lance una excepción (Error en js) y que esta sea el valor por defecto de un parámetro que no sea pasado a una función. Imaginemos el siguiente caso:

```javascript
function sumaObligatorios(operandoUno,operandoDos) {}
```
Donde queremos que los dos sean obligatorios. En el caso de js, tal y como se ha visto, la función podría ser llamada con y sin parámetros. Sin embargo si nos creamos una función que lance una excepción

```javascript
function requerido() {
    throw new SyntaxError('parámetro requerido')
}
```

Esta puede ser el valor por defecto de los parámetros que queramos que no tengan valor. Por ello si modificamos la función de suma, obtendríamos lo siguiente

```javascript
function sumaObligatorios(operandoUno, operandoDos = requerido()) {
  console.log(
    `La suma de los valores ${operandoUno} y ${operandoDos} es: ${
      operandoUno + operandoDos
    }`
  );
}
```
De esta forma podríamos llamar a la función solo con dos valores y nunca con uno, ya que de ser así saltaría la excepción y la aplicación se detendría

```javascript
sumaObligatorios(10, 8); // funciona y el resultado es 18
sumaObligatorios(2); // falla y salta una excepción
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

Este uso solo funciona para funciones con construcción normal. En el caso de querer utilizar lo mismo con una función de flecha se tendría que utilizar el parámetro de array

Es importante saber que cuando se utilizan parámetros por defecto, el array arguments no los recoge:

```javascript
function funcionArguments(param1, param2 = 2, param3) {
    console.log(`Los valores pasados son ${param1}\n${param2}\n${param3}`);
    console.log(`El número de parámetros pasados es ${arguments.length}`); // me devuelve 2
}

funcionArguments(1, 4);
```

- Valores de retorno

Cuando la llamada de una función requiere ademas de ejecutar todo su contenido, la devolución de algún valor se utiliza la palabra reservada return:

```javascript
function sumaValores(operadorUno, operadosDos) {
  return operadorUno + operadosDos;
}

console.log(`El resultado de la suma es ` + sumaValores(4, 9));
```

Cuidado porque los valores de retorno no solo tienen por que ser números, letras o boleados, sino que también pueden ser funciones, como se verá en el siguiente punto. Una cosa importante es que sobre una función no pueden existir tipos de retorno diferentes a no ser que retornemos algo de tipo Any[]

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
## Funciones de flecha

Aunque ya se ha hablado de este tipo de funciones a lo largo del tema, las funciones de flecha dan la posibilidad de escribir una función de forma muy simplificada. Su sintaxis es la siguiente

```javascript
(param)=>{ejecuciones}
```

Alguna de las consideraciones de las funciones de flecha son las siguientes:

- Normalmente están asignadas a variables, de forma idéntica que las funciones anónimas
- En el caso de estar declaradas como parámetros de una funcion no es necesario asociarlas a una variable
- No es necesario poner las {} para definir el cuerpo de la función siempre y cuando este solo está formado por una línea
- En el caso de querer utilizar retorno pueden darse dos casos: 
  - que el cuerpo de la función esté formado por una sola línea, por lo que no tendrá {} y no será necesario poner la palabra return ya que se da por echo que esa línea es el propio retorno
  - que el cuerpo de la función esté formado por más de una línea, por lo que si sería obligatorio el uso de la palabra reservada return

```javascript
const sumaRetorno = (op1, op2) => op1 + op2;

const sumaRetornoDos = (op1, op2) => {
  sumaValor = op1 + op2;
  return sumaValor;
};

console.log(sumaRetorno(1, 2)); // 3
console.log(sumaRetornoDos(1, 2)); // 3
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
