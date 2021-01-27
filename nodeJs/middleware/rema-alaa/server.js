const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cookieParser())



app.use(express.static('public'));

// app.use(checkAdmin);

const users = [{name:'Mohamad', role:'admin'}, {name:'Tal', role:'public'}]

// app.get('/get-users', isAdmin, (req, res, next) => {

//   // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });
  
  
//     res.send({ ok: true, users });
  
  
// })

// function isAdmin(req, res, next){
//   console.log(req.cookies)

//   if (req.cookies.role !== 'admin'){
//     res.send({ok:'not so good'})
//   } else{
//     next()
//   }
  
// }

// function checkAdmin (req, res, next)  { //middleware
//   console.log(req.cookies)

//   if (req.cookies.role === 'admin') res.authorized = true;
//   else res.authorized = false;

//   res.authorized
//   next();
// }

app.post('/login', (req, res) => {

  const {userName} = req.body;
  console.log(userName);
  let user = users.find(u => u.name == userName );
  console.log(user);
 res.cookie('role', user.role, { maxAge: 90000000000, httpOnly: true });
 res.send({ok:true});
})




app.listen(3000, () => { console.log('listen on port 3000') });