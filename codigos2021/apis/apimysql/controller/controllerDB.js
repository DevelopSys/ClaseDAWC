const mysql = require("mysql");

let conexion = {
  getConnection: () => {
    return mysql.createConnection({
      host: "192.168.64.2",
      user: "adminAPI",
      password: "adminAPI",
      database: "jugadores",
      port: 3306,
    });
    // retorna la conexion con la base de datos
  },
};

module.exports = conexion;
