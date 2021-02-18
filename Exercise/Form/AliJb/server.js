const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// Router
var User = require("./User/UserSchemas");
var Question = require("./Question/QuestionSchema");

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration
// Router

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.post("/submit-questions", (req, res) => {
  try {
    const { questions, user } = req.body;

    questions.map((question) => {
      const temp = new Question({ question: question, username: user });
      temp.save().then(() => console.log("Question was saved in DB!"));
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

app.post("/register-user", (req, res) => {
  try {
    const { username, password } = req.body;

    const temp = new User({ username: username, password: password });
    User.findOne({ username }, function (err, doc) {
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
    User.findOne({ username, password }, function (err, doc) {
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

app.listen(3002, () => {
  console.log("listen on port 3002");
});
