const express = require('express')
const app = express()
var path = require('path');

app.use(express.static('public'));

const port = process.env.port || 3000;
app.listen(port,function() {
console.log('listening',port);
})

