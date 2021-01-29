const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/tsofn48', {useNewUrlParser: true, useUnifiedTopology: true});


const Cat = mongoose.model('Cat', { name: String, souls:Number }); //schema

const kitty = new Cat({ name: 'Kitti', souls:9 }); //instance

kitty.save().then(() => console.log('kitti was saved to DB')); //save

 


 
app.listen(3000, ()=>{console.log('listen on port 3000')});