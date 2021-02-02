const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://malik3:MEr0qhLso9kDbLpJ@cluster0.7ppq5.mongodb.net/test?authSource=admin&replicaSet=atlas-rkhiyo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


const Kittyschema = new mongoose.Schema({
    name: String,
    imgSrc: String,
    age:Number
  
  }); 
  
  const Kitten = mongoose.model('kittyschema', Kittyschema); 
  
  //const pilpel = new Kitten({name:'pilpel', imgSrc: String,age:Number}); 
  //pilpel.save().then(()=>console.log('saved to DB'));
  
  let kittens = [{name:'asd'},{name:"sad"}];



  app.post('/send-kitten-name',(req, res)=>{
    try {
        const { name } = req.body.name;
        const { imgSrc } = req.body.imgSrc;
        const { age } = req.body.age;

        if (typeof name !== 'string') {
          console.log('no length')
          throw 'name is not a string'
        }

        if (name.length > 0) {
            let newKitten = new Kitten({ name, imgSrc, age });
            newKitten.save().then(()=>console.log('kiten saved'))
            res.send({ ok: true })
        } else{
          console.log('no length')
            throw 'n error occured'
        }
        
    } catch (e) {
        res.send({ ok: false })
    }
})



const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})