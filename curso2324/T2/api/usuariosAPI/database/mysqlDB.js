/* permite conectar con la base de datos */
const db = require("mysql");
var connection = {
  createConnection: () => {
    return db.createConnection({
      host: "127.0.0.1",
      user: "root",
      pass: "",
      database: "usuariosdaw",
      port: 3306,
    });
  },
};
module.export = connection;
