const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());


//Cookies
app.use(cookieParser());

////////////////////////////////////////////
//Cors and Axios connection
var cors = require("cors");
app.use(cors()); // Use this after the variable declaration

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
////////////////////////////////////////////

// Router
const loginRouter = require("./routes/login");
app.use(express.static("client/build"));
app.use("/login", loginRouter);


////////////////////////////////////////////
//DB Conn
const userSchema = require("./schema/User");
var User = require("./User/UserSchemas");
var Question = require("./Question/QuestionSchema");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:t6GUh9GibusbwWBC@cluster0.gntlf.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});



const companyschema = new mongoose.Schema({
  logo: String,
  name: String,
  par: String,
});

const company = mongoose.model("companyschema", companyschema);



//read
app.get("/get-companies", (req, res) => {
  try {
    //get from DB
    company.find({}).then((docs) => {
      res.send({ companies: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});

const mock_data = [
  {
    test: "test",
  },
];

app.get("/get-data", (req, res) => {
  res.send({ ok: true });
});

app.get("/get-connect", (req, res) => {
  try {
    //get from DB
    mock_data.then((docs) => {
      res.send({ companies: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
});

app.post("/submit-questions", (req, res) => {
  try {
    const { questions, user } = req.body;

    questions.map((question) => {
      const temp = new Question({ question: question, username: user });
      temp.save().then(() => console.log("Question was saved in DB!"));
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

app.post("/register-user", (req, res) => {
  try {
    const { username, password } = req.body;

    const temp = new User({ username: username, password: password });
    User.findOne({ username }, function (err, doc) {
      if (doc == null) {
        temp.save().then(() => console.log("user was saved in DB!"));
        res.send({ ok: true });
      } else {
        console.log(err);
        res.send({ ok: false });
      }
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

app.post("/login-user", (req, res) => {
  try {
    const { username, password } = req.body;
    User.findOne({ username, password }, function (err, doc) {
      if (doc == null) {
        res.send({
          ok: false,
          error: "no user was found in db or password is incorrect",
        });
      } else {
        console.log("ok");
        res.send({ ok: true });
      }
    });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

app.listen(3002, () => {
  console.log("listen on port 3002");
});

// const User = mongoose.model("userSchema", userSchema);

// company.insertMany([
//   { logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
//   { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' },
//   { logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
//   { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
//   { logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' }

// ]).then(function(){
//   console.log("Data inserted")  // Success
// }).catch(function(error){
//   console.log(error)      // Failure
// });

// const newcomp = new company({
//   logo:
//     "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg",
//   name: "פרשמרקט",
//   par: "קמעונאות מזון",
// });

// newcomp.save().then(()=>console.log('saved to DB'));
