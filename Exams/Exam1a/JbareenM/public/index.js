function getUrls() {
    console.log('get urls')

    fetch('/get-urls')
        .then(r => r.json())
        .then(urls => {
            renderUrls(urls, '#stuff')
        })
}

function renderUrls(urls, place) {
    let stuff = document.getElementById("stuff");
    stuff.innerHTML = "";

    let html = '';
    urls.forEach(url => {
        let div = document.createElement("div");
        div.className = "img_score";
        let img = document.createElement("img");
        img.src = url.url;
        img.alt = "a";
        let price = document.createElement("a");
        price.innerHTML = 100;
        let button = document.createElement("button");
        button.name = "add";
        button.innerHTML = "add";
        button.addEventListener("click", (e) => {
            add_stuffs(url.url, Number(price.innerHTML))
        })
        fetch('/get-stuff')
            .then(r => r.json())
            .then(urls => {
                console.log(urls)
            })
        div.appendChild(img)
        div.appendChild(price)
        div.appendChild(button)
        stuff.appendChild(div)
    })
    //"/get-stuff"

};

function add_stuffs(url, score) {

    fetch('/add_stuff', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ url, score })
    }).then(r => r.json())
        .then(data => {
            console.log(data)
        })
}


function getmyStuff() {
    fetch('/get-stuff')
        .then(r => r.json())
        .then(urls => {
            renderStuff(urls, '#my_stuff')
        })
}

function renderStuff(urls, place) {
    let stuff = document.getElementById("my_stuff");
    stuff.innerHTML = "";

    let buy = document.createElement("button");
    buy.name = "buy";
    buy.innerHTML = "buy";

    let html = '';
    urls.forEach(url => {
        let div = document.createElement("div");
        div.className = "img_score";
        let img = document.createElement("img");
        img.src = url.url;
        img.alt = "a";
        let price = document.createElement("a");
        price.innerHTML = 100;

        fetch('/get-stuff')
            .then(r => r.json())
            .then(urls => {
                console.log(urls)
            })
        div.appendChild(img)
        div.appendChild(price)
        stuff.appendChild(div)
    })
    stuff.appendChild(buy)
};
