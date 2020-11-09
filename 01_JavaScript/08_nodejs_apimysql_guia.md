# Guía creación API Rest con express + MySQL

Para este ejemplo se creará una base de datos de proyectos de forma que se puedan realizar tareas CRUD sobre la base de datos. Los campos que se guardarán en la colección son: id - nombre - tecnología - cliente - presupuesto - terminado

## 1. Creación del proyecto 

Para poder crear el proyecto existen dos posibilidades: crear el proyecto a mano o utilizar un generador de proyectos base como express-generator. Hay que tener en cuenta que es necesario tener instalado el módulo para poder utilizarlo

````
npm install -g express-generator
````

Una vez instalado se creará el proyecto (estando situado en la ruta que se quiera)

````
express proyectosAPI
````

Esta operación creará el proyecto con toda la estructura necesaria. Recordad que la funcionalidad de los principales archivos generados es:

- public: carpeta donde se ubicaran todos los archivos accesibles directamente. Al ser un api no nos interesará mucho su uso.
- routes: carpeta donde se ubicarán cada una de las peticiones que se realizarán. Los archivos de esta carpeta serán referidos desde el archivo app.js.
- views: carpeta donde se ubicarán las vistas que podrán ser devueltas en cada petición del API. En este caso no serán necesarias ya que la contestación retorna de base de datos.
- app.js: archivo principal de la aplicación, el cual arrancará y redirigirá la petición al archivo correcto.
- package.json: archivo que tiene todas las dependencias del proyecto, así como su información


Para poder comprobar que todo funciona correctamente se ejecuta el comando npm start. Es recomendable instalar el módulo nodemon para poder ver la compilación a tiempo real.

Como se va a trabajar con base de datos MySql, se va a utilizar el módulo mysql para conectar con la base de datos y tratar los datos.

## 2. Planteamiento de las peticiones. 

Antes de codificar se debe plantear cuales serán las peticiones que se podrán hacer al API y de que forma serán. Para este ejemplo se realizarán las siguientes

- /add donde se pasarán los elementos a insertar por el body
- /remove/id: donde se pasará el id del elemento a borrar por la URL
- /update?nombre=XX: donde se pasará por URL query el nombre del jugador a actualizar y por body todos los elementos que se quieren actualizar
- /listAll: donde se listarán todos los elementos
- /list/id: donde se listará el elemento que tenga el id pasado por URL
- /list?tecnologia=XXX: donde se listarán todos los elementos que tengan los parámetros pasados por URL query

Para poder hacer esto se crea un fichero dentro de la carpeta routes llamada proyectsRouter que incluya:

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

En este fichero se requiere el modulo express para que pueda ser llamado la función de Router. Esta variable será la encargada de realizar las peticiones. Por cada una de las rutas explicadas en el punto anterior se crea una llamada de la variable router (con la función correspondiente) donde como parámetros está la ruta de la petición y la función que se ejecutará tras la llamada. Dentro de cada uno de los métodos también existe la posibilidad de asociar un método creado en un archivo externo que representa el controlador. Para ello es necesario crear un fichero llamado proyectController.js con el siguiente contenido:

````
var controlador = {
    base: (req, res) => {
        res.status(200).send(console.log('peticion correcta'));
    },
    add: (req, res) => {
        res.status(200).send(console.log('peticion correcta'));
    }
};

module.exports = controlador;
````

En este fichero se incluirán todas las funciones que se quieran realizar. Por último se modificará el fichero proyectRouter con el siguiente contenido:

````
const express = require('express');
const router = express.Router();

const controlador = require('../controllers/proyectController');

router.get('/', controlador.base);
router.get('/insertar', controlador.insertar);

module.exports = router
````

### 3. Creación y conexión con MySQL


Una vez creada la base de datos y la/s tabla/s el siguiente paso es crear el fichero que permite la conexión con la base de datos. Para ello se crea un fichero llamado mysqlDb.js con el siguiente contenido:

````
const mysql = require('mysql');
var connection = {
    createConnection: () => {
        return mysql.createConnection({
            host: '192.168.64.2',
            user: 'programacion',
            password: 'programacion',
            database: 'proyectsAPI',
            port: 3306
        });
    },
}

module.exports = connection;
````

Este archivo tendrá que ser requerido al inicio de la aplicación en el fichero proyectController.js cuando quiera ser utilizada la conexión. Dado que tan solo se puede crear una conexión y cerrarla, es necesario crearla y cerrarla en cada acción. Para ello la ejecución del método createConnection retorna una conexión que puede ser manejada desde los métodos del controlador  

### 4. Operaciones con la base de datos

Todas las operaciones con la base de datos se realizan mediante el modelo creado. Este modelo ya indica la colección sobre la que se trabaja, por lo que no es necesario indicar el destino en cada operación

#### Inserción

Para la inserción se va a tomar como ejemplo el paso de parámetros por body. También podría ser mediante string query o por url directamente. 

1. El primer paso a realiza el en el archivo del controlador crear el metodo insertar, el cual obtiene los parametros del body de la petición

````
const db = require('../utils/mysqlDb');
var controlador = {
    insertar: (req, res) => {
        player = new bdModel();
        var parametros = req.body;
    }
}

module.exports = controlador;
````

Ademas de la captura de los parámetros del body, se crea una variable del modelo, la cual servirá para poder añadir el elemento a la base de datos.

2. El segundo paso es la captura de cada uno de los parámetros del body y su igualación con el atributo correspondiente de la variable player creada

````
const db = require('../utils/mysqlDb');

var controller = {
    add: (req, res) => {
        var conexion = db.createConnection();
        var params = req.body;
        conexion.connect((err, args) => {
            if (err) {
                return res.status(500).send({ code: 1, message: 'error en la conexion' });
            } else {
                conexion.query('INSERT INTO proyect (nombre, tecnologia, cliente, presupuesto, terminado) VALUES (?,?,?,?,?)', [params.nombre, params.tecnologia, params.cliente, params.presupuesto, params.terminado], (err, result) => {
                    if (err) {
                        return res.status(500).send({ code: 1, message: 'error en la inserción' + err });
                    } else {
                        conexion.end();
                        return res.status(200).send({ code: 2, message: 'inserción correcta' });
                    }
                });
            }
        });
    }
}

module.exports = controller;
````

Hay que tener en cuenta que para poder realizar la inserción lo primero que se necesita es el método connect, utilizado desde la variable db (que requiere el archivo de mysqlDB). Una vez conectada la base de datos se ejecuta la query pasando como parámetros el string propio de la query, un array con los argumentos que sustituyen las ? Y una función de callback de la ejecución de la función.

3. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo proyectoRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/proyectController');

router.post('/add', controlador.add);

module.exports = router
````


#### Borrado

Para poder realizar el borrado se utiliza un método que busca por id y borra el elemento. 
1.  El primer paso a realiza el en el archivo del controlador crear el método remove, el cual obtiene los parámetros de la url 

````
const db = require('../utils/mysqlDb');

var controlador = {
remove: (req, res) => {
        
    }
}

module.exports = controlador;
````

2. El segundo paso es acceder al id del elemento que se quiere borrar, con el mismo patrón que en el caso de la inserción

````
const db = require('../utils/mysqlDb');

var controller = {
    remove: (req, res) => {
        var conexion = db.createConnection();
        var paramId = req.params.id;
        conexion.connect((err, args) => {
            if (err) {
                return res.status(500).send({ code: 1, message: 'error en la conexión' + err });
            } else {
                conexion.query('DELETE FROM proyect WHERE id = ?', [paramId], (err, result) => {
                    if (err) {
                        return res.status(500).send({ code: 1, message: 'error en la inserción' + err });
                    } else {
                        conexion.end();
                        return res.status(200).send({ code: 2, message: 'borrado correcto' });
                    }
                });
            }
        });
    }
}

module.exports = controller;

````
 3. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo proyectRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/proyectController');

router.delete('/delete/:id', controlador.remove);

module.exports = router
````


#### Actualización

A la hora de realizar la actualización se realiza mediante id, de forma muy similar al borrado

1.  El primer paso a realiza el en el archivo del controlador crear el método select, el cual obtiene los parámetros de la url 

````
const db = require('../utils/mysqlDb');

var controlador = {
select: (req, res) => {
        
    }
}

module.exports = controlador;
````

2. El segundo paso es acceder al id del elemento que se quiere borrar al mismo tiempo que los parámetros del body, con el mismo patrón que en el caso de la inserción


````
const db = require('../utils/mysqlDb');
var controlador = {
    update: (req, res) => {

        var paramId = req.params.id;
        var params = req.body;
        var conexion = db.createConnection();

        conexion.connect((err) => {
            if (err) {
                return res.status(500).send({ code: 1, message: 'error en la conexión' + err });
            } else {
                conexion.query('UPDATE proyect SET terminado=? WHERE id = ?', [params.terminado, paramId], (err, result) => {
                    if (err) {
                        return res.status(500).send({ code: 1, message: 'error en la actualización' + err });
                    } else {
                        conexion.end();
                        return res.status(200).send({ code: 2, message: 'proyecto actualizado' });
                    }
                });
            }
        });
    }
}

module.exports = controlador;

````
 3. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/proyectController');

router.set('/update/:id', controlador.update);

module.exports = router
````


#### Búsqueda

A la hora de hacer la búsqueda tan solo se debe ejecutar la query con los parámetros de búsqueda

````
const db = require('../utils/mysqlDb');
var controlador = {
select: (req, res) => {

        var params = req.body;
        var conexion = db.createConnection();
        conexion.connect((err) => {
            if (err) {
                return res.status(500).send({ code: 1, message: 'error en la conexión' + err });
            } else {
                if (Object.keys(params).length == 0) {
                    conexion.query('SELECT * FROM proyect', (err, result) => {
                        if (err) {
                            return res.status(500).send({ code: 1, message: 'error en la actualización' + err });
                        } else {
                            conexion.end();
                            return res.status(200).send({ code: 2, message: 'proyecto actualizado', results: result });
                        }
                    });
                } else {
                    conexion.query('SELECT * FROM proyect WHERE tecnologia = ?', [params.tecnologia], (err, result) => {
                        if (err) {
                            return res.status(500).send({ code: 1, message: 'error en la actualización' + err });
                        } else {
                            conexion.end();
                            return res.status(200).send({ code: 2, message: 'proyecto actualizado', results: result });
                        }
                    });
                }

            }
        });
    }
}

module.exports = controlador;
````


2. Una ver creado el método, simplemente es asociar la búsqueda al método del controlador en el archivo playersRoutes.js

````
const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');

router.delete('/delete/:id', controlador.remove);

module.exports = router
````

