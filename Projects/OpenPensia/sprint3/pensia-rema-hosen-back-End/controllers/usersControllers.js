const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pensia:RZzwlzbt6LkEY6OW@first-cluster.s9zoz.mongodb.net/open-pensia",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const { ObjectId } = require("mongodb");

const db = mongoose.connection;
let randomId = () => "_" + Math.random().toString(36).substr(2, 9);
let articlesAboutDirector = [];

try {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("we are connected to DB");
  });
} catch (error) {
  console.log(error);
}

const userSchema = new mongoose.Schema({
  userName: String,
  votes: Array,
  imgUrl: String,
});

const User = mongoose.model("userSchema", userSchema);


let users = [{ id: randomId(), userName: "name", votes: [] }];

// handlers
exports.getUsers = (req, res) => {
  res.send(users);
};

exports.getUserById = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};

exports.createUser = (req, res) => {
  let userToAdd = {
    userName:
      req.body.userName ||
      "https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png",
    imgUrl: req.body.imgUrl,
  };
  const newUser = new User(userToAdd);
  try {
    newUser.save().then(() => console.log("new user saved to DB"));
    res.send({ success: true, addedUser: userToAdd });
  } catch (error) {
    res.send({ success: false, error: error });
  }
};
exports.updateUser = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};
exports.deleteUser = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};
