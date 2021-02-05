const mongoose = require("mongoose");

const ItemCart = new mongoose.model({
  title: String,
  price: Number,
});
