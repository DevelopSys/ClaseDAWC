# Guía creación API Rest con express + MongoDB

Para este ejemplo se creará una base de datos de futbolistas de forma que se puedan realizar tareas CRUD sobre la base de datos. Los campos que se guardarán en la colección son: nombre - apellidos - edad - posición - equipo - valor_mercado

## 1. Creación del proyecto 

Para poder crear el proyecto existen dos posibilidades: crear el proyecto a mano o utilizar un generador de proyectos base como express-generator. Hay que tener en cuenta que es necesario tener instalado el módulo para poder utilizarlo

````
npm install -g express-generator
````

Una vez instalado se creará el proyecto (estando situado en la ruta que se quiera)

````
express futbolistasAPI
````

Esta operación creará el proyecto con toda la estructura necesaria. Recordad que la funcionalidad de los principales archivos generados es:

- public: carpeta donde se ubicaran todos los archivos accesibles directamente. Al ser un api no nos interesará mucho su uso.
- routes: carpeta donde se ubicarán cada una de las peticiones que se realizarán. Los archivos de esta carpeta serán referidos desde el archivo app.js.
- views: carpeta donde se ubicarán las vistas que podrán ser devueltas en cada petición del API. En este caso no serán necesarias ya que la contestación retorna de base de datos.
- app.js: archivo principal de la aplicación, el cual arrancará y redirigirá la petición al archivo correcto.
- package.json: archivo que tiene todas las dependencias del proyecto, así como su información


Para poder comprobar que todo funciona correctamente se ejecuta el comando npm start. Es recomendable instalar el módulo nodemon para poder ver la compilación a tiempo real.

Como se va a trabajar con base de datos Mongo, se va a utilizar el módulo mongoose para conectar con la base de datos y tratar los datos.

Una vez instalado se creará una carpeta llamada models, la cual contendrá un archivo llamado playerModel.js que tendrá la creación del modelo usado por mongo y la colección asignada llamada jugador

````
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var player = new Schema({

    nombre: String,
    apellido: String,
    edad: Number,
    posicion: String,
    equipo: String,
    valor: Number
});

module.exports = mongoose.model('player', player);
````


## 2. Planteamiento de las peticiones. 

Antes de codificar se debe plantear cuales serán las peticiones que se podrán hacer al API y de que forma serán. Para este ejemplo se realizarán las siguientes

- /add donde se pasarán los elementos a insertar por el body
- /remove/id: donde se pasará el id del elemento a borrar por la URL
- /update?nombre=XX: donde se pasará por URL query el nombre del jugador a actualizar y por body todos los elementos que se quieren actualizar
- /listAll: donde se listarán todos los elementos
- /list/id: donde se listará el elemento que tenga el id pasado por URL
- /list?equipo=XXX: donde se listarán todos los elementos que tengan los parámetros pasados por URL query

Para poder hacer esto se crea un fichero dentro de la carpeta routes llamada playersRoutes.js que incluya:

````
var express = require('express');
var router = express.Router();

router.get('/', ()=>{});
router.post('/add', ()=>{});
router.delete('/remove/:id', ()=>{});
router.put('/update', ()=>{});
router.get('/listAll', ()=>{});
router.get('/list/:id', ()=>{});
router.get('/list', ()=>{});

module.exports = router
````

En este fichero se requiere el modulo express para que pueda ser llamado la función de Router. Esta variable será la encargada de realizar las peticiones. Por cada una de las rutas explicadas en el punto anterior se crea una llamada de la variable router (con la función correspondiente) donde como parámetros está la ruta de la petición y la función que se ejecutará tras la llamada. Dentro de cada uno de los métodos también existe la posibilidad de asociar un método creado en un archivo externo que representa el controlador. Para ello es necesario crear un fichero llamado playerController.js con el siguiente contenido:

````
var controlador = {
    base: (req, res) => {
        res.status(200).send(console.log('peticion correcta'));
    },
    insertar: (req, res) => {
        res.status(200).send(console.log('peticion correcta'));
    }
};

module.exports = controlador;
````

En este fichero se incluirán todas las funciones que se quieran realizar. Por último se modificará el fichero playersRoutes.js con el siguiente contenido:

````
const express = require('express');
const router = express.Router();

const controlador = require('../controllers/playerController');

router.get('/', controlador.base);
router.get('/insertar', controlador.insertar);

module.exports = router
````

### 3. Creación y conexión con MongoDB

Para la creación de la base de datos hay que tener en cuenta una serie de cosas:

- No se trata de una base de datos relacional, por lo que cada colección puede contener elementos que tienen estructuras diferentes. Esto con la creación del modelo del punto uno no puede pasar
- En cada inserción de documentos en la colección se agrega un id único que puede ser utilizado para realizar búsquedas.
- El nombre de la colección debe ser el mismo que el declarado en el modelo pero en plural. Por ejemplo si en el modelo se declaro como nombre player, la colección debería llamarse players

````
module.exports = mongoose.model('player', player);
````

Una vez creada la base de datos y la colección el siguiente paso es crear el fichero que permite la conexión con la base de datos. Para ello se crea un fichero llamado mongoConnection.js con el siguiente contenido:

````
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/futbolapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('conexión realizada con éxito'); })
    .catch(console.log('error en la conexión'));
````

Este archivo tendrá que ser requerido al inicio de la aplicación en el fichero app.js

````
var mongoDb = require('./mongoConnection');
````

Existe la posibilidad que se quiera conectar con un usuario concreto de la base de datos, por lo que la url de conexxion sería la siguiente

````
//mongodb://MONGO_USERNAME:MONGO_PASSWORD@$MONGO_HOSTNAME:MONGO_PORT/MONGO_DB?authSource=admin
mongodb://administrador:futbolapp1a@127.0.0.:27017/futbolapp?authSource=admin
````

### 4. Operaciones con la base de datos

Todas las operaciones con la base de datos se realizan mediante el modelo creado. Este modelo ya indica la colección sobre la que se trabaja, por lo que no es necesario indicar el destino en cada operación

#### Inserción

Para la inserción se va a tomar como ejemplo el paso de parámetros por body. También podría ser mediante string query o por url directamente. 

1. El primer paso a realiza el en el archivo del controlador crear el metodo insertar, el cual obtiene los parametros del body de la petición

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
    add: (req, res) => {
        player = new bdModel();
        var parametros = req.body;
    }
}

module.exports = controlador;
````

Ademas de la captura de los parámetros del body, se crea una variable del modelo, la cual servirá para poder añadir el elemento a la base de datos.

2. El segundo paso es la captura de cada uno de los parámetros del body y su igualación con el atributo correspondiente de la variable player creada

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
    add: (req, res) => {

        player = new bdModel();
        var parametros = req.body;
        player.nombre = parametros.nombre;
        player.apellido = parametros.apellidos;
        player.edad = parametros.edad;
        player.equipo = parametros.equipo;
        player.posicion = parametros.posicion;
        player.valor = parametros.valor;
    }
}

module.exports = controlador;
````

Hay que tener en cuenta que en la petición del body los parámetros tienen que estar en el mismo orden en que están en la base de datos

3. El tercer paso es realizar la petición de inserción mediante el método save. Este método tiene como parámetros la función de callback que realiza la inserción

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
    add: (req, res) => {

        player = new bdModel();
        var parametros = req.body;
        player.nombre = parametros.nombre;
        player.apellido = parametros.apellidos;
        player.edad = parametros.edad;
        player.equipo = parametros.equipo;
        player.posicion = parametros.posicion;
        player.valor = parametros.valor;
	   player.save((err, result) => {

            if (err){
                return res.status(500).send({ code: 3, message: 'error en la conexión con la bd'});
            }
            else if (result.length == 0) {
                return res.status(400).send({ code: 2, message: 'error en la operación, fallo de parámetros'});

            } 
            return res.status(200).send({ code: 1, message: 'jugador insertado con exito', player: result });
        });
    }
}
module.exports = controlador;
````

 3. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');

router.post('/add', controlador.add);

module.exports = router
````


#### Borrado

Para poder realizar el borrado se utiliza un método que busca por id y borra el elemento. 
1.  El primer paso a realiza el en el archivo del controlador crear el método remove, el cual obtiene los parámetros de la url 

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
	remove: (req, res) => {
        var paramId = req.params.id;
        
    }
}

module.exports = controlador;
````

2. El segundo paso es acceder al método findByIdAndDelete mediante la variable creada del modelo. Este método tiene como parámetros el id del elemento que se quiere borrar y la función de callback que ejecuta el borrado

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
	remove: (req, res) => {
        var paramId = req.params.id;
	    bdModel.findByIdAndDelete(paramId, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 3, message: 'error en el borrado' });
            } else if (!result) {
                return res.status(400).send({ code: 2, message: 'id no encontrado, no se ha podido borrar' });
            }
            return res.status(200).send({ code: 1, message: 'Elemento borrado correctamente' });


        });
        
    }
}

module.exports = controlador;

````
 3. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');

router.delete('/delete/:id', controlador.remove);

module.exports = router
````


#### Actualización

A la hora de realizar la actualización se realiza mediante id, de forma muy similar al borrado

1.  El primer paso a realiza el en el archivo del controlador crear el método remove, el cual obtiene los parámetros de la url 

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
 update: (req, res) => {
        
    }
}

module.exports = controlador;
````

2. El segundo paso es acceder al método findByIdAndUpdate mediante la variable creada del modelo. Este método tiene como parámetros el id del elemento que se quiere borrar, los parámetros pasados por body y la función de callback que ejecuta el borrado

````
const bdModel = require('../models/playerModel');
var player;
var controlador = {
 update: (req, res) => {
        var paramId = req.params.id;
        var param = req.body;
        bdModel.findByIdAndUpdate(paramId, param, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 3, message: 'error en la busqueda' });
            } else if (result.length == 0) {
                return res.status(400).send({ code: 2, message: 'no existen elementos con el filtro' });
            }
            return res.status(200).send({ code: 1, message: 'Elementos encontrado y actualizado correctamente', elementos: result });
        });
    }
}

module.exports = controlador;

````
 3. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');

router.put('/update/:id', controlador.remove);

module.exports = router
````


#### Búsqueda

A la hora de hacer la búsqueda hay que distinguir si se quiere realizar una búsqueda filtrada o una búsqueda completa.

##### Sin filtrar

Para poder hacer una búsqueda sin filtrar simplemente se debe ejecutar el método find().

1. El primer paso es crear el método findAll en el controlador, ejecutando el método find() pasando como parámetro un objeto JSON vacío, y el método exec() para ejecutar la consulta

````

const bdModel = require('../models/playerModel');
var player;
var controlador = {
    findAll: (req, res) => {
        bdModel.find({}).exec((err, results) => { res.status(200).send({ elementos: results }) });
    }
}

module.exports = controlador;
````


2. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');

router.get('/get', controlador.findAll);

module.exports = router
````


##### Filtrada

En el caso de querer filtrar la búsqueda, se debe indicar el tipo de filtro el el método find()

1. El primer paso es crear el método findAll en el controlador, ejecutando el método find() pasando como parámetro un objeto JSON vacío, y el método exec() para ejecutar la consulta

````

const bdModel = require('../models/playerModel');
var player;
var controlador = {
    find: (req, res) => {
        var params = req.query;
        console.log(params);
        bdModel.find({ equipo: params.equipo }).exec((err, result) => {

            if (err) {
                return res.status(500).send({ code: 3, message: 'error en la busqueda' });
            } else if (result.length == 0) {
                return res.status(400).send({ code: 2, message: 'no existen elementos con el filtro' });
            }
            return res.status(200).send({ code: 1, message: 'Elementos encontrado correctamente', elementos: result });
        });
    },
}

module.exports = controlador;
````

2. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');
router.get('/find', controlador.find);

module.exports = router
````
