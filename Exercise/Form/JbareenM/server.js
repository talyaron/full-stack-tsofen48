const express = require('express');
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JbareenM:5s3KNgAvjVhdNkFV@cluster0.lvmro.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Users = mongoose.model('Users', { name: String, pass:String }); //schema

// const user = new Users({ name: 'Kitti', pass:9 }); //instance

// user.save().then(() => console.log(user.name, 'was saved to DB')); //save

app.post("/send-user", (req, res) => {
    const { userDB, passDB } = req.body;
    console.log({user: userDB, pass:passDB});
    var add = new Users({ name: userDB, pass:passDB });
    add.save().then(() => {
      console.log("add " + userDB + " to the db");
    });
    console.log(userDB);
    res.send({ ok: true });
  });
  
  app.get("/get-user", (req, res) => {
    const { userName } = req.query;
    try {
      //get from DB
      Users.find({ name: userName }).then((docs) => {
        res.send({ Users: docs});
      });
    } catch (e) {
      res.send({ error: e});
    }
  });
 
app.listen(3002, ()=>{console.log('listen on port 3002')});