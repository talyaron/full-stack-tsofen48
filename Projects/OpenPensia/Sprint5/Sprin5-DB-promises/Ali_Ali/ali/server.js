const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("client/build"));

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

const companySchema = new mongoose.Schema({
  logo: String,
  name: String,
  desc: String,
});
const Company = mongoose.model("Company", companySchema);

//read
app.get("/get-companies", (req, res) => {
  try {
    //get from DB
    Company.find({}).then((docs) => {
      res.send({ companies: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`\x1b[36m Server running on port ${port}  🔥`);
});
