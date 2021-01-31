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
  imgSrc: String,
  age: Number,
});

const Kitten = mongoose.model("kittyschema", Kittyschema);

const pilpel = new Kitten({ name: "pilpel" });

//   pilpel.save().then(()=>console.log('saved to DB'));
// const Cat = mongoose.model("Cat", { name: String, imgSrc: String });
// const kittens = [{ name: "Zildjian" }, { name: "lara" }];
// Cat.insertMany(kittens, (doc) => {
//   console.log(doc);
// });
//   Cat.insertMany([(name: name)], (doc) => {
//     console.log(doc);
//   });

let kittens = [{ name: "asd" }, { name: "sad" }];

//insert
app.post("/send-kitten-name", (req, res) => {
  try {
    const { name, age, imgSrc } = req.body;

    if (typeof name !== "string") {
      throw new Error("name is not a String");
    }

    if (name.length > 0) {
      const userKitten = new Kitten({ name, imgSrc, age });
      userKitten.save().then(() => console.log(name, "saved to db"));

      res.send({ ok: true, name: name });
    } else {
      res.send({ ok: false, error: e });
    }
  } catch (error) {
    res.send({ ok: false, error: e });
  }
});

//filter
app.post("/get-kitten-filter", (req, res) => {
  try {
    const { filter } = req.body;

    Kitten.find({ name: filter }).then((docs) => {
      console.log(docs);
      res.send({ kittens: docs });
    });
  } catch (error) {
    res.send({ ok: false, error: e });
  }
});

//get read

//read
app.get("/get-kittens", (req, res) => {
  try {
    //get from DB
    Kitten.find({}).then((docs) => {
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
