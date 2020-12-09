const express = require("express");
const controladorAPI = require("../controller/controllerApi");
const routes = express.Router();
const controladora = require("../controller/controllerApi");

routes.get("/add", controladorAPI.add);
routes.get("/delete", controladorAPI.delete);
routes.get("/update", controladorAPI.update);
routes.get("/select/:id?", controladorAPI.select);

module.exports = routes;
