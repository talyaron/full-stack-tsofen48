// import p1 from "./ibraheem/src/p1.PNG";
// import p2 from "./ibraheem/src/p2.PNG";
// import p3 from "./ibraheem/src/p3.PNG";
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// const p1 = require("../ibraheem/src/p1.PNG");
const user = {
  company: "בנק הפועלים",
  perception: 18.3,
};
/////////////////////////
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ibk1:OkO8xSI4ygGxApi9@cluster0.0jo2f.mongodb.net/fromEx', { useNewUrlParser: true, useUnifiedTopology: true });
const { ObjectId } = require('mongodb');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
//////////////////////////////
// const directorsSchema = new mongoose.Schema({
//   direct : [{img:String, name:String, unlikeColor:Boolean, likeColor:Boolean}]
// });

// const directorsCollection = mongoose.model("directorSchema", directorsSchema);

// const usersSchema = new mongoose.Schema(
//   {company:String, perception:Number}
// );

// const usersCollection = mongoose.model("userSchema", usersSchema);

//*********** */

const registerSchema = new mongoose.Schema(
  { user: String, password: String }
);

const registerCollection = mongoose.model("registerSchema", registerSchema);



const questionsSchema = new mongoose.Schema(
  { question: Array }
);

const questionsCollection = mongoose.model("questionsSchema", questionsSchema);





const booksSchema = new mongoose.Schema(
  { bookName: String, bookWriter: String, bookDate: String }
);

const booksCollection = mongoose.model("booksSchema", booksSchema);
//*********** */

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
// exports.checkUser = (req, res) => {
//   let index = 0;
//   if (req.cookies.role === "public") {
//     index = 1;
//     res.send({  index: index });
//   } else {
//     index = -1;
//     res.send({ index: index });
//   }
// };

// exports.sendHeaderInformation = (req, res, next) => {
//   usersCollection.find({}).then(docs=>{
//     res.send(docs[0]);
//   })
//   //res.send(user);
// };

// exports.sendDirectorInformation = (req, res, next) => {
//   directorsCollection.find({}).then(docs=>{
//     res.send(docs[0].direct);
//   })
//   //res.send(directors);
// };


exports.register = async (req, res, next) => {
  try {
    console.log("dddddddddddddddddddddddddddddddddddddddd")
    const data = req.body;
    console.log(data);

    if (typeof data.loginUser !== "string") throw new Error("name is not a string");

    const userFlag = await registerCollection.findOne({ user: data.loginUser });
    console.log('user:', userFlag)
    // if (user !== null) {
    //     res.send({ ok: false, message: 'user with such user name already exists' })
    // } else {

    if ((data.loginUser.length > 0 && data.passUser.length > 0) && (!userFlag)) {

      let newRegister = new registerCollection({ user: data.loginUser, password: data.passUser });
      newRegister.save().then(() => console.log("register saved"));
      res.send({ ok: true });

    } else {
      throw new Error("user is empty string");
    }

  } catch (e) {
    res.send({ ok: false, error: e });
  }

};

exports.login = async (req, res, next) => {
  //  try {
  //get from DB
  const { loginUser2, passUser2 } = req.body;
  console.log(loginUser2, passUser2);
  const user = await registerCollection.findOne({ user: loginUser2 });
  console.log('user:', user)

  if (user === null) {
    res.send({ ok: false, message: 'couldnt find such a user' })
  } else {
    console.log(user.password)
    console.log(passUser2)
    if (user.password != passUser2) {
      res.send({ ok: false, message: 'information is not correct' })
    } else {
      res.send({ ok: true })
    }
  }
};


exports.questions = async (req, res, next) => {
  //  try {
  //get from DB
  console.log('uuuuuuuuuuuuuuu');
  const { questions } = req.body;
  console.log(questions);
  //uestions.map(q => {
  let newQuestion = new questionsCollection({ question: questions });
  newQuestion.save().then(() => console.log("question saved"));
  //})
  res.send({ ok: true });

};


exports.addBook = async (req, res, next) => {
  try {
    console.log("dddddddddddddddddddddddddddddddddddddddd")
    const data = req.body;
    console.log(data);

    if (typeof data.name !== "string") throw new Error("name is not a string");

    const nameFlag = await booksCollection.findOne({ bookName: data.name });
    console.log('user:', nameFlag)
    // if (user !== null) {
    //     res.send({ ok: false, message: 'user with such user name already exists' })
    // } else {

    if ((data.name.length > 0 && data.writer.length > 0 && data.date.length) && (!nameFlag)) {

      let newRegister = new booksCollection({ bookName: data.name, bookWriter: data.writer, bookDate: data.date });
      newRegister.save().then(() => console.log("book saved"));
      res.send({ ok: true });

    } else {
      throw new Error("book is empty string");
    }

  } catch (e) {
    res.send({ ok: false, error: e });
  }
}

exports.searchBook = async (req, res, next) => {
  console.log("dddddddddddddddddddddddddddddddddddddddd")
  const data = req.body;
  console.log(data);
  console.log(data.searchName);
  const bookFlag = await booksCollection.findOne({ bookName: data.searchName });
  console.log('user:', bookFlag);

  if (bookFlag == null) {
    res.send({ ok: false, message: 'couldnt find such a book'  })
  } else {
    
      res.send({ ok: true, data: bookFlag})
    
  }
}



