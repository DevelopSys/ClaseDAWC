const conexionDB = require("../controladoras/controladoraDB");
let controladora = {
  agregar: (req, res) => {
    let conexionActual = conexionDB.conectar();
    let paramentros = req.body;
    conexionActual.connect((err) => {
      if (err) {
        res
          .status(500)
          .send({ code: 1, message: "Error en la conexion", data: err });
      } else {
        conexionActual.query(
          "INSERT INTO partido (id_local,goles_local,id_visitante,goles_visitante) VALUES (?,?,?,?)",
          [
            paramentros.idL,
            paramentros.golesL,
            paramentros.idV,
            paramentros.golesV,
          ],
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
