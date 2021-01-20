const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('<h1><a href="/home">Hello World...</a></h1>')
})

app.get('/home', function (req, res) {
    res.send('<h1>This is home</h1>')
  })
 
app.listen(3000)