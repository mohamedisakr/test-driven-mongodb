const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const props = {
  title: {
    type: String,
    required: [true, "Title is Required."],
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Content is Required."],
  },
};

const blogPostSchema = new Schema(props, { timestamps: true });
const BlogPost = mongoose.model("blogPost", blogPostSchema);
module.exports = BlogPost;
