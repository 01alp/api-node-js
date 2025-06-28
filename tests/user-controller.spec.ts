// tests/api.spec.ts
import { test, expect } from "@playwright/test";
import { StatusCodes } from "http-status-codes";

const baseUrl = "http://localhost:3000/users";
let userID: number[] = [];
test.describe.configure({ mode: "serial" });
test.describe("User management API", () => {
  test.beforeAll(async ({ request }) => {
    const dataResponse = await request.get(`${baseUrl}`);
    const dataResponseBody = await dataResponse.json();
    for (const user of dataResponseBody) {
      userID.push(user.id);
    }
    console.log("UserIds", userID);
  });

  test("POST / - should add a new user", async ({ request }) => {
    const response = await request.post(`${baseUrl}`);
    expect(response.status()).toBe(StatusCodes.CREATED);
    const responseBody = await response.json();
    console.log(responseBody);
    userID.push(responseBody.id);
  });
  test("GET /:id - should return a user by ID", async ({ request }) => {
    const response = await request.get(`${baseUrl}/${userID[0]}`);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(StatusCodes.OK);
  });
  test("GET /:id - should return 404 if user not found", async ({
    request,
  }) => {
    const response = await request.get(`${baseUrl}/${userID[0] + 999}`);
    const responseBody = await response.text();
    console.log(responseBody);
    expect(response.status()).toBe(StatusCodes.NOT_FOUND);
  });

  test("DELETE /:id - should delete a user by ID", async ({ request }) => {
    const response = await request.delete(`${baseUrl}/${userID[0]}`);
    console.log("Status:", response.status());
    const body = await response.json();
    console.log(body);
    expect(response.status()).toBe(StatusCodes.OK);
  });

  test("DELETE /:id - should return 404 if user not found", async ({
    request,
  }) => {
    const response = await request.delete(`${baseUrl}/${userID[0] + 999}`);
    const body = await response.json();
    expect(response.status()).toBe(StatusCodes.NOT_FOUND);
  });
});
