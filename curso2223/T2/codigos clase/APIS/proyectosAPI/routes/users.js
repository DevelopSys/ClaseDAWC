var express = require("express");
var router = express.Router();

/* GET users listing. */

// https://localhost/users/
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// https://localhost/users/all
router.get("/all", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cosas", function (req, res, next) {
  res.send("respond with a resource");
});

// https://localhost/users/all
router.get("/all", function (req, res, next) {
  res.send("respond with a resource");
  // 1.crear una conexion
  // 2.Crear un schema - modelo (ORM -> Mongoose)
  // 3. Ejeciciones sobre el modelo y/o las funciones en MySQL
  // 4. Pasar a JSON la respuesta de la base de datos
  res.json({ nombre: "ejemplo", cosa: "contestacion" });
});

module.exports = router;
