const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48', {useNewUrlParser: true, useUnifiedTopology: true});


const Cat = mongoose.model('Cat', { name: String, souls:Number }); //schema

const kitty = new Cat({ name: 'Kitti', souls:9 }); //instance

kitty.save().then(() => console.log('kitti was saved to DB')); //save

 


 
app.listen(3000, ()=>{console.log('listen on port 3000')});