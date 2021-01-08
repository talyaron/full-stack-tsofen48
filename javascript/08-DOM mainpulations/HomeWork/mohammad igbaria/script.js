var articles = [
    {
      id: "1",
      img:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Venue/7672/1595496688932/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      header: "Hyndai",
      subheader: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos non accusamus temporibus neque illum voluptatem quisquam reiciendis veniam voluptatum incidunt officiis ab labore, autem itaque velit ad. Maiores, sint!",
    },
    {
      id: "2",
      img:
        "https://www.mazda.co.il/Uploads//HomePageOurCars/NEW%20SITE/9_20/27796-mazda-Navigation%20Mazda-CX-30.png",
      header: "Mazda",
      subheader: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos non accusamus temporibus neque illum voluptatem quisquam reiciendis veniam voluptatum incidunt officiis ab labore, autem itaque velit ad. Maiores, sint!",
    },
  ];
  function createArticle(_clone, article) {
    var img = _clone.querySelector("#article-image");
    img.setAttribute("id", img.getAttribute("id") + "-" + article.id);
    img.setAttribute("src", article.img);
    var header = _clone.querySelector("#article-header");
    header.setAttribute("id", header.getAttribute("id") + "-" + article.id);
    header.innerText = article.header;
    var subheader = _clone.querySelector("#article-subheader");
    subheader.setAttribute(
      "id",
      subheader.getAttribute("id") + "-" + +article.id
    );
    subheader.innerText = article.subheader;
    document.querySelector("body").append(_clone);
  }
  var template = document.querySelector("#article-block");
  for (let i = 0; i < articles.length; i++) {
    var _clone = template.content.firstElementChild.cloneNode(true);
    createArticle(_clone, articles[i]);
  }