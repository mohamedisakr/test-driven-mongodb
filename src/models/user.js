const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const props = {
  name: { type: String, required: [true, "Name is Required."], unique: true },
  postCount: { type: Number, default: 0 },
};

const userSchema = new Schema(props, { timestamps: true });

const User = mongoose.model("user", userSchema);

module.exports = User;
