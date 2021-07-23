const User = require("../../src/models/user");

describe("reading user info from database", () => {
  let newUser;

  beforeEach(async () => {
    newUser = new User({ name: "john" });
    await newUser.save();
    // done();
  });

  test("find all existing user with specific name", async () => {
    const users = await User.find({ name: "john" });
    console.log(users);
    expect(newUser._id.toString()).toBe(users[0]._id.toString());
  });
});
