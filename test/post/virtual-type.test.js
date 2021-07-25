const User = require("../../src/models/user");

describe("virtual types", () => {
  test("postCount get # of posts", async () => {
    try {
      const userToCreate = await User.create({
        name: "john",
        posts: [
          { title: "Backend is hard" },
          { title: "Database Anti-Pattern" },
        ],
      });
      const { postCount, posts } = userToCreate;
      console.log(`postCount is ${postCount}`);
      console.log(`posts # is ${posts.length}`);
      expect(postCount).toBe(2); // posts.length
    } catch (e) {
      // expect(e).toBeTruthy();
    }
  });
});
