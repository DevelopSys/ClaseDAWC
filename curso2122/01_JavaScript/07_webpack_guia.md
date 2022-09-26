# Guia Webpack

1. Crear un proyecto de tipo npm e introducir la información asociada al proyecto
2. Crear la estructura de carpetas 
    - src
    	- index.hmtl
    	- index.js (o el nombre indicado en el paso 1) 
3. Instalar el módulo de webpack y webpack-cli en las dependencias del proyecto

````
npm install webpack webpack-cli --save-dev;
````

4. Añadir un script en el package.json indicando la ejecución de webpack

````
// package.json en la parte de script incluir el de build
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
  },
````

Desde este moment si se ejecuta el siguiente comando se crea una carpeta dist con el archivo .js compilado

````
npm run build
````

5. Crear un archivo de configuración de webpack para que se puedan identificar cada una de las reglas de ejecución. Para eso se crea un fichero llamado webpack.config.js, el cual tendrá la siguiente estructura

````
// variables: plugins

// exportacion: reglas y configuraciones

module.exports = {
  mode: "development",
  module: {
    rules: [
      {},
      {},
      {},
      {},
    ],
  },
  plugins: [
    
  ],
};

````


6. Modificar el script del package.json para que se ejecute con las opciones de configuración creadas en el punto anteriore

````
"build": "webpack --config webpack.dev.js",

````


7. Permitir que se cargue el html junto en con el .js en la carpeta dist. Para ello hay que instalar los paquetes de carga de html

````
npm install --save-dev html-loader html-webpack-plugin

````

Ademas de la carga de los paquetes, es necesario indicar en el fichero de configuración que el loader y el plugin se encarguen de ello. Para eso se añaden las siguientes lineas dentro de fichero de configuración

````
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attributes: false, minimize: true },
      }
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

Con esta configuración a la hora de crear una compilación se generará automáticamente tanto el .js como el .html

8. En el caso de querer estilos dinámicos se debe instalar el cargador de los styles y de los css. Para ello es necesario instalar los siguientes módulos

````
npm install --save-dev css-loader style-loader   
````

Ademas de la carga de los paquetes, es necesario indicar en el fichero de configuración que el loader y el plugin se encarguen de ello. Para eso se añaden las siguientes lineas dentro de fichero de configuración

````
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attributes: false, minimize: true },
      }, 
    {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
}
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

Con esto se permite que todos los estilos se puedan cargar mediante importaciones en los ficheros, como por ejemplo 

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

Se pueden importar tantos estilos como sean necesarios dentro de los .js.

9. En el caso de querer generar el archivo css genérico para toda la aplicación, es necesario instalar los siguientes módulos

````
npm install --save-dev mini-css-extract-plugin optimize-css-assets-webpack-plugin
````

Ademas de la carga de los paquetes, es necesario indicar en el fichero de configuración que el loader y el plugin se encarguen de ello. Para eso se añaden las siguientes lineas dentro de fichero de configuración

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

Esto me generará de forma automática un archivo .css en la raid del proyecto con los estilos genéricos, además de los importados de forma dinámica en el paso anterior

10. En el caso de que mi web tenga ficheros y/o recursos y estos tengan que estar apuntados, es necesario que cuando se hace una distribución también se copien de forma correcta. Para ello es necesario instalar los siguientes paquetes

````
npm install --save-dev file-loader copy-webpack-plugin
````

Ademas de la carga de los paquetes, es necesario indicar en el fichero de configuración que el loader y el plugin se encarguen de ello. Para eso se añaden las siguientes lineas dentro de fichero de configuración

````
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader", options: { esModule: false } }],
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
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets/" }],
    }),
  ],
};

````

En este caso se le indica que todos los archivos de tipo .png .jpg .svg .gif los procese file-loader 

11. Para que mi aplicación se pueda ejecutar en todos los navegadores (aunque no tenga la funcionalidad disponible dicho navegador) hay que instalar el paquete babel. Para ello es necesario instalar 

````
npm install --save-dev babel-loader @babel/core @babel/preset-env
````

Ademas de la carga de los paquetes, es necesario indicar en el fichero de configuración que el loader y el plugin se encarguen de ello. Para eso se añaden las siguientes lineas dentro de fichero de configuración (solo en el modo producción)

````
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      }

````

 Y es necesario crear el archivo de configuración de babel para que pueda coger las traducciones a compatibilidad. El archivo se llamara .babelrc

````
{
    "presets": ["@babel/preset-env"]
}
````

12. (Opcional) Si cada vez que hagamos una distribución queremos que nuestro html sea distinto, simplemente tenemos que generar una huella para que la anexe a nuestros ficheros de distribución. Para ello en el archivo de las reglas definimos los siguiente:

````

output: {
    filename: "main.[contenthash].js",
}

// en al configuración de los plugins
plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: false,
      filename: "style.[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets/" }],
    }),
  ],

````

