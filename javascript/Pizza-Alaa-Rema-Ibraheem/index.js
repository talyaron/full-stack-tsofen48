
addQuantityFunctionality();
submissionFunctionality();


/**
 * Function Definitions
 */
function addQuantityFunctionality() {

    let plusBtn = document.querySelector('button.plus');
    !!plusBtn && plusBtn.addEventListener('click', changePizzaNumber);
    let minusBtn = document.querySelector('button.minus');
    !!minusBtn && minusBtn.addEventListener('click', changePizzaNumber);

}

function changePizzaNumber(e) {
    e.preventDefault();
    let currentPizzaNumberElement = document.querySelector('input.quantity');
    let currentPizzaNumber = !!currentPizzaNumberElement && parseInt(currentPizzaNumberElement.placeholder);

    if (e.target.className.indexOf('minus') > -1) {
        if (currentPizzaNumber == 0) {
            alert('can not decrease more!');
            return;
        }
        currentPizzaNumber--;
    }
    if (e.target.className.indexOf('plus') > -1) {
        if (currentPizzaNumber == 30) {
            alert('can order more than 50 pizzas at once!');
            return;
        }
        currentPizzaNumber++;
    }
    currentPizzaNumberElement.placeholder = currentPizzaNumber;
}

function saleCalculation() {
    let message='';
    if (document.getElementById('w3-check').checked) {
        message='for all Olives lovers- you Won - 15% Sale !';
    }else{
        message='';
    }
    return message;
}

function submissionFunctionality() {
    let submitBtn = document.querySelector('button[type*="submit"]');
    !!submitBtn && submitBtn.addEventListener('click', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    document.querySelector('div.order-details').innerHTML = '';
    let pizzaType = document.querySelector('select[name="pizzatype"]'),
        pizzaSize = document.querySelector('select[name="pizzasize"]'),
        toppings = document.querySelectorAll('input[type="checkbox"]'),
        quantity = document.querySelector('input.quantity');

    openForm(createOrder(pizzaType, pizzaSize, toppings, quantity))
}

function createOrder(pizzaType, pizzaSize, toppings, quantity) {
    let order = {};
    !!pizzaType && (order['Type'] = pizzaType.value);
    !!pizzaSize && (order['Size'] = pizzaSize.value);
    order['Quantity'] = quantity.placeholder;
    let toppingList = [];
    toppings.forEach(element => {
        !!element && !!element.checked && toppingList.push(element.value);
    });
    order['Toppings'] = toppingList.join(' ');
    console.log(order);
    return order;
}

function openForm(order) {

    document.getElementById("orderForm").style.display = "block";
    document.getElementById("type").innerHTML=order.Type;
    document.getElementById("size").innerHTML=order.Size;
    document.getElementById("toppings").innerHTML=order.Toppings;
    document.getElementById("quantity").innerHTML=order.Quantity;
    document.getElementById("Sale").innerHTML=saleCalculation();
  }
  
  function closeForm() {
    document.getElementById("orderForm").style.display = "none";
    clearInputs();
  }
