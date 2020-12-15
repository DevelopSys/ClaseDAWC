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
    });
    //res.status(200).send({ code: 1 });
  },
};

module.exports = controladora;
