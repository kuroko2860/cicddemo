const request = require("supertest");
const app = require("../server");

// mock test
function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// server test
describe("GET /", () => {
  test("should return 200 OK and a message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      '"Hello, World! This is my first Express server. Some thing change!!!"'
    );
  });
});
