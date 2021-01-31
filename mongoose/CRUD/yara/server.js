const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yara:EDlGW2OyqOPBl7T5@cluster0.zkz36.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});

const Kittyschema=new mongoose.Schema({
    name:String
});

const Kittem=mongoose.model('Kittyschema',Kittyschema);
const pilpel=new Kittem({name:'pilpel'});
pilpel.save();

let kittens = [{ name: "Zildjian" }, { name: "lara" }];

Kittem.insertMany(kittens, (doc) => {
  console.log(doc);
});


const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})