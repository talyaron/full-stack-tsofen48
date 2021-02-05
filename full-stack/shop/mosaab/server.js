const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')

app.use(cookieParser())



app.use(express.static('public'));

app.use(checkAdmin);

const users = [{name:'Mohamad', role:'admin'}, {name:'Tal', role:'public'}]



app.get('/get-users', isAdmin, (req, res, next) => {
    res.send({ ok: true, users });
})

function isAdmin(req, res, next){
  console.log(req.cookies)

  if (req.cookies.role !== 'admin'){
    res.send({ok:'not so good'})
  } else{
    next()
  }
  
}

function checkAdmin (req, res, next)  { //middleware
  console.log(req.cookies)

  if (req.cookies.role === 'admin') res.authorized = true;
  else res.authorized = false;

  res.authorized
  next();
}


app.post('/get-role', (req, res) => {
  const { name } = req.body;
  console.log(name);
  const index = users.findIndex(users => users.name === name);
  const user = users.find(users => users.name === name);
  if (index === -1) {
    res.cookie('role','');  }
  res.cookie('role',user.role);


});


app.get('/get-role', (req, res, next) => {
  let x= users.find(req.query);
    
 })





app.listen(3000, () => { console.log('listen on port 3000') });