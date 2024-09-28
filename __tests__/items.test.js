const request = require("supertest");
const app = require("../index");

describe("Items API", () => {
  describe("POST /api/items", () => {
    it("should create a new item", async () => {
      const response = await request(app)
        .post("/api/items")
        .send({ name: "Test Item", price: 29.99 });
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });
  });

  describe("GET /api/items", () => {
    it("should retrieve all items", async () => {
      const response = await request(app).get("/api/items");
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe("PUT /api/items/:id", () => {
    it("should update an existing item", async () => {
      const response = await request(app)
        .put("/api/items/1")
        .send({ name: "Updated Item", price: 39.99 });
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  describe("DELETE /api/items/:id", () => {
    it("should delete an existing item", async () => {
      const response = await request(app).delete("/api/items/1");
      expect(response.status).toBe(204);
    });
  });
});
