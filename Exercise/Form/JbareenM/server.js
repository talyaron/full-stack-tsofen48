const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const usersRouter = require("./users/usersRouter");
app.use('/users', usersRouter);

const questionsRouter = require("./questions/questionRouter");
app.use('/questions', questionsRouter);
 
app.listen(3002, ()=>{console.log('listen on port 3002')});