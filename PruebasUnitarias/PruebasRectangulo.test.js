const request = require("supertest");
const app = require("../index");

describe("Rectangulo", () => {
  it("Datos bueno", (done) => {
    request(app)
      .get("/rectangulo/rectangulo/10/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect( '{"areaRec":100,"perimetroRec":40}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("Datos inválidos", (done) => {
    request(app)
      .get("/rectangulo/rectangulo/asd/-111")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"Algún dato no es número"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

});