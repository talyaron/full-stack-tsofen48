var randomId = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
};
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

module.exports =  articlesAboutDirector ;
