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

const Userschema = new mongoose.Schema({
  name: String,
  counter: String,
});

const UserLot = mongoose.model("Userschema", Userschema);

const userDB = [];

app.post("/send-users", (req, res) => {
  try {
    const users = req.body;

    UserLot.insertMany(users)
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });

    res.send({ ok: true, users });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

app.get("/get-winners", (req, res) => {
  try {
    let first_winner = Math.floor(Math.random() * 6) + 1;
    let second_winner = Math.floor(Math.random() * 6) + 1;
    while (first_winner === second_winner) {
      second_winner = Math.floor(Math.random() * 6) + 1;
    }
    UserLot.find({ counter: { $in: [first_winner, second_winner] } }).then(
      (docs) => {
        console.log(docs);
        res.send({ winners: docs });
      }
    );
  } catch (e) {
    res.send({ error: e });
  }
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

// const users = [
//   {
//     name: "Ali",
//     imgSrc: "https://picsum.photos/200",
//   },
//   {
//     name: "Ahmad",
//     imgSrc: "https://picsum.photos/200",
//   },
//   {
//     name: "Tal",
//     imgSrc: "https://picsum.photos/200",
//   },
//   {
//     name: "Tamar",
//     imgSrc: "https://picsum.photos/200",
//   },
// ];

//insert
