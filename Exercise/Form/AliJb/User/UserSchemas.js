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

module.exports = UserForm;
