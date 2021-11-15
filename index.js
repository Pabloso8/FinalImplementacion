const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "https://salty-cliffs-36656.herokuapp.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(cors({ origin: false }));
//
app.use("/fibonacci", require("./capaControllers/Fibonacci"));
app.use("/factorial", require("./capaControllers/Factorial"));
app.use("/circulo", require("./capaControllers/Circulo"));
app.use("/triangulo", require("./capaControllers/Triangulo"));
app.use("/rectangulo", require("./capaControllers/Rectangulo"));

app.get('/', (req, res) => res.send("wenas"))
app.get('/wenas', (req, res) => res.send("wenas"))
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

module.exports = app
