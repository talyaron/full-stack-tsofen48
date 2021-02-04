const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/open_pensia",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
const header db


exports.sendVote = (req, res, next) => {
  let index = 0;
  if (req.cookies.role === "public") {
    index = 1;
    res.send({ vote: vote, index: index });
  } else {
    index = -1;
    res.send({ vote: vote, index: index });
  }
};

exports.sendUser = (req, res, next) => {
  let index = 0;
  if (req.cookies.role === "public") {
    index = 1;
    res.send({ user: user, index: index });
  } else {
    index = -1;
    res.send({ user: user, index: index });
  }
};
