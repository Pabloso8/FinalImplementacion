const { Router } = require("express");
const route = Router();
const AreaYperimetroRec = require("../capaLogica/Rectangulo");

route.get("/rectangulo/:altura/:base", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
    res.json(AreaYperimetroRec( req.params.altura, req.params.base))
  });

  module.exports = route;