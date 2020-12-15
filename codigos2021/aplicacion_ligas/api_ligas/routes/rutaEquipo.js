// express --> Routes
// importar controladora -- // importar mysql

const express = require("express");
const controladora = require("../controladoras/controladoraEquipo");
let rutas = express.Router();

rutas.get("get", controladora.obtener);

// exportar la variable
