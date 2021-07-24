const User = require("../../src/models/user");

describe("deleting user", () => {
  let newUser;

  beforeEach(async () => {
    newUser = new User({ name: "john" });
    await newUser.save();
  });

  /*
  test("model instance remove", async () => {
    // console.log(user);
    const userToDeleteId = newUser._id;
    await newUser.remove();
    const user = await User.findById(userToDeleteId);
    // toBeFalsy() & toBeNull() work perfectly fine but toBeUndefined() does not work
    // expect(user).toBeUndefined();
    // expect(user).toBeFalsy();
    expect(user).toBeNull();
  });
  */

  /*
  test("model remove", async () => {
    await User.remove({ name: "john" });
    const user = await User.findOne({ name: "john" });
    expect(user).toBeNull();
  });
*/

  /*
  test("model findOneAndRemove", async () => {
    await User.findOneAndRemove({ name: "john" });
    const user = await User.findOne({ name: "john" });
    expect(user).toBeNull();
  });
  */

  test("model findByIdAndRemove", async () => {
    const id = newUser._id;
    await User.findByIdAndRemove(id);
    const user = await User.findById(id);
    expect(user).toBeNull();
  });
});
