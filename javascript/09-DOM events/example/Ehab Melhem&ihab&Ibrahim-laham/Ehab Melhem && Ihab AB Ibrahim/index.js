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

function DoValidate(params) {
      
      alert("you must fill it");
    }


form.addEventListener("submit", (e) => {
  e.preventDefault();
  order.style.display = "block";
  order.className = order.className + " anmat_2";
  first_line.style.display = "block";
  first_line.className = first_line.className + " line_anmation";
  second.style.display = "block";
  second.className = second.className + " change_color";
});
order.addEventListener("submit", (e) => {
  e.preventDefault();
  payment.style.display = "block";
  payment.className = order.className + " anmat_3";
  second_line.style.display = "block";
  second_line.className = first_line.className + " line_anmation";
  third.style.display = "block";
  third.className = second.className + " change_color";
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
