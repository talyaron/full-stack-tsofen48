const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ali1:vl4mY1oSLNqojuZd@cluster0.rfya4.mongodb.net/test1?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const Kittyschema = new mongoose.Schema({
  name: String,
  imgSrc: String,
  age: Number,
});

const Kitten = mongoose.model("kittyschema", Kittyschema);


exports.getKitty = (req, res) => {
  try {
    //get from DB
    Kitten.find({}).then((docs) => {
      res.send({ kittens: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
};

// exports.getkittyById = (req, res) => {
//   res.send({
//     status: "this functions is not ready yet - it's under constructions",
//     message: "This route functionality is not yet defined!",
//   });
// };
// exports.createkitty = (req, res) => {
//   res.send({
//     status: "this functions is not ready yet - it's under constructions",
//     message: "This route functionality is not yet defined!",
//   });
// };
// exports.updatekitty = (req, res) => {
//   res.send({
//     status: "this functions is not ready yet - it's under constructions",
//     message: "This route functionality is not yet defined!",
//   });
// };
// exports.deletekitty = (req, res) => {
//   res.send({
//     status: "this functions is not ready yet - it's under constructions",
//     message: "This route functionality is not yet defined!",
//   });
// };
