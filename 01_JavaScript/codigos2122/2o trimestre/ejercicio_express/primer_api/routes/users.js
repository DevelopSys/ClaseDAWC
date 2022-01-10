var express = require("express");
const { response } = require("../app");
var router = express.Router();

let usuariosFiltro = [];

let usuarios = [
  { name: "Borja", age: 20, sex: "male" },
  { name: "Claudia", age: 20, sex: "female" },
  { name: "Pepe", age: 20, sex: "male" },
  { name: "Luisa", age: 20, sex: "female" },
  { name: "Jose", age: 20, sex: "male" },
  { name: "Luis", age: 20, sex: "male" },
  { name: "Luisa", age: 20, sex: "female" },
  { name: "Celia", age: 20, sex: "female" },
  { name: "Claudia", age: 20, sex: "female" },
  { name: "Maria", age: 20, sex: "female" },
  { name: "Luis", age: 20, sex: "male" },
  { name: "Marta", age: 20, sex: "female" },
];

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(`<p>API Endpoints<p>
  <ul>
    <li><a href="./users/all">Todos</a></li>
    <li><a href="./users/male">Masculino</a></li>
    <li><a href="./users/female">Femenino</a></li>
  </ul>
  `);
});

//  /users/all
// /users/male
// /user/female

router.get("/all", function (req, res, next) {
  res.json({
    response: 1,
    results: usuarios,
  });
});

router.get("/male", (req, res, next) => {
  usuariosFiltro = usuarios.filter((item) => item.sex == "male");
  res.json({ response: [usuariosFiltro] });
});

router.get("/female", (req, res, next) => {
  usuariosFiltro = usuarios.filter((item) => item.sex == "female");

  res.json({ response: [usuariosFiltro] });
});

router.get("/filter/:sex", (req, res, next) => {
  usuariosFiltro = usuarios.filter((item) => item.sex == "female");

  res.json({ response: [usuariosFiltro] });
});

// plantear la peticion de male y female para que solo me den los usuarios del sex concreto

module.exports = router;
