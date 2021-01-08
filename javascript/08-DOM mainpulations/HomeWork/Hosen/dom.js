let articlesData = [
  {
    title:
      "هبوعيل اكسال يعزز موقعه في القمة بفوز ثالث على التوالي فوز ثالث على التوالي",
    subTitle:
      " حققه الليلة فريق هبوعيل اكسال على حساب الهابط من الدرجة العليا سكتسيا نيس تسيونا بهدفين دون مقابل، في المباراة التي جمعتهما",
    imageSrc:
      "https://pms.panet.co.il/online/images/articles_front/20210107/3117960_20210107233858_p2.jpg",
    backGroundColor: "#d10606",
  },
  {
    title: "4 مصابين بحادث طرق على مدخل البقيعة",
    subTitle:
      "علم مراسل موقع بانيت وصحيفة بانوراما من مصادر طبية أن حادث طرق وقع على شارع 864 مدخل البقعية . وأفاد مراسل موقع بانيت وصحيفة بانوراما أن الطاقم الطبي التابع",
    imageSrc:
      "https://pms.panet.co.il/online/images/articles_front/20210107/3117799_20210107201856_p2.gif",
    backGroundColor: "#133272",
  },
  {
    title: "الديمقراطيون بمجلس النواب الأمريكي يتحركون لمساءلة ترامب",
    subTitle:
      "قال العضو الديمقراطي بمجلس النواب الأمريكي ديفيد سيسيلاين إن النواب الديمقراطيين وزعوا مواد مساءلة الرئيس يوم الخميس، لعزل دونالد ترامب من السلطة بعد",
    imageSrc:
      "https://pms.panet.co.il/online/images//articles/2021/01/07-01-2021/SHARIF/25/GettyImages-1188134603.jpg",
    backGroundColor: "#222222",
  },

  {
    title: "د. سعيد :‘ من السهل الوصول الى تطعيم للطفرات الجديدة ‘ ",
    subTitle:
      "عبّر علماء بريطانيون عن قلقهم من سلالة كورونا الجنوب افريقية ، مؤكدين انها أكثر خطورة ، فيما قال خبراء انهم يتخوفون من عدم فعالية اللقاح ضدها . ",
    imageSrc:
      "https://pms.panet.co.il/online/images/articles_front/20210107/3117832_20210107214423_p2.jpg",
    backGroundColor: "#133272",
  },
];
let articles = document.querySelectorAll(".article");

articlesData.forEach((article) => {
  let newArticle = document.createElement("div");
  newArticle.className = "article";
  let textContainer = document.createElement("div");
  textContainer.className = "textContainer";

  let newArticleTitle = document.createElement("h3");
  newArticleTitle.className = "title";
  newArticleTitle.innerHTML = article.title;
  textContainer.append(newArticleTitle);
  let newArticleSubTitle = document.createElement("p");
  newArticleSubTitle.className = "subTitle";
  newArticleSubTitle.innerHTML = article.subTitle;
  textContainer.append(newArticleSubTitle);
  newArticle.append(textContainer);

  let newArticleImage = document.createElement("img");
  newArticleImage.className = "articleImg";
  newArticleImage.src = article.imageSrc;
  newArticle.style.backgroundColor = article.backGroundColor;
  newArticle.append(newArticleImage);
  document.body.append(newArticle);
});
