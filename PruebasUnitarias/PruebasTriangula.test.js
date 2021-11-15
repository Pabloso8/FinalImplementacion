const request = require("supertest");
const app = require("../index");

describe("Triangulo", () => {
  it("Datos bueno", (done) => {
    request(app)
      .get("/triangulo/triangulo/10/10/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect( '{"areaTri":43.30127018922193,"perimetroTri":30}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("Datos triángulo inválido", (done) => {
    request(app)
      .get("/triangulo/triangulo/100/10/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"Triángulo no válido"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

});