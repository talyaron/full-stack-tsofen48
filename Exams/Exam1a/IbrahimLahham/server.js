const express = require('express');
const app = express();
app.use(express.static('public'));
const CurrentProductAmount=0;

app.get("/get-Salproducts", (req, res) => {
    res.send(CurrentProductAmount,{productSal});
  });

app.get("/get-products", (req, res) => {
    res.send({products});
  });
  app.post("/add-to-productSal", (req, res) => {
    CurrentProductAmount++;
    const { url, price } = req.body;
    productSal.push({url:url,price:price})
  });
  

app.listen(3000, () => { console.log('listen on port 3000') });
const productSal = [{}];
const products = [
    {
      url: "https://sc01.alicdn.com/kf/HLB1BsjtRRLoK1RjSZFuq6xn0XXaV.jpg_350x350.jpg",
      price: "25"
    },
    {
      url: "https://sc01.alicdn.com/kf/HLB1BsjtRRLoK1RjSZFuq6xn0XXaV.jpg_350x350.jpg",
      price: "43"
    },
    {
      url: "https://sc01.alicdn.com/kf/HLB1BsjtRRLoK1RjSZFuq6xn0XXaV.jpg_350x350.jpg",
      price: "50"
    }
  ];
  
  
  
  
  
  
  
  