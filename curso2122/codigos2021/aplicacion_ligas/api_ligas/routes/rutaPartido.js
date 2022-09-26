var express = require("express");
var router = express.Router();
var controladoraEquipo = require("../controladoras/controladoraPartido");

// gestión de las rutas

// obtener equipos
router.post("/add", controladoraEquipo.agregar);
// agregar equipo

// modificar equipo

module.exports = router;
