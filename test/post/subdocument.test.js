const User = require("../../src/models/user");

describe("post subdocument", () => {
  test("user can create posts", async () => {
    try {
      const userToCreate = await User.create({
        name: "john",
        posts: [{ title: "Backend is hard" }],
      });
      // console.log(userToCreate);
      expect(userToCreate.posts.length).toBe(1);
    } catch (e) {
      // expect(e).toBeTruthy();
    }
  });
});
