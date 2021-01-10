
   //onChange call to calculate Total Price
   let totalPrice = (e) => {
    e.preventDefault();
    myTotal();  //Total in Real-Time

};



// var TotalDiscount=0;
// Submit
function checkOrder(e) {
  e.preventDefault();
  try {
    console.log("ee", e.target);
    let olives=false;
    let orderData = {
      size: "",
      toppings: [],
      drinks: "",
      fullName: "",
      phone: "",
      delivery: false,
      address: "",
      pickUpTime: "",
      total: 0,
    };
    Object.values(e.target).forEach((element) => {
      // orderData[element.name] = [Object.values(orderData[element.name]), element.value];
      // if(orderData[e.target.name]){
      //   orderData[e.target.name] = [...orderData[e.element.name],e.target.value]
      // }else{
      //   orderData[e.target.name] = [...orderData[e.element.name],e.target.value]
      // }
      if (element.name == "size" && element.checked) {
        orderData.size = element.value;
      } else if (element.name == "topping" && element.checked) {
        orderData.toppings.push(element.value);
        if(element.value=='olives')olives=true;
      } else if (element.name == "drink" && element.checked) {
        orderData.drinks = element.value;
      } else if (element.name == "fullName") {
        orderData.fullName = element.value;
      } else if (element.name == "phone") {
        orderData.phone = element.value;
      } else if (element.name == "delivery" && element.checked) {
        orderData.delivery = true;
      } else if (element.name == "address") {
        orderData.address = element.value;
      } else if (element.name == "pickUpTime") {
        orderData.pickUpTime = element.value;
      } else if (element.name == "total") {
        orderData.total = element.value;
        console.log(orderData.total);
      }

      // console.log("elemnt", element);
    });

    console.log("orderData", orderData);
  
    orderData.total=document.getElementById("totalPrice").innerText;
  // console.log(orderData);
  // totalDiscount.apply(null,orderData);
var TotalDiscount=0;
console.log(olives);
if(olives){
  TotalDiscount = (orderData.total)*90/100;
};

console.log(TotalDiscount);




} catch (error) {
  console.error(error);
}
}



let minTime = () => {
  let t = document.getElementById("pickUpTime");
  // t.max = "14:00";
  t.min = "00:00";
    try{
  if (t.value > "11:00") {
    t.style.background = "green";
  } else {
    t.style.background = "red";
  }
  console.log("cccccc", t);
}catch(error) {
    console.error(error);

};
};

function myTotal(){

  var globalTotalPrice = 0;


  let myTotalToppings=[];

  try{
  const children = [...document.getElementsByTagName('input')];
  children.forEach((child) => { 
  

  
  let orderData = {
    size: "",
    toppings: [],
    drinks: "",
    total: 0,
  };
  let prices = {
    size: { small: 45, medium: 55, large: 65 },
    topping: 3,
    drinks: 10,
  };

  element = child;
  if (element.name == "size" && element.checked) {
    globalTotalPrice += prices.size[element.value];
    console.log("total : ", globalTotalPrice);
    orderData.size = element.value;
    

  } else if (element.name == "drink" && element.checked) {
    if (element.value == "none") {
      console.log(element.value);
      // globalTotalPrice += 0;
    } else {
      console.log(prices.drinks);
      console.log(element);
       globalTotalPrice += prices.drinks;
 
      console.log("total : ", globalTotalPrice);
      orderData.drinks = element.value;
      console.log(element.value);
    }
  } else if (element.name == "topping" && element.checked) {
    myTotalToppings.push(element.value);

    if(myTotalToppings.length>3)
    globalTotalPrice += 3;
   
    

  }
  document.getElementById("totalPrice").innerText = globalTotalPrice;
  
  });


}catch(error) {
    console.error(error);

};
};


// Check if you got a discount because of choosing olives as one othe toppings
// function totalDiscount(x){
//   console.log(x);

// };