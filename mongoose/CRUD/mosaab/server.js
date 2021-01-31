const express = require('express');
app = express();
app.use(express.static("client/build"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mosaabrkia:yNT6liCAxzJw3QyR@cluster0.mt1zh.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});


/*const ProfileSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const profile = mongoose.model('ProfileSchema', ProfileSchema); 
*/

const Ex1 = new mongoose.Schema({
    name:String,
    age:Number,
    imgSrc:String
})

const ex1 = mongoose.model('Ex1', Ex1); 



app.post('searchInput',(req, res)=>{
   const {searchtext} = req.body;
   ex1.find({searchtext}).then(data=>{
   res.send(data)
})
})



const ProfilesArr =[{name:"mosaab",age:21},{name:"example",age:20}];
app.get('/GetData',(req,res)=>{
    profile.find({}).then(doc=>{

    })
})
app.post('/GetData',(req, res)=>{
    let {name,age,SrcImage} = req.body;

    let newProfile = new ex1({name,age,SrcImage}); 
    newProfile.save().then(e=>console.log(e));
})
/*ProfilesArr.insertMany(ProfilesArr, (doc) => {
    console.log(doc);
  });*/
  


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})