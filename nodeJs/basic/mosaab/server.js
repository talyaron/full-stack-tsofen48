const express = require('express');
const app = express();

app.use(express.static('public'))


app.get('/', function (req,res){
res.send('<h1>hello</h1>')
})

app.listen(3000)