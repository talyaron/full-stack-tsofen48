const mongoose = require("mongoose");

const ItemCart = new mongoose.model({
  title: String,
  price: Number,
});

const user = new mongoose.model({
  username: String,
  password: String,
  catrs: [ItemCart],
});
