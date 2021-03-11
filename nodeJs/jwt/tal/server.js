const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
var cookieParser = require('cookie-parser');
app.use(cookieParser());

const jwt = require('jwt-simple');

const secret = '1234';

app.use(express.static('public'));


app.get('/get-users', (req, res) => {
    res.send({ ok: true })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    console.log(username, password);

    let userExist = true;

    const jwtInc = jwt.encode({ role: 'admin', name:'Alaa' }, secret)

    if (userExist) {
        res.cookie('role', jwtInc, { httpOnly: true })
    }

    res.send({ ok: true })
})

app.get('/get-all-my-secrets', (req, res) => {
    try {

        let role = req.cookies.role;

        decRole = jwt.decode(role, secret)

        console.log(decRole);

      
        if (decRole.role === 'admin') {
            res.send({ secrets: 'all my secrets' })
        } else {
            res.send({ secrets: false })
        }
    } catch (e) {
        console.log(e.message)
        res.send({ secrets: false })
    }
})


app.listen(3000, () => { console.log('listen on port 3000') });