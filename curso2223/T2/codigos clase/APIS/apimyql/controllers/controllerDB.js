const mysql = require("mysql");
let gestionConexion = {
  conexion: () => {
    return mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "formacion",
      port: 3306,
    });
  },
  desconexion: () => {
    mysql.createConnection().end();
  },
};

module.exports = gestionConexion;
