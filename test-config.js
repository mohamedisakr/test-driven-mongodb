const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const uri = "mongodb://localhost:27017/tdd-mongodb";

// beforeAll(async (done) => {
// });

mongoose.connect(uri, {
  useNewUrlParser: true,
  poolSize: 50,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .once("open", (done) => {
    () => done();
  })
  .on("error", (error) => console.error(error));

//
beforeEach((done) => {
  const { users, blogposts, comments } = mongoose.connection.collections;

  users.drop(() => {
    blogposts.drop(() => {
      comments.drop(() => {
        done();
      });
    });
  });

  // mongoose.connection.collections.users.drop(() => {
  //   done();
  // });
});

afterAll((done) => {
  mongoose.disconnect();
  return done();
});

// function clearDB() {
//   for (let i in mongoose.connection.collections) {
//     mongoose.connection.collections[i].remove(function () {});
//   }
//   return done();
// }

// if (mongoose.connection.readyState === 0) {
//   try {
//     await connect(uri); //+ db
//     clearDB();
//   } catch (e) {
//     throw e;
//   }
// } else {
//   clearDB();
// }
