const mongoose = require("mongoose");
const { Schema } = mongoose;

const props = {
  content: {
    type: String,
    required: [true, "Content is Required."],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
};

const commentSchema = new Schema(props, { timestamps: true });
const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
