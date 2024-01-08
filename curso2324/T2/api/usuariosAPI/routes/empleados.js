var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respondiendo desde la ruta /emploeados/ con un mensaje");
});

module.exports = router;
