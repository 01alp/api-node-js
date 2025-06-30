import { test, expect } from "@playwright/test";
let baseURL: string = "http://localhost:3000/users";

test.describe("User management API with Loop", () => {
  test.beforeEach(async ({ request }) => {
    let userIDs: number[] = [];
    const response = await request.get(`${baseURL}`);
    const responseBody = await response.json();
    // Loop all users and store IDs in Array
    console.log("ResponseBody:", responseBody);
    for (const user of responseBody) {
      userIDs.push(user.id);
    }
    console.log("UserIDs:", userIDs);
    // delete all users in a loop
    for (const user of userIDs) {
      let response = await request.delete(`${baseURL}/${user}`);
      expect.soft(response.status()).toBe(200);
      console.log(`User ID Deleted: ${user}`);
    }
  });
  test("GET / - should return empty when no users", async ({ request }) => {
    const response = await request.get(`${baseURL}`);
    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    expect(responseBody).toBe("[]");
  });
  test("Should Create N users ", async ({ request }) => {
    const nUsers: number = 2;
    for (let i = 1; i <= nUsers; i++) {
      await request.post(`${baseURL}`);
    }
    const responseAllUsers = await request.get(`${baseURL}`);
    const responseBodyAllUsers = await responseAllUsers.json();
    console.log(`Number of users: ${responseBodyAllUsers.length}`);
    console.log("All users", responseBodyAllUsers);
    for (let i = 1; i <= nUsers; i++) {
      console.log(`User ${i}: `, responseBodyAllUsers[i - 1]);
    }
    expect(nUsers).toBe(responseBodyAllUsers.length);
  });
  test("Delete all users and verify empty response", async ({ request }) => {
    const nUsers = 5;
    for (let i = 1; i <= nUsers; i++) {
      await request.post(`${baseURL}`);
    }
    const responseAllUsers = await request.get(`${baseURL}`);
    const responseBodyAllUsers = await responseAllUsers.json();
    for (const user of responseBodyAllUsers) {
      let response = await request.delete(`${baseURL}/${user.id}`);
      console.log("User deleted", user);
      expect.soft(response.status()).toBe(200);
    }
    const finalResponse = await request.get(`${baseURL}`);
    const finalUsers = await finalResponse.json();
    expect(finalUsers).toEqual([]);
  });
  test("Delete one user and verify other users", async ({ request }) => {
    const nUsers = 5;
    for (let i = 1; i <= nUsers; i++) {
      await request.post(`${baseURL}`);
    }
    const responseAllUsers = await request.get(`${baseURL}`);
    const responseBodyAllUsers = await responseAllUsers.json();
    const allUsersLength = responseBodyAllUsers.length;
    console.log(`Deleting user: `, responseBodyAllUsers[0]);
    const delete1user = await request.delete(
      `${baseURL}/${responseBodyAllUsers[0].id}`
    );

    const finalResponse = await request.get(`${baseURL}`);
    const finalResponseBody = await finalResponse.json();
    const finalResponseBodyLength = finalResponseBody.length;
    console.log("Before:, After:", allUsersLength, finalResponseBodyLength);
    expect(finalResponseBodyLength).toBe(allUsersLength - 1);
  });
});
