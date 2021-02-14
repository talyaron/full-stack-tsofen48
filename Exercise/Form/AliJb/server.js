const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// Router

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration
// Router

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

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

const UserFormschema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserForm = mongoose.model("UserForm", UserFormschema);

app.post("/register-user", (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(password);
    // console.log(username);
    const temp = new UserForm({ username: username, password: password });
    UserForm.findOne({ username }, function (err, doc) {
      if (doc == null) {
        temp.save().then(() => console.log("user was saved in DB!"));
        res.send({ ok: true });
      } else {
        console.log(err);
        res.send({ ok: false });
      }
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

app.post("/login-user", (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(password);
    // console.log(username);
    const temp = new UserForm({ username: username, password: password });
    UserForm.findOne({ username, password }, function (err, doc) {
      if (doc == null) {
        res.send({
          ok: false,
          error: "no user was found in db or password is incorrect",
        });
      } else {
        console.log("ok");
        res.send({ ok: true });
      }
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

// app.get("/get-winners", (req, res) => {
//   try {
//     let first_winner = Math.floor(Math.random() * 6) + 1;
//     let second_winner = Math.floor(Math.random() * 6) + 1;
//     while (first_winner === second_winner) {
//       second_winner = Math.floor(Math.random() * 6) + 1;
//     }
//     UserLot.find({ counter: { $in: [first_winner, second_winner] } }).then(
//       (docs) => {
//         console.log(docs);
//         res.send({ winners: docs });
//       }
//     );
//   } catch (e) {
//     res.send({ error: e });
//   }
// });

// const Cat = mongoose.model("Cat", { name: String, souls: Number }); //schema

// const kitty = new Cat({ name: "Kitti", souls: 9 }); //instance

// kitty.save().then(() => console.log("kitti was saved to DB")); //save

app.listen(3002, () => {
  console.log("listen on port 3002");
});
