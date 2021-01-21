const express = require('express')
const app = express()
var path = require('path');


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/main.html'));
});



app.get('/home', function(req, res){
    res.send(`Example app `);
})
app.listen(3006);
