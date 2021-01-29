import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

import Products from './components/product.js';
function App() {
  const [Currentprice, setCurrentprice] = useState(100);
  const [datas, setdatas] = useState([]);
  const [TotalLabel, setTotalLabel] = useState(["Total Amout:"]);
  const [BtnGotoText, setBtnGotoText] = useState(["GotoSalProduct"]);
  
  function addproduct(){
    
  let productPrice = document.querySelector("priceFirstproduct");
  let productPic = document.querySelector("productPic1");
  if(Currentprice-productPrice>0) // if the user able to pay 
  {
      fetch("/add-to-productSal", {
       method: "POST",
       headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productPic, productPrice }),
      });
    setCurrentprice(Currentprice-productPrice);  
    }
    else{
      alert("You can't buy this product(dont have enough money!)");
    }
  }

 
  function GoToProductSal(){
    fetch("/get-Salproducts")
      .then((r) => r.json())
      .then((data) => {
         setdatas(data); //change the product compenent itself by usestate 
         setTotalLabel(`You have in your cart`+ data.CurrentProductAmount+`items`);
      });
  
    }

  useEffect(() => {
    fetch("/get-products")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
         setdatas(data);   
      });
  }, []);

  return (
    <div className="App">
      <div className="App-headers">
       <label><h1>{TotalLabel}</h1></label><label className="totalamount"><h1>{Currentprice}</h1></label>
      </div>
       <div className="products" >
        <Products array={datas} />
      </div>
      <button className='btnDone' onClick="GoToProductSal()">{BtnGotoText} </button>
    </div>
  );
}

export default App;
