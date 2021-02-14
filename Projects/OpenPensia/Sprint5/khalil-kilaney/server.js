const express = require('express')
var bodyParser = require('body-parser')
const app = express();


app.use(express.static('client/build'));
app.use(bodyParser.json())


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://k1:8Mci8bQ0AApzivDr@cluster0.6imer.mongodb.net/test?authSource=admin&replicaSet=atlas-n7flxc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
});

const Pensia = new mongoose.Schema({
  title: String,
  subtitle: String,
  link: String

});

const Pen = mongoose.model('Pensia', Pensia);


//get data from db
app.get('/get-articles-list', (req, res) => {
  Pen.find().then((docs)=>{
    res.send(docs)
  })
})


const port = process.env.PORT || 3003;

app.listen(port, function () {
  console.log('listening', port)
})


