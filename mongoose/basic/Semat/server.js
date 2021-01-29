const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Semat:cacWBcNOZTuu1pEB@cluster0.7w7pv.mongodb.net/test2', {useNewUrlParser: true, useUnifiedTopology: true});


const Cat = mongoose.model('Cat', { name: String, souls:Number }); //schema

const kitty = new Cat({ name: 'Kitty', souls:9 }); //instance

kitty.save().then(() => console.log('kitty was saved to DB')); //save

 


 
app.listen(3000, ()=>{console.log('listen on port 3000')});