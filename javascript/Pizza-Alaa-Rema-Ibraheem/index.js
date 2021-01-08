
addQuantityFunctionality();


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
        
    if(document.getElementById('w3-check').checked) { 
       alert('for all Olives lovers- you Won - 15% Sale !');
       } 

}
