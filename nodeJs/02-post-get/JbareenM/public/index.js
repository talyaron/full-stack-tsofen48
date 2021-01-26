document.querySelector('h1').style.background = 'yellow';



function getUsers() {
    console.log('get users')

    fetch('/get-users')
        .then(r => r.json())
        .then(users => {
            console.log('then')
            renderUsers(users)
        })
    console.log('after fetch')
}

function getPassword(name) {
    console.log('get password', name)

    fetch(`/get-password?name=${name}&city=arara`)
        .then(r => r.json())
        .then(pass => {

            console.log(pass.password)
        })
    console.log('after fetch')
}

function handleSubmit(e) {
    e.preventDefault();

    let { name, password } = e.target.elements;

    name = name.value;
    password = password.value;
    console.log(name, password);

    fetch("/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
    })
        .then((r) => r.json())
        .then((data) => {
        if (data.index !== -1) {
            var h1 = document.createElement("h1");
            h1.innerText = data.userName + " " + data.userPass;
            document.getElementById("root").innerHTML = "";
            document.getElementById("root").appendChild(h1);
        } else {
            var h1 = document.createElement("h1");
            h1.innerText = data.messeg;
            document.getElementById("root").innerHTML = "";
            document.getElementById("root").appendChild(h1);
        }
    });

}

function renderUsers(users) {
    const root = document.querySelector('#root');
    let html = '';
    users.forEach(user => {
        html += `<p onclick="getPassword('${user.name}')">Name: ${user.name}</p>`
    })

    root.innerHTML = html
};

function handleAdd(e){
    e.preventDefault();

    let { url } = e.target.elements;

    url = url.value;
    console.log(url);
    
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ url })
    }).then(r => r.json())
        .then(data => {
            console.log(data)})
};

function handleShowImages(e) {
    e.preventDefault();
    console.log('get urls')

    fetch('/get-urls')
        .then(r => r.json())
        .then(urls => {
            console.log('then')
            renderUsers(urls)
        })
    console.log('after fetch')
}

function getUrls() {
    console.log('get urls')

    fetch('/get-urls')
        .then(r => r.json())
        .then(urls => {
            renderUrls(urls, '#root_urls')
        })
}

function SortUrls(){
    console.log('sort urls')

    fetch('/sort-by-score')
        .then(r => r.json())
        .then(a => {
            console.log(a.score);
            renderUrls(a, '#sorted_urls')
        })
}

function renderUrls(urls, place) {
    const root = document.querySelector(place);
    let html = '';
    urls.forEach(url => {
        console.log(url.score);
        html += `<div class="img_score">`
        html += `<img src="${url.url}" alt="a" />`
        html += `<input type="number" name="score" name="${url.url}"/>`
        html += `</div>`
    })

    root.innerHTML = html
};