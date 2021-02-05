const express = require("express");
const app = express();
const votesServer = require('./routers/votes');
const profilesServer = require('./routers/profiles');
const mongoose = require("mongoose");

//var cookieParser = require('cookie-parser')


app.use(express.static("React/build"));
var bodyParser = require("body-parser");
//app.use(cookieParser());
app.use(bodyParser.json());

app.use('/votes',votesServer);
app.use('/profiles',profilesServer);

mongoose.connect('mongodb://mosaabrkia:bgx4RDT4dQeOuaLr@cluster0-shard-00-00.mt1zh.mongodb.net:27017,cluster0-shard-00-01.mt1zh.mongodb.net:27017,cluster0-shard-00-02.mt1zh.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-4upmps-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//bgx4RDT4dQeOuaLr


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
}); 

///cookies
/*
function checkIfSigned(req,res,next){
  const {cookies} = req;
  if(cookies.SignedIn === 'true') 
  { 
     signed = "block"; 
     next();
  }
  else {
    console.log("not Signed");
    signed ="none";
    next();
}

}

app.get('/AddsignedIn',(req, res)=>{
  res.cookie('SignedIn','true');
})
//checkSignedIn
app.get('/checkSignedIn',checkIfSigned,(req, res)=>{
  console.log("woooooorked");
 res.send({signed});
})
*/

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log("listening", port);
});


