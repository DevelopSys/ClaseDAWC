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
| Posiciones: | 0 | 1 | 2 | 3 |
