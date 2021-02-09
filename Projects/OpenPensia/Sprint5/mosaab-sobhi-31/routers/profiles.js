const {Router} = require('express');
const router = Router();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");


const SchemaAllProfiles = new mongoose.Schema({
    img: String,
    title: String,
  });


  
  const Other = mongoose.model("SchemaAllProfiles", SchemaAllProfiles);
  

const prof1 = new Other( 
    {
      img:"https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
      title:"רונית אבו רמזון רוקח"
    });
      
      const prof2 = new Other({ 
        img:"https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
        title:"רונית אבו רמזון רוקח"
       });
  //prof1.save().then(() => console.log('kitti was saved to DB')); //save
  //prof2.save().then(() => console.log('kitti was saved to DB')); //save
       router.get('/GetProfs',(req, res)=>{
        Other.find({}, (err,e) => {
          //  console.log(e);
            res.send(e)
            console.log("send");
         });
       })




//Other.find({},()=> {
  //  console.log("here " + comments); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.//
//});
      //  prof1.save().then(() => console.log(' was saved to DB')); //save
 // prof2.save().then(() => console.log(' was saved to DB')); //save

      /*
    {
      img:
        "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
      title: "עיסאוי פריג",
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
      title: "דליה לב",
    },
    {
      img:
        "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
      title: "דליה לב",
    },
  ]);*/
 // newProf.save().then(() => console.log(' was saved to DB')); //save


//barsArr
/*
router.get('/getAllCharactors',(req, res,next)=>{
    prof1.find({}, function(err, data){
  console.log(">>>> " + data );
});*/





module.exports = router;