var express = require("express");
var db = require("../database/mysqlDB");
var router = express.Router();

/* GET users listing. */
router.get("/ejemplo", function (req, res, next) {
  res.send({ nombre: "usuario", valor: 123 });
});

router.post("/add", function (req, res, next) {
  res.send("añadiendo usuario");
});

router.get("/list", function (req, res, next) {
  let connection = db.createConnection();
  connection.connect((err) => {
    if (err) {
      // aviso del  error
    } else {
      connection.query("SELECT * FROM usuarios", (err, result) => {
        if (err) {
          // aviso del error
        } else {
          connection.end();
          if (results.length > 0) {
            res.status(200).send({ code: 1, results: result });
          } else {
            res.status(200).send({ code: 0, results: "sin resultados" });
          }
        }
      });
    }
  });

  console.log(connection);
  res.send({ nombre: "usuario", valor: 123 });
});

router.get("/list/:nombre", function (req, res, next) {
  res.send("listando los usuarios con nombre concreto");
});

router.put("/update/:id", function (req, res, next) {
  console.log(req.params.id);
  res.send("actualizando usuario por id");
});

/* Add un usuario */
/* Obtener todos los usuarios */
/* Obtener todos los usuarios con un nombre concreto */
/* Obtener un uusario por id */
/* Actualizar un uusario por id */

module.exports = router;
