const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Semat:cacWBcNOZTuu1pEB@cluster0.7w7pv.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});



const Kittyschema = new mongoose.Schema({
    name: String
  
  }); 
  
  const Kitten = mongoose.model('kittyschema', Kittyschema); 
  
  const pilpel = new Kitten({name:'pilpel'}); 
//    pilpel.save().then(()=>console.log('saved to DB'));
  
  let kittens = [{name:'asd'},{name:"sad"}];



  app.post('/send-kitten-name',(req, res)=>{
    const {name} = req.body;
    
    console.log(name)


    const newOfCats = new Kitten({name:name}); 
   newOfCats.save().then(()=>console.log('saved to DB'));
      
    res.send({ok:true})
})




const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})