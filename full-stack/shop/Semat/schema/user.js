const mongoose = require('mongoose');

const ItemCart = new mongoose.Schema({
    ItemName: String,
    price: Number,
    amount: String,
  });

  const User = new mongoose.Schema({
    id: String,
    password: String,
    items: [ItemCart],
  });

 export default User;