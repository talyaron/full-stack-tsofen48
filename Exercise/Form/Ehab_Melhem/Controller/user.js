const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/logindb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const userCollection = mongoose.model("userCollection", userSchema);

exports.addUser = async (req, res) => {
  const { user, pass } = req.body;
  var newUser = new userCollection({
    username: user,
    password: pass,
  });
  userCollection.find({ username: user }).then(async (docs) => {
    if (docs.length === 0) {
      await newUser.save().then(() => {
        console.log("add new user");
        res.send({ index: 1 });
      });
    } else {
      res.send({ index: -1 });
    }
  });
};

exports.checkUser = (req, res) => {
  const { user, pass } = req.body;
  userCollection.find({ username: user, password: pass }).then((docs) => {
    if (docs.length !== 0) {
      res.send({ index: 1 });
    } else {
      res.send({ index: -1 });
    }
  });
};

exports.addForm = (req, res) => {
  const { all } = req.body;
  res.send({ all });
};

exports.getUser = (req, res) => {
  res.send({ messege: "hello" });
};
