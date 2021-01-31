<<<<<<< HEAD:mongoose/CRUD/Tal/server.js
const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
});


const kittySchema = new mongoose.Schema({
    name: String,
    imgSrc:String
});

const Kitten = mongoose.model('kittySchema', kittySchema);

const plipel = new Kitten({name:'pilpel'})
//create
// plipel.save().then(doc=>{console.log(doc)})

let kittens = [{name:'mosh'}, {name:'grafield'}];

// Kitten.insertMany(kittens, (doc)=>{
//     console.log(doc)
// })

// app.




const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
=======
const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});





const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
>>>>>>> main:mongoose/CRUD/.history/Ehab Melhem/server_20210131174802.js
})