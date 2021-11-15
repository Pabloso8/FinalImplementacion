const { Router } = require("express");
const route = Router();
const factorial = require("../capaLogica/Factorial");

route.get("/factorial/:num", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
    res.json(factorial( req.params.num))
  });

  module.exports = route;