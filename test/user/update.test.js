const User = require("../../src/models/user");

describe("updating user", () => {
  let newUser;

  beforeEach(async () => {
    newUser = new User({ name: "john" });
    await newUser.save();
  });

  /*
  test("instance set & save", async () => {
    newUser.set("name", "Alex");
    await newUser.save();
    const user = await User.findOne({ name: "Alex" });
    expect(user).not.toBeNull();
  });
  
  test("model instance update", async () => {
    await newUser.update({ name: "Alex" });
    const user = await User.findOne({ name: "Alex" });
    expect(user).not.toBeNull();
  });
  */

  // test("user can increment his/her postCount -> update one", async () => {
  //   // console.log(`The new user is ${newUser}`);
  //   const id = newUser._id;

  //   const user = await User.findByIdAndUpdate(
  //     id,
  //     { $set: { postCount: 10 } },
  //     { new: true }
  //   ).exec();

  //   expect(user.postCount).toBe(10);
  // });

  test("user can increment his/her postCount -> update many", async () => {
    const id = newUser._id;
    const user = await User.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    // console.log(user);
    const { likes } = user;
    expect(likes).toBe(1);
  });
});
