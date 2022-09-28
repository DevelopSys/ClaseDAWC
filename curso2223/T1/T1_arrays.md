# Arrays

Los arrays son una estructura de datos que permite guardar un conjunto de valores entro de la misma variable o referencia de memoria. Para acceder a cada valor es necesario utilizar el índice o posición del elemento que se quiere tratar. Hay que tener en cuenta que el índice de los arrays siempre empiezan en 0, siendo esta la primera posición. Algunas de las características de los arrays son:

- Permiten modificar los elementos internos, es decir que puede crecer y decrecer de forma dinámica
- Es posible guardar multiples tipos en una misma estructura

## Creación de arrays

Para poder crear un array existen varias posibilidades:

- Crear un array mediante constructor

```javascript
const arrayConstructor = Array()
```

- Crear un array mediante simbologia

```javascript
const arraySimbolos = []
```

En ambos casos se ha creado un array que no tiene elementos dentro, por lo que su tamaño será de 0.

```javascript
const arrayConstructor = Array()
const arraySimbolos = []

console.log(`El tamaño del array de constructor es ${arrayConstructor.length}`);
console.log(`El tamaño del array de constructor es ${arraySimbolos.length}`);
```

En el caso de querer crear un array con tamaño y elementos tendremos ya asignados, habrá que indicarlos dentro de los símbolos de array

```javascript
const arrayCompleto = [1,2,3,4,5,6]
console.log(`El tamaño del array con elementos es ${arrayCompleto.length}`);
```

En este caso el tamaño obtenido será de 6, ya que es el número de elementos que guarda. No es necesario que el array tenga el mismo tipo de dato, pudiendo guardar diferentes elementos con tipos diferentes

```javascript
const arrayMultiple = [1,"prueba",new Date(),true,'A']
```

Otra de las formas de poder crear un array con elementos dentro, es utilizar alguno de los métodos que ofrecen alguno de los objetos del lenguaje, como por ejemplo el método split del tipo String

```javascript
const palabra = "Esto es un ejemplo de crear un array con contenido partiendo de una palabra"
const arrayPalabras = palabra.split(' ')

// salida

(14) ['Esto', 'es', 'un', 'ejemplo', 'de', 'crear', 'un', 'array', 'con', 'contenido', 'partiendo', 'de', 'una', 'palabra']
```

## Acceso a los elementos

En el caso de que el array tenga elementos guardados dentro, una de las principales acciones que realizan sobre el array es el acceso a cada uno de los elementos. Este acceso puede ser individual o secuancial. Partimos de un array que tenga la asiguiente estructura:

```javascript
const asignaturas = [
  "Desarrollo cliente","Desarrollo Servidor","Despliegue","Diseño",
];
```

En este caso cada uno de los elementos como se ha dicho está asociada a una posición, siendo la 0 la primera de ellas por lo tanto las posiciones de cada uno de los elementos serían las siguientes

| Elementos: | Desarrollo cliente | Desarrollo Servidor | Despliegue | Diseño |
| -- | -- | -- | -- | -- |
| Posiciones:
| 0 | 1 | 2 | 3 |

Para poder acceder a cada uno de los elementos, simplemente es necesario indicar la posición que se quiere acceder

```javascript
console.log(asignaturas[0]); // Desarrollo cliente
console.log(asignaturas[4]); // Diseño
```

Es importante tener en cuenta que si queremos acceder a la última posición es necesario acceder mediante el tamaño del array menos 1, ya que las posiciones empiezan en 0

```javascript
console.log(asignaturas[asignaturas.length - 1]); // último elemento
```

En caso de querer acceder de forma secuencial a todos los elementos del array se tienen que hacer mediante una estructura de repetición, bien sea for o foreach. Para hacerlo mediante la estructura for se utiliza el índice para acceder a cada una de las posiciones

```javascript
for (let index = 0; index < asignaturas.length; index++) {
  const elemento = asignaturas[index];
  console.log(elemento);
}
```

Esta es la construcción del for más normal. En js existen dos construcciones adicionales que permiten acceder directamente al elemento o al indice que tienen asociado. Estas dos construcciones se conocen con el nombre de for-of y for-in. Ambas se parecen bastante, cambiando el dato que manejan

La sentencia for-of es lo que comúnmente se conoce como foreach en java. Se utiliza para poder recorrer de forma completa una colección, sin necesidad de indicarle inicio y final de la misma. La variable iterator (puede tener cualquier nombre que le indiquemos) toma el valor de cada uno de los elementos del array

```javascript
console.log("Construcción for of");
for (const iterator of asignaturas) {
  // donde iterator es el elemento directamente
  console.log(iterator);
}
```

La sentencia for-in recorre de forma completa una colección sin necesidad de indicad inicio y fin, con la diferencia respecto al anterior que el dato que obtiene (llamado key) es el índica del elemento que itera. En el caso de tener un array puede no ser muy útil, sin embargo cuando tengo un Map o un objeto, acceder a cada una de las claves asociadas si será útil. Su uso es el siguiente

```javascript
console.log("Construccion for in");
for (const key in asignaturas) {
  // donde key es la posición
  console.log(asignaturas[key]);
}
```

Por último en el caso de querer hacer un acceso secuencia, js cuenta con las llamadas funciones lambda o funciones de flecha. Foreach es una de las principales funciones, teniendo la siguiente estructura

forehac

```javascript
console.log("Construcción foreach");
asignaturas.forEach(item=>console.log(item))
```

En este caso la función se aplica directamente a la colección, obteniendo como parámetros un elemento (llamado item) el cual representa el elemento que se está iterando y se realiza una ejecución (lo que está a la derecha de la flecha) imprimiendo por consola cada uno de los elementos de array. La salid será la siguiente

```javascript
// SALIDA
Construcción foreach
Desarrollo cliente
Desarrollo Servidor
Despliegue
Diseño
```
Como veremos más adelante, en las funciones de flecha, existe la posibilidad de obtener varios parámetros. En el caso de foreach, la función está construida de tal manera que se pueden llegar a manejar 3 parámetros (indice, elementoIterar, array). En este caso la construcción sería la siguiente:

```javascript
asignaturas.forEach((item, index, array) =>
  console.log(`Elemento en la posición ${index} con un valor de ${item}`)
);

// SALIDA

Elemento en la posición 0 con un valor de Desarrollo cliente
Elemento en la posición 1 con un valor de Desarrollo Servidor
Elemento en la posición 2 con un valor de Despliegue
Elemento en la posición 3 con un valor de Diseño
```

## Modificación de los elementos

Para poder modificar los valores de un array hay que diferenciar si se quiere cambiar el valor de algo que ya esté guardado en una posición, o si se quiere añadir un elemento nuevo a la colección. En este apartado vamos a ver el primer caso, el de modificar elementos ya guardados. Para ello es tan sencillo como acceder al elemento igual que lo hemos hecho antes, y utilizar el operador de asignación para cambiar el valor que está guardado

```javascript
asignaturas[3] = "Diseño interfaces web"
```
En este caso se asignará un nuevo valor, modificando el anterior

| Elementos: | Desarrollo cliente | Desarrollo Servidor | Despliegue | Diseño |
| -- | -- | -- | -- | -- |
| Posiciones:
| 0 | 1 | 2 | 3 |

se cambiará por

| Elementos: | Desarrollo cliente | Desarrollo Servidor | Despliegue | Diseño de interfaces web |
| -- | -- | -- | -- | -- |
| Posiciones:
| 0 | 1 | 2 | 3 |
