const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const props = {
  title: {
    type: String,
    // required: [true, "Title is Required."],
    // unique: true,
  },
};

const timestampsConfig = { timestamps: true };

const postSchema = new Schema(props, timestampsConfig);

// const Post = mongoose.model("post", postSchema);

module.exports = postSchema;
