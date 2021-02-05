const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users');

app.use(express.static('React/build'));
app.use(cookieParser())
app.use(bodyParser.json())






app.use('/users', usersRouter)
app.use(checkAdmin);
//app.use(auth);


function checkAdmin (req, res, next)  { //middleware
  console.log(req.cookies)

 // if (req.cookies.role === 'admin') 
  res.authorized = true;
 // else res.authorized = false;

  res.authorized
  next();
  return
}

function auth(req, res, next) {
  res.cookie("role", user.role, { maxAge: 90000000000, httpOnly: true });
  next();
  return
}
/////////////////////////////////////////////////////////////

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})
