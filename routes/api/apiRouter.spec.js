const server = require("../../server.js");
const request = require("supertest");

describe("root", () => {
  test("environment should be testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("should return 200 OK", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should be json", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });
});

describe("units get", () => {
  it("should be status of 200", async () => {
    const res = await request(server).get("/api/units");
    expect(res.status).toBe(200);
  });

  it("should be json", async () => {
    const res = await request(server).get("/api/units");
    expect(res.type).toBe("application/json");
  });
});

describe("units post", () => {
  it("should give status 200 for post", async () => {
    const res = await request(server)
      .post("/api/units")
      .send({ name: "Goliath" });
    expect(res.status).toBe(201);
  });
  it("should be json", async () => {
    const res = await request(server)
      .post("/api/units")
      .send({ name: "Ghost" });
    expect(res.type).toBe("application/json");
  });
  it("should return object on post", async () => {
    const res = await request(server)
      .post("/api/units")
      .send({ name: "Firebat" });
    expect(res.body.name).toEqual("Firebat");
  });
});

describe("units delete", () => {
  it("should be status of 204", async () => {
    const add = await request(server)
      .post("/api/units")
      .send({ name: "Medic" });

    let id = add.body.id;

    const res = await request(server).delete(`/api/units/${id}`);
    expect(res.status).toBe(204);
  });
});
