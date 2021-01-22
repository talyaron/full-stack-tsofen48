
console.log('hi')

function multi(a, b){
    return a*b
}

let x = multi(8,7);
console.log(x);



const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('<h1><a href="/home">Hello World...</a></h1>')
})

app.get('/home', function (req, res) {
    res.send('<h1>This is home</h1>')
  })
 
app.listen(3000)
