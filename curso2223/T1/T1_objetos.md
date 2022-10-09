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

Además de todas estas funcionalidades propias de cada uno de los objetos que declaremos, también podremos utilizar métodos propios de la clase Object dond podemos destacar los siguientes:

- assign: realiza una copia exacta del objeto indicado en otro

```javascript

```
