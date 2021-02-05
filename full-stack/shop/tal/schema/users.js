const mongoose = require('mongoose');

const ItemInCart = new mongoose.Schema({
    title:String,
    price:Number,
    amount: Number
})


const User = new mongoose.Schema({
    username:String,
    password:String,
    cart:[ItemInCart]
})


export default User;