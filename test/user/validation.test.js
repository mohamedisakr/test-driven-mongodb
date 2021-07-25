const User = require("../../src/models/user");

describe("validating user", () => {
  // the first style
  test("requires user name -> using grider style", async () => {
    const newUser = await new User({ name: null });
    const validationError = newUser.validateSync();
    const { message } = validationError.errors.name;
    expect(message).toBe("Name is Required.");
  });

  // the second style
  test("name must be required -> using moss style", async () => {
    expect.assertions(1);

    try {
      await User.create({});
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
