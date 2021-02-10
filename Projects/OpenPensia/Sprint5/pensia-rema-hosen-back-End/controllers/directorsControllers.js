const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

mongoose.connect(
  "mongodb+srv://pensia:RZzwlzbt6LkEY6OW@first-cluster.s9zoz.mongodb.net/open-pensia",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const { ObjectId } = require("mongodb");

const db = mongoose.connection;
let randomId = () => "_" + Math.random().toString(36).substr(2, 9);
let articlesAboutDirector = [];

try {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("we are connected to DB");
  });
} catch (error) {
  console.log(error);
}

const directorSchema = new mongoose.Schema({
  userName: String,
  imgUrl: {
    type: String,
    default:
      "https://photof8.com/wp-content/uploads/2016/10/FutureAst007-2.jpg",
  },
  jobExperience: [{ jobTitle: String, active: Boolean }],
  financialExpertise: { type: Boolean, default: false },
  education: [{ subject: String, college: String }],
  conflictOfInterests: [String],
  relatives: [String],
  linkToLinkedIn: String,
  articles: [
    { articleSource: String, articleSubTitle: String, linkToArticle: String },
  ],
});

const Director = mongoose.model("directorSchema", directorSchema);

let directors = [
  {
    id: 1,
    name: "עיסאווי פריג",
    imgUrl: "https://photof8.com/wp-content/uploads/2016/10/FutureAst007-2.jpg",
    jobExperience: [
      { jobTitle: 'מנכ"ל פוקס', active: true },
      { jobTitle: 'סמנכ"ל כספים מחסני חשמל  ', active: true },
      { jobTitle: "דירקטור קו השקעות", active: false },
      { jobTitle: "אלוף משנה 8200", active: false },
    ],
    financialExpertise: false,
    education: [{ subject: "לימודי משפטים ", college: "אוניברסיטת בר אילן" }],
    conflictOfInterests: [],
    relatives: ['בן דוד של מנכ"ל הראל פיננסים '],
    linkToLinkedIn: "https://www.linkedin.com/",
    articles: [
      {
        id: randomId(),
        articleSource: "כתבה מוואלה",
        articleSubTitle: "כתבה על שיפור מכירות ובמחסני חשמל ",
        linkToArticle:
          "https://www.pinterest.com/pin/461196818093484412/?d=t&mt=signup",
      },
    ],
  },
];

// handlers
exports.getDirectors = (req, res) => {
  res.send(directors);
};

exports.getDirectorById = (req, res) => {
  console.log("req heeyyyy", req.query.id);
  let directorDetails = directors.find((element) => element.id == req.query.id);
  res.send({ directorDetails });
  // res.send({

  //        directorDetails  });
};

exports.getDirectorByName = (req, res) => {
  let directorDetails = directors.find(
    (element) => element.name == req.body.name
  );
  res.send({});
  // res.send({

  //        directorDetails  });
};
exports.createDirector = (req, res) => {
  let directorToAdd = {
    userName: req.body.userName,
    imgUrl: req.body.imgUrl,
    jobExperience: req.body.jobExperience,
    financialExpertise: req.body.financialExpertise,
    education: req.body.education,
    conflictOfInterests: req.body.conflictOfInterests,
    relatives: req.body.relatives,
    linkToLinkedIn: req.body.linkToLinkedIn,
    articles: [],
  };
  const newDirector = new Director(directorToAdd);
  try {
    newDirector.save().then(() => console.log("new article saved to DB"));
    res.send({ success: true, addedArticle: articleToAdd });
  } catch (error) {
    res.send({ success: false, error: error });
  }
};
exports.updateDirector = (req, res) => {
  var objArticle = {
    articleSource: "articleSource",
    articleSubTitle: "articleSubTitle",
    linkToArticle: "linkToArticle",
  };
  Director.findOneAndUpdate(
    { _id: ObjectId("601a7425b8462838b53dbd7f") },
    { $push: { articles: objArticle } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('a new article was added to the DB');
      }
    }
  );
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};
exports.deleteDirector = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};

// let directorToAdd =   {
//   name: "עיסאווי פריג",
//   imgUrl: "https://photof8.com/wp-content/uploads/2016/10/FutureAst007-2.jpg",
//   jobExperience: [
//     { jobTitle: 'מנכ"ל פוקס', active: true },
//     { jobTitle: 'סמנכ"ל כספים מחסני חשמל  ', active: true },
//     { jobTitle: "דירקטור קו השקעות", active: false },
//     { jobTitle: "אלוף משנה 8200", active: false },
//   ],
//   financialExpertise: false,
//   education: [{ subject: "לימודי משפטים ", college: "אוניברסיטת בר אילן" }],
//   conflictOfInterests: [],
//   relatives: ['בן דוד של מנכ"ל הראל פיננסים '],
//   linkToLinkedIn: "https://www.linkedin.com/",
//   articles: [
//     {
//       articleSource: "כתבה מוואלה",
//       articleSubTitle: "כתבה על שיפור מכירות ובמחסני חשמל ",
//       linkToArticle:
//         "https://www.pinterest.com/pin/461196818093484412/?d=t&mt=signup",
//     },
//   ],
// };

// const newDirector = new Director(directorToAdd);
// try {
//   newDirector.save().then(() => console.log("new director saved to DB"));
// } catch (error) {
//   console.log("errr", error);
// }
// var objArticle = {
//   articleSource: "articleSource22",
//   articleSubTitle: "articleSubTitle22",
//   linkToArticle: "linkToArticle22",
// };
// Director.findOneAndUpdate(
//   { _id: ObjectId("601a7425b8462838b53dbd7f") },
//   { $push: { articles: objArticle } },
//   function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(success);
//     }
//   }
// );