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

////////////////////////////////////////////
// MODELS

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // `name` must be unique
  },
  author: String,
  year: String,
  img: String,
});

const BookModel = mongoose.model("BookModel", BookSchema);

module.exports = BookModel;
