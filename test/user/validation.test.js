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

  test("requires user name length longer than 2 characters -> using grider style", async () => {
    const newUser = await new User({ name: "ab" });
    const validationError = newUser.validateSync();
    const { message } = validationError.errors.name;
    expect(message).toBe("Name must be longer than 2 characters.");
  });

  test("name must be longer than 2 characters -> using moss style", async () => {
    expect.assertions(1);

    try {
      await User.create({});
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test("Can not save invalid user -> using grider style", async () => {
    const newUser = await new User({ name: "ab" });
    try {
      await newUser.save();
    } catch (e) {
      const validationError = newUser.validateSync();
      const { message } = validationError.errors.name;
      expect(message).toBe("Name must be longer than 2 characters.");
    }
  });

  test("Prevent saving invalid user -> using moss style", async () => {
    expect.assertions(1);

    try {
      await User.create({ name: "ab" });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
