var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Ejemplo de aplicacion express" });
});

router.get("/otracosa", function(req, res, next) {
    res.render("index", { title: "Index con otra cosa" });
});

router.get("/loquesea", function(req, res, next) {
    res.json({
        response: "1",
        results: [
            { name: "Madrid", goals: 50 },
            { name: "Barcelona", goals: 30 },
            { name: "Atleti", goals: 40 },
        ],
    });
});

module.exports = router;