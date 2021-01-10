let order = document.querySelector(".order");
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let olives = document.getElementById('olive');
let mashrom = document.getElementById('mashrom');
let cheese = document.getElementById('cheese');
var add = "";
order.addEventListener("submit", (e) => {
    e.preventDefault();
add="";
if(name != "" && email != "" && phone != "" ) {
    if (olives.checked) {
        add = add +  " olives punus 15%";
    }
    if (mashrom.checked) {
        add = add + " and mashroum";
    }
    if (cheese.checked) {
        add =add +  "and  cheese";
    }
}else {
    alert("Please fill the info")
}
    
    alert("Hi Dear, " +name.value +" " + "Your pizza have additionals = " +add);
});


