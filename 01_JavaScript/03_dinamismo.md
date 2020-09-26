## <a name="index"></a>

3. Trabajo con DOM, BOM y eventos

	1. [Acceso al dom y modificaciones](#dom)
	2. [Configuración de eventos: en linea y listener](#eventos)
	3. [Timers: introducción a la asincronía](#timers)
	4. [Acceso al bom y trabajo el navegador ](#bom)
	5. [Almacenamiento en navegador](#web)

Una de las características que hacer muy potente el uso de JS es su alta disponibilidad a la hora de realizar tareas dinámicas. Para ello existen diferentes elementos que se pueden modificar y/o acceder en tiempo real: 

- DOM: Document Object Model, es una interfaz para HTML, CSS y SVG que nos facilita una representación en forma de árbol sobre la que podremos trabajar con JavaScript.
- BOM: Browser Object Model, que contiene información de todos los elementos propios del navegador y/o dispositivos donde se ejecutan como por ejemplo: versión de navegador, tamaños de pantalla, historial 

## Acceso al DOM y modificaciones<a name="dom"></a>

Se trata del modelo utilizado por el navegador para poder renderizar la página. Se puede asemejar a todo el código HTML escrito en cualquier editor que es interpretado y ejecutado por el propio navegador. Una de las capacidades más interesantes de JS es el acceso a este modelo y la posibilidad de su modificación de forma dinámica a tiempo real. En concreto, no solo es capaz de modificar, añadir o borrar los elementos del DOM, sino también agregar / modificar atributos, elementos CSS, así como reaccionar ante cualquier evento producido en la página

Como se ha dicho cuando hablamos de DOM, estamos hablando de todos los elementos presentes dentro del código de la página. Estos elementos reciben el nombre de nodos y se pueden clasificar en:

- Nodos de tipo elemento: aquellos que corresponden a una etiqueta HTML como p, h1, div, a, ul, form, etc..
- Nodos de tipo atributo: aquellos que hacen referencia a los atributos de los nodo elemento expuestos anteriormente. Por ejemplo un atributo href de un elemento a
- Nodos de tipo texto: el contenido textual de un nodo
- Nodos de tipo Document: la página completa
- Nodo de tipo comentario: los comentarios de la página


Imaginad el body de una página con la siguiente estructura
````
<body>

    <h1>Titulo de JS impartido por Borja Martín</h1>
    <p>Titulo correspondiente al primer curso de DAM del instituto CES Juan Pablo segundo de Formación profesional</p>
    <div id="mi_div"></div>
    <script>
    </script>
</body>
````

En este caso se renderizaría un título y un párrafo, quedando un div vacío. Este div vacío cuenta con un id, mediante la cual puede ser accedido el elemento desde el código js, de forma que se pueda poner cualquier cosa en su interior mediante programación. Si en el script asociado se utiliza el método getElementById() se puede acceder al elemento HTML con dicho id

````
    <script>
        'use strict'
        let elementoDiv = document.getElementById('mi_div');
        console.log(elementoDiv);
    </script>
````

La salida por consola sería la propia etiqueta. Una vez capturada se puede por ejemplo acceder al código HTML incrustado en la etiqueta mediante la propiedad innerHTML o modificarlo igualando aun valor concreto.

Al igual que se puede modificar y/o acceder al contenido de la etiqueta encontrada, también se pueden hacer accesos y modificaciones de estilos, atributos, etc...Por ejemplo si se quiere cambiar el style de la etiqueta a uno que se haya creado en CSS sería tan sencillo como crear el estilo en css y aplicárselo a la etiqueta encontrada

````
.estilo_js {
    background-color: burlywood;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
}
````

Y el código HTML 

````
    </div>
    <script>
        "use strict";
        let elementoDiv = document.getElementById("mi_div");
        console.log(elementoDiv);
        console.log(elementoDiv.innerHTML);
        elementoDiv.innerHTML = "<ul><li>elemento uno</li></ul>";
        elementoDiv.className = "estilo_js";
    </script>
````

De igual forma se puede hacer más dinámico aun si nos creamos por ejemplo una función que pueda ser llamada desde cualquier elemento mediante un evento (que se verán más adelante) o simplemente desde la consola. Para ello en el código js se crea una función que reciba como parámetro un color y lo aplique en los estilos

````
    <script>
        "use strict";

        function cambiarColor(color) {
            elementoDiv.style.backgroundColor = color;
        }

        let elementoDiv = document.getElementById("mi_div");

    </script>
````

Esta función puede ser llamada desde la consola o desde la pulsación de un elemento por ejemplo. 

````
    <script>
        'use strict'
        let elementoDiv = document.getElementById('mi_div');
        console.log(elementoDiv);
        console.log(elementoDiv.innerHTML);
        elementoDiv.innerHTML = '<ul><li>elemento uno</li></ul>';
    </script>
````

En el ejemplo que se acaba de ver, se ha accedido al elemento mediante una ID, pero js permite acceder a los elementos mediante diferentes métodos "tradicionales" getElementById, getElementByClassName, getElementByTagName

Imaginad una web con la siguiente estructura

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1 id="titulo">Titulo propio impartido en el CES Juan Pablo II</h1>
    <p id="parrafo_general">
      Este título propio será impartido para los alumnos del ciclo de Desarrollo
      de Aplicaciones Multiplataforma de CES JuanPablo II. La finalidad de este
      curso es sentar las bases del lenguaje de programación web JavaScrip de
      forma que se puedan hacer Aplicaciones web dinámicas
    </p>

    <p>El contenido del curso será</p>

    <ul id="lista_contenido">
      <li>1. Introducción</li>
      <li>2. DOM y BOM</li>
      <li>3. Gestión de eventos</li>
      <li>4. Almacenamiento interno</li>
    </ul>

    <script></script>
  </body>
</html>

````

Como se puede ver, algunos nodos del DOM de la página cuentan con el atributo id. Este atributo (al igual que otros como el class o el tag) permiten a js acceder a su contenido mediante los métodos getElementById, getElementByClassName, getElementByTagName

````
    <script>
        var listaPorId = document.getElementById('lista_contenido');
        var listaPorTag = document.getElementsByTagName('ul');
        var listaPorClass = document.getElementsByClassName('class_lista');

        console.log(listaPorId);
        console.log(listaPorTag);
        console.log(listaPorClass);
    </script>
````

````
<ul id="lista_contenido" class="class_lista">..</ul>
HTMLCollection [ul#lista_contenido.class_lista, lista_contenido: ul#lista_contenido.class_lista]
HTMLCollection [ul#lista_contenido.class_lista, lista_contenido: ul#lista_contenido.class_lista]
````

La diferencia reside en que el primer método (por Id devuelve el contenido íntegro), sin embargo los dos siguientes devuelve un HTMLCollection, por lo que en la mayoría de veces nos interesará este tipo, pasa así poder acceder a sus atributos internos

Imaginad que me interesa sacar llevar a js todos los elementos de una lista ul

````
    <script>
        var lista = document.getElementsByTagName('ul')[0].children;
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            console.log(element.innerHTML);
        }
    </script>
````

En este caso se accede a la propiedad children de la lista. Sobre la variable se realiza un array para recorrer la variable y de cada elemento iterado se accede a la propiedad innerHTML

Adicionalmente se pueden utilizar una serie de métodos que son interesantes, ya que nos devuelven directamente una serie de elementos comunas:

- anchor: todas las etiquetas -a- del documento con el atributo name
- applets: todos las etiquetas applet del documento
- forms: todos las etiquetas form del documento
- images: todas las etiquetas img del documento
- links: todas las etiquetas -a- del documento con el atributo href
- scripts: todas las etiquetas script del documento

````
    <ul>
        <li><a href="https://github.com/DevelopSys/CursoJS">Repositorio DevSys</a></li>
        <li><a href="https://classroom.google.com/">Classroom</a></li>
        <li><a href="http://www.developandsys.es">Develop and system</a></li>
    </ul>

    <script>
    
        var links = document.links;
        for (let index = 0; index < links.length; index++) {
            const element = links[index];
            console.log(element.href);

        }
    </script>
````


Adicionalmente js nos permite utilizar selectores especiales que permiten realizar querys sobre todos los elementos de un DOM de forma más concreta. Estos métodos son querySelector() y querySelectorAll().

- querySelector(): permite pasar un parámetro indicando tanto id como class o etiqueta en el mismo método, incluso anidando elementos. El método devuelve el primer elemento que cumpla con los parámetros pasados, aunque exista más de uno

````
    <script>
        "use strict"
        let elementoPorClass = document.querySelector('.mi_parrafo');
        console.log(elementoPorClass);
        let elementoPorId = document.querySelector('#mi_div');
        console.log(elementoPorId);
    </script>
````


Mediante esta función se puede encontrar cualquier elemento, incluso si están anidados;

````
<body>
    <h1>Titulo de JS impartido por Borja Martín</h1>
    <p class="mi_parrafo">
        Titulo correspondiente al primer curso de DAM del instituto CES Juan Pablo segundo de Formación profesional
    </p>
    <div id="mi_div">
        Párrafo diferente
        <div class="elemento_interno"></div>
        <div class="elemento_interno_dos"></div>

    </div>
    <script>
        "use strict"
        let elementoAnidado = document.querySelector('#mi_div div');
        console.log(elementoAnidado);
    </script>
</body>
````

La salida del método document.querySelector('#mi_div div') devería devolver todos los elementos con la etiqueta div que estén dentro de una etiqueta cuyo id es mi_div. En el caso de la función querySelector solo devolvería el primero, por lo que el resultado sería:        
````
<div class="elemento_interno"></div>
````

Adicionalmente se puede realizar una query preguntando por todos aquellos elementos que tengan la clase elemento_interno_dos y que estén dentro de una etiqueta cuyo id sea mi_div:

````
        let elementoAnidadoConcreto = document.querySelector('#mi_div .elemento_interno_dos');
        console.log(elementoAnidadoConcreto);
````

En este caso solo existe una coincidencia, pero en el caso de haber varias tan solo se devolvería la primera. Al igual que en casos anteriores se puede ejecutar una función que reciba por parámetros el elemento y modifique alguno de sus elementos

````
        function modificarContenido(elemento) {
            elemento.innerHTML = 'modificaion'
        }
````

- querySelectorAll(): permite pasar un parámetro indicando tanto id como class o etiqueta en el mismo método, incluso anidando elementos. El método devuelve el todos los elementos que cumplan con los parámetros pasados, pudiendo recorrerlos y realizar tareas con ellos

Con el mismo body del ejemplo anterior

````

<body>
    <h1>Titulo de JS impartido por Borja Martín</h1>
    <p class="mi_parrafo">
        Titulo correspondiente al primer curso de DAM del instituto CES Juan Pablo segundo de Formación profesional
    </p>
    <div id="mi_div">
        Párrafo diferente
        <div class="elemento_interno"></div>
        <div class="elemento_interno_dos"></div>

    </div>
    <script>
        "use strict"
        let elementosComunes = document.querySelectorAll("#mi_div div");
        console.log(elementosComunes);
    </script>
</body>

````


El método document.querySelectorAll("#mi_div div") devuelve todos los elementos con la etiqueta div y que están dentro de un elemento con el id mi_div. En este caso devolvería dos nodos

````
        <div class="elemento_interno"></div>
        <div class="elemento_interno_dos"></div>
````

Sobre los cuales se podría actuar. Hay que tener en cuenta que esta devolución es mediante una HTMLCollection, por lo que se realiza mediante las operaciones vistas con arrays

````
        console.log(elementosComunes[0]);
        elementosComunes[0].innerHTML = 'Texto modificado del primero'
````

Si se quiere acceder a todos los elementos mediante una función:
````
        function modificarTodosPorSelector(query) {

            let elementos = document.querySelectorAll(query);
            elementos.forEach(element => {
                console.log(element);
            });
        }
````

Imaginad ahora que se quiere agregar algún elemento a todos los divs que se ha devuelvo en la consulta del selector. Para ello, en cada uno de los elementos de la colección se crea un nuevo nodo y se agrega al existente

````
        function modificarTodosPorSelector(query) {

            let elementos = document.querySelectorAll(query);
            elementos.forEach(element => {
                console.log(element);
                let parrafo = document.createElement('p');
                let texto = document.createTextNode('Ejemplo de modificacion');
                parrafo.appendChild(texto);
                element.appendChild(parrafo);
            });
        }
````

[Volver al inicio](#index)


## Eventos<a name="eventos"></a>

Como se acaba de ver, una de las principales capacidades de JS es la capacidad de asociar una parte gráfica con una parte lógica. Cuando se está realizando una aplicación web, si solo nos centramos en los elementos gráficos (HTML y CSS), su apariencia quedará muy bien pero tendrá un contenido totalmente estático, de forma que ante cualquier cambio será necesario acceder al código y realizar las modificaciones necesarias. Esto es totalmente inviable en proyectos que requieran por ejemplo de una interacción media por parte del usuario . El ejemplo más claro de esto son los formularios o la forma de interactuar ante cualquier evento.

Imaginamos un formulario normal y corriente en HTML

````
    <form id='formulario'>
        <input type="text" inputmode="latin">
        <button type="button">Pulsar para enviar</button>
    </form>
````

En el caso de querer controlar la pulsación del botón directamente, js nos ofrece la posibilidad de asociar una acción a un evento concreto del elemento. Para ello se le pone como atributo al button un onclick, el cual permite asociar una ejecución al elemento que lleva dicho atributo

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id='formulario'>
        <input type="text" inputmode="latin">
        <button type="button" onclick="saludar()" id='boton'>Pulsar para enviar</button>
    </form>

</body>

<script>
    function saludar() {
        console.log('Botón pulsado');
    }
</script>
````


Como se puede ver, al botón se le asocia un evento onclick el cual está igualado a una función que nos hemos creado en el script. De esta forma cuando el botón sea pulsado, se escribirá en consola el texto indicado. Esto es lo que se conoce como eventos en línea. 

El ejemplo anterior se puede modificar de forma que la función pueda admitir por parámetros tantos elementos como sea necesario. Por ejemplo se puede pasar por parámetro el contenido del campo de texto del formulario

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id='formulario'>
        <input type="text" inputmode="latin" id="nombre">
        <button type="button" onclick="saludar(nombre.value)" id="boton">Pulsar para enviar</button>
    </form>

</body>

<script>
    function saludar(nombre) {
        console.log(`El nombre introducido es ${nombre}`);
    }
</script>
````

Se pueden pasar tantos elementos como sean necesarios. En el siguiente ejemplo se capturan y pasan por parámetros tres elementos, necesitando convertir uno de ellos a fecha

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id='formulario'>
        <input type="text" inputmode="latin" id="nombre" placeholder="introduce tu nombre">
        <input type="text" inputmode="latin" id="apellido" placeholder="introduce tu apellido">
        <input type="date" id="fecha">

        <button type="button" onclick="saludar(nombre.value, apellido.value,fecha.value)" id="boton">Pulsar para enviar</button>
    </form>

</body>

<script>
    function saludar(nombre, apellido, fecha) {
        fecha = new Date(fecha);
        fecha.getYear()

        console.log(`Hola ${nombre} ${apellido}, naciste el ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`);
    }
</script>
````


Los eventos más comunes en js son los siguientes:

- onchange: An HTML element has been changed

- onclick: The user clicks an HTML element

- onmouseover: The user moves the mouse over an HTML element

- onmouseout: The user moves the mouse away from an HTML element

- onkeydown: The user pushes a keyboard key

- onload: The browser has finished loading the page

Hay que tener en cuenta que muchas veces los parámetros capturados e introducidos es necesario castearlos a los tipos concretos ya que si no daría fallo. En este ejemplo se simula el funcionamiento de una calculadora de dos operandos

````
<body>
  
    <h1>Formulario de calculo</h1>

    <form id="formulario_calc">
        <input type="number" id="op1" />
        <input type="number" id="op2" />
        <input type="radio" id="suma" name="operacion" value="1" />
        <label for="suma">Suma</label>
        <input type="radio" id="resta" name="operacion" value="2" />
        <label for="resta">Resta</label>
        <input type="radio" id="multiplicacion" name="operacion" value="3" />
        <label for="multiplicacion">Multiplicación</label>
        <input type="radio" id="division" name="operacion" value="4" />
        <label for="division">División</label>
        <button type="button" onclick="realizarCalculo(op1.value, op2.value)" id="boton_calc">
        calcular
      </button>
    </form>
</body>

<script>
    function realizarCalculo(op1, op2) {
        operacion = document.querySelector('input[name="operacion"]:checked').value;
        var resultado;
        switch (parseInt(operacion)) {
            case 1:
                resultado = op1 + op2;
                console.log('entra');
                break;
            case 2:
                resultado = op1 - op2;
                break;
            case 3:
                resultado = op1 * op2;
                break;
            case 4:
                resultado = op1 / op2;
                break;
        }

        console.log(resultado);

        console.log(`El resultado de realizar la suma es ${resultado}`);
    }
</script>
````

En este caso sacará por consola el resultado de la operación del valor introducido en el campo op1 y en el op2, dependiendo de cuál sea la operación. Hay que tener especial cuidado porque los elementos los recoge como texto, por lo que el resultado de sumar 1 y 5 sería 15 ya que los concatena (recordad el tipado dinámico). El resto de operaciones las haría sin problema ya que no puede asignar operaciones sobre cadenas de * / y -. Para solucionar esto basta con forzar a que los parámetros sean números, modificando la función de la siguiente forma

````
<script>
    function realizarCalculo(op1, op2) {
        operacion = document.querySelector('input[name="operacion"]:checked').value;
        var resultado;
        switch (parseInt(operacion)) {
            case 1:
                resultado = op1 + op2;
                console.log('entra');

                break;
            case 2:
                resultado = op1 - op2;
                break;
            case 3:
                resultado = op1 * op2;

                break;
            case 4:
                resultado = op1 / op2;
                break;
        }

        console.log(resultado);

        console.log(`El resultado de realizar la suma es ${resultado}`);
    }
</script>
````

Aunque esto se verá más adelante con detalle, js permite no solo seleccionar los elementos del DOM de una página, sino también modificar su contenido. Por ejemplo mediante métodos como getElementById() se puede utilizar un elemento HTML para mostrar la salida de una función js

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id="formulario_calc">
        <input type="number" id="op1" />
        <input type="number" id="op2" />
        <input type="radio" id="suma" name="operacion" value="1" />
        <label for="suma">Suma</label>
        <input type="radio" id="resta" name="operacion" value="2" />
        <label for="resta">Resta</label>
        <input type="radio" id="multiplicacion" name="operacion" value="3" />
        <label for="multiplicacion">Multiplicación</label>
        <input type="radio" id="division" name="operacion" value="4" />
        <label for="division">División</label>
        <button type="button" onclick="realizarCalculo(op1.value, op2.value)" id="boton_calc">
        calcular
      </button>
    </form>

    <p id="parrafo_destino"></p>

</body>

<script>
    function realizarCalculo(op1, op2) {
        operacion = document.querySelector('input[name="operacion"]:checked').value;
        var resultado;
        switch (parseInt(operacion)) {
            case 1:
                resultado = parseInt(op1) + parseInt(op2);
                console.log('entra');

                break;
            case 2:
                resultado = op1 - op2;
                break;
            case 3:
                resultado = op1 * op2;

                break;
            case 4:
                resultado = op1 / op2;
                break;
        }

        console.log(resultado);

        console.log(`El resultado de realizar la suma es ${resultado}`);
        parrafo = document.getElementById('parrafo_destino').innerHTML = `El resultado de realizar la suma es ${resultado}`;
    }

</script>

````

Como se ha visto en el código HTML se asigna directamente el evento asociado. Esta técnica se llama en linea y en muchas ocasiones puede resultar algo tedioso ya que hay que ir dando elemento a elemento la funcionalidad. Existe otra posibilidad que es la de asociar un escuchador al elemento desde código. Para ello se utilizan los listener

````
<body>

    <p id="parrafo_destino"></p>
    <button id='botonListener' type="button">Evento desde código</button>

</body>
````

Imaginad el HTML anterior donde existe un párrafo con un id determinado y un botón con otro id asociado. Mediante estos elementos se puede encontrar el elemento desde el código js

````
<script>
    let elemento = document.querySelector('#botonListener');
    console.log(elemento);
</script>
````

Una vez encontrado el elemento se puede poner un escuchador con la siguiente sintaxis
````
elemento.addEventListener(evento_escucha, nombre_funcion_asociada,valor_defecto);
````

Con esa sintaxis el elemento concreto se podría a escuchar de forma automática. En el ejemplo del HTML anterior sería de la siguiente forma:

````
    let elemento = document.querySelector('#botonListener');
    console.log(elemento);
    elemento.addEventListener('click', pulsarBoton);

    function pulsarBoton() {
        console.log('pulsación realizada');
        let elementoTexto = document.createTextNode('Texto a poner en el nuevo elemento');
        document.querySelector('#parrafo_destino').appendChild(elementoTexto)
    }
````

Es importante tener en cuenta que del mismo modo que se pueden añadir escuchadores a los elementos , también se pueden eliminar escuchadores indicando el tipo de evento que se quiere borrar y la función que tiene asociada

````
    let elemento = document.querySelector('#botonListener');
    elemento.removeEventListener('click', cambiarColor);
````

Al igual que se ha definido en el ejemplo un evento de tipo click, se pueden asociar tantos como sean necesarios. De la misma forma, no es necesario declarar una función y ponerla en el listener, sino que se puede hacer directamente

````
    elemento.style.fontSize = '10px';
    elemento.addEventListener('mouseover', function() {
        console.log('El ratón está por encima del elemento');
        elemento.style.fontSize = '20px';

    });

    elemento.addEventListener('mouseout', function() {
        elemento.style.fontSize = '10px';
        console.log('El ratón está por fuera del elemento');

    });
````

Una cosa importante cuando se trabaja con eventos es que las funciones que se ejecutan pueden recibir tántos parámetros como sean necesarios tal y como se vió cuando creamos las funciones, pero a la hora de trabajar con eventos lo normal es que reciban un parámetro de tipo event  donde se puede encontrar toda la información del evento asociado. Suponer que se tiene un botón al que se le quiere dar una funcionalidad concreta;

````
    let boton = document
        .querySelector("#boton_evento_funcion")
        .addEventListener("click", function(event) {
            console.log(event);
        });
````

En este caso la función de callback recibe como parámetro un objeto que representa toda la información del evento producido: Si ejecutamos el código se puede ver que se muestran todos los parámetros que el evento produce, pudiendo acceder a cualquiera de ellos

Esta técnica se puede realiza con cualquier elemento. Por ejemplo si se quiere sacar la tecla pulsada en un input se puede utilizar la funcionalidad basada en un evento de tipo keyup

``
    let input = document
        .querySelector("#input_funcion")
        .addEventListener("keyup", function(event) {
                console.log(event);
                console.log(String.fromCharCode(event.KeyCode));}
``


Cuando se trabaja con js el orden de carga es muy importante. Esto quiere decir que si nosotros ejecutamos un script antes de los elementos HTML (en el head por ejemplo) puede que muchos de los elementos que intervienen en el código no se encuentran al no haberse cargado

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        let elemento = document.querySelector('body div[id=container]')
        console.log(elemento);
    </script>

</head>

<body>
    <div id="container">
        <h1>Ejemplo de carga de elementos</h1>
    </div>
</body>
</html>
````

En este ejemplo se busca un elemento cuya etiqueta es div y su id es container. Evidentemente este elemento existe dentro del código HTML pero como el script se está ejecutando antes que los elementos HTML el resultado es nulo. Sin embargo si se cambia el orden, la salida si será correcta

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="container">
        <h1>Ejemplo de carga de elementos</h1>
    </div>
</body>

<script>
    let elemento = document.querySelector('body div[id=container]')
    console.log(elemento);
</script>

</html>
````

Otra posibilidad es utilizar los listen para indica que cuando el navegador termine de realizar la carga del HTML ejecute los elementos que se quieran

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.addEventListener('load', function() {
            console.log('carga terminada');
            let elemento = document.querySelector('body div[id=container]')
            console.log(elemento);
        })
    </script>
</head>

<body>
    <div id="container">
        <h1>Ejemplo de carga de elementos</h1>
    </div>
</body>

</html>
````

Con esto, lo que se consigue es poner un escuchador a la ventana para que cuando termine la carga se ejecute la función indicada la cual realiza la instancia de los elementos. En este caso pese a que el script se ejecuta antes que el código HTML, se indica que parte del mismo se ejecute cuando termine de hacer la carga, por lo que la salida no será nula

[Volver al inicio](#index)

## Timers<a name="timers"></a>


Adicionalmente a todos los eventos, existen una serie de funciones que no son eventos tal cual pero actuándomelas de forma muy parecida. Estas funciones son los llamos Timers. Se dividen en dos:

- setInterval(): permite ejecutar un código cada X milisegundos. Su uso es muy sencillo, simplemente se indica la función que se quiere ejecutar y el tiempo que transcurrirá entre cada ejecución

````
            setInterval(function() {
                console.log('ejecución');
            }, 3000)
````

En este ejemplo se ejecutará el log cada 3 segundos. Imaginad que se quiere poner un reloj con el tiempo. Para ello es tan sencillo como poner un timer cada segundo que modifique el contenido de una parte de la página

````
<body>
    <h1>La hora es:</h1>
    <p id="hora"></p>

    <script>
        window.addEventListener("load", function() {
            let horaTexto = document.querySelector("#hora");
            setInterval(function() {
                console.log("ejecución");
                let fecha = new Date();
                horaTexto.textContent = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
                //console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
            }, 1000);
        });
    </script>
</body>
````

En el ejemplo se crea una función setItnterva, la cual se ejecuta cada segundo y se encarga de sacar la fecha actual siendo esta puesta en el elemento cuyo id es hora. 

Del mismo modo que se puede utilizar la función setInterval tal cual, esta también puede ser asignada a una variable. La funcionalidad adicional que ofrece esto es que el set intervalo puede ser parado en cualquier momento llamando a la función clearInterval. En el ejemplo anterior se añade un botón que para e inicia el reloj:

````
<body>
    <h1>La hora es:</h1>
    <p id="hora"></p>
    <button id="relojButton">Iniciar reloj</button>

    <script>
        let funcionando = false;
        let horaTexto = document.querySelector("#hora");
        let boton = document.querySelector("#relojButton");
        let timerReloj;

        window.addEventListener("load", function() {
            boton.addEventListener("click", function() {
                funcionando ? iniciar(false) : iniciar(true);
            });
        });

        function iniciar(paramentro) {
            if (paramentro) {
                timerReloj = setInterval(function() {
                    console.log("ejecución");
                    let fecha = new Date();
                    horaTexto.textContent = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
                    //console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
                }, 1000);
                boton.textContent = "Parar reloj";
                funcionando = true;
            } else {
                console.log("entra en false");

                clearInterval(timerReloj);
                boton.textContent = "Iniciar reloj";
                funcionando = false;
            }
        }
    </script>
</body>
````


- setTimeout(): permite ejecutar un código pasado X milisengundos. Su funcionalidad es muy parecida a la anterior, con la diferencia que la ejecución solo se produce una vez

[Volver al inicio](#index)

## Acceso al BOM y modificaciones<a name="bom"></a>

Como se ha dicho, el BOM representa el acceso a información por parte del lenguaje de la capa por la cual se accede a la aplicación web: el navegador. Dentro de este BOM existen multitud de componentes, entre los cuales se encuentra:

- window.history: permite acceder a la información del navegador desde el que se visita la web. Sus principales elementos son
1. La propiedad length: que indica cuantas páginas se han visitado
2. Los métodos go, back y forward

````
        console.log(history.length);
        console.log(history.back());
        console.log(history.go(1));
        console.log(history.forward);
````

- window.navigator: permite acceder a información del cliente utilizado para acceder a la web. Alguno de sus métodos más utilizados son:

````
        console.log("appCodeName:", window.navigator.appCodeName);
        console.log("appName:", window.navigator.appName);
        console.log("appVersion:", window.navigator.appVersion);
        console.log("platform:", window.navigator.platform);
        console.log("product:", window.navigator.product);
        console.log("userAgent:", window.navigator.userAgent);
        console.log("javaEnabled:", window.navigator.javaEnabled());
        console.log("language (used):", window.navigator.language);
        console.log("language (support):", window.navigator.languages);
        console.log("conectado a internet?", window.navigator.onLine);
        console.log("mimeTypes:",window.navigator.mimeTypes);
        console.log("Plugins:", navigator.plugins);
````

En el caso de utilizar un navegador en un dispositivo movil, se pueden ejecutar algún método adicional como 

````
        navigator.getBattery()
        navigator.vibrate()
````

- window.screen: permite acceder a información sobre la pantalla del dispositivo 

````
        console.log("availTop:", window.screen.availTop);
        console.log("availLeft:", window.screen.availLeft);
        console.log("availHeight:", window.screen.availHeight);
        console.log("availWidth:", window.screen.availWidth);
        console.log("colorDepth:", window.screen.colorDepth);
        console.log("height:", window.screen.height);
        console.log("left:", window.screen.left);
        console.log("orientation:", window.screen.orientation);
        console.log("pixelDepth:", window.screen.pixelDepth);
        console.log("top:", window.screen.top);
        console.log("width:", window.screen.width);
````

- window.location: permite acceder a información sobre enlaces y/o webs

````
        var enlace = document.createElement("a");
        enlace.href = "https://github.com/DevelopSys";
        console.log("href:", enlace.href);
        console.log("protocol:", enlace.protocol);
        console.log("host:", enlace.host);
        console.log("hostname:", enlace.hostname);
        console.log("port:", enlace.port);
        console.log("pathname:", enlace.pathname);
        console.log("search:", enlace.search);
        console.log("hash:", enlace.hash);
        console.log("origin:", enlace.origin);
````

Adicionalmente, la parte de location también tiene una serie de métodos interesantes como por ejemplo

1. .assign(): permite cargar una nueva página en el navegador
2. .reload(): permite recargar la página actual 
3. .replace(): permite cargar una nueva página en el navegador sustituyendo a la que está en el historial
4. open(): permite abrir una nueva ventana con un parámetro determinado, un modo de apertura y unas propiedades

[Volver al inicio](#index)

## Almacenamiento web<a name="web"></a>

Se trata de una memoria guardada en navegador, la cual será persistente mientras que este esté abierto. Es importante tener en cuenta que este almacenamiento se guarda del lado del cliente, por lo que solo tendrá persistencia en el navegador del cliente que guarda los datos. Una forma sencilla de ver los datos con los que se están trabajando es mediante la consola de Chrome, en la parte de Application.

Para poder trabajar con el almacenamiento en navegador se realiza mediante la librería Storage, sobre la cual existe una variable del mismo tipo llamada localStorage. Los método utilizados sobre esta variable son:

- setItem(): permite guardar un dato dentro del almacenamiento de navegador. El método recibe dos parámetros, la clave asociada al dato guardado (que será la utilizada para recuperarlo) y el dato que se quiere guardar.

````
        localStorage.setItem("titulo", "ejemplo");
````
Desde ese instante se guardará en el almacenamiento del navegador el dato "ejemplo" con la clave asociada "titulo". Es importante saber que todos los datos que se guardan se hacen con formato string, por lo que sería necesario parsearlos para que puedan ser tratados como se quieran. 

````
        localStorage.setItem("titulo", "ejemplo");
        localStorage.setItem("palabra", "ejemplo");
        localStorage.setItem("numero", 22);
        localStorage.setItem("boolean", false);
        let array = ["elemento", 1, false];
        let objeto = {
            nombre: "Borja",
            apellido: "Martín",
            edad: 18
        };
        localStorage.setItem("array", array);
        localStorage.setItem("objeto", objeto);
````

- getItem(): permite recuperar un elemento del almacenamiento del navegador mediante su clave asociada. El método recibe como parámetro la clave del objeto que se quiere recuperar. Siguiente con el ejemplo anterior:

````

        console.log(localStorage.getItem("palabra"));
        console.log(localStorage.getItem("numero"));
        console.log(localStorage.getItem("boolean"));
        console.log(localStorage.getItem("array"));
        console.log(localStorage.getItem("objeto"));
````

De la misma forma que pasaba en el caso anterior, cualquier elemento que se recupera, se hará con el formato string, por lo que será necesario pasarlo al tipo con el que se quiera trabajar

````
        localStorage.setItem("numero1", 1);
        localStorage.setItem("numero2", 2);
        localStorage.setItem("numero3", 3);

        let suma = localStorage.getItem('numero1') + localStorage.getItem('numero2') + localStorage.getItem('numero3');
        console.log(suma);
````

En este caso al recuperar todos los elementos de tipo string la salida por consola será 123. Sin embargo si los datos al mismo tiempo que se recuperan se traducen al tipo concreto la salida sería la correcta

````
        let suma = parseInt(localStorage.getItem('numero1')) + parseInt(localStorage.getItem('numero2')) + parseInt(localStorage.getItem('numero3'));
        console.log(suma);
````
En este caso al utilizar los elementos como number la salida por consola sería la correcta: 6

Cuando se trabaja con elementos de tipo objeto hay que tener en cuenta que se guardan como string hay que recuperarlo como json

````
        let objeto = {
            nombre: "Borja",
            apellido: "Martín",
            edad: 18
        };
        localStorage.setItem("objeto", JSON.stringify(objeto));
        console.log(JSON.parse(localStorage.getItem("objeto")));
````

En este caso se fuerza el almacenamiento del objeto json en string y se recupera de la misma forma. Si se quiere trabajar con cualquier elemento superior como por ejemplo un array sería de la misma forma

- removeItem(): permite eliminar un elemento del sistema de almacenamiento. El método recibe como parámetro la clave del objeto que se quiere eliminar
- clear(): permite borrar todos los elementos del sistema de almacenamiento
- key(): permite recuperar un elemento indicando la posición del mismo. El método recibe como parámetro un number que indica cual es la posición a la que se quiere acceder. 
- length: propiedad que indica el número de entradas que existen en el sistema

No se trata de un método como tal sino de un evento, pero es interesante saber que se puede actuar ante la modificación del sistema de almacenaje mediante el listener storage

````
        window.addEventListener("storage", function() {
            console.log(`El sistema de almacenamiento se ha visto alterado, hay ${localStorage.length} elementos`);
        })
````

[Volver al inicio](#index)
