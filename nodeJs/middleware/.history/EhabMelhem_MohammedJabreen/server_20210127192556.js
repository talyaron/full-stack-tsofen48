const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(req.cookies)

  if (req.cookies.role === 'admin') res.authorized = true;
  else res.authorized = false;
  res.authorized
  next();
})

const users = [1, 2, 3, 4, 5, 7]

app.get('/get-users', (req, res, next) => {

  // res.cookie('cookieName', 'admin', { maxAge: 90000000000, httpOnly: true });
  
  if (res.authorized) {
    res.send({ ok: true, users });
  } else {
    res.send({ ok: false });
  }
  
})






app.listen(3000, () => { console.log('listen on port 3000') });