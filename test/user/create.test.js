const User = require("../../src/models/user");
const { createUser, getUserById } = require("../../src/data-access/user");

describe("creating user", () => {
  test("save a new user with save function", async () => {
    const newUser = new User({ name: "john" });
    await newUser.save();
    expect(newUser.isNew).toBe(false);
  });

  test("user name should be unique", async () => {
    // expect.assertions(1);

    try {
      await User.create({ name: "john" });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  // test("create a user", async () => {
  //   const userConfig = { name: "Nemo" };
  //   const { id } = await createUser(userConfig);
  //   // const match = await User.findById(id).exec();
  //   const match = await getUserById(id).exec();
  //   expect(match.id).toBe(id);
  // });

  // test("save a new user", async () => {
  //   const newUser = await User.create({ name: "john" });
  //   expect(newUser.name).toBe("john");
  // });
});
