var express = require("express");
const gestionConexion = require("../controllers/controllerDB");
var router = express.Router();

/* GET All users listing. */
router.get("/selectAll", function (req, res, next) {
  // conectate con DB y realiza la petición
  let conexionActual = gestionConexion.conexion();
  conexionActual.connect((err) => {
    if (err) {
      res
        .status(500)
        .send({ code: 1, message: "Error en la conexion", error: err });
    } else {
      // query
      res
        .status(200)
        .send({ code: 2, message: "Conexion correcta con la base de datos" });

      conexionActual.end();
    }
  });
});

module.exports = router;
