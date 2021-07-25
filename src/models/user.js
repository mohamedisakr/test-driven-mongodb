const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const props = {
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: "Name must be longer than 2 characters.",
    },
    required: [true, "Name is Required."],
    unique: true,
  },
  postCount: { type: Number, default: 0 },
};

const userSchema = new Schema(props, { timestamps: true });

const User = mongoose.model("user", userSchema);

module.exports = User;
