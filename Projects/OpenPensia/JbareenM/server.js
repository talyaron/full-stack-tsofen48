const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const companies = [
  {
    name: "בנק הפועלים",
    directors: [
      { name: "רונית אברמזון רוקח", img:"https://static.toiimg.com/photo/72975551.cms", vote: 0},
      { name: "עיסאווי פריג", img:"https://static.toiimg.com/photo/72975551.cms", vote: 0},
      { name: "דליה לב", img:"https://static.toiimg.com/photo/72975551.cms", vote: 0}
    ]
  }
];

  app.get("/get-companies-name", (req, res) => {
      res.send(companies[0]);
  });

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://JbareenM:5s3KNgAvjVhdNkFV@cluster0.lvmro.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

//const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open',  ()=> {
//    console.log('we are connected to DB')
// });

// const kittySchema = new mongoose.Schema({
//     name: String,
//     imgSrc: String,
//     age: Number,
// });



// const Kitten = mongoose.model('kittySchema', kittySchema);

// let kittens = [{name:'mosh'}, {name:'pilpil'}];

// Kitten.find({ name: 'mosh'}, function (err, docs) {console.log(docs.length)});

// // Kitten.insertMany(kittens, data=>{console.log(data)})


//   app.post("/send-kitten-name", (req, res) => {
//     const { name, age, src } = req.body;
//     var add = new Kitten({ name: name, age: age, imgSrc: src });
//     add.save().then(() => {
//       console.log("add " + name + " to the db");
//     });
//     console.log(name);
//     res.send({ ok: true });
//   });

//   app.get("/get-kittens-age", (req, res) => {
//     const { age } = req.query;
//     try {
//       //get from DB
//       Kitten.find({ age: age }).then((docs) => {
//         res.send({ kittens: docs });
//       });
//     } catch (e) {
//       res.send({ error: e });
//     }
//   });
//   app.get("/get-kittens", (req, res) => {
//     const { name } = req.query;
//     try {
//       //get from DB
//       Kitten.find({ name: name }).then((docs) => {
//         res.send({ kittens: docs });
//       });
//     } catch (e) {
//       res.send({ error: e });
//     }
//   });