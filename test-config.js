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
  .once("open", () => console.log("Connected to MongoDB server successfully!"))
  .on("error", (error) => console.error(error));
