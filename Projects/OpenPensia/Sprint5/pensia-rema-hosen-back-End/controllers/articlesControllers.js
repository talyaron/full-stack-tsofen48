const mongoose = require("mongoose");
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

const articleSchema = new mongoose.Schema({
  articleSource: String,
  articleSubTitle: String,
  linkToArticle: String,
});

const Article = mongoose.model("articleSchema", articleSchema);

// handlers
exports.getArticles = (req, res) => {
  Article.find(function (err, articles) {
    if (err) return console.error(err);

    res.send({ articles: articles, isAdmin: true });
  });
};

exports.getArticleById = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};

exports.createArticle = (req, res) => {
  let articleToAdd = {
    articleSource: req.body.source,
    articleSubTitle: req.body.subTitle,
    linkToArticle: req.body.linkToArticle,
  };
  const article = new Article(articleToAdd);
  try {
    article.save().then(() => console.log("new article saved to DB"));
    res.send({ success: true, addedArticle: articleToAdd });
  } catch (error) {
    res.send({ success: false, error: error });
  }
};
exports.updateArticle = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};
exports.deleteArticle = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};
