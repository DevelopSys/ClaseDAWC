// gestionar las acciones sobre los cursos de la base de datos
const db = require("../database/basedatos.js");
var controlador = {
  insertar: (req, res) => {
    let conexion = db.connection.createConnection();
    conexion.connect((err, ok) => {
      if (err) {
        res.send({ status: "1", mensaje: "Error en la conexion" });
      } else {
        // ejecuto la query correspondiente
      }
    });
  },
};

module.exports = controlador;
