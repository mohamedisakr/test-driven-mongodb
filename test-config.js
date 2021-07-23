const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const uri = "mongodb://localhost:27017/tdd-mongodb";

mongoose.connect(uri, {
  useNewUrlParser: true,
  poolSize: 50,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", (done) => {
    () => done();
  })
  .on("error", (error) => console.error(error));

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});

afterAll((done) => {
  mongoose.disconnect();
  return done();
});
