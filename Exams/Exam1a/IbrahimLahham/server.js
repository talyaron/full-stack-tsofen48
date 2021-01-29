const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.static('public'));



app.listen(3000, () => { console.log('listen on port 3000') });