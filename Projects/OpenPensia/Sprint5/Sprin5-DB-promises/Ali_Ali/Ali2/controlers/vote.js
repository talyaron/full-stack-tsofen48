const express = require("express");
const app = express();

const user = {
  company: "בנק הפועלים",
  src: "https://picsum.photos/200",
  name: "user",
};

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

const userSchema = new mongoose.Schema({
  company: String,
  src: String,
  name: String,
});

const Uservote = mongoose.model("userVote", userSchema);

const vote = {
  positive: 79,
  negative: 21,
};

exports.getVoteData = (req, res, next) => {
  res.send({ vote });
};

exports.getUserData = (req, res, next) => {
  Uservote.find({}).then((docs) => {
    res.send(docs[0]);
  });
  // res.send({ user });
};

// const u = new Uservote({
//   company: "בנק הפועלים",
//   src: "https://picsum.photos/200",
//   name: "user",
//   role: "public",
// });
// u.save().then(() => console.log("saved to DB2"));
