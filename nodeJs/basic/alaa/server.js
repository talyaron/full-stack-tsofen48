const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('<h1> Hello</h1>');
});
app.get('/home', function(req,res){
    res.send('<h1>This Is Home</h1>');
})

app.listen(3000);