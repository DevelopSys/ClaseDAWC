## <a name="indice"></a>

1. [Introducción](#id1)

	1. [Qué es JavaScript](#js)
	2. [Instalaciones y configuraciones necesarias](#instalacion)
	3. [Código en linea o embebido](#incrustar)
	4. [Depurar código](consola)

## Que es JavaScript <a name="js"></a>

JavaScript (JS) se trata de un leguaje de programación web orientado a realizar aplicaciones web con características avanzadas como por ejemplo animaciones, dinamismo, contenido multimedia, etc... Se trata de un lenguaje ejecutado en el lado del cliente, ya que se ejecuta directamente en el navegador donde se renderiza la página. Todo código JS está involucrado en un proyecto de tres capas: 

- Capa HTML: representa la UI
- Capa CSS: representa los estilos aplicados a los elementos HTML declarados
- Cala JS: representa la lógica de la aplicación.

Es importante tener en cuenta que no es obligatorio que las tres capas estén presentes

[Volver al inicio](#indice)

## Instalaciones y configuraciones necesarias <a name="instalacion"></a>

Al ser un lenguaje ejecutado directamente en el navegador, no es necesario instalar ninguna librería adicional, compilador o simplemente IDE para poder desarrollar JS. Con un solo notepad se puede crear cualquier funcionalidad de JS. Sin embargo para poder facilitar el trabajo existen numerosos IDEs destinados a desarrollo web como por ejemplo ATOM, Visual Studio, Komodo, etc... incluso los IDEs genéricos como eclipse, IntelliJ o netbeans. Para seguir el curso utilizaremos el IDO Visual Studio ya que se integra muy fácilmente con JS y su "hermano mayor" TypeScript. Para poder descargarlo lo podéis hacer desde el enlace [de la web oficial](https://code.visualstudio.com)

[Volver al inicio](#indice)

## Código embebido o en linea <a name="incrustar"></a>

A la hora de crear código en JS se puede realizar de dos formas: directamente en el fichero html (lo que se conoce como código en linea) o en un fichero .js aparte. La opción a elegir depende de muchos factores, pero sobre todo se realiza por cantidad de código o potencia de la funcionalidad desarrollada. Si se trata de un código muy grande o una funcionalidad core, lo normal es hacerlo en un archivo a parte. Esto facilita cosas como el mantenimiento.

- Código en linea

Para poder incrustar el código JS dentro del mismo fichero que el código HTML simplemente tenemos que englobar todo aquello que queramos crear entre las etiquetas de script

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- que se representarán todos los elementos HTML de la web-->

    <script>
        // código embebido de JS
        // aqui se representará toda la lógica que se quiera aplicar a la web
    </script>
    
</body>
</html>
````

Es muy importante la parte de código donde se incrusta la etiqueta script, ya que muchas cosas del código depende de lo que hay en la parte HTML y si se incrusta mal puede que no estén disponibles

- Código embebido

La otra posibilidad es crear todo el código JS en un archivo separado y apuntar a él mediante el atributo src. Es importante que en la etiqueta script se ponga el tipo text/javasript. Adicionalmente esta forma de incluir código permite organizar las cosas en carpetas. Para el ejemplo se ha credo una carpeta en la raíz con el nombre scrpts, donde se ubicarán todos los archivos .js

El código JS sería

````
// esto es un código de JS incrustado desde un archivo externo
console.log('Esto es un ejemplo de JS');
````

Y el código HTML
````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!-- que se representarán todos los elementos HTML de la web-->

    <script>
        // código embebido de JS
        // aqui se representará toda la lógica que se quiera aplicar a la web
    </script>

    <!-- codigo mimetizado de javascript-->
    <script type="text/javascript" src="./scripts/inicial.js"></script>

</body>

</html>
````

[Volver al inicio](#indice)

## Depurar código <a name="consola"></a>

Al tratarse de un lenguaje que no tiene un compilador adicional sino que es código ejecutado por el navegador, no existe una herramienta integrada en IDE que indique (a priori) de los errores que se comenten mientras se escribe código, sino que estos se muestran en el momento de ejecución. Para detectar estos errores se utilizan herramientas propias de los navegadores, como por ejemplo las herramientas de desarrollador de google chrome. Una vez se accede a estas herramientas se puede ver:
- Los elementos: tanto html como css que forman parte de la página
- La consola: desde donde se pueden manejar los errores y salidas que puede producir la web, muy útil para la depuración de código
- Las conexiones de red: donde se puede ver todo el tráfico de red que genera la aplicación
- Application: donde se pueden ver las sesiones guardadas, almacenamiento web, conexiones a bases de datos, etc...

[Volver al inicio](#indice)