const express = require("express");
const controladorAPI = require("../controller/controllerApi");
const routes = express.Router();
const controladora = require("../controller/controllerApi");

routes.post("/add", controladorAPI.add);
routes.delete("/delete", controladorAPI.delete);
routes.put("/update", controladorAPI.update);
routes.get("/select/:id?", controladorAPI.select);

module.exports = routes;
