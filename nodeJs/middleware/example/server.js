const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users');

app.use(cookieParser())
app.use(express.static('public'));
app.use(checkAdmin);

app.use('/users', usersRouter)




function checkAdmin (req, res, next)  { //middleware
  console.log(req.cookies)

  if (req.cookies.role === 'admin') res.authorized = true;
  else res.authorized = false;

  res.authorized
  next();
}





const port = process.env.POST || 3000
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });