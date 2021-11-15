const request = require("supertest");
const app = require("../index");

describe("Circulo", () => {
  it("Datos bueno", (done) => {
    request(app)
      .get("/circulo/circulo/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('{"areaCir":62.83185307179586,"perimetroCir":314.1592653589793}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("Datos negativos", (done) => {
    request(app)
      .get("/circulo/circulo/-1.5")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"Algún dato es muy pequeño"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

});