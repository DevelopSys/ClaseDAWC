const conexionDB = require("../controladoras/controladoraDB");
let controladora = {
  obtener: (req, res) => {
    let parametros = req.params;
    let conexionActual = conexionDB.conectar();
    conexionActual.connect((err) => {
      if (err) {
        res
          .status(500)
          .send({ code: 1, message: "Error en la conexion", data: err });
      } else {
        // SELECT * FROM equipo WHERE id =
        // SELECT * FROM equipo
        // if (parametros.id) --> primera query
        // else --> segunda query

        if (parametros.id) {
        } else {
          conexionActual.query(
            "SELECT * FROM equipo ORDER BY puntos DESC",
            null,
            (err, data) => {
              if (!err) {
                res
                  .status(200)
                  .send({ code: 2, message: "query realizada", data: data });
              }
            }
          );
        }
      }
    });
    //res.status(200).send({ code: 1 });
  },
  agregar: (req, res) => {
    let conexionActual = conexionDB.conectar();
    let paramentros = req.query;
    conexionActual.connect((err) => {
      if (err) {
        res
          .status(500)
          .send({ code: 1, message: "Error en la conexion", data: err });
      } else {
        conexionActual.query(
          "INSERT INTO equipo (nombre) VALUES (?)",
          [paramentros.nombre],
          (err, data) => {
            if (err) {
              res
                .status(400)
                .send({ code: 1, message: "Error en la query", data: err });
            } else {
              res.status(200).send({
                code: 2,
                message: "datos agregados correctamente",
                data: data,
              });
            }
          }
        );
      }
    });
  },
};

module.exports = controladora;
