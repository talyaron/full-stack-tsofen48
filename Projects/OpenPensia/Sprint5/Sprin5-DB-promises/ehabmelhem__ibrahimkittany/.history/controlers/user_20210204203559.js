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

const vote = new mongoose.Schema({
  with: Number,
  without: Number,
});
const header = new mongoose.Schema({
  name: String,
  src: String,
  company: String,
  role: String,
});
const vote__model = mongoose.model("vote", vote);
const header__model = mongoose.model("header", header);
var add = new header__model({
  name: "איהאב מלחם",
  company: "בנק הפועלים",
  src:
    "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125438654_373110843960499_4486130208098717291_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_ohc=NDUGeHQAneQAX8vOHAM&tp=1&oh=8500725c449de8a495c329240d76c4c5&oe=602E028F",
  role: "public",
});
var add_vote = new vote__model({
  with: 80,
  without: 20,
});

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
