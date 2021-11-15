const { Router } = require("express");
const route = Router();
const AreaYperimetroTri = require("../capaLogica/Triangulo");

route.get("/triangulo/:lado1/:lado2/:lado3", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
    res.json(AreaYperimetroTri( req.params.lado1,req.params.lado2,req.params.lado3 ))
  });

  module.exports = route;