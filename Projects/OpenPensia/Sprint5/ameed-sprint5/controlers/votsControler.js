const express = require('express');
const app = express();

//DB Conn
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:t6GUh9GibusbwWBC@cluster0.gntlf.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  ()=> {
   console.log('we are connected to DB')
});

const votsschema = new mongoose.Schema({
    bank: String,
    img: String,
    name: String,
    disApprovePer: String,
    ApprovePer: String,
  });
  
  const vots = mongoose.model("votsschema", votsschema);
  
  
  exports.getVots =  (req, res) => {

    try {
        //get from DB
        vots.find({}).then(docs => {
            res.send({ vots: docs });
        })
    } catch (e) {
        res.send({ error: e })
    }
};



  // vots.insertMany([ 
  //   {
  //     bank: 'בנק הפועלים',
  //     img: 'https://static.zman.co.il/www/uploads/2019/06/F141230TN15-1024x640.jpg' ,
  //     name: 'עיסאווי פריג',
  //     disApprovePer: '20%' ,
  //     ApprovePer: '80%' 
  //   }
    
  // ]).then(function(){ 
  //   console.log("Data inserted")  // Success 
  // }).catch(function(error){ 
  //   console.log(error)      // Failure 
  // }); 
  

// const newvoting = new vots(
//   {
//     bank: 'בנק הפועלים',
//     img: 'https://static.zman.co.il/www/uploads/2019/06/F141230TN15-1024x640.jpg' ,
//     name: 'עיסאווי פריג',
//     disApprovePer: '20%' ,
//     ApprovePer: '80%' 
// }
// );
  
    // newvoting.save().then(()=>console.log('saved to DB'));