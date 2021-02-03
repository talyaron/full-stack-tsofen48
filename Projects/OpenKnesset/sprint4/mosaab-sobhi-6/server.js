const express = require("express");
const app = express();
//var cookieParser = require('cookie-parser')


app.use(express.static("React/build"));
var bodyParser = require("body-parser");
//app.use(cookieParser());
app.use(bodyParser.json());

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
]

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
  res.send(barsArr);
})

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("listening", port);
});



