const mongoose = require("mongoose");

const cartItem = new mongoose.Schema({
  name: String,
  price: Number,
  amount: Number,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  cartItems: [cartItem],
});

module.exports = userSchema;
