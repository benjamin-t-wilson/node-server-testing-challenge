const router = require("./apiRouter.js");
const request = require("supertest");

describe("apiRouter.js", () => {
  test("environment should be testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should be status 200", () => {
      request(router)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return json", () => {
      request(router)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
  });
});
