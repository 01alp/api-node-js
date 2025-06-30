import { test, expect } from "@playwright/test";
let baseURL: string = "http://localhost:3000/users";

test.describe("User managment API with Loop", () => {
  test.beforeEach(async ({ request }) => {
    let userIDs: number[];
    const response = await request.get(`${baseURL}`);
    const responseBody = await response.json();
    // Loop all users and store IDs in Array
    
  });
});