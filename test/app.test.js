const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("CI/CD Pipeline Working 🚀"));

test("GET / should return success", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("CI/CD Pipeline Working 🚀");
});
