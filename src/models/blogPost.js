const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
};

const blogPostSchema = new Schema(props, { timestamps: true });
const BlogPost = mongoose.model("blogPost", blogPostSchema);
module.exports = BlogPost;
