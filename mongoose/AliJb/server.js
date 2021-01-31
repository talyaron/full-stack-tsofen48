const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

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
});

const Kitten = mongoose.model("kittyschema", Kittyschema);

const pilpel = new Kitten({ name: "pilpel" });

//   pilpel.save().then(()=>console.log('saved to DB'));
// const Cat = mongoose.model("Cat", { name: String, imgSrc: String });
// const kittens = [{ name: "Zildjian" }, { name: "lara" }];
// Cat.insertMany(kittens, (doc) => {
//   console.log(doc);
// });

let kittens = [{ name: "asd" }, { name: "sad" }];

app.post("/send-kitten-name", (req, res) => {
  const { name } = req.body;
  const userKitten = new Kitten({ name: name });
  userKitten.save().then(() => console.log(name, "saved to db"));
  //   Cat.insertMany([(name: name)], (doc) => {
  //     console.log(doc);
  //   });
  res.send({ ok: true, name: name });
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
