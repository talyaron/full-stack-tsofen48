const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:t6GUh9GibusbwWBC@cluster0.gntlf.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});

const Kittyschema = new mongoose.Schema({
  name: String

}); 

const Kitten = mongoose.model('kittyschema', Kittyschema); 

const pilpel = new Kitten({name:'pilpel2'}); 
  // pilpel.save().then(()=>console.log('saved to DB'));

let kittens = [{name:'asd'},{name:"sad"}];




app.post('/send-kitten-name', (req, res) => {
  try {
      const { name } = req.body;

      if (typeof name !== 'string') throw new Error('name is not a string')

      if (name.length > 0) {
          let newKitten = new Kitten({ name });
          newKitten.save().then(()=>console.log('kiten saved'))
          res.send({ ok: true })
      } else{
          throw new Error('name is empty string')
      }
      
  } catch (e) {
      res.send({ ok: false, error: e })
  }
})



const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT} `);
})