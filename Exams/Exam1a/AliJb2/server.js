const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("client/build"));

// var cookieParser = require("cookie-parser");
// app.use(cookieParser());
const toolRouter = require("./routes/kittyRoute");

// app routes
app.use("/getKitty", toolRouter);

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
    res.send({ ok: false, error: error });
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
    res.send({ ok: false, error: error });
  }
});

//get read

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

// const express = require("express");
// app = express();

// var bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(express.static("client/build"));

// // var cookieParser = require("cookie-parser");
// const toolRouter = require("./routes/toolRoute");
// const takanonRoute = require("./routes/takanonRoute");
// const futureRoute = require("./routes/futureRoute");
// const historyRoute = require("./routes/historyRoute");
// const suggestionsRoute = require("./routes/suggestionsRoute");

// // app.use(cookieParser());

// // app routes
// app.use("/get-tool", toolRouter);
// app.use("/get-takanon", takanonRoute);
// app.use("/get-future", futureRoute);
// app.use("/get-history", historyRoute);
// app.use("/post-suggestion", suggestionsRoute);

// const PORT = process.env.PORT || 3006;

// app.listen(PORT, () => {
//   console.log(`Listening on Port: ${PORT}`);
// });
