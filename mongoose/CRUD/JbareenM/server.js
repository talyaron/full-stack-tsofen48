const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JbareenM:5s3KNgAvjVhdNkFV@cluster0.lvmro.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});

const kittySchema = new mongoose.Schema({
    name:String
});

const Kitten = mongoose.model('kittySchema', kittySchema);

let kittens = [{name:'mosh'}, {name:'pilpil'}];

Kitten.insertMany(kittens, data=>{console.log(data)})



const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})