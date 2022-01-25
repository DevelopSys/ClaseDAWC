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
      conexionActual.query("SELECT * FROM usuarios", [], (err, data) => {
        if (err) {
          res.status(300).send({
            code: 2,
            message: "Query ejecutada con error",
            error: err,
          });
        } else {
          res.status(200).send({
            code: 2,
            message: "datos correctos",
            results: data,
          });
        }
      });
      /* res
        .status(200)
        .send({ code: 2, message: "Conexion correcta con la base de datos" });

      conexionActual.end(); */
    }
  });
});

// localhost:3000/usuarios/id/
router.get("/selectById/id/:numero?", (req, res, next) => {
  let parametros = req.params;
  //res.send({ data: parametros });
  let conexionActual = gestionConexion.conexion();
  conexionActual.connect((err) => {
    if (err) {
      res
        .status(500)
        .send({ code: 1, message: "Error en la conexion", error: err });
    } else {
      if (parametros.numero != undefined) {
        conexionActual.query(
          "SELECT * FROM usuarios WHERE id= (?)",
          [parametros.numero],
          (err, data) => {
            res
              .status(200)
              .send({ code: 1, message: "OK conexion", data: data });
          }
        );
      } else {
        res
          .status(200)
          .send({ code: 1, message: "faltan datos en la peticion" });
      }
      // SELECT * FROM USUARIOS WHERE ID = 8
    }
  });
});

// localhost:3000/usuarios/filter?id=dfghjk&p2=asdasdasd
router.get("/filter", (req, res, next) => {
  let parametros = req.query;
  let conexion = gestionConexion.conexion();
  conexion.connect((err) => {
    if (err) {
      res
        .status(500)
        .send({ code: 1, message: "error en la conexion", data: err });
    } else {
      conexion.query(
        "SELECT * FROM usuarios WHERE id = ?",
        [parametros.id],
        (err, data) => {
          if (!err) {
            res
              .status(200)
              .send({ code: 1, message: "datos procesados", data: data });
          } else {
            res
              .status(400)
              .send({ code: 1, message: "query incorrecta", data: err });
          }

          conexion.end();
        }
      );
    }
  });
});

/**
 * 
 * conexionActual.query(
        "SELECT * FROM usuarios WHERE genero = (?)",
        ["Masculino"],
        (err, data) => {
          if (err) {
            res.status(300).send({
              code: 2,
              message: "Query ejecutada con error",
              error: err,
            });
          } else {
            res.status(200).send({
              code: 2,
              message: "datos correctos",
              resutls: data,
            });
          }
        }
 */
// obtener el elemento cuyo id es el indicado en la ruta
// localhost: 3000 / usuarios / id / 8; -->

/*
{
  "code": 2,
  "message": "datos correctos",
  "results": [
    {
      "id": 8,
      "nombre": "Borja",
      "genero": "Masculino"
    }
  ], 
  number: 1
}
*/

module.exports = router;
