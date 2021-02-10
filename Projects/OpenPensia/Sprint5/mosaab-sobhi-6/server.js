const express = require("express");
const app = express();
const mongoose = require("mongoose");
//var cookieParser = require('cookie-parser')
mongoose.connect('mongodb://mosaabrkia:bgx4RDT4dQeOuaLr@cluster0-shard-00-00.mt1zh.mongodb.net:27017,cluster0-shard-00-01.mt1zh.mongodb.net:27017,cluster0-shard-00-02.mt1zh.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-4upmps-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
}); 


const profileE = mongoose.model('Profile', { imageSource: String  ,tittle:String ,description:String});

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));



app.use(express.static("React/build"));
var bodyParser = require("body-parser");
//app.use(cookieParser());
app.use(bodyParser.json());
/*
let barsArr =[
  {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
     tittle:"בנק הבועלים",
     description:"בנקאות"
    },
    {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
     tittle:"בנק הבועלים",
     description:"בנקאות"
    },
    {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
    tittle:"בנק הבועלים",
    description:"בנקאות"
   },
   {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
   tittle:"בנק הבועלים",
   description:"בנקאות"
  },
  {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
  tittle:"בנק הבועלים",
  description:"בנקאות"
 }
]*/

/*
barsArr.forEach((e,index)=>{
const profile = new profileE({ imageSource:e.imageSource ,tittle:e.tittle, description:e.description});
profile.save().then(() => console.log('added' + index));
})*/


let allVotesServer = [{id:"1",score:5}];
let signed;

app.post("/Get-setVotePoints", (req, res) => {
  let check = null;
  let num;
  const {allVotes} = req.body;
  let temp = JSON.parse(allVotes);
  if(temp !== null){
    for (let index = 0; index < temp.length; index++) {

      for (let index1 = 0; index1 < allVotesServer.length; index1++) {
        if(temp[index].voteUpOrDown === "Up") 
        {
           num = 1;
          }
          else if(temp[index].voteUpOrDown === "Down") {num = -1}

        check = null;
        if(temp[index].id === allVotesServer[index1].id){
           check = true;
         allVotesServer[index1].score = allVotesServer[index1].score + num ;
         break;
        }
        else{
          check = false;
        }
   
      }
      if(check === false || check === null ){
   allVotesServer.push({id:temp[index].id , score: num});
      }}
  }

  
console.log(allVotesServer)
 
  })

  app.get('/getVotePoints',(req, res)=>{
    res.send(allVotesServer);
  })

app.get('/getAllCharactors',(req, res)=>{
  profileE.find({}, (err,e) => {
    //  console.log(e);
      console.log(e);
      res.send(e);
   });
})




const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("listening", port);
});



