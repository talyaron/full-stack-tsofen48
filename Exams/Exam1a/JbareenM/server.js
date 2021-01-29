const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());

const totalPrice = 1000;

const users = [
    { name: "Kilani", password: "222222222" },
    { name: "Yara", password: "111" },
    { name: "Ihab", password: "444444" },
];
const urls = [
    { url: "https://static.toiimg.com/photo/72975551.cms", score: 10 },
    { url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", score: 35 },
    { url: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", score: 40 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnyiqUs6vrwBbwYZyt-iDa7a_YmdnK5z_jw&usqp=CAU", score: 20 }
];

const my_stuff = [];

app.post('/add_stuff', (req, res) => {
    const {url, score} = req.body;
    const index = my_stuff.findIndex(a => a.url === url);

    if (index === -1) {
        // totalPrice = totalPrice - score;
        console.log(totalPrice)
        my_stuff.push({ url: url, score: score })
    }
    else{
        console.log("total:", totalPrice)
    }
    res.send({ ok: true })
});

app.get("/get-stuff", (req, res) => {
    res.send(my_stuff);
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//routes
app.get("/get-users", (req, res) => {
    res.send(users);
});

app.get("/get-urls", (req, res) => {
    res.send(shuffle(urls));
});

app.get("/get-password", (req, res) => {
    const { name } = req.query;

    console.log(req.query);

    let usr = users.find((user) => user.name === name);
    console.log(usr);
    res.send({ password: usr.password });
});

app.post("/login", (req, res) => {
    const { name, password } = req.body;
    const index = users.findIndex(
        (user) => user.name === name && user.password === password
    );
    if (index === -1) {
        res.send({ messeg: "please insert valid inputs", index: -1 });
    } else res.send({ userName: name, userPass: password, index: 1 });
});

app.post('/add', (req, res) => {

    const { url } = req.body;
    const index = urls.findIndex(urls => urls.url === url);
    if (index === -1) {
        urls.push({ url: url, score: 0 })
    }
    res.send({ ok: true })
});


app.post('/add_score', (req, res) => {

    const { url } = req.body;
    const index = urls.findIndex(urls => urls.url === url);
    if (index === -1) {
        urls.push({ url: url, score: 0 })
    }
    res.send({ ok: true })
});




app.get("/sort-by-score", (req, res) => {
    const urls_copy = [...urls]
    urls_copy.sort((a, b) => (b.score - a.score));
    res.send(urls_copy);
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
    console.log("listening", port);
});
