Para poder trabajar con rutas, React incoporra una librería que permite el trabajo de manera sencilla. Con dicha librería, la gestion de componentes se puede hacer de forma individualizada pero siempre renderizándose desde el mismo punto. Para poder seguir la clase, vamos a crear una aplicación llamada rutas

Otra tarea que necesitamos realizar antes de comenzar, es instalar la librería que gestiona las rutas. Para ello, dentro del proyecto ejecutamos el siguiente comando npm

```node
npm install react-router-dom
```

# Configurando las rutas

El primer punto para poder comprobar la funcionalidad de la librería, es la de crear todos aquellos componentes que queremos que se puedan mostrar. PAra ello vamos a crear un par de componentes a modo prueba

```javascript
// componente Filter
import React from "react";

const Filter = () => {
  return <div>Filter</div>;
};

export default Filter;
```

```javascript
// componente Home
import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;
```

Una vez creados estos componentes, el siguiente paso es la de configurar las rutas. Para ello, vamos a utilizar un nodo dentro del componente principal App llamado <Router> desde la libreria de react-router-dom, para lo cual primero es necesario importar el componente BrowserRouter

```javascript
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return <Router></Router>;
}

export default App;
```

Este nodo permitirá renderizar tantos componentes como sean necesarios. Para que esto pueda suceder, hay que declarar tantas Route como sean necesarias teniendo en cuenta que para ello se deben juntar dentro del nodo Routes.

```javascript
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;
```

Antes de empezar a definir rutas dentro del nodo <Routes>, vamos a explicar las características de este componente

- Path: la ruta donde debemos renderizar nuestro componente podemos pasar un string o un array de string.
- Exact: Indica que se muestra el componente cuando la ruta sea exacta.
- Strict: Indica que se muestra el componente si al final de la ruta tiene un barra.
- Sensitive: Indica que se diferencia entre mayúsculas y minúsculas.
- Element: Indica cual es el componentes que se va a mostrar.
- Render: Indica que función es la que se va a ejecutar cuando se muestre el componente.

Dentro de todas estas características las más utiles son las de path y la de element

```javascript
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filter from "./pages/Filter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

A partir de este momento, si entramos en la direccion de http://localhost:3000 se mostrará el componente home mientras que si entramos en la dirección http://localhost:3000/filter se mostrará el componente Filter

## Creando una pagina 404

Otra de las opciones que da la gestión de las rutas es la de realizar redirecciones siempre y cuando no coincida el path de búsqueda. Para ello dentro de la ruta se indica un path de \* poniendo dicha ruta la última, de modo que si no se encuentra ninguna de las anteriores se resuelve esta.

```javascript
// Err404.js
import React from "react";

const Err404 = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <button class="btn btn-primary">Go Home</button>
      </div>
    </div>
  );
};

export default Err404;


export default Err404;

// App.js
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </Router>
  );
}
```

## Navegar sobre las rutas

Para poder navegar entre rutas, se utiliza el atributo Link. Para poder probarlo, vamos a incorporar una barra de navegación dentro de un componente y este va a ser llamado el fichero App.js incluido dentro del nodo router para que pueda tener acceso a las rutas

```javascript
// Nav.js

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                Home
            </li>
            <li class="nav-item">
                Filter
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


// App.js
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filter from "./pages/Filter";
import Nav from "./components/Nav";
import Err404 from "./pages/Err404";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
        <Route path="*" element={<Err404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

En el caso de querer hacer una redirección a un path concreto, se puede utilizar el nodo Navigate de la siguiente forma

```javascript
<Route path="*" element={<Navigate replace to="/" />}></Route>
```

El siguiente paso es utilizar el nodo Link para poder referenciar cual es el elemento sobre el cual se quiere navegar. Para hacer esto, se va a crear un componente nuevo que contenga la barra de navegación.

```javascript
// Nav.js

<li class="nav-item">
  <Link class="nav-link" aria-current="page" to="/">Home</Link>
</li>
<li class="nav-item">
  <Link class="nav-link" to="/filter">Filter</Link>
</li>
```

El atributo to indica el path al cual se quiere navegar. Una vez configurado esto, al pulsar en cada uno de los elementos se mostrará el componente que se indica.

Además de navegar mediante el nodo link, también es posible hacerlo mediante el hook navigate. Para ello es necesario declarar una variable asociada al hook y utilizarla pasando como parámetros el path al que se quiera navegar.

```javascript
const navigate = useNavigate();
// para más adelante utilizarlo donde se quiera navegar programaticamente
<button onClick={() => navigate("/")}>Vovler atrás</button>;
```

Para representarlo dentro de nuestro ejemplo, en la página del error 404 se ha dejado un botón que al pulsarlo debería de volver al componente inicial, por lo que podríamos gestionar la pulsación del botón y ejecutar el método de navegación

```javascript
const Err404 = () => {
  const navigate = useNavigate();
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <button class="btn btn-primary" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};
export default Err404;
```

## Paso de parámetros por ruta

En el caso de querer pasar parámetros a una ruta es necesario indicar que dicha ruta va a esperar. Para ello lo primero que debemos hacer es declarar una ruta que admita. Un ejemplo sería la siguiente:

```javascript
<Route path="/dash/:id" element={<Dashboard />} />
```

Con esto, lo que le indicamos al Router es que la ruta dash tendrá la obligacion de construirse de la siguiente forma: http://localhost/dash/1 por ejemplo, siendo 1 el parámetro que se quiere pasar.

Una vez el parámetro es pasado, el siguiente paso es obtenerlo en el componente destino. Para ello hay que diferenciar el tipo de parámetro que se obtiene

### Parámetros por url

En el caso de querer obtener un parámetro que ha sido pasado por url como en el ejemplo anterior, se utiliza el hook useParam(). Dicho hook obtiene un json con todos los parémtros que han sido pasados por url, por lo que en el componente destino tendríamos que capturarlos de la siguiente forma:

```javascript
let { id } = useParams();
```

En este caso, el parametro va asociado a un tag que es el id, tal y como hemos puesto en el ejemplo anterior. De esta forma queda guardado en la variable id y por lo tanto utilizable en cualquier parte del componente.

Para poder implementar este ejemplo, vamos a crear un archivo llamado productos.js que tenga un array de productos y un par de funciones exportadas. Los productos los podemos copiar del siguiente enlace: https://fakestoreapi.com/products

A modo de ejemplo, este sería el fichero de los productos con solo un elemento:

```javascript
let productos = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

export function getAllProducts() {
  return productos;
}

export function getProductById(id) {
  return productos.find((e) => e.id == id);
}
```

El siguiente paso es hacer que en el componente home se pinten todos los productos que están en el array, Para ello basta con importar la función y mapear el el array obtenido dentro del retorno del componente

```javascript
import React from "react";
import { getAllProducts } from "../services/products";

const Home = () => {
  let productos = getAllProducts();

  return (
    <div className="container">
      <div class="row">
        {productos.map((e) => {
          return (
            <div className="col-3" id={e.id}>
              <div class="card mb-4">
                <img
                  src={e.image}
                  style={{
                    width: "200px",
                    alignSelf: "center",
                    margin: "20px",
                  }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{e.title}</h5>

                  <a className="btn btn-primary" style={{ marginTop: "20px" }}>
                    Ver detalle
                  </a>

                  <p class="card-text">
                    <a href="">
                      <small class="text-muted">{e.category}</small>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
```

Una vez el componente está configurado, lo que se quiere es poder ver los detalles de producto seleccionado con el botón. Para ello vamos a crear un nuevo componente llamado detail

```javascript
import React from "react";

const Detail = () => {
  return <div>Detail</div>;
};

export default Detail;
```

y lo vamos hacer navegable incluyendo una ruta dentro del Rotures, la cual podrá obtener un parámetro

```javascript
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Err404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

Con esto estamos indicando que la ruta /detail tiene que obtener un parémtero llamado id. El siguiente paso es hacerlo navegable tras la pulsación del botón en el componente del producto

```javascript
<div class="card-body">
  <h5 class="card-title">{e.title}</h5>

  <Link
    className="btn btn-primary"
    to={"/detail/" + e.id}
    style={{ marginTop: "20px" }}
  >
    Ver detalle
  </Link>

  <p class="card-text">
    <a href="">
      <small class="text-muted">{e.category}</small>
    </a>
  </p>
</div>
```

La parte del boton quedaría de la forma anterior, incorporando un Link con un atributo to para poder confugrar la ruta sobre la cual se navega. Por último lo que quedaría es obtenerlo dentro de la ruta destino, en este caso en el componente detail

```javascript
import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";

const Detail = () => {
  const { id } = useParams();
  let product = getProductById(id);
  console.log(product);

  return (
    <div>
      {
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={product.image}
                class="img-fluid rounded-start"
                alt="..."
                style={{ marginRight: "50px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <p class="card-text">
                  <small class="text-muted">{product.price}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Detail;
```

### Parámetros por query

En el caso de querer obtener parámetros que hayan sido pasados por query, se utiliza el hook useSearchParams, el cual tiene la siguiente construcción

```javascript
let [searchParam, setParams] = useSearchParams();
```

Las dos variables creadas sirven para recuperar los parámetros que vengan desde url y para modificar los parémtros dentro de la url. Esto es muy cómodo porque se puede modifcar la url de forma directa en el caso de tener por ejemplo algún input que actue como elemento filtrante. Vamos a imaginar la siguiente url: https://localhost:3000/home?user=2&name=jose. En este caso tendremos dos parámetros nombrados como user y name. En el caso de querer recuperarlos se realiza mediante la variable searchParam con el siguiente código

```javascript
let uid = searchParam.get("user");
let name = searchParam.get("name");
```

En el caso de querer cambiar los parámetros de forma dinámica se utiliza la función setParams(), pasando como parámetros el json asociado par clave valor que tendrá cada uno de los elementos

```javascript
setParams({ ...e, titulo: e.target.value });
```
