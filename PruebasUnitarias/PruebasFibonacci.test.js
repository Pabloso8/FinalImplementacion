const request = require("supertest");
const app = require("../index");

describe("Fibonacci", () => {
  it("Datos bueno", (done) => {
    request(app)
      .get("/fibonacci/sucesionNumerosFibonacci/5")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"0,1,1,2,3"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("Datos no númericos", (done) => {
    request(app)
      .get("/fibonacci/sucesionNumerosFibonacci/asasd")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"No es número"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

});