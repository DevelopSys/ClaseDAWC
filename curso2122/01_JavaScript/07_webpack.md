Cuando se necesita crear un proyecto grande, lo normal es que tengamos necesidades de archivos externos que deben ser accedidos de forma externa, creación de módulos para que se llamen de forma diferente en la aplicación, utilización de librerías que no pueden ser cargadas desde un script. Para eso es necesario crear un proyecto node, que convierte mi ordenador en servidor local y puede aglutinar tantos módulos como sea necesario. Para eso basta con el la raíz del proyecto poner 

````
npm init
````

Una vez puesto esto se piden datos sobre elementos del propio proyecto y genera un .json con todos los datos del proyecto. Con todo esto el proyecto npm está creado. Ahora el problema viene con la lectura y ejecución de los archivos .js que nos hemos creado hasta este momento. Siempre que hemos trabajado lo hemos hecho con un solo archivo (o más pudiendo compartir variables), pero lo suyo es tener la lógica de negocio dividida en diferentes ficheros, donde cada JS representa una funcionalidad o parte de la lógica. 

Siguiendo con el ejemplo de la persona que teníamos en clases anteriores el siguiente fichero Persona.js representa una clase

````
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get getNombre() {
    return this.nombre;
  }
  get getApellido() {
    return this.apellido;
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido}`);
  }
}

````

Y es cargado desde el html como script para que pueda ser utilizado en cualquiera de los script que vayan por detrás

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./js/Persona.js"></script>
  </body>
</html>
````

En el caso de necesitar otro archivo js que utilice las funcionalidades de una persona sería de la siguiente forma:

1. Creo el fichero .js que utilizará las funcionalidades de persona y lo cargo como script dentro del html

````
let persona = new Persona("Borja", "Martin");
persona.mostrarDatos();
````

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./js/Persona.js"></script>
    <script src="./js/operacione.js"></script>
  </body>
</html>

````

2. Genero tantos archivos js como elementos necesite y los cargo dentro del HTML de la página. 

Esta forma de trabajar es correcta, si bien es bastante poco eficiente para el navegador, ya que tiene que hacer una petición HTTP para cada uno de los archivos que quiera cargar. Lo que realmente es necesario es la creación de un sistema de módulo donde se permita importar y exportar estos archivos JS entre ellos, para que la carga inicial solo se realice con un archivo. Para poder hacer eso se necesita un generador de módulos que realice este trabajo, como por ejemplo WebPack

# Instalación y configuración de WebPack

Para poder instalar webpack es necesario el gestor de paquetes npm, por lo que se ejecuta el siguiente comando:

````
npm install webpack webpack-cli --save-dev
````

Cuando termina la instalación del paquete ya tenemos disponible los módulos necesarios descargados y en el fichero de configuración .json las dependencias descargadas:

````
{
  "name": "incio_modulos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.3.2",
    "webpack-cli": "^4.1.0"
  }
}
````

Por definición, webpack lo que realiza es un empaquetado de todos los ficheros .js que estén por debajo de una carpeta llamada src (por lo tanto es necesario crearla). Para que webpack se pueda ejecutar es necesario crear un script dentro del archivo package.json con la orden 
````
"build": "webpack" 
````
Esto permite que cuando yo esté en la ruta del proyecto y ejecute el comando webpack se "compile todos los JS " y genera un archivo en la ruta dis/index.js con el código de mi aplicación y todas las dependencias del proyecto.

De esta forma yo ya soy capaz de crear ficheros diferentes donde cada uno tenga una lógica completamente distinta y poder utilizarlos en un mismo fichero. Para esto ser realizan los siguientes puntos:

1. Se crea el/los ficheros donde se tiene la lógica de la aplicación, en este caso un simple JS con una función que crea un H1 y se lo añade al body y crea un alert con el nombre de una persona

````
export function realizarSaludo(nombre) {
  let nodo = document.createElement("h1");
  nodo.innerHTML = `Hola ${nombre}`;
  document.body.append(nodo);
  alert(`¿Que tal estás ${nombre}?`);
}

````

De este fichero es muy importante la palabra reservada export, ya que me permite utilizar esta función desde cualquier parte de mí proyecto.

2. Crear un fichero que utilice esta función creada

````
import { realizarSaludo } from "./js/operaciones";
realizarSaludo("Borja");
````

De este fichero es importante ver la importación, donde se indica lo que se quiere importar (con el nombre igual que en el origen) y la ruta de donde lo quiere imp¸ortar.

3. Llamar al paquete webpack para que pueda empaquetar la aplicación con todos los js que están sobre la carpeta src

````
npm run build
````

Tras esto se genera un fichero main.js en la carpeta dist. Lo último a realizar es sustituir el script que carga inicialmente por el generado con webpack

## Configuración webpack

Ya se ha visto algunas de las características que webpack ofrece, pero s ese quieren realizar tareas adicionales es necesario crear configuraciones avanzadas que me permitan sacarle más provecho. Para realizar la configuraciones que vamos a realizar ahora es necesario crear un fichero con el nombre webpack.config.js en la raíz del proyecto, donde iremos incluyendo las siguientes configuraciones:

1. Creación del html junto con el js empaquetado. Para esto es necesario instalar la librería que permite empaquetar los elementos de forma conjunta

````
Npm install --save-dev html-loader html-webpack-plugin
````

2.  Adicionalmente es necesario configurar el archivo de webpack para que sea capaz de interpretar las los elementos que debe coger.

````
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attributes: false },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
````


Estos pasos lo que posibilitan es la creación de forma automática de toda la estructura web de los elementos que se quieren distribuir, tanto el .js como el html con el js ya incrustado
Para poder crear una distribución automática. 

Adicionalmente a estas configuraciones se puede identificar algunos elementos dentro de la compilación que pueden ser interesantes: 

````
options: {minimize: true}
````

Según nosotros hacemos algún cambio, es necesario que se recargue el archivo que se genera con el comando build. De esta forma puede ser bastante pesado tener que ejecutar el comando cada vez que realicemos un cambio. Para ello se puede instalar un servidor web que me actualiza todos los cambios de forma automática, sin necesidad de tener que ejecutar la compilación cada vez que se realiza algo nuevo. Para ello es necesario instalar: 

````
npm install --save-dev webpack-dev-server
````

Para poder ejecutar el servidor instalado simplemente hay que ejecutar el siguiente comando 

````
Webpack-dev-server
````

Para poder meterlo como script, se puede hacer desde el package.json incluyendo el script start

````
"Start": "Webpack-dev-server --open"
````

En el caso de utilizar la version de webpack-cli 4 o superior, es necesario instalar otro servidor ya que el original de webpack ya no funciona. Para ello es necesario instalar el siguiente paquete:

````
npm install web pack serve --save-dev 
````

Adicionalmente es necesario modificar el script start para que ejecute el nuevo servidor montado

````
"start": "webpack serve"
````


En el momento que ejecutamos el comando npm start, se levantaría el servidor y puedo empezar a trabajar y actualizar de forma automática.

### Configurar estilos dinámicos 

El siguiente paso sería cargar de forma automática el archivo de estilos, para no tener que ir al html generado en la compilación y cambiar el fichero que carga. Adicionalmente, lo normal es querer que cada uno de los archivos js carga un css diferente, ya que los elementos html que va a utilizar no necesita todos las clases, id, etc (igual que lo hacíamos an Angular). Para ello es importante crear una estructura de estilos consistente, donde exista un estilo general llamado style.css localizado en la raiz del proyecto y estilos secundarios para cada uno de los js que están incluidos dentro del proyecto. De esta forma el estilo quedará cargado en el html cuando el ficheros.js sea llamado. Para poder hacer esto es necesario cargar los siguientes módulos:

````
npm install --save-dev css-loader style-loader   
````

Una vez hecho esto es necesario indicarle a webpack que cargue los estilos cuando estos sean llamados, por lo que hay que configurar la siguiente regla:

````
{
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
}
````

Esta regla le indica que para todos los archivos con el nombre .css utilice los cargadores que hemos instalado. Por último, es necesario cargar el css en el componente que queramos.Para ello simplemente importamos el fichero en la parte superior:

````
// persona.css
body{
    background-color: forestgreen;
}
h1 {
    color: firebrick;
}
````


````
// persona.js
import "../css/personas.css";

export class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  mostrarDatos() {
    console.log(this.nombre + this.apellido);
  }
}

````
 
````
// index.js

import { Persona } from "./js/persona";

function saludar() {
  console.log("hola esto es un ejemplo");
}

saludar();
let a = new Persona("Borja", "Martin");
a.mostrarDatos();

````

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./index.js"></script>
  </head>
  <body>
    <h1>Aplicación inicial de WebPack</h1>
  </body>
</html>

````

Es importante ver que los estilos no han sido cargados en html, simplemente al ser llamados desde el .js secundario se cargarán para toda la página. De esta forma los estilos son cargados para cada uno de los componentes llamados, pero también es necesario tener un css genérico que se aplican para todos los componentes. Para ello tenemos que hacer los siguientes pasos:

1. Crear el archivo de estilos generales. En el ejemplo utilizaremos el nombre style.css colocado en la raíz del proyecto

````
body{
 background-color: aqua;   
}
````

Este fichero contendrá todas las reglas de los elementos genéricos, que se aplicarán a todos los elementos de inicio

2. Al igual que se ha hecho antes, es necesario importar este fichero dentro del index.js

````
import "./style.css";
import { Persona } from "./js/persona";

function saludar() {
  console.log("hola esto es un ejemplo");
}

saludar();
let a = new Persona("Borja", "Martin");
a.mostrarDatos();
````

Inicialmente es necesario tener en cuenta el orden de las importaciones, ya que si hay reglas que se pisan se utilizará la ultima imporada. En este caso el css que se importa desde el archivo persona.js. Tal cual esto el css genérico ya funciona pero cada vez que se genera una distribución se necesita copiarlo en la carpeta, apuntarlo en el html, etc... Para hacer esto automático realizamos los siguientes pasos:

3. Instalamos los plugins que permiten la generación automática de los archivos css

````
npm install --save-dev mini-css-extract-plugin
npm install --save-dev optimize-css-assets-webpack-plugin
````

Al ser ambos plugins tienen una configuración diferente. Lo primero que hay que configurar son las reglas que se van a aplicar

````
// es necesario const MiniCssExtractPlugin = require("mini-css-extract-plugin");


{
        test: /\.css$/,
        exclude: /style\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /style\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
},
````

Con esta regla lo que se indica es que todos los css los carga con los loader que instalamos anteriormente excepto el que tiene como nombre style, y este fichero no carga con el MiniCssExtractPlugin.loader. Adicionalmente en la parte inferior del fichero de configuración hay que indicar el funcionamiento del plugin

````
new MiniCssExtractPlugin({
      ignoreOrder: false,
      filename: "style.css",
    }),
````

Donde se le indica que obvie warnings y que genere un archivo css con el nombre style.css

Adicionalmente para que este css esté minimizado cuando se está en modo production se configura el segundo módulo instalado

````
// es necesario const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin()],
}
````

El archivo de configuración completo quedaría de la siguiente forma:

````
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "development",
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /style\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /style\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attributes: false, minimize: true },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: false,
      filename: "style.css",
    }),
  ],
};
````


### Configurar recursos de la web

Por último, en cuanto a recursos que van a ser necesarios por nuestra aplicación, lo normal es que nuestra web cuente con recursos en formato imagen (por ejemplo) que van a ser llamadas tanto desde el css como desde el html directamente, las cuales necesitamos que sean generadas cuando la aplicación sea "compilada". Para ello es necesario instalar y configurar una serie de cargadores. Para el ejemplo vamos a crear una carpeta dentro de src llamada assets y dentro pegamos un par de imágenes que son llamadas en un img dentro del código. Para ello: 

1. Creamos la estructura de recursos, src --> assets --> images
2. Con cualquier imagen, la reverenciamos dentro del html

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./index.js"></script>
  </head>
  <body>
    <h1>Aplicación inicial de WebPack</h1>
    <img src="./assets/images/wp.png" />
  </body>
</html>

````

3. Para que la imagen pueda ser cargada es necesario un módulo para la automatización de la tarea, por lo que es necesario instalar lo siguiente

````
npm install --save-dev file-loader
npm install --save-dev copy-webpack-plugin
````

El primero hace la carga de los ficheros y el segundo copia todos los elementos para que se generen en la distribución cuando hacemos un npm run build. Para poder utilizar ambos es necesario configurarlos dentro del archivo de configuración

````
{
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader", options: { esModule: false } }],
},
````

Esta regla indica que para todos los ficheros de los tipos indicados se utilice el módulo de carga de archivos

````
// es necesario const CopyPlugin = require("copy-webpack-plugin");
new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets/" }],
}),
````
Esta configuración de plugin indica de donde tiene que coger los ficheros y donde los tiene que dejar cuando se haga una distribución.

A partir de este momento nuestro código es totalmente funcional y los archivos de distribución están correctamente generados

### Configurar cache

Uno de "errores" comunes cuando se hace un despliegue web es no tener en cuenta las resumidas de los .js que tienen el mismo nombre y que pueden estar cacheados por parte de los clientes. En realidad no se trata de un error como tal, simplemente el navegador cliente tendría que eliminar la página de cache y listo. Sin embargo lo que se puede hacer es crear una clave hash cada vez que se hace una compilación, tanto en el index.js como en el css. Para ello tan solo hay que poner contenthash en cada uno de los archivos de salida

````
 output: {
    filename: "main.[contenthash].js",
  },
````


````
 new MiniCssExtractPlugin({
      ignoreOrder: false,
      filename: "style.[contenthash].css",
    })
````

Estas dos configuraciones tan solo deberían ser aplicadas en el modo de producción, no es necesario incluirlas en el modo de desarrollo, por lo que habría que cambiar la parte de mode

````
 mode: "production"
````
