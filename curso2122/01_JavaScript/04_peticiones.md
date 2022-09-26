## <a name="index"></a>


1. Promesas y peticiones AJAX
	1. [Promesas: uso y creación](#promesas)
	2. [Peticiones API Rest mediante fetch](#ajax)

## Peticiones asíncronas

La asincronía es uno de los pilares fundamentales de Javascript ya que permite que determinadas acciones se realicen en segundo plano sin bloquear al resto, pudiendo hacer multitud de tareas al mismo tiempo. 

Hasta este punto ya se han visto alguno de los patrones asíncronos utilizados por js como por ejemplo las funciones callback o los timers. Sin embargo mediante estos patrones puede que muchas de las funcionalidades no se puedan llevar a cabo, por lo que se necesitan otros elementos como por ejemplo las promesas o el patrón async.

## Promesas<a name="promesas"></a>


Una promesa básicamente es la ejecución de una acción que no se sabe muy bien cuándo va a terminar, pero que se espera un resultado concreto para poder ser tratado en el momento de la finalización. También es posible que una promesa pueda finalizar de forma incorrecta (como por ejemplo que no responda) y el patrón nos da la posibilidad de tratar este error. Del mismo modo el patrón de promesas permite añadir una capa de complejidad más asignando prioridades. Aunque se explicará en detalle con la ejecución del método fetch, la estructura de una promesa es la siguiente:

````
promesa.then(funcion_cuando_hay_exito,funcion_cuando_no_hay_exito);
````

````
        fetch("https://jsonplaceholder.typicode.com/posts").then(
            (resultado) => {
                console.log('Todo ha ido correcto, respuesta obtenida ' + resultado.json());
            },
            (error) => {
                console.log('Algo ha ido mal');
            }
        );
````


De igual forma se pueden encadenar tantas promesas como sean necesarias, anidando métodos then. Esto es muy interesante ya que la segunda promesa recibirá como parámetros la salida de la primera

````
        fetch("https://jsonplaceholder.typicode.com/posts").then(
            (resultado) => {
                resultado = resultado.json();
                console.log('Todo ha ido correcto, respuesta obtenida ' + resultado);
                return resultado 
            },
            (error) => {
                console.log('Algo ha ido mal');
            }
        ).then((otras) => {
            usuarios = otras;
            console.log(usuarios);

        });
````

Al igual que se puede obtener un resultado positivo y tratarlo, también se puede obtener un resultado erróneo y tratarlo. Para eso se utiliza el método catch() anidado en la promesa que puede provocar el error
````
fetch("https://estoesuninvento.es")
        .then((resultado) => console.log("datos obtenidos"))
        .catch((error) => console.log("error producido " + error));
````

Por último también podemos crear nuestras propias promesas con la palabra reservada new y siguiente la siguiente estructura

````
new Promise((resolve, reject) => {
	//lógica de la promesa
	// indicando cuando se retorna un resolve (cuando hay éxito)
	// o cuando se retorna un reject (cuando hay error)
});
````

Es importante tener en cuenta que retornar tanto resolver como reject pueden ir acompañados de parámetros que podrán ser procesados en el bloque then de la promesa

Imaginad el ejemplo de una variable numero que tiene un valor de 9 y se quiere hacer una promesa para que actúe de una forma u otra cuando el valor es superior o inferior a 10. 

````
        let promesa = new Promise((resolve, reject) => {
            setTimeout(function() {
                numero = Math.random() * 20;
                if (numero <= 10) {
                    return resolve(numero);
                } else {
                    return reject("superior");
                }
            }, 5000);
        });


````

Una vez que la promesa está creada se puede llamar igual que se ha hecho anteriormente con el método fetch

````
        promesa.then(
            (data) => console.log("datos con exito " + data),
            (error) => console.log("datos con error " + error)
        );
````

Lo que hay que tener en cuenta en este código es que la promesa se ejecuta de forma asíncrona al resto de ejecuciones de la página, por lo que no bloquea ninguna acción. Para poder ver esta funcionalidad se ha incorporado una llamada a la función setTimeout

Del mismo modo que se pueden crear promesas con un objeto de tipo new Promise, también se pueden crear indicando a la función que es de tipo Async. En este caso creamos una función que busca en un array un elemento concreto y devuelve el objeto en el resolve si lo encuentra

````
export function buscarCoche(marca) {
  let encontrado = coches[marca];

  return new Promise((resolve, reject) => {
    if (encontrado) {
      resolve(encontrado);
    } else {
      reject("no encontrado");
    }
  });
}
````

Cuando esta promesa se quiere tratar en algún sitio simplemente hay que pedir la marca y utilizar el then (para el caso correcto) y el catch (para el caso no resuelto)

````
buscarCoche("focus")
  .then((coche) => {
    console.log(`el coche encontrado es ${coche.valor}`);
  })
  .catch((err) => {
    console.log(err);
  });
````

En el caso de utiliza la palabra reservada async en la función no sería necesario indicar de forma explicita en la funcion que retorne una promesa ya que se da por hecho. En este caso no podemos utilizar la palabra reservada resolver ni reject (ya que no están como parte de la función de flecha). Lo que se utiliza es el return para el caso correcto y el throw para el caso incorrecto.

````
export async function buscarCocheAsync(marca) {
  let encontrado = coches[marca];

  if (encontrado) {
    return encontrado;
  } else {
    throw "error";
  }
}
````

Y a la hora de tratarlo se hace como cualquier promesa al uso

````
buscarCocheAsync("Mercedes")
  .then((data) => {
    console.log(`El coche entontrado es: ${data}`);
  })
  .catch((err) => {
    console.log("No se ha encontrado el coche con la marca indicada");
  });
````

Otro elemento que se suele utilizar es la palabra reservada away. Este elemento permite una "contestación" postergada cuando se realiza una promesa, respondiendo directamente con el elemento, sin necesidad de tratar el then. 

````
export async function evaluarCoche(marca) {
  let coche = await buscarCoche(marca);
  console.log(coche);
}
````


Se utiliza mucho cuando se realizan peticiones a base de datos que pueden tardar más de lo normal. Se supone el caso de querer hacer muchas promesas de golpe y que se pueda tratar la respuesta de todas ellas. Con lo que sabemos hasta ahora podríamos hacer lo siguiente 

````
function getCochesTodos() {
  let coches = [];
  for (let index = 0; index < cocheMarcas.length; index++) {
    const element = cocheMarcas[index];
    buscarCoche(element).then((data)=>{this.coches.push(data)})
  }
  return coches;
}

````

Siguiente el ejemplo de antes podríamos hacer esto, recorriendo un array con los elementos sobre los que se quieren hacer peticiones. Esto en principio está bien, lo malo que tiene es que al ser promesas no todas contestan de golpe, por lo que se va a retornar no es exactamente el resultado. Lo que se hace es utiliza la palabra await para que cada promesa se realice con tranquilidad y cuando se termine se realice con ella lo que se quiera

````
export async function getCochesTodos() {
  let coches = [];

  for (let index = 0; index < cocheMarcas.length; index++) {
    let coche;
    const element = cocheMarcas[index];
    let coche = await buscarCoche(element);
    coches.push(coche);
  }
  return coches;
}
````

Es importante tener en cuenta que si se utiliza la palabra reservada await, es necesario que sea sobre una función que es async. En el sitio donde se quiera utilizar se realiza la extracción de la promesa (ya que es lo que ha retornado)

````
getCochesTodos().then((data) => {
  console.log(data);
});

````

De esta forma se resuelven las promesas de una en una. Lo malo que tiene esto es que en cada promesa se espera a que se resuelva para que pase a la siguiente. Si utilizamos el método Promise.all es posible resolver todas las promesas de golpe.

````
export async function getCochesTodosMejorado() {
  let coches = [];

  cocheMarcas.forEach((element) => {
    coches.push(buscarCocheAsync(element));
  });

  return await Promise.all(coches);
}
````

O lo que es lo mismo (incluso más eficiente):

````
export async function getCochesTodosMejorado() {
  return await Promise.all(cocheMarcas.map((id) => buscarCoche(id)));
}
````

Y en el elemento donde llame al método resolver la promesa

````
getCochesTodos().then((data) => {
  console.log(data);
});

````

En este caso me vale para resolver la promesa en el js principal. En el caso de querer resolver la promesa en el método y devolver el elemento pero sin penalizar el tiempo podríamos hacer lo siguiente

````
export async function getCochesTodosMejorado2() {
  let coches = [];

  coches = await Promise.all(cocheMarcas.map((marca) => buscarCoche(marca)));

  coches.forEach((element) => {
    console.log(element);
  });
}
````

Con la creación de un array donde se guardan todas las promesas (con el await) para que sean todas resueltas y evaluarlas en el propio método. En el js principal tan solo sería necesario llamar al método

````
getCochesTodosMejorado2();
````

En vez de crear el array y luego recorrerlo se puede poner todo junto en el método de la siguiente forma.

````
export async function getCochesTodosMejorado2() {
  let coches = [];
  let promesasTodas = cocheMarcas.map((marca) => buscarCoche(marca));

  for await (const item of promesasTodas) {
    console.log(item);
  }
}

````

En este caso se crea un array de promesas y con un for of se recorre. Es importante ver que en cada recorrido se obtiene directamente el elemento, ya que se hace esperando con el await, de forma que se hace secuencias. 

Como se ha visto, es posible realizar tareas con cada una de las promesas de forma diferente, dependiendo en todas ellas el tiempo de carga. Otra de las posibilidades es encadenar promesas, ejecutando la siguiente promesa al terminar la primera. Para ello lo que realmente se hace es ejecutar then anidados, teniendo en cuenta la respuesta del then anterior

````
promesa.then(loquesea).then(loquesea2, dependiendo de lo anterior)
````

O lo que es lo mismo

````
buscarCocheEncadenado("focus")
  .then((data) => data)
  .then((data) => {
    console.log("Log de la promesa secundaria");
    console.log(data);
  });
````

El segundo then obtiene como parámetros lo que ha devuelvo el primer then. Hay que tener en cuanta la sintaxis de este tipo de encademiento, ya que en el caso de tener varias filas la primera promesa es necesario ponerla entre llaves y utilizar la palabra return

````
buscarCocheEncadenado("focus")
  .then((data) => {
    console.log("Log de de la primera promesa");
    return data;
  })
  .then((data) => {
    console.log("Log de la promesa secundaria");
    console.log(data);
  });
````

Esto es bastante útil cuando una promesa depende de otra.

[Volver al inicio](#index)


## Peticiones Ajax<a name="ajax"></a>


En la mayoría de las aplicaciones, los servicios que proveen datos suelen ser servicios externos que facilitan la consulta y el almacenamiento de datos. En el caso de querer un almacenamiento interno es posible utilizar almacenamiento web (si no se quiere una gran persistencia), un almacenamiento en ficheros, en base de datos locales o directamente en bases de datos externos. En muchas ocasiones es necesario asociar la aplicación con elementos adicionales que den datos "extra" como puede ser servicios de usuarios, datos de elementos externos, etc... Esto es lo que se conoce como API REST. Para poder realizar estas consultas, básicamente lo que hay que hacer es una consulta a través de una URL la cual contesta con los datos pedidos. Para ello en js se utilizan peticiones fetch. 

Una petición fetch es una petición a un API REST que nos devuelve un resultado que será procesado en el código, que por regla general se procesa mediante un objeto de tipo JSON. Su uso es muy sencillo, ya que solo es necesario utilizar el método pasando como parámetro la url del servicio que se quiere consumir. Esta función fetch devuelve como resultado una promesa, por lo que e se pueden ejecutar los métodos then. En un ejemplo sería de la siguiente forma:

````
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => (data = data.json()) )
            .then((data) => console.log(data));
````

La llamada al método fetch realiza una consulta a la url pasada, la cual contesta con una serie de datos json. Para poder tratar esta petición se utilizan la promesa que devuelve el método fetch, y en concreto el método then:

- el primer then: obtiene como parámetros la salida de la promesa cuando esta ha tenido éxito. En el caso del ejemplo lo que hace es convertirla a json por el método .json()
- el segundo then: cuando se ha terminado de hacer la captura de datos y traducción a json se realiza una impresión por pantalla.

El segundo then es utilizado normalmente para hacer igualdad a una variable que se tenga en el script o simplemente para realizar tareas concretas cuando la captura de los datos haya sido correcta. La salida por consola sería la que se muestra en el json que aparece al pulsar en la url. Una vez se tiene eso ya se puede acceder a cada uno de los elementos. 

````
        let usuarios = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => (data = data.json()))
            .then((data) => {
                usuarios = data;
                usuarios.forEach((element) => {
                    console.log(element.title);
                });
            });
````
 
En el segundo then además de realizar la tarea que se ha hecho antes, se recorre mediante un foreach todos los elementos guardados y accediendo en concreto a una de las propiedades del objeto json, sacando así todos los title de los objetos. En este ejemplo se ha realizado para poder mostrar por consola los datos, pero si se quisiera mostrar todos los títulos en una lista HTML sería tan sencillo como acceder a ella mediante una query y anexarle un nodo el cual tiene como valor de texto la propiedad title sacada del foreach

````
<body>

   <ul id='listaTitulos'>
    </ul>
    <script>
        "use strict";
        let usuarios = [];
        let lista = document.querySelector('#listaTitulos');
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => (data = data.json()))
            .then((data) => {
                usuarios = data;
                usuarios.forEach((element) => {
                    console.log(element.title);
                    let nodo = document.createElement('li');
                    nodo.textContent = element.title;
                    lista.appendChild(nodo);
                });
            });
    </script>
</body>

````


El uso de las promesas encadenadas es muy útil para no tener un código que encadene funciones callback dentro de funciones callback dentro de funciones ...... Lo más importante es entender que la funcion fetch devuelve una promesa y se puede tratar como tal. De esta forma podríamos construir un código separado por funciones, donde cada función retornase una promesa y en el caso de querer encadenarla se podría hacer. Imaginad la siguiente petición API REST https://randomuser.me/api/?results=50. Este ejemplo devuelve un json con este formato

````
object{
	result[
		0{propiedades}
		1{propiedades}
		2{propiedades}
	]
	info{}
}
````

Si se quiere separar promesas en funciones se podría realizar el siguiente código

````
<body>
    <ul id="listaPersonas"></ul>
    <script>
        "use strict";
        let usuarios = [];

        function retornarUsuarios() {
            return fetch("https://randomuser.me/api/?results=50");
        }

        function pintarUsuarios(usuarios) {
            console.log(usuarios.results);

        }

        window.addEventListener("load", () => {
            retornarUsuarios()
                .then((resultado) => {
                    usuarios = resultado.json();
                    return usuarios;
                })
                .then((resultado) => pintarUsuarios(resultado));
        });
    </script>
</body>
````

Como la función retornarUsuarios devuelve una promesa (la función fetch) se puede encadenar con un then. La función pintarUsuarios recibe como parámetros el objeto json de la primera promesa y se encarga de sacar todos los registro. Es importante ver que en el parámetro se accede a los results, ya que en este caso es parte de la llamada (tal y como se ha mostrado en la estructura del json)

````
retornarUsuarios()
                .then((resultado) => {
                    usuarios = resultado.json();
                    return usuarios;
                })
                .then((resultado) => pintarUsuarios(resultado));
````

Teniendo en cuenta que el array asociado a la parte de results tiene este formato

````
0:
cell: "(601)-404-7412"
dob:
age: 56
date: "1964-12-31T05:51:57.833Z"
email: "isa.vandepoll@example.com"
gender: "female"
id:
name: "BSN"
value: "24324570"
location:
city: "Oud Zuilen"
coordinates: {latitude: "44.6252", longitude: "174.9585"}
country: "Netherlands"
postcode: 56643
state: "Drenthe"
street: {number: 9171, name: "Jan Hendrickxstraat"}
timezone: {offset: "-2:00", description: "Mid-Atlantic"}
login:
md5: "3553578fcebf36fb69159a5a17f115ac"
password: "condom"
salt: "e4q0Nt6V"
sha1: "1cc89ca6ae0f413614b6e4d122896c9e4c814551"
sha256: "b1e35fdc9bd9de04d3fb0d8bfd8ca2bf9c0ea7d824908f83154e2660e3244af5"
username: "sadleopard490"
uuid: "6bb5eda0-81e4-4fa5-ac4b-866085bafe9b"
name:
first: "Isa"
last: "Van de Poll"
title: "Ms"
nat: "NL"
phone: "(376)-995-7354"
picture:
large: "https://randomuser.me/api/portraits/women/52.jpg"
medium: "https://randomuser.me/api/portraits/med/women/52.jpg"
thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg"
registered:
age: 17
date: "2003-01-13T14:29:58.950Z"
````

Para poder acceder a las características se realizaría de la siguiente forma

````

        function pintarSoloNombres(usuarios) {
            usuarios.results.forEach(element => {
                console.log(element.name);
            });
        }

        function pintarSoloEmail(usuarios) {
            usuarios.results.forEach(element => {
                console.log(element.email);
            });
        }
````

Cada una de las funciones recibe cómo parámetro lo mismo que la promesa inicial, es decir la petición al API transformada en json. Como se puede ver, llamando a usuarios.results se obtiene un array el cual se recorre de forma completa donde cada uno de los valores que lo conforman se evaluá como element. Una vez obtenido el element se puede acceder a cualquiera de sus propiedades llamándola directamente. Con esto entendido se podría crear una lista donde aparezca el nombre completo y un botón

````
<body>
    <ul id="listaPersonas"></ul>
    <script>
        "use strict";
        let usuarios = [];
        let lista = document.querySelector('#listaPersonas');

        function retornarUsuarios() {
            return fetch("https://randomuser.me/api/?results=50");
        }

        function pintarUsuarios(usuarios) {
            console.log(usuarios.results);
            usuarios.results.forEach(element => {
                let nodo = document.createElement('li');
                nodo.textContent = `${element.name.title} ${element.name.first} ${element.name.last} `
                let nodoInterno = document.createElement('button');
                nodoInterno.textContent = 'Ver detalles';
                nodo.appendChild(nodoInterno);
                lista.appendChild(nodo);

            });
        }

        window.addEventListener("load", () => {
            retornarUsuarios()
                .then((resultado) => {
                    usuarios = resultado.json();
                    return usuarios;
                })
                .then((resultado) => pintarUsuarios(resultado));
        });
    </script>
</body>
````

La funcion pintarUsuarios será llamada cuando se termine de cargar la página. Esta función recorre el array de resultados obtenidos y en cada recorrido realiza las siguientes acciones:

	1. Crea un nodo li para poder poner el elemento que está evaluando

````
                let nodo = document.createElement('li');
````

	2. Pone como texto al nodo li el nombre completo del elemento que está evaluando

````
                nodo.textContent = `${element.name.title} ${element.name.first} ${element.name.last} `
````


	3. Crea y añade un nodo botón al nodo li creado para el elemento
````
let nodoInterno = document.createElement('button');
                nodoInterno.textContent = 'Ver detalles';
                nodo.appendChild(nodoInterno);

````
	4. Añade el nodo li a la lista encontrada en el HTML
````
                nodo.appendChild(nodoInterno);
                lista.appendChild(nodo);
````

De esta forma aparece una lista de todos los usuarios de la petición con un botón en cada uno. 
Para completar este ejemplo, vamos a utilizar una petición secundaria al servicio https://randomuser.me/api/?id=1234 donde se obtiene el elemento cuya id es la indicada. Para ello lo se van a realizar los siguientes pasos:

1. Se pone un escuchador a los botones para que se pueda actuar ante su pulsación

````
        function pintarUsuarios(usuarios) {
            console.log(usuarios.results);
            usuarios.results.forEach(element => {
                let nodo = document.createElement('li');
                nodo.textContent = `${element.name.title} ${element.name.first} ${element.name.last} `
                let nodoInterno = document.createElement('button');
                nodoInterno.textContent = 'Ver detalles';
                nodoInterno.style.margin = '10px'
                nodoInterno.addEventListener('click', function() {
                    console.log('botón pulsado');
                })
                nodo.appendChild(nodoInterno);
                lista.appendChild(nodo);

            });
        }
````

2. En el mismo instante que se pulsa el botón se quiere obtener el id del elemento pulsado. Esto es tan sencillo como acceder al elemento que se está evaluando y sacarlo por consola junto con la url

````
                nodoInterno.addEventListener('click', function() {
                    console.log(`El id del elemento es: ${element.id.value}`);
                    console.log(`La URL que muestra los detalles es: https://randomuser.me/api/?${element.id.value}`)
                })
````

3. Se realiza una función externa que muestre los elementos de el usuario seleccionado. Dicha función obtendrá como parámetros el id. En la funcion se realiza la petición fetch a la url creada y de esta se evalúa el json hasta poder obtener la imagen.

````
function detalleUsuario(id) {
            let url = `https://randomuser.me/api/?${id}`;
            fetch(url)
                .then((resultado) => resultado.json())
                .then((resultado) => {
                    let imagen = document.querySelector("#imagenPersonas");
                    imagen.src = resultado.results[0].picture.large;

                });
        }
````

4. Por último el escuchador del botón del punto 2 llamará a la función creada en el punto anterior

````
                nodoInterno.addEventListener("click", function() {
                    console.log(`El id del elemento es: ${element.id.value}`);
                    console.log(
                        `La URL que muestra los detalles es: https://randomuser.me/api/?${element.id.value}`
                    );
                    detalleUsuario(element.id.value);
                });
````

El código completo del ejemplo sería el siguiente:

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <ul id="listaPersonas"></ul>
    <div id="detallePersonas">
        <img id="imagenPersonas" />
    </div>
    <script>
        "use strict";
        let usuarios = [];
        let lista = document.querySelector("#listaPersonas");
        let detalle = document.querySelector("#detallePersonas");
        let imagen = document.querySelector("#imagenPersonas");

        function retornarUsuarios() {
            return fetch("https://randomuser.me/api/?results=50");
        }

        function pintarUsuarios(usuarios) {
            console.log(usuarios.results);
            usuarios.results.forEach((element) => {
                let nodo = document.createElement("li");
                nodo.textContent = `${element.name.title} ${element.name.first} ${element.name.last} `;
                let nodoInterno = document.createElement("button");
                nodoInterno.textContent = "Ver detalles";
                nodoInterno.style.margin = "10px";
                nodoInterno.addEventListener("click", function() {
                    console.log(`El id del elemento es: ${element.id.value}`);
                    console.log(
                        `La URL que muestra los detalles es: https://randomuser.me/api/?${element.id.value}`
                    );
                    detalleUsuario(element.id.value);
                });
                nodo.appendChild(nodoInterno);
                lista.appendChild(nodo);
            });
        }

        function detalleUsuario(id) {
            let url = `https://randomuser.me/api/?${id}`;
            fetch(url)
                .then((resultado) => resultado.json())
                .then((resultado) => {
                    let imagen = document.querySelector("#imagenPersonas");
                    imagen.src = resultado.results[0].picture.large;

                });
        }

        window.addEventListener("load", () => {
            retornarUsuarios()
                .then((resultado) => {
                    usuarios = resultado.json();
                    return usuarios;
                })
                .then((resultado) => pintarUsuarios(resultado));
        });
    </script>
</body>

</html>
````

[Volver al inicio](#index)
