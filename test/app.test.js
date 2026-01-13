const request = require("supertest");
const app = require("../app");

test("GET / should return success", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("CI/CD Pipeline Working ");
});
