var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Ejemplo de aplicacion express" });
});

fetch("http://localhost:3000/users/all").then(data=>data.json()).then(data=>data.results.foreach(element=>{  }))
fetch("http://localhost:3000/users/gender/male").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/gender/female").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/country/eeuu").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/country/spain").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/age/18").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/age/19").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/age/20").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))
fetch("http://localhost:3000/users/age/50").then(data=>data.json()).then(data=>data.results.foreach(element=>{}))

router.get("/otracosa", function (req, res, next) {
  res.render("index", { title: "Index con otra cosa" });
});

router.get("/loquesea", function (req, res, next) {
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
