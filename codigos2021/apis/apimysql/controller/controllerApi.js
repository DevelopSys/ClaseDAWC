const baseDatos = require("./controllerDB");

let controladorAPI = {
  add: (req, res, next) => {
    // trabajo con body
    let conexionDB = baseDatos.getConnection();
    let paramentros = req.body;
    //console.log(paramentros);
    conexionDB.connect((error) => {
      if (error) {
        res
          .status(500)
          .send({ code: 1, message: "Error en la conexion", data: error });
      } else {
        if (paramentros.nombre && paramentros.posicion && parametros.valor) {
          conexionDB.query(
            "INSERT INTO jugador (nombre,posicion,valor) VALUES (?,?,?)",
            [paramentros.nombre, paramentros.posicion, paramentros.valor],
            (errQuery, dataQuery) => {
              if (errQuery) {
                res.status(400).send({
                  code: 2,
                  message: "Error en la query",
                  data: errQuery,
                });
              } else {
                res.status(200).send({
                  code: 5,
                  message: "datos agregados correctamente",
                  data: dataQuery,
                });
              }
            }
          );
        } else {
          res
            .status(400)
            .send({ code: 3, message: "Falta algún parámetrs", data: error });
        }

        conexionDB.end();
      }
    });
  },
  select: (req, res, next) => {
    //console.log(req);
    let parametros = req.params;
    let conexionDB = baseDatos.getConnection();
    //console.log(parametros);
    //console.log(typeof parametros.id);
    if (typeof parametros.id == "undefined") {
      //res.status(200).send({ code: 3, message: "Faltan datos", data: null });
      conexionDB.query("SELECT * from jugador", null, (errQuery, dataQuery) => {
        res.status(200).send({
          code: 2,
          message: "query correcta con resultado",
          data: dataQuery,
        });
      });
    } else {
      let conexionDB = baseDatos.getConnection();
      conexionDB.connect((err) => {
        if (err) {
          res.status(500).send({
            code: 2,
            message: "Error en la conexion",
            data: errQuery,
          });
        } else {
          conexionDB.query(
            "SELECT * FROM jugador WHERE id=?",
            [parametros.id],
            (erroQuery, dataQuery) => {
              if (erroQuery) {
                res.status(400).send({
                  code: 2,
                  message: "Error en la query",
                  data: errQuery,
                });
              } else {
                if (dataQuery.length > 0) {
                  res.status(200).send({
                    code: 2,
                    message: "query correcta con resultado",
                    data: dataQuery,
                  });
                } else {
                  res.status(200).send({
                    code: 4,
                    message: "query correcta sin resultado",
                    data: dataQuery,
                  });
                }
              }
            }
          );
        }
      });
    }
  },
  update: (req, res, next) => {
    res.status(200).send({
      code: 1,
      message: "Conexion correcta updatedesde controladora",
    });
  },
  delete: (req, res, next) => {
    let parametros = req.query;
    console.log(parametros.id);

    // DELETE FROM jugador WHERE id = parametros.id -->

    let conexionDB = baseDatos.getConnection();
    conexionDB.query(
      "DELETE from jugador Where id =?",
      [],
      (errQuery, dataQuery) => {
        // affectedRows > 0
        //
      }
    );

    /*res.status(200).send({
      code: 1,
      message: "Conexion correcta delete desde controladora",
    });*/
  },
};

module.exports = controladorAPI;
