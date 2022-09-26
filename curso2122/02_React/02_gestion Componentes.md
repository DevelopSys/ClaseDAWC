## Componentes

Ya se ha visto como poder crear, llamar, comunicar y reutilizar componentes entre sí . En este tema se va a hacer hincapié en el funcionamiento de ellos.

### Importaciones - Exportaciones

Las importaciones y exportaciones son palabras reservadas totalmente necesarias para poder trabajar en un proyecto con elementos elementos diferentes. Dentro del proyecto React nos encontramos con dos posibles exportaciones: nombrada y por defecto. 

#### Export por defecto
====
En el caso de utilizar un export por defecto se puede importar dicho componente con cualquier nombre. En React, todos los componentes tienen una exportación por defecto

Cuando se exporta tanto una variable como una clase se puede hacer directamente o a posteriori

````
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

Ó

````
import React, { Component } from 'react';

export default class MiComponente extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

````

En ambos casos, cuando el componente sea importado en el sitio donde se quiera utilizar, no es necesario hacerlo con el mismo nombre de la exportación

````
import React from "react";
import "./App.css";
import MiComponenteNombre from "./components/MiComponente";

function App() {
  return (
    <div>
      <MiComponenteNombre></MiComponenteNombre>
    </div>
  );
}

export default App;

````


#### Export con nombrado.

En el caso de poner un export con nombrado, en el caso de querer importar la variable o  clase que se ha exportado, esta tendrá que tener el mismo nombre con el que ha sido declarada.

## Tipos de componentes

## Ciclos de Vida de un componente 

Al igual que en cualquier elemento de programación, los métodos del ciclo de vida de un componente son métodos que se ejecutan en un momento. Como ya se ha visto, existe la posibilidad de crear componentes de forma funcional o forma de clase. Inicialmente la diferencia no es ninguna, pero cuando se quieren utilizar elementos avanzados como por ejemplo el ciclo de vida es necesario utilizar un componente por clase

Otra cosa que hay que tener en cuenta es que los métodos del ciclo de vida se ejecutan automáticamente, sin necesidad de ser llamadas y se continúan ejecutando hasta que el componente se elimina o se destruye.

- componnentDidMount():  ejecutado cuando el componente se ha mostrado. Se pude asociar al $(document).ready de JQuery.

````
import React, { Component } from "react";

export default class Incial extends Component {
  componentDidMount() {
    console.log("Componente listo para ser visible");
  }

  render() {
    return <div></div>;
  }
}

````

Se trata de componente más utilizado ya que gran parte de las inicializaciones de las variables, llamadas a API, etc... se realizarán en el momento de mostrar el componente, no cuando se construye. 

- componentWillUnmount(): ejecutado cuando se ha llamado al constructor pero el componente aún no se muestra por algún motivo. Para

````
import React, { Component } from "react";

export default class Incial extends Component {

  componentWillUnmount() {
    console.log("El componente será mostrado");
  }

  render() {
    return <div></div>;
  }
}

````

En este caso, este método del ciclo de vida puede interesar cuando se quiere ejecutar algo mientras el componente no sea mostrado

- componenteDidUpdate(): ejecutado cuando alguna parte del componente se ha actualizado. Hay que tener en cuenta que esto también se ejecutará cuando alguno de los componentes hijos se haya actualizado

````
  componentDidUpdate(){
    console.log("El componene ha actualizado alguna parte");
  }
````


- componentWillUnmount(): ejecutado cuando un componente por algún motivo va a desaparecer o va a ser remplazado.

````
 componentWillUnmount() {
    console.log("El componente se va a quitar de la pantalla");
  }
````

Este método es muy útil cuando se quiere ejecutar algo antes de que el componente desaparezca, por ejemplo para hacer un unsuscribe de un servicio.


El orden en el que se ejecutan los métodos del ciclo de visa son los siguientes:

````
- constructor
- componentWillMount (or UNSAFE_componentWillMount)
- componentWillUpdate (or UNSAFE_componentWillUpdate)
- render
- componentDidMount
````

