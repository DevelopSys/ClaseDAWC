const baseDatos = require("./controllerDB");

let controladorAPI = {
  add: (req, res, next) => {
    /*res
      .status(200)
      .send({ code: 1, message: "Conexion correcta add desde controladora" });*/

    // insertar en base de datos

    let conexionDB = baseDatos.getConnection();
    conexionDB.connect((err, args) => {
      if (err) {
        return res
          .status(500)
          .send({ code: 1, message: "El servidor con ha constestado bien" });
      } else {
        conexionDB.query(
          "INSERT INTO jugador (nombre,posicion,valor) VALUE (?,?,?)",
          ["borja", "delantero", 1000],
          (err, res1) => {
            if (err) {
              return res.status(400).send({
                code: 1,
                message: "Error a la hora de hacer la inserción",
                data: err,
              });
            } else {
              return res
                .status(200)
                .send({ code: 2, message: "Insercion correcta", data: res1 });
            }
          }
        );
      }
    });
  },
  remove: (req, res, next) => {
    res.status(200).send({
      code: 1,
      message: "Conexion correcta remove desde controladora",
    });
  },
  select: (req, res, next) => {
    res.status(200).send({
      code: 1,
      message: "Conexion correcta select desde controladora",
    });
  },
  update: (req, res, next) => {
    res.status(200).send({
      code: 1,
      message: "Conexion correcta updatedesde controladora",
    });
  },
  delete: (req, res, next) => {
    res.status(200).send({
      code: 1,
      message: "Conexion correcta delete desde controladora",
    });
  },
};

module.exports = controladorAPI;
