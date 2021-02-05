const mongoose = require('mongoose');

const ItemCart = new mongoose.Schema({
    title: String,
    price: Number,
    amount: Number,
  });

  const User = new mongoose.Schema({
    user: String,
    pass: String,
    cart: [ItemCart]
  });
  
export default User;