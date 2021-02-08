// import p1 from "./ibraheem/src/p1.PNG";
// import p2 from "./ibraheem/src/p2.PNG";
// import p3 from "./ibraheem/src/p3.PNG";
const express = require("express");
const app = express();
// const p1 = require("../ibraheem/src/p1.PNG");
const user = {
  company: "בנק הפועלים",
  perception: 18.3,
};
/////////////////////////
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ibk1:OkO8xSI4ygGxApi9@cluster0.0jo2f.mongodb.net/openPensia', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
//////////////////////////////
const directorsSchema = new mongoose.Schema({
  direct : [{img:String, name:String, unlikeColor:Boolean, likeColor:Boolean}]
});

const directorsCollection = mongoose.model("directorSchema", directorsSchema);

const usersSchema = new mongoose.Schema(
  {company:String, perception:Number}
);

const usersCollection = mongoose.model("userSchema", usersSchema);

// const dc = new directorsCollection({ direct:[
//   {
//     img: "/p1.PNG",
//     name: "רונית אברמוזון רוקח",
//     unlikeColor: false,
//     likeColor: true,
//   },
//   { img: "/p2.PNG", name: "עיסאווי פריג", unlikeColor: true, likeColor: false },
//   { img: "/p3.PNG", name: " דליה לב", unlikeColor: false, likeColor: true }
// ] });
// dc.save().then(()=>console.log('saved to DB'));

// const uc = new usersCollection({
//   company: "בנק הפועלים",
//   perception: 18.3,
// });
// uc.save().then(()=>console.log('saved to DB'));

////////////////////////////////////////
// const directors = [
//   {
//     img: "/p1.PNG",
//     name: "רונית אברמוזון רוקח",
//     unlikeColor: false,
//     likeColor: true,
//   },
//   { img: "/p2.PNG", name: "עיסאווי פריג", unlikeColor: true, likeColor: false },
//   { img: "/p3.PNG", name: " דליה לב", unlikeColor: false, likeColor: true },
// ];
exports.checkUser = (req, res) => {
  let index = 0;
  if (req.cookies.role === "public") {
    index = 1;
    res.send({  index: index });
  } else {
    index = -1;
    res.send({ index: index });
  }
};

exports.sendHeaderInformation = (req, res, next) => {
  usersCollection.find({}).then(docs=>{
    res.send(docs[0]);
  })
  //res.send(user);
};

exports.sendDirectorInformation = (req, res, next) => {
  directorsCollection.find({}).then(docs=>{
    res.send(docs[0].direct);
  })
  //res.send(directors);
};
