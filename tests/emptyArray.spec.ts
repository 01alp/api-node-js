import { test, expect } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
test.describe("Test return Empty Array if no Users in Database", () => {
  test("GET / - should return empty when no users", async ({ request }) => {
    const response = await request.get("");
    expect(response.status()).toBe(StatusCodes.OK);
    const responseBody = await response.text();
    expect(responseBody).toBe("[]");
  });
});
