const express = require("express");
const routes = express.Router();

routes.get("/add", (req, res, next) => {
  res.send({ code: 1, message: "conexion ok" });
});
routes.get("/add/:id?", (req, res, next) => {
  res.send({ code: 1, message: "conexion add con parametros" });
});
routes.get("/delete", (req, res, next) => {
  res.send({ code: 1, message: "conexion ok borrado" });
});
routes.get("/update", (req, res, next) => {
  res.send({ code: 1, message: "conexion ok update" });
});

module.exports = routes;
