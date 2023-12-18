var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/ejemplo", function (req, res, next) {
  res.send("respondiendo ejemplo");
});
router.get("/", function (req, res, next) {
  res.send("respond la raiz");
});
router.post("/add", function (req, res, next) {
  res.send("respondiendo add");
});

module.exports = router;
