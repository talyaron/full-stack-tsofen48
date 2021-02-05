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



<<<<<<< Updated upstream
<<<<<<< Updated upstream
let searchResults;

app.get('/searchInput',(req, res)=>{
   const {searchtext} = req.body;
   console.log(searchtext)
   ex1.find({name: searchtext}/*{age: searchtext}*/).then(data=>{
   res.send({data})
=======
=======
>>>>>>> Stashed changes
app.post('searchInput',(req, res)=>{
   const {searchtext} = req.body;
   ex1.find({searchtext}).then(data=>{
   res.send(data)
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
})
})



const ProfilesArr =[{name:"mosaab",age:21},{name:"example",age:20}];
<<<<<<< Updated upstream
<<<<<<< Updated upstream



/*app.get('/GetData',(req,res)=>{
    profile.find({}).then(doc=>{
searchResults = doc
    })
})*/
=======
=======
>>>>>>> Stashed changes
app.get('/GetData',(req,res)=>{
    profile.find({}).then(doc=>{

    })
})
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
app.post('/GetData',(req, res)=>{
    let {name,age,SrcImage} = req.body;

    let newProfile = new ex1({name,age,SrcImage}); 
    newProfile.save().then(e=>console.log(e));
})
/*ProfilesArr.insertMany(ProfilesArr, (doc) => {
    console.log(doc);
  });*/
  


<<<<<<< Updated upstream
<<<<<<< Updated upstream
const PORT = process.env.PORT || 3001;
=======
const PORT = process.env.PORT || 3000;
>>>>>>> Stashed changes
=======
const PORT = process.env.PORT || 3000;
>>>>>>> Stashed changes

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})