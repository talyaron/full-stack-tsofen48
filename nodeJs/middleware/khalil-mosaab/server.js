const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");

app.use(cookieParser())
app.use(express.static('public'));
app.use(bodyParser.json());

let users = [{username: 'Mosaab', role: 'admin'}, {username: 'Khalil', role: 'public'}]

app.post('/login', (req, res) => {
    const {username} = req.body;
    console.log('login');
    console.log(username);
    
    const findUser = users.findIndex(e => {
        e.username === username;
    })
    console.log(findUser);
    //res.cookie('username', username)
})

app.get('/get-users', (req, res) => {
    console.log('getting users');
})

app.listen(3000, () => { console.log('listen on port 3000') });