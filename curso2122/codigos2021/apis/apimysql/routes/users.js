var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ codigo: 1, mesaje: "respond with a resource" });
});

module.exports = router;
