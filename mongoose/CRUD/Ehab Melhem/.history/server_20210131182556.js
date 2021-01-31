const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
const Kittyschema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("kittyschema", Kittyschema);

const pilpel = new Kitten({ name: "pilpel" });
pilpel.save();

let kittens = [{ name: "asd" }, { name: "sad" }];

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
//  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/test"
