const express = require("express");
app = express();
// qY8VXm1OSE8HclJ7
// mongodb+srv://ehab:qY8VXm1OSE8HclJ7@cluster0.jnzgj.mongodb.net/test
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/ehabmelhem
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ehab:qY8VXm1OSE8HclJ7@cluster0.jnzgj.mongodb.net/firstdb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const first = new mongoose.Schema({
  name: String,
  imgSrc: String,
  age: Number,
});

const Kitten = mongoose.model("firstsechma", first);

const pilpel = new Kitten({ name: "pilpel", imgSrc: "null" });
// pilpel.save().then(() => console.log("saved to DB"));
// rwed.save().then(() => {
//   console.log("save rwed to db");
// });
let kittens = [{ name: "asd" }, { name: "sad" }];

app.post("/send-kitten-name", (req, res) => {
  const { name, age, src } = req.body;
  var add = new Kitten({ name: name, age: age, imgSrc: src });
  add.save().then(() => {
    console.log("add " + name + " to the db");
  });
  console.log(name);
  res.send({ ok: true });
});

app.get("/get-kittens-age", (req, res) => {
  const { age } = req.query;
  try {
    //get from DB
    Kitten.find({ age: age }).then((docs) => {
      res.send({ kittens: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});
app.get("/get-kittens", (req, res) => {
  const { name } = req.query;
  try {
    //get from DB
    Kitten.find({ name: name }).then((docs) => {
      res.send({ kittens: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
//  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test"
//read
