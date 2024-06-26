# Introducción a JS

JavaScript es uno de los principale lenguajes de programación web dedicados aagregar dinamismo a una página web. Desde sus inicios en 1995, el lenguaje ha ido creciendo tanto que se ha generado un standard para que la mayoría de navegadores sean capaces de soportar sus funcionalidades. En la actualidad el standard que rige el funcionamiento de JavaScript es ECMAScript 2022 e indica cuales son las funcionalidades que tiene el lenguaje. Más o menos se puede asemejar a lo que java utiliza con el JDK o C# con el SDK. Antes de empezar no confundir Java con JavaScript, ya que ambos lenguajes no tienen nada que ver. Mientras que el primero se ejecuta en una máquina virtual el segundo se ejecuta directamente en el navegador. Esto último puede cambiar, ya que JavaScript también puede ejecutarse en el lado del servidor. Vamos a explicar porque. Inicialmente js está desarrollado para ejecutarse en directamente en el navegador sin necesidad de instalar ningún elemento adicional, sin embargo existe un framework o entrono de ejecución llamado node.js que permite ejecutar aplicaciones directamente desde el lado del cliente. A lo largo del curso utilizaremos esto para hacer nuestras propias APIs y desplegarlas en un servidor.

# Entorno de trabajo

Para poder ejecutar nuestras aplicaciones con JS en el lado del cliente no necesitamos de ninguna software adicional ya que nuestro código no va a ser compilado sino que se ejecutará directamente en el navegador. Sin embargo necesitamos una serie de herramientas que nos permitan visualizar y desarrollar de forma más cómoda nuestro código. Las instalaciones son las siguientes:

- Navegador Chrome o Firefox
- IDE Visual Studio

De inicio no necesitaremos nada más ya que tan solo iremos agregando extensiones tanto e Visual Studio como a las herramientas de desarrollador del navegador para obtener alguna de las funcionalidades extas.

# Escribir código en JS

Como hemos dicho, nuestro código js va a estar ejecutado directamente desde un el navegador, por lo que debe estar incrustado dentro de una página web. Para ello tenemos dos opciones: incrustar el código directamente en la página mediante la etiqueta <script></script> o referenciando desde un archivo externo. En la mayoría de los casos la segunda forma será la que utilicemos ya que sino el código se puede ensuciar bastante. Los script que desarrollemos y que serán apuntados como archivo externo deben ir referenciados mediante rutas relativas, ya que de hacerlo con absolutas el navegador no podrá encontrarlas cuando estén en el servidor de producción

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log("Código ejecutado directamente desde archivo original");
    </script>
  </body>
</html>
```

La otra forma de incluir código js es crear un archivo donde incluiremos todas las líneas que queramos y referenciarlo dentro del archivo html

Archivo llamado js/tipos.js

```javascript
console.log("Archivo js incrustado desde fuera del index.html");
```

Archivo llamado index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./js/tipos.js" />
  </body>
</html>
```

Para poder ver los resultados de le ejecución es necesario acceder a las herramientas de desarrollador del navegar y se podrá ver como en la consola de desarrollo aparece el mensaje indicado dentro del log

# Comentarios

Los comentarios ayudan al programador a generar documentación que sirve para poder mantener y revisar el código de una forma limpia y eficaz. Existen dos tipos de comentarios: de una linea o de linea simple

Los comentarios de una linea tan solo permiten escribir una linea en el código y para su uso es necesario los caracteres // que indican el inicio del bloque

```javascript
// ejemplo de declaradión de comentario de una sola línea
```

Los comentarios de línea múltiple permiten escribir más de una línea en el mismo bloque

```javascript
/*
Ejemplo de comentario de una línea multiple
donde podemos escribir más de una cosa
*/
```

Los comentarios son parte de la documentación que no son obligatorios por fallos del lenguaje pero si obligatorios a la hora de crear rutinas de aclaración de partes y generación de documentación necesaria para el proyecto.

# Variables y tipos

## Variables

Las variables son elementos del sistema que puede guardar un dato, tanto primitivo como no primitivo. En javascript existen tres grandes tipos de variables: let, var y const. Las dos primeros tipos son muy similares, con la diferencia del alcance de la variable. Mientras que let limita el alcance de la variable, var tiene un alcance más generalista. Para ello vamos a ver un ejemplo

```javascript
if (true) {
  let numero = 20;
  console.log(`Impresión de la variable let dentro del bloque ${numero}`);
}

console.log(`Impresión de la variable let fuera del bloque`);

// Impresión de la variable let dentro del bloque 20
// Impresión de la variable let fuera del bloque - ERROR
```

En el segundo caso la variable no ha podido ser accedida ya que no está declarada en el bloque donde está definida. Sin embargo una variable var tiene un ambigo más grande, siendo accesible desde cualquier parte aunque no coincida en el ámbito de creación

```javascript
if (true) {
  let numero = 20;
  var numeroScope = 30;
  console.log(`Impresión de la variable let dentro del bloque ${numero}`);
}

console.log(`Impresión de la variable var fuera del bloque ${numeroScope}`);
// Impresión de la variable let dentro del bloque 20
// Impresión de la variable var fuera del bloque 30
```

Como se puede ver en el ejemplo anterior, la variable numeroScope que está decladara dentro del bloque if, puede ser accedida desde fuera aunque no es su ámbito correcto.

El último tipo de variable que existe son las constantes. Se trata de un tipo de variable con una sola asignación, no pudiendo cambiar el valor que existe dentro. Para el uso de este tipo de variable se utiliza la palabra reservada const. Siempre que se pueda es recomendable utilizarla ya que así se agrega seguridad al sistema

```javascript
const elementoInmutable = 20;
elementoInmutable = 30;
// Uncaught TypeError: Assignment to constant variabl
```

Como se puede ver la variable elementoInmutable no puede cambiar de valor ya que esta ha sido asignada y se ha declarado como constante. Existe una cosa curiosa con este tipo de variables. En los tipos de datos primitivos no se puede hacer una asignación de valor una vez se ha realizado al ser constante, pero en los tipos de dato no primitivos el dato no puede volver a ser igualado, pero su contenido si puede ser cambiado como por ejemplo en un array añadir un elemento.

```javascript
const arrayInmutable = [1, 2, 3, 4, 5];
// agregar un elemento al array en la parte final
arrayInmutable.push(1);
console.log(arrayInmutable);
// [1,2,3,4,5,1]
arrayInmutable = [1, 4, 7];
// Uncaught TypeError: Assignment to constant variable.
```

Otro ejemplo de este tipo de asignaciones es sobre elementos de tipo json, ya que no se puede asignar a un nuevo objeto pero si se puede añadir una propiedad nueva o cambiar el valor de alguna de las existentes

```javascript
const persona = { nombre: "Borja", apellido: "Martin", edad: 38 };
console.log(persona);
// {nombre: 'Borja', apellido: 'Martin', edad: 38}
persona["expeciancia"] = true;
console.log(persona);
// {nombre: 'Borja', apellido: 'Martin', edad: 38, experiencia: true}
```

En este caso la única forma de garantizar que este tipo de cosas no pasen es congelando el objeto, por lo que no se podrá cambiar su estructura interna

```javascript
const arrayInmutable = Object.freeze([1, 2, 3, 4, 5]);
arrayInmutable.push(1);
// Uncaught TypeError: Cannot add property 5, object is not extensible

const persona = Object.freeze({
  nombre: "Borja",
  apellido: "Martin",
  edad: 38,
});
persona["expeciancia"] = true;
// Uncaught TypeError: Cannot add property 5, object is not extensible
```

## Tipos de datos

Una de las diferencias que tiene js de forma nativa con parte de los lenguajes de programación tradicionales (Java, C#, etc ...) es que no es un lenguaje tipado. Esto quiere decir que no es necesario indicar el tipo de un dato, sino que el navegador (o servidor en el caso de utilizar node) puede decir cual es el tipo que más le conviene. Sin embargo también existe la posibilidad de declara diferentes tipos dentro del código. En js se diferencian dos tipos de datos

### Primitivos:

Aquellos que tienen una representación en byte dentro de la memoria del sistema operativo. Podemos diferenciar los siguientes

- Números: conocidos en el lenguaje como Number. Engloba todo tipo de número (entero, double, float). No hay diferencia entre cada uno de los datos, si bien en el cógio existen diferentes métodos para poder pasar un numero decimal a entero por ejemplo

```javascript
let numeroEntero = 30;
let numeroDecimales = 3.14;
console.log(`El valor de numeroEntero es ${numeroEntero}`);
console.log(`El valor de numeroDecimales es ${numeroDecimales}`);
```

- String: conocido como la concatenación de varias letras al mismo tiempo. Se trata de un tipo primitivo especial, ya que como veremos tiene un conjunto de métodos que se pueden aplicar sobre este tipo de datos

```javascript
let nombre = "Borja";
let profesion = "Profesor";

console.log(`Mi nombre es ${nombre}`);
console.log("Mi prpofesión es la de " + profesion);
```

Los String se pueden representar con comilla doble (""), comilla simple ('') o comilla francesa o invertida. El uso de este último se destina para poder hacer referencia o código js dentro del string de forma directa.

```js
console.log(`La suma de 6 y 7 es ${6 + 7}`);
// La suma de 6 y 7 es 13
```

Además de poder utilizar este tipo de representación con Strings, existe la posibilidad de representar caracteres especiales precedidios del la barra invertida \'. Un uso muy común de esto es el salto de línea

```js
console.log("Ejemplo de impresión\nCon salto de línea");
// Ejemplo de impresión
// Con salto de línea
```

Más adelante veremos cuales son todos los métodos asociados a los tipos de datos String

- Boolean: tipo de dato que puede tener valores true o false. Muy utilizado en las sentencias lógicas que nos ayudan a tomar decisiones.

```js
let variableDecision = false;
console.log(`El resultado de la decisión es ${false}`);
// El resultado de la decisión es false

decision && console.log("Es una decision correcta ");
// no se imprime nada por consola

decision
  ? console.log("La decisión ha sido correcta")
  : console.log("La decisión ha sido falsa");
// La decisión ha sido falsa
```

- Null: tipo de dato curioso ya que represente que la variable tiene valor null. Es decir que la variable ha sido declarada pero se le ha asignado null
- Undefined: tipo de dato que tiene relación con el anterior ya que en este caso, aunque la variable quede declarada no se le asigna ningún valor, por lo que si tipo será unefined

Los dos últimos valores un ejemplo sería el siguiente:

```js
let sinValor = null;
let sinDefinir;
console.log(`El valor de la primera variable es ${sinValor}`);
// El valor de la primera variable es null
console.log(`El valor de la segunda variable es ${sinDefinir}`);
// El valor de la segunda variable es undefined
```

Tampoco es de gran importancia la diferencia entre ambos tipos, ya que podremos utilizar ambos para definir si una variable es de un tipo u otro

En el caso de querer mostrar por consola el tipo de una variable se pueden utilizar

### No primitivos

Si bien los datos primitivos permiten guardar en memoria utilizando una serie limitada de bytes, los tipos no primitivos necesitan de una cantidad de memoria superior, ya que apuntan a un dato complejo. Entre estos tipos complejos podemos distinguir principalmente dos: arrays y objetos.

Más adelante lo veremos, pero podemos definir como array un conjunto de datos que se guardan en una colección mutable. Este conjunto de datos se guarda con relación a posiciones. A diferencia lenguajes de programación como Java, este tipo de colecciones es modificable tanto en contenido como en tamaño.

```javascript
let arrayDatos = [1, 2, 3, 4, 5, 6];
```

Un ejemplo muy claro de este tipo de datos es la comparación. Por ejemplo si se evalúa la igualdad de dos datos primitivos la comparación será true

```javascript
let arrayDatos = [1, 2, 3, 4, 5, 6];
let arrayIgualdad = [1, 2, 3, 4, 5, 6];

let numeroUno = 2;
let numeroDos = 2;

console.log(numeroUno == numeroDos); // true
console.log(arrayDatos == arrayIgualdad); // false
```

Veremos más adelante cuales son los principales métodos que se pueden aplicar sobre los arrays, como el de añadir elementos, eliminar elementos, filtrar elementos, etc...

El otro tipo de dato no primitivo son los objetos. En cuanto a este tipo de dato, existen muchos tipos de objetos que pueden ser útiles en js. Por ejemplo se puede declarar un tipo Date que se trata como object

```javascript
let fecha = new Date();
console.log(fecha);
//Fri Sep 02 2022 19:26:59 GMT+0200 (hora de verano de Europa central)
```

### Tipos de datos y cambios

Como ya se ha dicho, existen diferentes tipos de datos dentro de javascript, que con el set de js básico es asignado por el navegador. Para poder ver el tipo de dato que está asignado a cada variable se puede utilizar el operador type of seguido de la variable que se quiera evaluar.

```javascript
let numero = 3; // number
let numeroDecimal = 3.15; // number
let experiencia = true; // boolean
let nombre = "Borja"; // string
let asignaturas = ["PMDM", "DI", "DAWC"]; // object
let profesor = { nombre: "Borja", edad: 38, experiencia: true }; // object
let carnet = null; // null
let alumno; // undefined

console.log(typeof numero);
console.log(typeof numeroDecimal);
console.log(typeof experiencia);
console.log(typeof asignaturas);
console.log(typeof profesor);
console.log(typeof carnet);
console.log(typeof alumno);
```

Sin embargo, hay en algunas ocasiones que los tipos que queremos manejar tienen que ser unos concretos. Para ello existe lo que se conoce como casting o cambio de tipo. Una cosa importante es que no todos los tipos son convertibles entre sí, sino que solo se puede hacer el cambio entre una serie de tipos

- String en Int (number): Para poder hacer el cambio de una variable String a Int es necesario ejecutar el método parseInt() o Number()

```javascript
let caracter = "5";
let numeroConvert = Number(caracter);
//parseInt(caracter)
console.log(numeroConvert); // 5
console.log(typeof numeroConvert); // number
```

En el caso de no poder hacerse el cambio, la variable daría error de conversión obteniendo un tipo no correcto. En este caso sería NaN (Not a Number)

```javascript
caracter = "Borja";
numeroConvert = Number(caracter);
console.log(numeroConvert); // NaN
```

Hay otra posibilidad de hacer la conversión que es la de agregarle el sigo positivo a la variable, por lo que la conversión se realizaría de forma directa

```javascript
caracter = "5";
console.log(typeof caracter); // string
numeroConvert = +caracter;
console.log(typeof numeroConvert); // number
```

- String en Float: se trata de una conversión muy similar a la anterior, con la diferencia que el número guardará decimales. Para este tipo de conversión además de Number y el signo + se puede utilizar el método parseFloat()

```javascript
let caracterDecimal = "3.14";
let decimalConvert = parseFloat(caracterDecimal);
console.log(typeof caracterDecimal); // number
```

Hay que tener en cuenta que este tipo de conversiones obtiene como resultado un tipo number, al igual que el anterior.

- Float en Int: Si bien hemos dicho al principio que los tipos de datos number aglutinan tanto números con decimales como números sin decimales sin hacer excepcion, se peude hacer una conversión entre tipos que obvia la parte decimal

```javascript
numeroDecimal = 3.14;
numeroEntero = parseInt(numeroDecimal);
console.log(numeroDecimal); // 3
```

Al igual que en los casos anteriores este tipo de conversiones obtiene como resultado una variable de tipo number

## Métodos especiales String

Dentro de los tipos no primitivos, hemos hablado de los String los cuales son capaces de guardar un conjunto de letras. Este tipo tiene una serie de métodos que permiten la manipulación de las palabras de forma avanzada. Entre estos métodos podemos descar los siguientes:

- Lenght: Indica la longitud de la palabra, es decir el número de letras que tiene. En este caso no se trata de un método como tal, sino de una propiedad. Pero es muy útil por ejemplo para poder hacer recorrido de elementos completos dentro de una palabra.

```javascript
let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra.length);
```

- Acceso por posiciones: Para poder acceder por posiciones a una letra en concreto se puede hacer bien con la posición de la letra que se quere acceder o con el método charAt(). El resultado de ambas ejecuciones es idéntico

```javascript
let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra[1]); // e
console.log(palabra.charAt(1)); // e
console.log(palabra.codePointAt(1)); // 101
```

Otra cosa diferente es el mñetodo codePointAt() el cual indica el número asociado al caracter encontrado

- Pasar a mayúsculas o minúsculas: Para poder pasar a mayúsculas o minúsculas todos los caracteres de la palabra basta con utilizar el método toUpperCase o toLowerCase respectivamente

```javascript
console.log(palabra.toUpperCase()); // REPOSITORIO DEDICADO A JAVASCRIPT
console.log(palabra.toLowerCase()); // repositorio dedicado a javascript
```

- Obtener una parte de la palabra: Para ello se utiliza el método substring, indicando el inicio y el final de la palabra, siendo el resultante la palabra entre las posiciones indicadas (sin incluir el último)

```javascript
let palabraSub = palabra.substring(0, 11);
console.log(palabraSub); // Repositorio
```

- Cortar una palabra en diferentes partes: A diferencia del método anterior, el método split parte la palabra sobre un caracter determinado y se obtiene un array de palabras resultantes

```javascript
let palabrasSplit = palabra.split(" ");
console.log(palabrasSplit); // ['Repositorio', 'dedicado', 'a', 'JavaScript']
```

- Quitar espacios al incio y final: Este método elimina todos los espacios encontrados al principio y final de una palabra.

```javascript
let palabraEspacios = "   Repositorio dedicado a JavaScript    ";
console.log(palabraEspacios.trim()); // Repositorio dedicado a JavaScript
```

En este caso el método quita todos los espacios del principio y del final. Sin ambargo también existen métodos que quitan el espacio solo del principio o solo del final (trimStart o trimEnd)

- Indicar si una palabra esta incluida: El siguiente método evalúa si una palabra o letra está incluida dentro de otra

```javascript
let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra.includes("programacion")); // false
console.log(palabra.includes("Java")); // true
```

- Remplazar carácteres: Estpos métodos permiten cambiar un caracter indicado por otro también indicado. Existe la posibilidad de cambiar solo el primero encontrado o todos los encontrados.

```javascript
let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra.replace("o", "a"));
// Repasitorio dedicado a JavaScript
```

Como se puede ver en este caso tan solo ha quitado la primera letra encontrado. Si hubiesemos utilizado el método repalceAll se hubiesen cambiado todas

```javascript
let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra.replaceAll("o", "a"));
// Repasitaria dedicada a JavaScript
```

- Buscar en que posición está una letra: Para lo que se utiliza el método indexOf() indicando un caracter a buscar. También s epueden utilizar métodos similares como lastIndexOf, fistIndexOf.

```javascript
let palabra = "Repositorio dedicado a JavaScript";
console.log(palabra.indexOf("R")); // 0
console.log(palabra.lastIndexOf("r")); // 29
```

## Objeto Date

Como ya hemos visto en los tipos existe un objeto que es de tipo Object. Este tipo representa objetos que nosotros podemos crear mediante clases ya creadas o utilizar alguno de los que ya existen dentro del lenguaje. En este apartado vamos a tratar un objeto especial llamado Date, el cual permite controlar las fechas y tiempos tanto del calendario del sistema como de alguna fecha en concreto.

Para pode crear un objeto de tipo Date, simplemente es necesario crear una instancia del mismo

```javascript
let fecha = new Date();
```

Existe la posibilidad de utilizar otros constructores indicando cual es la fecha actual (día mes año). En el caso de no indicar nada creará un objeto con la fecha del sistema asignada. Alguno de los método principales son:

```javascript
let fecha = new Date();
console.log(fecha.getFullYear());
console.log(fecha.getMonth() + 1);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getTime());
```

Como se puede ver su uso es bastante sencillo. Alguna de las funciones que suelen ser recurrentes sobre este tipo de objeto es la comparación. Por ejemplo podemos ver su uno de los días ha ocurrido antes que el otro, simplemente utilizando los comparadores lógicos de relación <= < > >=. En el caso de querer utilizar los comparadores == != es necesario utilizar el método getTime() para que los resultados sean los correctos.

```javascript
let fecha1 = new Date(2020, 2, 21);
let fecha2 = new Date(2020, 3, 21);

let comparacion = fecha1 < fecha2;
console.log(`El resultado de la comparación es ${comparacion}`);
```

# Formato de salida

Normalmente la forma en la que será la salida es mediante asociación a elementos del DOM de la web a la que el script se asocia. Pero también es posible sacar datos por consola como se ha visto mediante el método console.log().

```
console.log('en el caso de querer saltos de linea \n se utilizan carácteres especiales');
```

Dentro de este método como parámetros se puede pasar un objeto, un String, un Number , una variable o concatenaciones de todas las posibilidades. Para concatenar se utiliza el carácter + de la siguiente forma

```
console.log('Mi nombre es ' + 'Borja' + ' y tengo ' + 18 + ' años');
```

En este ejemplo la salida por consola mostrara el mensaje indicado, habiendo concatenado dos cadenas de texto con un número mediante +. De la misma forma se podría hacer concatenando variables que tienen un valor definido

```
var nombre = "Borja";
var edad = 18;
console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años');
```

Por último existe la posibilidad de representar el contenido de la variable directamente sin necesidad de concatenar. Para ello se utiliza las comillas tumbadas en vez de las comillas simples, y se llama a la variable de la siguiente forma: ${variable}

```
var nombre = "Borja";
var edad = 18;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
```

En el caso de utilizar el **template string** también podemos utilizar cualquier expresión código de JS que queramos

```
let nombre = "Borja";
let edad = 17;
let mayor;
console.log(
  `Mi nombre es ${nombre} y tengo una edad de ${edad}, ${
    mayor ? edad > 18 : edad < 18
  }`
);
```

Adicionalmente se pueden utiliza caracteres especiales para indicar saltos de linea, tabulaciones, etc...

- \t : Tabulador
- \' : Comillas Simples
- \" : Comillas Dobles
- \n : Salto de línea

De la misma forma también se puede formatearse una salida de datos, utilizando los siguientes elementos:

- %s: Cadena
- %d o %i: Número entero
- %f: Decimal
- %o: DOM
- %O: Objeto js
- %c: CSS

```
console.log('%c Mi nombre es %s y tengo %d años', 'background: #3EBDFF;', nombre, edad, );
```

En este caso aparecería un texto por consola con el fondo de color azul. Es importante tener en cuenta que el formato de css debería aparecer en la primera posición.

# Interacción básica con el usuario

## Prompt y alert<a name="usuario"></a>

Para poder interactura con el usuario mediante consola, se utilizan los siguientes métodos:

- Window.alert(): muestra una ventana por consola

```javascript
alert("El proceso se ha terminado");
```

- Window.confirm(): pide confirmación al usuario dando la opción de aceptar o cancelar. Para poder tratar la respuesta se debe guardar en una variable la salida de la función confirm.

```javascript
let confirmacion = confirm("¿estás seguro que quieres terminar el proceso?");
if (confirmacion) {
  alert("El proceso se ha terminado");
}
```

- Window.prompt(): pide un dato al usuario mediante una ventana emergente. De la misma forma que en el caso anterior, se deberá guarda la salida en una variable para poder tratarla más adelante

```javascript
var nombreIntroducido = prompt("por favor introduce tu nombre");
```

En el caso de querer tratar la variable se realizaría de una forma normal

```javascript
let nombreIntroducido = prompt("por favor introduce tu nombre");
let respuesta = confirm(
  `¿Estás seguro que quieres evaluar el nombre ${nombreIntroducido}?`
);
if (respuesta) {
  tieneAes = nombreIntroducido.toLowerCase().includes("a");
  if (tieneAes) {
    alert("El nombre introducido tiene alguna a");
  } else {
    alert("El nombre introducido no tiene ninguna a");
  }
} else {
  alert("Proceso terminado");
}
```

Hay que tener en cuenta que este método devuelve el dato introducido en formato String, por lo que si se quiere en formatu número habría que utilizar el parseInt() o parseFloat() o el Number()

# Operadores

Al igual que en el resto de lenguajes de programación, en js existen los tipocos operadores de asignación, aritméticos, lógicos, de desplazamiento, etc...

## Asignación

Se trata de los operadores más sencillos, ya que son aquellos que permiten la asignación de un valor a una variable.

```javascript
let numeroUno = 30;
let numeroDos = 5;
```

## Aritméticos

Como todo en programación, las matemáticas juegan un papel muy importante. Las operaciones que se pueden realizar sobre los datos son las comunes: suma, resta, multiplicación, división y módulo. A continuación se muestre el uso de los principales

```javascript
let numeroUno = 30;
let numeroDos = 5;

let suma = numeroUno + numeroDos; // 35
let resta = numeroUno - numeroDos; // 25
let multiplicacion = numeroUno * numeroDos; // 150
let division = numeroUno / numeroDos; // 6
let modulo = numeroUno % numeroDos; // 0
let incremento = numeroUno--; // 29
let decremento = numeroUno++; // 31
```

Existe una mezcla entre los operadores de asginación y los operadores aritméticos que permiten la asignación de la operacion entre el valor de la propia variable y un valor indicado

```javascript
suma += 5; // suma = suma + 5 --> suma = 10 + 50
resta += 5; // resta = resta - 5 --> suma = 10 - 50
multiplicacion += 5; // multiplicacion = multiplicacion * 5 --> multiplicacion = 10 * 2
division += 5; // division = division / 5 --> division = 10 / 50
modulo += 5; // modulo = modulo % 50 --> modulo = 2 + 50
```

## Comparación

Los operadores de comparación son aquellos que permite realizar operaciones lógicas. PAra ello se utilizan los siguientes elementos:

```javascript
let mayorQue = 100 > 10; // true
let menorQue = 10 < 100; // true
let mayorIgual = 100 >= 10; // true
let menorIgual = 10 <= 100; // true
let igual = 10 == 10; // true
let noIgual = 100 != 10; // true
```

Dentro de este tipo de operadores el de igualdad tiene un coportamiento que merece la pena comentar. En javascript al igual que en otros lenguajes, existe la posibilidad que dos variables que tengan el mismo valor pero tipos diferentes su comparación sea verdadera.

```javascript
let operandoUno = 4;
let operandoDos = "4";
console.log(operandoUno == operandoDos); // true
console.log(operandoUno === operandoDos); // false
```

En el primer caso, la comparación tan solo se fija en el valor, cambiando los tipos de las variables para que la comparación sea sobre el mismo elemento. Sin ambargo en el segundo caso, la comparación además de ser sobre el valor de la variable también es sobre el tipo de la variable, por lo que en este caso el tipo será false.

## Lógicos

Los operadores lógicos permiten la evaluación de múltiples condiciones para poder obtener un resultado único. Este tipo de operadores aplican la lógica fundamental de las puertas lógicas AND OR y NOT. Los operadores lógicos son && || y ! y la apicación de las mismas son

Existen los mismos elementos que en cualquier lenguaje de programación: AND y OR

- AND: retornará verdadero cuando todas las sentencias que se están evaluando sean verdaderas. En el momento que una de las sentencias sea falsa el resultado será falso.

- OR: retornaría verdadero cuando al menos una de las sentencias que se están evaluando sean verdaderas. En el momento que una de las condiciones sea verdadera se asegura que el resultado es verdadero.

```javascript
let ex1 = true && true; // true
let ex2 = 2 == 2 && 3 >= 6; //false
let ex3 = 2 > 3 || 17 <= 40; //true
let ex4 = false || false; // false
```

## Ternarios

Se trata de un if con una sintaxis especial que es la siguiente:

```javascript
condicion ? valor_si_es_verdadera : valor_si_es_falsa;
```

Un ejemplo sería el siguiente:

```javascript
let decision = true;
decision
  ? console.log("la decición ha sido verdadera")
  : console.log("la decición ha sido falsa");
```

Al igual que en todos los casos anteriores se puede concatenar con cualquiera de los elementos vistos:

```javascript
let nombre = prompt("Por favor introduce tu nombre");
nombre.length > 5
  ? alert("tu nombre es demasiado largo")
  : alert("tu nombre es cumple con los requisitos de longitud");
```

# Sentencias de control

## if

Sentencia de control que evalúa una serie de condiciones. En el caso de encontrar una condición verdadera ejecuta el cuerpo del su bloque correspondiente

```javascript
var nota = 5;
if (nota < 5) {
  console.log("El alumno ha suspendido");
} else {
  console.log("El alumno ha aprobado");
}
```

Su forma de trabajar es idéntica a la vista en java, pudiendo tener tantas sentencias else if como sean necesarias.

```javascript
var nota = 11;
if (nota < 5) {
  console.log("El alumno ha suspendido");
} else if (nota < 10) {
  if (nota < 6) {
    console.log("aprobado raspado");
  } else if (nota < 8) {
    console.log("aprobado con buena nota");
  } else if (nota < 10) {
    console.log("aprobado con muy buena nota");
  } else {
    console.log("perfecto");
  }
} else {
  console.log("algo no me cuadra");
}
```

## switch

Mismo uso y sintaxis que java

```javascript
var casoEvaluar = 4;
switch (key) {
  case 1:
    console.log("Ejecución por el caso 1");

    break;
  case 2:
    console.log("Ejecución por el caso 2");
    break;
  case 3:
    console.log("Ejecución por el caso 3");
    break;
  case 4:
    console.log("Ejecución por el caso 4");
    break;

  default:
    console.log("Ejecución no contemplada");
    break;
}
```

## while

Mismo uso y sintaxis que java

```javascript
var numero = 10;
while (numero > 0) {
  alert(`El número es demasiado grande aún, su valor es de ${numero}`);
  numero--;
}
```

## do-while

Muy similar al anterior con la diferencia que nos aseguramos a que al menos existe una ejecución

```javascript
numeroWhile = 10;
do {
  console.log(numeroWhile);
  numeroWhile--;
} while (numeroWhile >= 0);
```

Con los operadores time() y timeEnd() se puede comprobar cual es el tiempo que se tarda en ejecutar un bucle

## for

Sintaxis inicial identica a java

```javascript
for (let index = 0; index < 10; index++) {
  console.log(index);
}
```

Adicionalmente también se cuenta con un bucle foreach que se utiliza para recorrer arrays. Esta forma de aplicar el foreach conlleva la creación de lo que se conoce como función de flecha

```javascript
console.log("recorrido con foreach");

elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
elementos.forEach((element) => {
  console.log(element);
});
```

También se cuanta con la posibilidad de aplicar un forIn y un forOf que se verá más adelante cuando hablemos de los arrays
