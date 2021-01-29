const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users');

app.use(express.static('React/build'));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(checkAdmin);

app.use('/users', usersRouter)

function checkAdmin (req, res, next)  { //middleware
  console.log(req.cookies)

  if (req.cookies.role === 'admin') res.authorized = true;
  else res.authorized = false;

  res.authorized
  next();
}

const directorInfo=[
  {organization:'בנק הפועלים',
  img:'https://images.globes.co.il/images/NewGlobes/big_image_800/2019/f800x392.2019213T094727.jpg',
  directorName:'עיסאווי פריג'},

]

app.get('/get-director',(req, res)=>{
  res.send(directorInfo)
})



const recentNews=[
  {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''}
]

app.get('/get-news',(req, res)=>{
  res.send(recentNews)
})



const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})
