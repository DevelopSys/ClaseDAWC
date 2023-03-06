const mysql = require("mysql");
let connection = {
  createConnection: () => {
    return mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "formacion",
      port: 3306,
    });
  },
};
