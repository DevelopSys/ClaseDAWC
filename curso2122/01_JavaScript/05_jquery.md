Para descargar e instalar jQuery en nuestro proyecto se puede realizar bien mediante archivo e indexarlo como script o directamente referenciarlo desde la web donde ya está subido, lo que se conoce como minificada. La forma más sencilla es la segunda ya que tan solo se debe incluir en el head de la web la siguiente línea de código:

````
<script   src="https://code.jquery.com/jquery-3.5.1.min.js"   integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="   crossorigin="anonymous"></script>
````

Por lo que el código de la web quedaría de la siguiente forma

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>

<body></body>

</html>
````

Un ejemplo muy claro sobre la diferencia de código entre js y jquery

````
         // con js
         window.onload(function (params) {
            console.log('carga realizada correctamente');
            
        });

         // con jquery
        $(document).ready(function (params) {
            console.log('carga realizada correctamente');
        })
````

Si a esto le metemos la funcionalidad sobre algún elemento como por ejemplo un botón cuya id es botón el ejemplo cobra más sentido aún:

````
        // con js
        let boton = document.querySelector('#boton');
        boton.addEventListener('click', function (params) {
            console.log('botón pulsado');
            
        })

        // con jquery
        let boton = $('#boton')
        boton.click(function (params) {
            console.log('boton pulsado');
            
        });
````

Las funcionalidades básicas de js que hay que conocer son:

- $(document).ready(): Para saber que todo se ha cargado de forma correcta se pude comprobar ejecutando un script muy simple que realiza un log dentro de la consola

````
<script>
    $(document).ready(function() {
        console.log('todo ok');
    });
</script>
````

En código js con jQuery metido podemos agregar toda la funcionalidad que hemos visto en js pero de forma más sencilla. Para poder utilizar los elementos que jQuery nos ofrece simplemente tenemos que poner la palabra jquery o el símbolo $ antes de lo que se quiera llamar:

````
jquery(selector).funcion_o_propiedad;
$(selector).funcion_o_propiedad;
````

- $("selector"): : permite seleccionar un elemento que cumpla con el selector indicado.

````
        // secccion por id
        $('#elemento')
        // seleccion por etiqueta y atributo
        $('a[hfef*=algo]')
````

Sobre cada una de estas funcionalidades se pueden aplicar funciones adicionales que se verán en los siguientes puntos. 

## Selectores

Al igual que en js puro, una de las cosas más potentes de la librería jquery es la capacidad de seleccionar elementos del DOM para poder modificarlos desde código. Para ello se utilizan los selectores. Si recordamos en js puto teníamos la posibilidad de utilizar los métodos document.getElementById(), document.getElementsByName(), document.getElementsByTagName(), document.querySelector() y document.querySelectorAll() entre otros. Si embargo la complejidad de estas operaciones se elimina mucho con la potencia de la librería jquery

- Selector de id: muy parecido al selector de js puro. Para poder utilizar este selector lo único que se necesita es dentro del la llamada al código jQuery poner el símbolo # seguido del nombre del id del elemento al que queremos hacer referencia.

Imaginad el siguiente ejemplo

````
<body>

    <h1 id='titulo'>Primera web con JavaScript y JQuery</h1>
    <p id='p1'>Parrafo uno de la página</p>
    <p id='p2'>Parrafo dos de la página</p>
    <p id='p3'>Parrafo tres de la página</p>
    <script>
        $('#p1')
    </script>
</body>
````

En este caso la llamada jquery hace referncia al elemento cuya id es p1. A partir de aquí se pueden acceder a sus propiedades o funciones para actuar ante cualquier cosas.

````
        // muestra el texto del elemento
        console.log($('#p1').text());
        // añade texto al elemento seleccionado
        $('#p1').append(' texto que se quiere añadir al nodo seleccionado');
````

- Selector de clase: idéntico al anterior, con la única diferencia que se obtienen los elementos que pertenecen a una clase concreta. Lo normal es que varios elementos pertenezcan a la misma clase, por lo que este tipo de selector va a seleccionar varios elementos al mismo tiempo, pudiendo ser accedido por un foreach por ejemplo. 

Siguiente el ejemplo anterior si se le da una misma clase a varios elementos

````
<body>
    <h1 id="titulo">Primera web con JavaScript y JQuery</h1>
    <p id="p1" class="parrafo">Parrafo uno de la página</p>
    <p id="p2">Parrafo dos de la página</p>
    <p id="p3" class="parrafo">Parrafo tres de la página</p>
    <p id="p1">Parrafo uno de la página otra vez</p>
    <script>
        $(document).ready(function() {
            console.log("todo ok");
        });

        let elementosClase = $(".parrafo");
        console.log(elementosClase);
        for (let index = 0; index < elementosClase.length; index++) {
            const element = elementosClase[index];
            console.log(element);
            if (0 % 2 === 0) {
                element.innerHTML = "asdasd";
            } else {
                element.text = "Este parrafo no es múltiplo de dos";
            }
        }
    </script>
</body>

````

En el caso de querer cambiar de golpe a todos los elementos una propiedad no es necesario recorrer la colección obtenida, sino que se podría hacer desde la propia colección

````
        let elementosClase = $(".parrafo");
        elementosClase.text("Texto cambiado conjunto");
        elementosClase.css("font-size", "20px");
````

- Selector de étiqueta: misma funcionalidad que el caso anterior pero encontrando todos aquellos elementos que tengan una etiqueta determinada. Sigue la siguiente estructura

-  Selector de atributo: idéntico al anterior con la diferencia que me permite seleccionar un elemento de HTML que tenga algún elemento puesto con un valor determinado.

Imaginad una lista con diferentes tipos de input donde cada uno de ellos tiene el atributo type es diferente

````
    <ul>
        <label for="opcion1">Opción 1</label><input type="radio" id="opcion1">
        <label for="opcion2">Opción 2</label><input type="checkbox" id="opcion2">
        <label for="opcion3">Opción 3</label><input type="search" id="opcion3">
        <label for="opcion4">Opción 4</label><input type="number" id="opcion4">
    </ul>
````

Si se quieren obtener todas aquellas input de tipo radio, es tan sencillo como utilizar los caracteres [] para indicar el atributo buscado y su valor

````
        $(document).ready(function() {
            console.log("todo ok");
            let elementos = $('[type="radio"]');
            console.log(elementos);
        });
````

Hay que tener en cuenta que esto se puede juntar con el resto de búsquedas.

````
        $(document).ready(function() {
            console.log("todo ok");
            let elementos = $('input #opcion1 [type="radio"]');
            console.log(elementos);
        });
````

Una cosa muy importante a la hora de trabajar con los selectores es entender la mecánica que estos tienen con las jerarquías. Por ejemplo sea la siguiente estructura HTML

````
<body>
    <div>
        <h1>Cabecera de la web dedicada a jquery</h1>
        <p> Parrafo correspondiente al primer dív de la página </p>
    </div>
    <div id="contenido">
        <h2>Lista de webs</h2>

        <p id="links">Las webs de algunos equipos de primera división son:</p>
        <ul>
            <li><a href="https://www.fcbarcelona.es/es/">FC. Barcelona</a></li>
            <li><a href="https://www.realmadrid.com">Real Madrid</a></li>
            <li><a href="https://www.sevillafc.es">Sevilla</a></li>
            <li><a href="https://www.realsociedad.eus">Real Sociedad</a></li>
        </ul>

        <p>Las redes sociales de algunos equipos de primera división son:</p>
        <ul>
            <li>
                <a href="https://twitter.com/FCBarcelona_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://i.pinimg.com/originals/d8/33/c9/d833c9d6f18413f294c9046acbe71abc.png" /><label>Barsa</label></a>
            </li>
            <li>
                <a href="https://twitter.com/FCBarcelona_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://i.pinimg.com/originals/d8/33/c9/d833c9d6f18413f294c9046acbe71abc.png" /><label>Madrid</label></a>
            </li>
            <li>
                <a href="https://twitter.com/FCBarcelona_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://i.pinimg.com/originals/d8/33/c9/d833c9d6f18413f294c9046acbe71abc.png" /><label>Atletico de Madrid</label></a>
            </li>
        </ul>
    </div>
</body>
````

Los siguientes selectores actuarían de la siguiente forma:

````
    // todos los divs, obteniendo 2
    let todosDivs = $('div');
    console.log("Todos los divs son " + todosDivs);

    // todos los párrafos que están dentro de los divs, obteniendo tres
    let parrafosDivs = $('div p');
    console.log("Los párrafos de todos los divs son ")
    console.log(parrafosDivs);

    // todas las listas que están situadas dentro del DOM
    let listas = $('ul')
    console.log("Todas las listas son: ")
    console.log(listas);

    // tas las propiedades del div cuya class es contenido
    let todoContenidoId = $('div#contenido ')
    console.log("Las propiedades del div con id contenido son ");
    console.log(todoContenidoId);

    // tas las propiedades del div cuya class es titulo
    let todoContenidoClass = $('div.titulo ')
    console.log("Las propiedades del div con class titulo son " + todoContenidoClass);
````

Acciones que se pueden realizar sobre elementos capturados mediante jquery

### Operaciones sobre CSS

- css(): se puede modificar una propiedad css indicando el nombre de la propiedad y el valor que se le quiere dar:

````
    $('div.titulo').css('font-size', '50px');
	// se puede hacer de la misma forma guardándolo en una variable
    todoContenidoClass = $('div.titulo ');
    todoContenidoClass.css('font-size', '60px');
````

Es importante tener en cuenta que si el elemento capturado está formado por varios nodos el estilo css se aplicaría a todos los elementos resultantes. De la misma forma se pueden anidar tantos estilos como se quiera:

````
    todoContenidoClass.css('font-size', '60px').css('font-style', 'italic');
````

En el caso de las modificaciones de estilos, existe la posibilidad de modificar algunas características en el mismo momento, sin necesidad de acceder al método css() como son por ejemplo:

````
    todoContenidoClass.height('100px')
    todoContenidoClass.width('100px')
````

También existe la posibilidad de trabajar con clases css creadas en el archivo de estilos y asociarlo en de forma programática. Para ello se utilizan los métodos addClass y removeClass

````
<style>
    .parrafos {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 50px;
        margin: 10px;
    }
</style>

</script>
    "use strict";
    let parrafos = $('p').addClass('parrafos');
<script>
````

Esto se aplicaría a todos los párrafos que están incluidos en la web. Sin embargo, si se quiere modificar solo a uno de ellos ya no se podría utilizar alguno de estos métodos, sino que se tendría que modificar el nombre de la clase como se hizo en js puro

````
parrafos[0].className = 'parrafos'
````

Adicionalmente también se puede obtener información sobre la clase que tiene aplicada, y si tiene una concreta puesta 

````
    // devuleve true después de habérselo aplicado o puesto de inicio
    console.log($('p').first().hasClass('parrafos'));
````


### Operaciones con comunes

- text(): permite acceder y/o modificar el texto de un elemento seleccionado. Para esto, si el método no tiene ningún parámetro devolverá como valor el texto del nodo. En caso contrario pondrá el texto como el parámetro pasado

Sea el siguiente body

````
<body>

    <ul>
        <li><a href="https://www.fcbarcelona.es/es/">FC. Barcelona</a></li>
        <li><a href="https://www.realmadrid.com">Real Madrid</a></li>
        <li><a href="https://www.sevillafc.es">Sevilla</a></li>
        <li><a href="https://www.realsociedad.eus">Real Sociedad</a></li>
    </ul>
</body>
````

Si se aplica el siguiente script se obtendrá como salida el valor de texto del nodo: FC. Barcelona

````
<script>
    $().ready(() => {
        let lista = $("ul li").first();
        console.log(lista.text());
    });
</script>
````

Sin embargo si se pone el siguiente código el primer li de la lista pasará de ser un enlace a ser simplemente el texto indicado en el método

````
<script>
    $().ready(() => {
        let lista = $("ul li").first();
        lista.text('Equipazo');
    });
</script>
````

Si en vez de utilizar el método net se utiliza el append que se verá en el siguiente punto se añadirá al contenido existente

````
lista.append('Equipazo');
````

- attr(): permite acceder y/o modificar un atributo indicado como parámetro. Dado el mismo boy del ejemplo anterior, imaginad que se quieren sacar todos los enlaces ubicados en una lista, y de estos el atributo href

````
        let enlaces = $("ul li a")
        console.log(enlaces);
        console.log(enlaces.attr('href'));
````

En este caso sería del primer enlace encontrado, pero si se quieren obtener los de todos se utiliza un foreach

````
        $.each(enlaces, function(indexInArray, valueOfElement) {
            let link = valueOfElement.href
            console.log(link);
        });
````

Hay que tener en cuenta que el foreach lo que trata son con elementos individuales, por lo que no se puede utilizar el método attr(). Si se quiere hacer es necesario utilizar la palabra reservada this para hacer referencia el objeto con el que se está trabajando

````
        $.each(enlaces, function(indexInArray) {
            let link = $(this).attr('href')
            console.log(link);
        });
````

En el caso de querer cambiar el valor de un atributo se haría igual que con la modificación del css, identificando atributo y valor nuevo que se le quiere dar:

````
        $.each(enlaces, function(indexInArray) {
            $(this).attr('target', '_blank')
        });
````

- html(): permite acceder y/o modificar el html indicado al elemento al que se le aplica. Imaginad el caso de la lista de los links. En el caso de querer añadir un nuevo elemento dentro de la lista sería de la siguiente forma:

````
        $('ul').html('<li><a href="https://www.atleticodemadrid.com">Atlético de Madrid</a></li>')

````

El problema que viene con este uso, es que se sustituiría el contenido completo del HTML, por lo que es posible que sea más interesante utilizar los métodos que se verán a continuación.

````
        $('ul').append('<li><a href="https://www.atleticodemadrid.com">Atlético de Madrid</a></li>')

````

- show() / hide(): permite mostrar u ocultar los elementos indicados del HTML de una web.

### Operaciones y manipulaciones sobre nodos

- contents(): obtiene los párrafos que contengan la palabra indicada como argumento.
 
- not(): obtiene todos los elementos de la página, excepto los que tiene una clase o id indicada

- filter(): obtiene todos los elementos de la página tengan una clase o id igual a indicado

- append() / prepend() : añadir el contenido indicado al principio o al final del contenido del nodo, pero dentro del nodo

````
// como resultado añadiría el nodo indicado antes del párrafo ya existente
$('div#cabecera').prepend('<p>Parrafo añadido</p>)

// como resultado añadiría el nodo indicado detrás del párrafoya existente
$('div#cabecera').append('<p>Parrafo añadido</p>)

// como resultado añadiría el nodo dentro del párrafo que está dentro del div, añadiéndolo al principio del párrafo existente
$('div#cabecera p').prepend('<p>Parrafo añadido</p>)

// como resultado añadiría el nodo dentro del párrafo que está dentro del div, añadiéndolo al final del párrafo existente
$('div#cabecerap').append('<p>Parrafo añadido</p>)

````

- after() y before(): añadir el contenido indicado antes o después de cada uno de los elementos seleccionados, pero fuera del elemento (esta es la diferencia con el elemento anterior)

````
	    // como resultado añadiría el nodo detrás del div seleccionado
        $('div#cabecera').after('<p>Parrafo añadido</p>');
	    // como resultado añadiría el nodo antes del div 
        $('div#cabecera').before('<p>Parrafo añadido</p>');

````

- empty(): vaciar de contenido a un elemento

- remove(): eliminar los elementos seleccionados

- clone(): copiar los nodos seleccionados.

### Trabajo con formularios

Para poder trabajar con formularios y obtener su valor se utiliza el método val() en la gran mayoría de los input. Por ejemplo, sea el siguiente formulario

````
<body>
    <form>
        <input type="text" placeholder="introduce nombre" id="nombre" />
        <input type="text" placeholder="introduce apellido" id="apellido" />
        <input type="number" maxlength="9" placeholder="introduce teléfono" id="telefono" />
        <select aria-placeholder="profesion" id="profesion">
        <option value="autonomo">autónomo</option>
        <option value="asalariado">asalariado</option>
        <option value="en paro">en paro</option>
      </select>

        <div>
            <label>Disponiblidad inmedianta</label>

            <ul id="disponibilidad">
                <input type="radio" value="SI" name="disponiblidad" />Si
                <input type="radio" checked value="NO" name="disponiblidad" />No
            </ul>
        </div>

        <button type="button" id="boton">Enviar datos</button>
    </form>
</body>
````

Para poder obtener el valor de los elementos con la pulsación de un boton (aunque se explicará más adelante)

````
<script>
    $("#nombre").val("ejemplo");

    $(document).ready(function(params) {
        $("#boton").click(capturarElementos);
    });

    function capturarElementos() {
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let telefono = $("#telefono").val();
        let profesion = $("#profesion").val();
        let disponibilidad = $("ul#disponibilidad input[checked]").val();
        console.log(
            `Los datos introducidos son: ${nombre} ${apellido} ${telefono} ${profesion} ${disponibilidad}`
        );
    }
</script>
````

### Serialize


## Eventos

Al igual que en js puro, una de las funcionalidades interesantes a la hora de trabajar con la lógica de la aplicación es la de tener la capacidad de actuar ante determinadas acciones dentro de la página. Para ello como se vio en la parte de js se utilizan los eventos en linea o los listener. Cuando se trabaja con jquery se realiza de forma muy similar, con la diferencia que los eventos en linea no existen como tal, sino que está la posibilidad de asociar un evento a una función o una ejecución. 

Antes de explicar las formas de configurar eventos, es importante conocer cuales son los principales:

- .click(): producido con una pulsación sobre el elemento.
- .dblclick(): producido con una pulsación dobre sobre el elemento.
- .mouseenter(): producido cuando el ratón se sitúa encima del elemento.
- .mouseleave(): producido cuando el ratón sale del elemento.
- .mousedown(): producido cuando se pulsa un botón del ratón encima del elemento.
- .mouseup(): producido cuando se suelta un botón del ratón encima del elemento.
- .mousemove(): producido cuando se mueveel ratón encima del elemento.
- .mouseover(): producido cuando el ratón está encima del elemento.
- .keydown(): producido al pulsar una tecla.
- .keypress(): producido al pulsar una tecla y se mantiene.
- .keyup(): producido al pulsar una tecla y levantarla.
- .focusin(): producido cuando se selecciona un elemento.	
- .focusout(): producido cuando se deselecciona un elemento. 
- .focus(): producido cuando el elemento tiene el foco de la aplicación.

Para poder acceder de forma directa, simplemente es ejecutar el método click, focus, etc del elemento buscado, pasando por parámetros la función que se quiere ejecutar. Esta forma es la que más se asemejaría a la asociación en linea de js puro: 

Imaginad el siguiente body

````
<body>
    <button type="button" id="boton">Pulsar</button>
</body>
````

Se puede configurar el evento para la pulsación simplemente ejecutando 

````
<script>
    $('#boton').click(function() {
        console.log('pulsado');
    })
</script>
````

Otra forma de hacerlo sería vincular un evento de on, indicando el tipo del evento

````
    $("#boton").on("click", function() {
        console.log("pulsado");
    });
````

Con estos dos códigos el elemento cuya clase sea boton quedará asociado al evento de click por lo que durante toda la ejecución realizará las acciones. Además de realizar una asociación de un evento, es también es posible pasar como elementos al objetos algunos datos en formato json, pudiendo utilizarlos

````
$('#boton').on(
    'click', 
    { elemento : 'dato' },  
    function(data) {
        console.log(data.type, data.data);
        // data sería     { elemento : 'dato' }
    }
);
````

En el caso de querer asociar varios eventos al mismo elemento se pueden concatenar de la siguiente forma:

````
$("#boton")
      .click(function () {
        console.log("botón pulsado");
      })
      .dblclick(function () {
        console.log("doble click realizado");
      })
      .focusin(function () {
        console.log("foco dentro");
      });
````

O bien indicando con el método on y expresando los objetos con un json:
````
    $("#boton").on({
        click: function() {
            console.log("pulsado");
        },
        dblclick: function() {
            console.log("doble click");
        },
    });
````

Si en algún momento se quiere quitar esta asociación se ejecuta el método off, indicando como parámetro el evento que se quiere desacoplar

````
    $('#boton').off('click');
````

En el caso de querer dar funcionalidad a un evento solo una vez se utiliza el método one()

````
    $('#boton').one('click', function() {
        console.log('pulsado');
    })
````

Al igual que pasa en js puro los eventos pueden tener parámetros en la función que ejecutan, siendo esto la información del evento

````
    $('#boton').one('click', function(info) {
        console.log(info);
    })
````



## Peticiones AJAX

Si recordamos AJAX era la tecnología que permitía realizar peticiones asíncronas a servidores obteniendo y procesando los resultados sin necesidad de refrescar la página para representar los datos. Al igual que cuando se trabajo con js se utilizará un servicio API Rest de prueba: https://randomuser.me/api/?results=50

La realización de una peticion ajax mediante jquery se realiza mediante el método load(), siendo necesario pasarle como parámetro la url de la petición. 

````
            $('#elementos').load("https://randomuser.me/api/?results=50");

````

Este método devuelve todo el contenido de la petición, sin tratamiento ninguno. Por lo que cargará todo en contenido de la petición en el elemento cuya id sea elementos. En la mayoría de los casos esto no es lo que se necesita, ya que lo que se busca es obtener por ejemplo una respuesta con un objeto json y poder partirla y representarla. Para poder hacer eso se utiliza el método get(), indicando como parámetros la url a consultar, los datos que se pasan a la petición (estos dependen de cada api) u la función de callback que será ejecutada cuando la petición conteste

````
      $.get(
        "https://randomuser.me/api/?results=50",
        {
          page: 1,
        },
        function (respuesta) {
          console.log(respuesta);
        }
      );
````

Por ejemplo si se quiere hacer una petición donde se devulevan 100 usuarios, se realiza a la url base y se indica el numero de elementos como datos pasados:

````
        $.get(
            "https://randomuser.me/api/", {
                results: 100,
            },
            function(respuesta) {
                console.log(respuesta);
            }
        );
````

En el caso de querer sacar información específica de cada uno de los elementos es tan sencilla como recorrer la respuesta (teniendo en cuenta como está construido el json) y acceder a las propiedades que interesen

````
        $.get(
            "https://randomuser.me/api/", {
                results: 100,
            },
            function(respuesta) {
                console.log(respuesta);
                respuesta.results.forEach(element => {
                    console.log(element.email);
                });
            }
        );
````


Si por ejemplo lo que se quiere es representar esa información dentro de un nodo del DOM existente simplemente se tendría que añadir el elemento dentro de un nodo ya creado. Para ello se utilizará el siguiente HTML

````
<body>
    <div id="elementos">
        <ul>

        </ul>

    </div>
</body>
````

Con la petición ajax vista anteriormente se puede recorrer la respuesta y anexar al nodo ul un li con la información deseada

````
<script>
    let elemento;
    $(document).ready(() => {
        let lista = $('#elementos ul');
        $.get(
            "https://randomuser.me/api/", {
                results: 100,
            },
            function(respuesta) {
                console.log(respuesta);
                respuesta.results.forEach(element => {
                    console.log(element.email);
                    lista.append(`<li><img src=${element.picture.thumbnail}> ${element.name.first} ${element.name.last} </li>`);
                });

            }
        );
    });
</script>
````





