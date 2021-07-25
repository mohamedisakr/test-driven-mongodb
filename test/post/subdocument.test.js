const User = require("../../src/models/user");

describe("post subdocument", () => {
  // test("user can create posts", async () => {
  //   try {
  //     const userToCreate = await User.create({
  //       name: "john",
  //       posts: [
  //         { title: "Backend is hard" }, // { title: "Database Anti-Pattern" },
  //       ],
  //     });
  //     const { posts } = userToCreate;
  //     // expect(posts[0].title).toBe("Backend hard");
  //     expect(posts.length).toBe(1);
  //   } catch (e) {
  //     // expect(e).toBeTruthy();
  //   }
  // });

  test("add new posts to an existing users", async () => {
    try {
      const userToCreate = await User.create({
        name: "john",
        posts: [], //[{ title: "Backend is hard" }],
      }); //.exec(); --->> throw an error

      const id = userToCreate._id;
      //  {$push: {"messages": {title: title, msg: msg}}},
      const userToUpdate = await User.findByIdAndUpdate(
        id,
        { $push: { posts: { title: "Database Anti-Pattern" } } },
        { new: true }
      );

      const {
        posts: { length },
      } = userToUpdate; // console.log(`Posts length is ${length}`);

      const { posts } = userToUpdate;

      console.log(`First post title is ${posts[0].title}`);
      // expect(length).toBe(10); // must be 2, and test must fail
      expect(posts[0].title).toBe("Database Anti-Pattern");
    } catch (e) {
      // expect(e).toBeTruthy();
    }
  });
});

// try {
// const userToUpdate = await User.findOneAndUpdate(
//   { name: "john" },
//   // { $set: { postCount: 10 } },
//   { new: true }
// ).exec();
// console.log(userToUpdate);
// expect(userToUpdate.posts.length).toBe(100);
