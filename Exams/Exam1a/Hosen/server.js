const express = require("express");
const app = express();
var cors = require("cors");
var cors = require("cors");
app.use(express.static("front-end/build"));

let getUniqueId = () => Math.random().toString(16).slice(2);

let totalSumAvailable = 50;
//dont forget to asin id to  getUniqueId
let products = {
  1: {
    productImgUrl: "https://cdn.onlinewebfonts.com/svg/img_90947.png",
    price: 50,
  },
  2: {
    productImgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGh9XTsyKUZlmVpF9TytqhQxGChjanuyJIw&usqp=CAU",
    price: 20,
  },
  3: {
    productImgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgbp2bjpEEBx4xv7piwLyk_ygxF5cnmTgkA&usqp=CAU",
    price: 10,
  },
};
var productsInCart = {};
app.use(cors());

app.get("/addProduct", function (req, res) {
  // products
  console.log("req", req.query);
  let productToAdd = req.query;
  if (totalSumAvailable - products[productToAdd.id].price > 0) {
    totalSumAvailable -= products[productToAdd.id].price;
    productsInCart[productToAdd.id] = products[productToAdd.id];
    res.send({ productsInCart, totalSumAvailable });
  } else {
    res.send({
      productsInCart,
      totalSumAvailable,
      msg:
        "you have to choose a product that it's value is less or equal what you have left in the available sum:)",
    });
  }
});
app.get("/removeProduct", function (req, res) {
  // products
  console.log("req", req.query);
  let productToAdd = req.query;
  let productId = productToAdd.id;

  delete productsInCart.productId;
  totalSumAvailable += products[productToAdd.id].price;
  res.send({ productsInCart, totalSumAvailable });
});

app.get("/product", function (req, res) {
  res.send(products);
});

app.listen(process.env.PORT || 3000);
