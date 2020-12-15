var express = require("express");
var router = express.Router();
var controladoraEquipo = require("../controladoras/controladoraEquipo");

// gestión de las rutas

// obtener equipos
router.get("/get/:id?", controladoraEquipo.obtener);

// agregar equipo

// modificar equipo

module.exports = router;
