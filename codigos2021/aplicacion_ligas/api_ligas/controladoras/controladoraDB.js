const mysql = require("mysql");
let conexionDB = {
  conectar: () => {
    return mysql.createConnection({
      host: "192.168.64.3",
      user: "adminAPI",
      password: "adminAPI",
      database: "gestor_ligas_db",
      port: 3306,
    });
  },
};

module.exports = conexionDB;
