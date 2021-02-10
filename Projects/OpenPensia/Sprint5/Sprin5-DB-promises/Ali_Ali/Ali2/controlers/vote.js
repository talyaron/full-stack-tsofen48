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
  positive: 80,
  negative: 20,
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

// const directorsSchema = new mongoose.Schema({
//   direct: [{ name: String, img: String, like: Boolean }],
// });

// const directorsCollection = mongoose.model("directorSchema", directorsSchema);
// const dc = new directorsCollection({ direct:[
//   {
//     img: "/p1.PNG",
//     name: "רונית אברמוזון רוקח",
//     unlikeColor: false,
//     likeColor: true,
//   },
//   { img: "/p2.PNG", name: "עיסאווי פריג", unlikeColor: true, likeColor: false },
//   { img: "/p3.PNG", name: " דליה לב", unlikeColor: false, likeColor: true }
// ] });
// dc.save().then(()=>console.log('saved to DB'));

// const u = new Uservote({
//   company: "בנק הפועלים",
//   src: "https://picsum.photos/200",
//   name: "user",
//   role: "public",
// });
// u.save().then(() => console.log("saved to DB2"));

// exports.getDescData = (req, res, next) => {
//   // usersCollection.find({}).then((docs) => {
//   //   res.send(docs[0]);
//   // });
//   res.send(user);
// };

// exports.getDirectors = (req, res, next) => {
//   // directorsCollection.find({}).then((docs) => {
//   //   res.send(docs[0].direct);
//   // });
//   res.send(directors);
// };

// const directors = [
//   { name: "רונית אברמוזון רוקח", img: "https://picsum.photos/200", like: true },
//   { name: " דליה לב", img: "https://picsum.photos/200", like: true },
//   { name: "עיסאווי פריג", img: "https://picsum.photos/200", like: false },
// ];
