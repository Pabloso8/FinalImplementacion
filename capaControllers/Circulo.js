const { Router } = require("express");
const route = Router();
const AreaYperimetroCir = require("../capaLogica/Circulo");

route.get("/circulo/:radio", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
    res.json(AreaYperimetroCir( req.params.radio))
  });

  module.exports = route;