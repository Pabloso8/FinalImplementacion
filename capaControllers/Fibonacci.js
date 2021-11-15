const { Router } = require("express");
const route = Router();
const fibonacci = require("../capaLogica/Fibonacci");

route.get("/sucesionNumerosFibonacci/:num", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
    res.json(fibonacci( req.params.num))
  });

  module.exports = route;