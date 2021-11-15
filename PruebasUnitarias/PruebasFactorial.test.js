const request = require("supertest");
const app = require("../index");

describe("Factorial", () => {
  it("Datos bueno", (done) => {
    request(app)
      .get("/factorial/factorial/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"3628800"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("Datos decimales", (done) => {
    request(app)
      .get("/factorial/factorial/1.5")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect('"No es entero"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

});