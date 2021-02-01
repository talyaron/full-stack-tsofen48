let randomId = () => "_" + Math.random().toString(36).substr(2, 9);

let articlesAboutDirector = [
  {
    id: randomId(),
    articleSource: "כתבה מוואלה",
    articleSubTitle: "כתבה על שיפור מכירות ובמחסני חשמל ",
    linkToArticle:
      "https://www.pinterest.com/pin/461196818093484412/?d=t&mt=signup",
  },
  {
    id: randomId(),
    articleSource: "כתבה מוואלה",
    articleSubTitle: "כתבה על שיפור מכירות ובמחסני חשמל ",
    linkToArticle:
      "https://www.pinterest.com/pin/461196818093484412/?d=t&mt=signup",
  },
  {
    id: randomId(),
    articleSource: "כתבה מוואלה",
    articleSubTitle: "כתבה על שיפור מכירות ובמחסני חשמל ",
    linkToArticle:
      "https://www.pinterest.com/pin/461196818093484412/?d=t&mt=signup",
  },
  {
    id: randomId(),
    articleSource: "כתבה מוואלה",
    articleSubTitle: "כתבה על שיפור מכירות ובמחסני חשמל ",
    linkToArticle:
      "https://www.pinterest.com/pin/461196818093484412/?d=t&mt=signup",
  },
];

// handlers
exports.getArticles = (req, res) => {
  res.send({ articles: articlesAboutDirector, isAdmin: true });
};

exports.getArticleById = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
};

exports.createArticle = (req, res) => {
  res.send({
    status: "this functions is not ready yet - it's under constructions",
    message: "This route functionality is not yet defined!",
  });
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
