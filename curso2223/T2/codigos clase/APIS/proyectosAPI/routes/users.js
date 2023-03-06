var express = require("express");
var router = express.Router();

/* GET users listing. */

// https://localhost/users/
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// https://localhost/users/all
router.get("/all", function (req, res, next) {
  res.send("respuesta a la pregunta all");
});

router.get("/seleccion", function (req, res, next) {
  res.send({
    status: 100,
    results: [
      { nombre: "borja", apellido: "Martin", edad: 20 },
      { nombre: "juan", apellido: "Martin", edad: 20 },
      ,
      { nombre: "luis", apellido: "Martin", edad: 20 },
      ,
      { nombre: "marcos", apellido: "Martin", edad: 20 },
      ,
      { nombre: "jose", apellido: "Martin", edad: 20 },
    ],
  });
});

module.exports = router;
