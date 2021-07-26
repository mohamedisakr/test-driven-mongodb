const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;
// const postSchema = require("./post");

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
  likes: { type: Number, default: 0 },
  blogPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "blogPost",
    },
  ],
  // posts: [postSchema],
};

const userSchema = new Schema(props, { timestamps: true });
userSchema.virtual("postCount").get(function () {
  return this.posts.length;
});

const User = mongoose.model("user", userSchema);
module.exports = User;
