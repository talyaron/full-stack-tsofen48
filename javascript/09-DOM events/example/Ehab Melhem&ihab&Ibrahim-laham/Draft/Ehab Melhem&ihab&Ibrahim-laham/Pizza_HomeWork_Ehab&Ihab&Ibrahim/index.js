let form = document.querySelector(".personal__details");
let name = document.querySelector(".fullname");
let total = document.querySelector(".totla");
let order = document.querySelector(".order");
let payment = document.querySelector(".payment");
let first = document.getElementById("first");
let first_line = document.getElementById("first_line");
let second = document.getElementById("second");
let second_line = document.getElementById("second_line");
let thrid = document.getElementById("thrid");
order.style.display = "none";
payment.style.display = "none";
first_line.style.display = "none";
second.style.display = "none";
second_line.style.display = "none";
third.style.display = "none";

var result = "";
var add = "";
let input = document.getElementById("name");
let adress = document.getElementById("adress");
let number = document.getElementById("PhoneNumber");
let email = document.getElementById("email");

let olivs = document.getElementById("olivs");
let Corn = document.getElementById("Corn");
let Onion = document.getElementById("Onion");

// function DoValidate(params) {
//   alert("you must fill it");
// }
var tot = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    number.value !== "" &&
    email.value !== "" &&
    input.value !== "" &&
    adress.value !== ""
  ) {
    document.getElementById("alerTxt").innerHTML="";
    order.style.display = "block";
    order.className = order.className + " anmat_2";
    first_line.style.display = "block";
    first_line.className = first_line.className + " line_anmation";
    second.style.display = "block";
    second.className = second.className + " change_color";
  } else {
    document.getElementById("alerTxt").innerHTML="you have to fill all the fields below";
  }
});
order.addEventListener("submit", (e) => {
  e.preventDefault();
  add = "";
  if (result === "Large") {
    tot = 60;
  }
  if (result === "Medium") {
    tot = 45;
  }
  if (result === "Small") {
    tot = 20;
  }
  if (result === "Special") {
    tot = 110;
  }
  if (tot === 0) {
    document.getElementById("alerTxt1").innerHTML="please choose size";
  } else {
    document.getElementById("alerTxt1").innerHTML="";
    if (olivs.checked) {
      tot = tot - tot * 0.1;
      add = add + "* Olivs ";
    }
    if (Corn.checked) {
      tot += 5;
      add = add + "* Corn ";
    }
    if (Onion.checked) {
      add = add + "* Onion";
      tot += 5;
    }
    let cost = document.getElementById("tot");
    cost.innerText = "$" + tot;
    payment.style.display = "block";
    payment.className = order.className + " anmat_3";
    second_line.style.display = "block";
    second_line.className = first_line.className + " line_anmation";
    third.style.display = "block";
    third.className = second.className + " change_color";
  }
});
let visa = document.getElementById("visa");
let code = document.getElementById("code");
let date_2 = document.getElementById("date_2");
let date_1 = document.getElementById("date_1");
payment.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    visa.value !== "" &&
    code.value !== "" &&
    date_1.value !== "" &&
    date_2.value !== ""
  ) {
    document.getElementById("alerTxt2").innerHTML="";
    let cost = document.getElementById("tot");
    alert(
      "Hi Mr. " +
        input.value +
        ", \n you have ordered a single " +
        result +
        " Pizza with the following toppings : \n" +
        add +
        "\n The bill is: " +
        cost.innerText
    );
  } else {
    document.getElementById("alerTxt2").innerHTML="you have to fill all the payment details";
  }
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   var letters = /^[A-Za-z]+$/;

//   if (!name.value.match(letters)) {
//     alert("PLease Inter for the name only Letters");
//   }
// });
// function write(e) {
//   alert(e.value);
//   if (e.target.value) {
//   }
// }
function check(elm) {
  tot = 0;
  if (elm.innerText === "Large") {
    tot = 60;
  }
  if (elm.innerText === "Medium") {
    tot = 45;
  }
  if (elm.innerText === "Small") {
    tot = 20;
  }
  if (elm.innerText === "Special") {
    tot = 110;
  }
  result = elm.innerText;
}
