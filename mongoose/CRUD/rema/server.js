const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rema06:6m30hsL0v0jsdnXh@cluster0.eua4t.mongodb.net/tsofn48', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const Kittyschema = new mongoose.Schema({
    name: String,
    imgSrc: String,
    age: Number
  
  }); 
  
  const Kitten = mongoose.model('kittyschema', Kittyschema); 
  
  // const pilpel = new Kitten({name:'pilpel'}); 
//   pilpel.save().then(()=>console.log('saved to DB'));
  
  // let kittens = [{name:'asd'},{name:"sad"}];



  app.post('/send-kitten-name',(req, res)=>{
    const {cat} = req.body;

    const catii = new Kitten({name:cat.name,imgSrc:cat.image,age:cat.age}); 
    catii.save().then(()=>console.log('saved to DB'));
    res.send({ok:true})
})


app.post('/search-by-name',(req, res)=>{
  const name = req.body;
  try {
    //get from DB
    console.log(name);
    Kitten.find({name:name}).then(docs => {
        res.send({ kittens: docs });
    })
} catch (e) {
    res.send({ error: e })
}
  res.send({ok:true})
})

// app.get('/get-kittens', (req, res) => {

//   try {
//       //get from DB
//       Kitten.find(req.name).then(docs => {
//           res.send({ kittens: docs });
//       })
//   } catch (e) {
//       res.send({ error: e })
//   }
// })


const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})