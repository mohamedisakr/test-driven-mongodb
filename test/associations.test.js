const mongoose = require("mongoose");
const User = require("../src/models/user");
const BlogPost = require("../src/models/blogPost");
const Comment = require("../src/models/comment");

describe("associations among models", () => {
  let newUser;
  let newBlogPost;
  let newComment;

  test("user can has blog post ", async () => {
    const firstBlogPost = await BlogPost.create({
      title: "JavaScript is very interesting",
      content: "Here is my road map",
    });

    const secondBlogPost = await BlogPost.create({
      title: "Introduction to Node.js v2",
      content: "Node.js is the most powerful backend teck",
    });

    const userToCreate = await User.create({
      name: "john",
      blogPosts: [firstBlogPost._id, secondBlogPost._id],
    });

    const {
      blogPosts: { length },
    } = userToCreate;

    expect(length).toBe(2);
  });

  test("check populate", async () => {
    const firstBlogPost = await BlogPost.create({
      title: "JavaScript is very interesting",
      content: "Here is my road map",
    });

    // const secondBlogPost = await BlogPost.create({
    //   title: "Introduction to Node.js v2",
    //   content: "Node.js is the most powerful backend teck",
    // });

    const userToCreate = await User.create({
      name: "john",
      blogPosts: [firstBlogPost._id],
    });

    const userToFound = await User.findById(userToCreate._id)
      .populate("blogPost")
      .exec();

    const { blogPosts } = userToFound;
    // console.log(blogPosts);
    console.log(userToFound);
    expect(blogPosts.length).toBe(1);
  });

  /*
  beforeEach(async (done) => {
    // initialize
    newUser = new User({ name: "john" });
    newBlogPost = new BlogPost({
      title: "JavaScript is very interesting",
      content: "Here is my road map",
    });
    newComment = new Comment({ content: "You are right!" });

    // relation
    newUser.blogPosts.push(newBlogPost);
    newBlogPost.comments.push(newComment);
    newComment.user = newUser;

    // save to mongodb
    // Promise.all([newUser.save(), newBlogPost.save(), newComment.save()]).then(
    //   () => {
    //     done;
    //   }
    // );

    await newUser.save();
    await newBlogPost.save();
    await newComment.save();
  });

  test("save a user and its blogPosts", async () => {
    jest.setTimeout(15000);
    const userToFetch = await User.findOne({ name: "john" }); //User.findById(newUser._id);
    console.log(userToFetch);
    // done();
  });
  */
});
