const request = require("supertest");
const app = require("../server.js");

describe("User API", () => {
  test("should show all users with emails", async (done) => {
    const result = await request(app).get("/api/all");
    expect(result.status).toBe(200);
    for (let i = 0; i < result.body.length; i++) {
      expect(result.body[i]).toHaveProperty("email");
    }
    done();
  });

  test("should authenticate an existing user", async (done) => {
    const result = await request(app).post("/api/login").send({
      email: "Tomtom@gmail.com",
      password: "Tomas",
    });
    expect(result.status).toBe(200);
    done();
  });

  test("should register a new user", async (done) => {
    const result = await request(app).post("/api/registerUser").send({
      firstname: "Anders",
      lastname: "Andersson",
      email: "Andand@gmail.com",
      password: "Anders",
    });
    // If the new user doesn't exist in the database return 200 else return 401.
    if (result.status == 200) {
      expect(result.status).toBe(200);
    } else {
      expect(result.status).toBe(401);
    }
    done();
  });

  test("should migrate user data to new database", async (done) => {
    const result = await request(app).get("/api/migrateData");
    expect(result.status).toBe(200);
    done();
  });
});
