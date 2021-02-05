const {Router} = require('express');
const router = Router();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Profileschema = new mongoose.Schema({
  imageSource: String,
  tittle: String,
  description: String,
});

const Profile = mongoose.model("profileschema", Profileschema);

const newProf = new Profile({ 
  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
       tittle:"בנק הבועלים",
       description:"בנקאות"
 });
 const newProf1 = new Profile({ 
  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
       tittle:"בנק הבועלים",
       description:"בנקאות"
 });
 const newProf2 = new Profile({ 
  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
       tittle:"בנק הבועלים",
       description:"בנקאות"
 });
 const newProf3 = new Profile({ 
  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
       tittle:"בנק הבועלים",
       description:"בנקאות"
 });
 const newProf4 = new Profile({ 
  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
       tittle:"בנק הבועלים",
       description:"בנקאות"
 });
 

let barsArr =[]
  
//newProf.save().then(() => console.log('kitti was saved to DB')); //save
//newProf1.save().then(() => console.log('kitti was saved to DB')); //save
//newProf2.save().then(() => console.log('kitti was saved to DB')); //save
//newProf3.save().then(() => console.log('kitti was saved to DB')); //save
//newProf4.save().then(() => console.log('kitti was saved to DB')); //save

  let allVotesServer = [{id:"1",score:5}];
  let signed;


  router.post("/Get-setVotePoints", (req, res) => {
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
  
    router.get('/getVotePoints',(req, res)=>{
      res.send(allVotesServer);
    })
  

  router.get('/getAllCharactors1',(req, res)=>{
    res.send(barsArr);
  })
  
module.exports = router;