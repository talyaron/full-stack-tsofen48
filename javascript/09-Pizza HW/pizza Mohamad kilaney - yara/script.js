//document.getElementById("myForm").style.display = "none";
let order="";
document.getElementById("Success").style.display='none';
function small(){
  document.getElementById("small").style.background = '#A9A9A9';
  order+="small ";
}
function miduim(){
  document.getElementById("midum").style.background = '#A9A9A9';
  order+="midium ";
}
function large(){
  document.getElementById("large").style.background = '#A9A9A9';
  order+="large ";
}

function colorchange(){
    document.getElementById("color").style.background = '#A9A9A9';
    order+="PPeper ";
}
function colorchange1(){
  document.getElementById("color1").style.background = '#A9A9A9';
  order+="mushroom, ";
}
function colorchange2(){
  document.getElementById("color2").style.background = '#A9A9A9';
  order+="toppings "
}
function colorchange3(){
  document.getElementById("color3").style.background = '#A9A9A9';
  order+="corn "
}
function colorchange4(){
  document.getElementById("color4").style.background = '#A9A9A9';
  order+="green-olive "
}
function colorchange5(){
  document.getElementById("color5").style.background = '#A9A9A9';
  order+="red-onion "
}
function colorchange6(){
  document.getElementById("color6").style.background = '#A9A9A9';
  order+="tuna "
}
function colorchange7(){
  document.getElementById("color7").style.background = '#A9A9A9';
  order+="eggplant "
}
function colorchange8(){
  document.getElementById("color8").style.background = '#A9A9A9';
  order+="black-olive"
}
function End(){
  let ord=document.getElementById("Success").style.display;
  let title=document.getElementById("title").style.display;
  ord=document.getElementById("Success").style.display='block';
  title=document.getElementById("title").style.display='none';
  alert(order);
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}