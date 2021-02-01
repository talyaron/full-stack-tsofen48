const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/ehabmelhem",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const Kittyschema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("kittyschema", Kittyschema);

const pilpel = new Kitten({ name: "pilpel" });
const rwed = new Kitten({ name: "rwed" });
// pilpel.save().then(() => console.log("saved to DB"));
// rwed.save().then(() => {
//   console.log("save rwed to db");
// });
let kittens = [{ name: "asd" }, { name: "sad" }];

app.post("/send-kitten-name", (req, res) => {
  const { name } = req.body;
  var add = new Kitten({ name: name });
  add.save().then(()=>{console.log("add ")})
  console.log(name);
  res.send({ ok: true });
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
//  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test"
