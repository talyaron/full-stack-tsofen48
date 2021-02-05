//DB Conn
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:t6GUh9GibusbwWBC@cluster0.gntlf.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const Item = new mongoose.Schema({
  name: String,
  price: Number,
});

const User = new mongoose.Schema({
  userName: String,
  password: String,
  cart: [item],
});

const item = mongoose.model("Item", Item);
const user = mongoose.model("User", User);
