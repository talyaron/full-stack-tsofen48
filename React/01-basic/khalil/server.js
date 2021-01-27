const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('home', function(req, res) {
    res.send('<a href='/'>This is home.</a>');
})
 
app.listen(3000)