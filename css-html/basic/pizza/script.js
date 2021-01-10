let order = document.querySelector(".order");
let name = document.getElementById('name');
let email = document.getElementById('email');
let olives = document.getElementById('olive');
let mashrom = document.getElementById('mashrom');
let cheese = document.getElementById('cheese');
var add = "";
order.addEventListener("submit", (e) => {
    e.preventDefault();

    if (olives.checked) {
        add = add +  "olives punus 15%";
    }
    if (mashrom.checked) {
        add = add + "mashroum";
    }
    if (cheese.checked) {
        add =add +  "cheese";
    }
    
    alert("Your pizza have additionals = " +add);
});


