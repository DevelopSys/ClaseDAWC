Instalación de 

Librería js para la creación de aplicaciones web en el lado del cliente. Una de las cosas buenas que tiene React, además de su ligereza, es permitir crear componentes que pueden ser reutilizares. Esto es bastante potente ya que en la gran mayoría de proyectos nos podemos encontrar con elementos que en su base son los mismos, tan solo se modifican parte de la información mostrada. 

Para poder empezar con React, se puede crear a mano cada uno de los ficheros configurando elementos externos como webpack y babel. Sin embargo se puede utilizar un modulo llamado create-react-app

````
npm install create-react-app
````

Hay que tener en cuenta que al utilizar npm se necesita tener instalado nodejs para poder trabajar.

A partir de este momento existe la posibilidad de crear una aplicación React con todos los elementos y en un entorno completo. Para poder crear la aplicación se utiliza el siguiente comando

````
create-react-app nombre aplicacion 
````

Una vez creada la aplicación se puede ejecutar lanzando los scripts 

````
npm start
````

Este script creará el servidor web que aloja la aplicación, pudiendo probarlo desde localhost:3000.


## Ficheros importantes de un proyecto React

- index.html: donde se cargarán todos los componentes de react.

- index.js: fichero que inicia la aplicación. Consta de un componente, el cual indica que se debe renderizar el elemento App dentro del elemento cuyo id es root

````
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

````

La funcion render recibe dos parámetros, el componente que se quiere renderizar y un selector que encontré el elemento del index.html donde se mostrará. Lo normal y corriente es que desde este componente App es donde se cargan el resto de componentes de la aplicación.

- App.js: fichero que define el componente inicialmente creado. Su contenido es una función constructora que devuelve el html que se renderizará cuando el componente sea llamado (JSX)

````
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

````


- App.css: La hoja de estilos que se le aplicará al componente App.js en su definición de JSX

````
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

````

- registerServiceWorker: servicio (ejecutado en segundo plano) que permite la ejecución más rápida de la aplicación

## Renderizar un componente mediante JSX. 

Para poder hacer la renderización de un elemento, ya hemos visto que se utiliza el fichero App.js en el cual dentro de la función App se retornaba el "HTML" que era representado dentro del navegador. En realidad este código no es HTML como tal sino que se trata de JSX.

````
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const persona = {
    nombre: "Borja",
    trabajo: "Profesor",
    asignatura: "Programación",
  };
  return (
    <div>
      <h1>Proyecto de React realizado por {persona.nombre}</h1>
      <p>
        Proyecto realizado por {persona.nombre}, cuyo trabajo es de{" "}
        {persona.trabajo} en {persona.asignatura}
      </p>
    </div>
  );
}

export default App;

````

En este caso, al ser JSX se puede utilizar una interpolación entre todos los elementos que están disponibles dentro de la clase y el código a renderizar. Para ello se utiliza {} y el elemento asociado. Es importante tener en cuenta que al tener que retornar una cosa no se pueden poner todos los nodos que se quieran, sino que es necesario englobarlos todos en un elemento común (como por ejemplo un div).

## Crear componentes en React

Los componentes son elementos reutilizabas de la interfaz que son renderizádos desde el navegador. Estos pueden estar representados en su creación desde una función o desde una clase. Inicialmente estos componentes son estancos, es decir que no se comunican con nadie. Sin embargo mediante Props se pueden intercambiar datos entre ellos de forma sencilla, teniendo en cuenta que esta relación de datos siempre será desde el componente padre hasta el componente hijo.

Como se ha comentado, un componente se puede crear como una función o como una clase. Ambas posibilidades son válidas, teniendo en cuenta que no todas las opciones serán válidas para todos los casos. La diferencia entre ambas formas es

````
// mediante clase

import React, { Component } from 'react';

class MiComponente extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MiComponente;
````

````
// mediante function

import React from 'react'

export default function MiComponente() {
    return (
        <div>
            
        </div>
    )
}
````

Imaginad que tenemos el siguiente componente llamado MiComponente

````
 import React, { Component } from "react";

export default class MiComponente extends Component {
  render() {
    return (
      <div>
        <h1>Componente creado manualmente</h1>
      </div>
    );
  }
}
````

Tan solo se muestra un texto en un h1 que dice Componente creado manualmente. En el caso de querer mostrar este componente dentro de otro, lo que habría que hacer es dentro del código JSX del componente donde se quiere mostrar, incluir la etiqueta del componente hijo

````
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimerComponente from "./components/MiComponente";

function App() {
  return (
    <div>
      <h1>Los componentes de la aplicación serán mostrados a continuación</h1>
      <PrimerComponente></PrimerComponente>;
    </div>
  );
}

export default App;

````

Para poder hacer esto, se importado primero el componente y luego llamado desde return del código JSX. En este caso se ha creado un componente de tipo clase. En el caso de crear un componente de tipo function se podría utilizar el mismo ejemplo. La diferencia básica entre utilizar un tipo de componente u otro es que el definido mediante clases se puede utilizar con los hooks del ciclo de vida (entre otras cosas)

Para poder ver esto se realiza un ejemplo con tres componentes: header, un footer y un contenido. Los dos primeros serán componentes de tipo function y el último será componente de tipo clase. 


Cada uno de los componentes tendrá el siguiente código:

````
// componente footer.js
import React from "react";

export default function footer() {
  return (
    <footer>
      Proyecto realizado por <strong>Borja Martín</strong> en 2020
    </footer>
  );
}

````

````
// componente header.js
import React from "react";

export default function header() {
  return (
    <div>
      <header>
        <h1>Ejemplo componente REACT</h1>
      </header>
    </div>
  );
}

````


````
// componente contenido.js
import React, { Component } from "react";

export class contenido extends Component {
  render() {
    return (
      <div>
        <p>Este será el contenido del proyecto</p>
      </div>
    );
  }
}

export default contenido;

````

Todos estos componentes se juntan dentro del fichero App.js

````
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Contenido from "./components/contenido";

function App() {
  return (
    <div>
      <Header></Header>
      <Contenido></Contenido>
      <Footer></Footer>
    </div>
  );
}

export default App;

````

Una vez está esto terminado, el siguiente paso será crear un componente llamado proyecto, que será mostrado dentro de contenido. La finalidad es que el componente proyecto se reutilizado tantas veces como sea necesario  (tantos elementos de tipo proyecto como tenga la base de datos por ejemplo)

Para eso, se crea el componente:

````
// proyecto.js
import React, { Component, Fragment } from "react";

export default class proyecto extends Component {
  render() {
    return (
      <Fragment>
        <p>Algo que pintar</p>
      </Fragment>
    );
  }
}

````

Es importante conocer la posibilidad de utilizar la etiqueta Fragement en vez de la etiqueta div. Hay que recordad que el método render tan solo puede retornar un hijo, por lo que es necesario englobarlo en una etiqueta. Para el ejemplo simplemente se muestra un párrafo dentro del componente. 

El siguiente paso será modificar el componente contenido.js ya que este mostrará tantos proyectos como sean necesarios. 

````
import React, { Component } from "react";
import Proyecto from "./proyecto";

class Contenido extends Component {
  state = {
    productos: [
      { id: 1, name: "Proyecto REACT", presupesto: 3000 },
      { id: 2, name: "Proyecto ANGULAR", presupesto: 4000 },
      { id: 3, name: "Proyecto JAVA", presupesto: 5000 },
      { id: 4, name: "Proyecto PHP", presupesto: 6000 },
    ],
  };
  render() {
    const proyectos = this.state.productos;
    return (
      <div>
        <h2>
          Los proyectos que se han manejado durante el curso son los siguientes:
        </h2>
        <Proyecto/>
        <Proyecto/>
        <Proyecto/>
        <Proyecto/>
        <Proyecto/>
        <Proyecto/>
      </div>
    );
  }
}

export default Contenido;

````


En este caso se pintarán 6 componentes de tipo proyecto dentro del componente contenido.

Con esto se pintarían tres componentes donde de momento cada zona es totalmente independiente y otro adicional que es mostrado dentro de contendido. El siguiente paso es comunicar cada uno de los elementos entre sí para que se puedan pasar información entre ellos, siempre teniendo en cuanta que la comunicación se produce de padre a hijo, nunca al contrario.

## State y Props

Cuando estamos trabajando con los componentes de React, lo normal es que estos tengan datos que proviene de otros componentes o que están guardados dentro del propio componente. Para estos casos se utilizan los objetos Prop y State. Hay que tener cuidado porque se puede confundir el uso de estos dos elementos con el de una variable o constante. State puede hacer algo similar a lo que hace una variable, con la diferencia que cuando más adelante se vea el ciclo de vida de los componentes, este se puede asociar al state o props de un componente.

### State

Para poder utilizar la variable state dentro de un componente, simplemente es necesario llamarla. Por defecto esta variable ya existe y hay que tener en cuenta que debe retornar un objeto, por lo que la estructura interna (JSON) del objeto puede ser la que se necesite.

Para poder utilizarlo se implementa el siguiente código

1. Definir el valor de la variable state, donde solo se tiene un objeto como valor (el cual puede tener a su vez muchos elementos dentro)

````
import React, { Component, Fragment } from "react";

export default class proyecto extends Component {
  constructor(props) {
    super();
    this.state = { estado1: "valor", estado2: 3, estado3: false };
  }

  render() {
    return (
      <Fragment>
        <p>Algo que pintar</p>
      </Fragment>
    );
  }
}
````

2. En el momento que se quiera utilizar este state dentro del método reader se accede como cualquier objeto de la clase

````
import React, { Component, Fragment } from "react";

export default class proyecto extends Component {
  constructor(props) {
    super(props);
    this.state = { estado1: "valor", estado2: 3, estado3: false };
  }

  render() {
    return (
      <Fragment>
        <p>Algo que pintar, cuyo estado1 es {this.state.estado1}</p>
      </Fragment>
    );
  }
}
````

Más adelante veremos como poder relacionar estos estados con el ciclo de vida del componente

### Props

Las proas son elementos que pertenecen a las propiedades de los componentes. Gracias a ellas se pueden comunicar varios elementos entre sí de forma sencilla.

Para poder hacer esto de la formas más básica se siguen los siguientes pasos:

1. La variable props ya está definida dentro de la clase del componente, por lo que se puede acceder a ella mediante ```` this.props ```` 

````
// componenteComunicar.js
import React, { Component } from "react";

export default class componenteComunicar extends Component {
  render() {
    return (
      <div>
        <p>
          En esta parte se renderizará un elemento que ha sido pasado por prop{" "}
          {this.props.elemento}
        </p>
      </div>
    );
  }
}
````
En este caso se ha utilizado la variable dentro del párrafo y se ha accedido a una propiedad cuyo nombre es elemento

2.  En aquellos sitios donde el componente es utilizado, se añade una propiedad con el mismo nombre que el accedido desde el componente para poder asociarlos. 

````
import React from "react";
import Comunicacion from "./components/componenteComunicar";

function App() {
  return (
    <div>
      <Comunicacion elemento="ejemplo"></Comunicacion>
    </div>
  );
}

export default App;

````

De esta forma se ha realizado una comunicación entre componentes. Es importante tener en cuenta que esta comunicación tan solo se puede dar en sentido descendente (es decir de padres a hijos)

En el caso de utilizar un componente como función se debe declarar como parámetro el elemento prop, para así poder utilizarlo más adelante.

````
import React from "react";

export default function header(props) {
  return (
    <div>
      <header>
        <h1>{props.titulo} React para DAW</h1>
      </header>
    </div>
  );
}

````
