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
  */

  test("model instance update", async () => {
    await newUser.update({ name: "Alex" });
    const user = await User.findOne({ name: "Alex" });
    expect(user).not.toBeNull();
  });
});
