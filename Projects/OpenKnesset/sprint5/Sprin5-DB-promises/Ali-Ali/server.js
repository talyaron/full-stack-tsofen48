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

const dataSchema = new mongoose.Schema({
  title: String,
  info: String,
});
const Data = mongoose.model("Data", dataSchema);

// Data.insertMany([
//   {
//     title: "שאילתה רגילה",
//     info:
//       "שאלה לשר על עניין שבתחום תפקדיו, אותה מפנה חבר כנסת, שאינו שר או סגן שר. התשובה לשאילתה תינתן במליאת הכנסת. על השר להשיב תוך 21 ימים.",
//   },
//   {
//     title: "נאום בן דקה",
//     info:
//       "נאום של חבר כנסת, בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו״ר הכנסת או סגן יו״ר הכנסת המנהלים את הישיבה בפועל).",
//   },
//   {
//     title: "כינוס הכנסת בזמן הפגרה",
//     info:
//       "הגשת דרישה ליו״ר הכנסת על ידי 25 ח״כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום.",
//   },
// ])
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });

//read
app.get("/get-data", (req, res) => {
  try {
    //get from DB
    Data.find({}).then((docs) => {
      res.send({ data: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`\x1b[36m Server running on port ${port}  🔥`);
});
