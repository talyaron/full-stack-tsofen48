function show_gift(src, price, desc){
    let div = document.createElement("div");
    div.className = "gift";
    let img = document.createElement("img");
    img.src = src;
    img.alt = desc;
    let _price = document.createElement("a");
    _price.innerHTML = price;

    let button = document.createElement("button");
    button.innerHTML = "add";
    button.className = "add_gift";
    button.addEventListener("click", (e) => {
        addGift(src, price, desc)
    })

    div.appendChild(_price);
    div.appendChild(img);
    div.appendChild(button);
    return div;
}

function showAllGifts(){
    let totLeft = document.getElementById("totalLeft");
    let root = document.getElementById("gifts_container");
    console.log('get urls')
    root.innerHTML = "";
    fetch("/get-gifts")
    .then(r => r.json())
    .then((data) => {
        console.log(data._gifts)
        data._gifts.forEach(element => {
            let div = show_gift(element.url, element.price, element.url);
            root.appendChild(div);
        });
        totLeft.innerText = `total sum available: ${data.totalPrice}$`
    })
}

function addGift(src, price, desc){
    let totLeft = document.getElementById("totalLeft");
    fetch('/add-gift', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ src, price })
    }).then(r => r.json())
        .then((data) => {
            console.log(data)
            totLeft.innerText = `total sum available: ${data.totalPrice}$`
        })
}

function allCart(){
    let root = document.getElementById("cart_gifts");
    console.log('get cart')
    let tot = 0;
    root.innerHTML = "";
    fetch("/get-myGifts")
    .then(r => r.json())
    .then((data) => {
        data.forEach(element => {
            let div = show_cart(element.url, element.price, element.url);
            root.appendChild(div);
            tot += element.price;
        });
        let total = document.createElement("a");
        total.innerHTML = `Pay ${tot}$`;
        root.appendChild(total);
    })
}

function show_cart(src, price, desc){
    let div = document.createElement("div");
    div.className = "gift_cart";
    let img = document.createElement("img");
    img.src = src;
    img.alt = desc;
    let _price = document.createElement("a");
    _price.innerHTML = price;

    div.appendChild(_price);
    div.appendChild(img);
    return div;
}

function getTotal(){
    let root = document.getElementById("pay_total");
    let tot = 0;
    fetch("/get-gifts")
    .then(r => r.json())
    .then((data) => {
        console.log(data)
        root.innerText = `total sum available: ${data.totalPrice}$`
    });
}


